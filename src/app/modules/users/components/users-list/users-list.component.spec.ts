import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent, UsersResultsComponent, UsersSearchComponent } from '../';

import { configureTestSuite } from 'ng-bullet';

import {SharedModule, UserEntityManagerMockFactory} from "../../../../shared";
import {UserEntityManager} from "../../../../data-layer";

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let userEntityManagerMockFactory;

  configureTestSuite(() => {
    userEntityManagerMockFactory = UserEntityManagerMockFactory.defaultMock;

    TestBed.configureTestingModule({
      declarations: [
        UsersListComponent,
        UsersResultsComponent,
        UsersSearchComponent
      ],
      imports: [
        SharedModule,
      ],
      providers: [
        { provide: UserEntityManager, useValue: userEntityManagerMockFactory }
      ]
    });
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test onSubmit functionality', () => {
    // Arrange
    component.searchTerm = 'test';

    // Act
    component.onSubmit('test2');

    // Assert
    expect(component.searchTerm).toEqual('test2');
  });
});
