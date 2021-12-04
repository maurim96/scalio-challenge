import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { configureTestSuite } from 'ng-bullet';

import {NzTableQueryParams} from "ng-zorro-antd/table";

import { UsersResultsComponent } from './users-results.component';

import {SharedModule, UserEntityManagerMockFactory} from "../../../../shared";

import {UserEntityManager, UserModel} from "../../../../data-layer";
import {TestScheduler} from "rxjs/testing";


describe('UsersResultsComponent', () => {
  let component: UsersResultsComponent;
  let fixture: ComponentFixture<UsersResultsComponent>;
  let userEntityManagerMockFactory;
  let scheduler: TestScheduler;

  configureTestSuite(() => {
    userEntityManagerMockFactory = UserEntityManagerMockFactory.defaultMock;

    TestBed.configureTestingModule({
      declarations: [
        UsersResultsComponent
      ],
      imports: [
        SharedModule,
      ],
      providers: [
        { provide: UserEntityManager, useValue: userEntityManagerMockFactory }
      ]
    });
    fixture = TestBed.createComponent(UsersResultsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test onQueryParamsChange functionality', () => {
    // Arrange
    spyOn(component, 'loadDataFromServer');

    // Act
    component.onQueryParamsChange({ pageSize: 1, pageIndex: 2 } as NzTableQueryParams);

    // Assert
    expect(component.pageSize).toEqual(1);
    expect(component.pageIndex).toEqual(2);
    expect(component.loadDataFromServer).toHaveBeenCalled();
  });

  it('should call loadDataFromServer when searchTerm changes', () => {
    // Arrange
    spyOn(component, 'loadDataFromServer');
    const searchTerm = {
      firstChange: false,
      currentValue: 'test2',
      previousValue: 'test'
    };

    // Act
    component.ngOnChanges({ searchTerm } as any);

    // Assert
    expect(component.loadDataFromServer).toHaveBeenCalled();
  });

  it('should update userList and total based on API response', fakeAsync(() => {
    // Arrange
    component.listOfUsers = [];
    component.total = 0;
    const expectedUser = {
      avatarUrl: 'test',
      login: 'test',
      type: 'user'
    } as UserModel;

    // Act
    component.loadDataFromServer();
    tick(0);

    // Assert
    expect(component.total).toEqual(1);
    expect(component.listOfUsers[0]).toEqual(expectedUser);
  }));
});
