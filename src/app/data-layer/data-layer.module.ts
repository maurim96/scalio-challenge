import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DataLayerHttpInterceptor, SettingsService} from './core';
import { UserEntityManager } from './entity-managers';
import { BaseServiceDeps, HttpService, UserService } from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
})
export class DataLayerModule {
  static forRoot(): ModuleWithProviders<DataLayerModule> {
    return {
      ngModule: DataLayerModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: DataLayerHttpInterceptor, multi: true },
        BaseServiceDeps,
        HttpService,
        SettingsService,

        UserEntityManager,
        UserService
      ],
    };
  }
}
