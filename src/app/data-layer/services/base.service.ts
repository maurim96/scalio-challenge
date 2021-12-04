import { Injectable } from '@angular/core';
import { tap, share } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { Utils, SettingsService } from '../core';

import { HttpService } from './http.service';

interface DataCache {
  timestamp: number;
  response: any;
  pendingRequest: Observable<any>;
}

export abstract class BaseService {
  http: HttpService;

  settings: SettingsService;

  cacheTimeout = 300;

  protected clearCacheTimeout = 300;

  protected clearCacheTimer: number;

  private cache: { [key: string]: DataCache };

  constructor(public baseServiceDeps: BaseServiceDeps) {
    this.http = this.baseServiceDeps.http;
    this.settings = this.baseServiceDeps.settings;
    this.cache = {};

    this.clearCacheTimer = window.setInterval(() => this.clearCache(false), this.clearCacheTimeout * 1000);
  }

  public clearCache(clearAll = true): void {
    if (clearAll) {
      this.cache = {};
    } else {
      Object.keys(this.cache)
        .filter((key) => this.isExpiredCache(this.cache[key]))
        .forEach((key) => delete this.cache[key]);
    }
  }

  protected getCacheKey(url, params): string {
    const queryParams = Utils.flattenQueryParams(params);
    return queryParams ? `${url}?${queryParams}` : url;
  }

  protected getCache(url): DataCache {
    const cache = this.cache[url];

    if (this.settings.enableCache && cache && !this.isExpiredCache(cache)) {
      return cache;
    }
  }

  protected setCache(url: string, params: object, response: any, pendingRequest?: Observable<any>): any {
    const cacheKey = this.getCacheKey(url, params);

    if (this.settings.enableCache && this.cacheTimeout > 0) {
      this.cache[cacheKey] = { timestamp: Date.now(), response, pendingRequest };
    }
    return this.getCache(cacheKey);
  }

  protected checkCacheAndGet(url: string, params?: any, options?, skipCache?: boolean): Observable<any> {
    const cacheKey = this.getCacheKey(url, params);
    const cache = this.getCache(cacheKey);
    const request = this.http.get(url, params, options)
      .pipe(
        tap((res) => this.setCache(url, params, res)),
        share()
      );

    if (!skipCache && cache) {
      if (cache.pendingRequest) {
        return cache.pendingRequest;
      }
      return of(cache.response);
    }

    this.setCache(url, params, null, request);
    return request;
  }

  private isExpiredCache(cache: DataCache): boolean {
    return (Date.now() - cache.timestamp - (this.cacheTimeout * 1000)) > 0;
  }
}

@Injectable()
export class BaseServiceDeps {
  constructor(public http: HttpService, public settings: SettingsService) { }
}
