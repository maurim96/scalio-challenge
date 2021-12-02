import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { UtilsService } from "./services";
import { LayoutComponent } from './components';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule
],
  exports: [
    LayoutComponent
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        UtilsService
      ]
    };
  }
}
