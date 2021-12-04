import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

import { configureTestSuite } from 'ng-bullet';

describe('UtilsService', () => {
  let service: UtilsService;

  configureTestSuite(() => {

    TestBed.configureTestingModule({
      declarations: [],
      imports: [],
      providers: []
    });
    service = TestBed.inject(UtilsService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should test loading getter/setter', () => {
    // Act
    service.loading = false;

    // Assert
    expect(service.loading).toBeFalse();
  });
});
