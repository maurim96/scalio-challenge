import {of} from "rxjs";

import {ListResponse, UserModel} from "../../data-layer";

export class UserEntityManagerMockFactory {
  static get defaultMock(): any {
    // @ts-ignore
    const mockService = jasmine.createSpyObj('UserEntityManager',['getUsers']);
    mockService.getUsers.and.returnValue(of({
      totalCount: 1,
      items: [{avatarUrl: 'test', login: 'test', type: 'user'} as UserModel]
    } as ListResponse<UserModel>));

    return mockService;
  }
}
