import { ComponentFixture, TestBed } from '@angular/core/testing';

import { configureTestSuite } from 'ng-bullet';

import { AppComponent } from './app.component';

import {SharedModule, UtilsService} from "../../../shared";

import {NzMessageModule} from "ng-zorro-antd/message";
import {NzSpinModule} from "ng-zorro-antd/spin";

import {RouterTestingModule} from "@angular/router/testing";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  configureTestSuite(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        SharedModule,
        RouterTestingModule,
        NzSpinModule,
        NzMessageModule
      ],
      providers: [
        UtilsService
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component['messageService'] = jasmine.createSpyObj('NzMessageService', ['error', 'info', 'success', 'warning']);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call messageService.error function', () => {
    // Act
    component.utilsService.errorMessageEmitter('test');

    // Assert
    expect(component['messageService'].error).toHaveBeenCalled();
  });

  it('should call messageService.info function', () => {
    // Act
    component.utilsService.infoMessageEmitter('test');

    // Assert
    expect(component['messageService'].info).toHaveBeenCalled();
  });

  it('should call messageService.success function', () => {
    // Act
    component.utilsService.successMessageEmitter('test');

    // Assert
    expect(component['messageService'].success).toHaveBeenCalled();
  });

  it('should call messageService.warning function', () => {
    // Act
    component.utilsService.warningMessageEmitter('test');

    // Assert
    expect(component['messageService'].warning).toHaveBeenCalled();
  });

  it('should call messageService.warning function - not known type of message', () => {
    // Act
    component.utilsService.alertMessageEmitter.next({ msg: 'test', type: 'test' as any });

    // Assert
    expect(component['messageService'].warning).toHaveBeenCalled();
  });
});
