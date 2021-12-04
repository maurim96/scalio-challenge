import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserModel, ListResponse } from '../models';
import { UserService } from '../services';

@Injectable()
export class UserEntityManager {

  constructor(private userService: UserService) {}

  getUsers(queryParams?: object, skipCache = false): Observable<ListResponse<UserModel>> {
    return this.userService.getUsers(queryParams, skipCache)
      .pipe(
        map((res) => ({
          totalCount: res.total_count,
          incompleteResults: res.incomplete_results,
          items: res.items.map((d) => new UserModel(d.avatar_url, d.login, d.type))
        }))
      );
  }
}
