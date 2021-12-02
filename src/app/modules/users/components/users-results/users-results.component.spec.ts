import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersResultsComponent } from './users-results.component';

describe('UsersResultsComponent', () => {
  let component: UsersResultsComponent;
  let fixture: ComponentFixture<UsersResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
