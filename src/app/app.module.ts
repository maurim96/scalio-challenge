import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule, OnInit} from '@angular/core';
import { NavigationCancel, NavigationError, NavigationStart, Router } from "@angular/router";
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { SharedModule } from 'src/app/shared';

import { AppComponent, PageNotFoundComponent } from "./core/components";

import { DataLayerModule } from "./data-layer";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DataLayerModule.forRoot(),
    SharedModule.forRoot(),
    NzSpinModule,
    NzMessageModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
