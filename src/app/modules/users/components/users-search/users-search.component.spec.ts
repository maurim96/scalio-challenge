import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSearchComponent } from './users-search.component';

import { configureTestSuite } from 'ng-bullet';

import {SharedModule} from "../../../../shared";

describe('UsersSearchComponent', () => {
  let component: UsersSearchComponent;
  let fixture: ComponentFixture<UsersSearchComponent>;

  configureTestSuite(() => {

    TestBed.configureTestingModule({
      declarations: [UsersSearchComponent],
      imports: [
        SharedModule,
      ],
      providers: []
    });
    fixture = TestBed.createComponent(UsersSearchComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
