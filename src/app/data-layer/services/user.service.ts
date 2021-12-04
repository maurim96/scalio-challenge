import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService, BaseServiceDeps } from './base.service';

@Injectable()
export class UserService extends BaseService {
  constructor(baseServiceDeps: BaseServiceDeps) {
    super(baseServiceDeps);
  }

  getUsers(queryParams?: object, skipCache = false): Observable<any> {
    return this.checkCacheAndGet(`${this.getBaseUrl()}`, queryParams, null, skipCache);
  }

  private getBaseUrl(): string {
    return `${this.settings.baseUrl}search/users`;
  }
}
