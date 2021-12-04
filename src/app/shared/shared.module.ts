import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from "ng-zorro-antd/input";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzTypographyModule } from "ng-zorro-antd/typography";
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { UtilsService } from "./services";
import {BaseComponent, LayoutComponent} from './components';

import { DataLayerModule } from "../data-layer";

@NgModule({
  declarations: [
    LayoutComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataLayerModule,
    NzLayoutModule,
    NzInputModule,
    NzButtonModule,
    NzTypographyModule,
    NzTableModule,
    NzAvatarModule
],
  exports: [
    BaseComponent,
    FormsModule,
    DataLayerModule,
    LayoutComponent,
    NzLayoutModule,
    NzInputModule,
    NzButtonModule,
    NzTypographyModule,
    NzTableModule,
    NzAvatarModule
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
