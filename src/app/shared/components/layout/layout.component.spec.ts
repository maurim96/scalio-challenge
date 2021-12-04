import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';

import { configureTestSuite } from 'ng-bullet';

import {NzLayoutModule} from "ng-zorro-antd/layout";

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  configureTestSuite(() => {

    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      imports: [
        NzLayoutModule,
      ],
      providers: []
    });
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
