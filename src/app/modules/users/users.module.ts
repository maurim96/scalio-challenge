import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersSearchComponent, UsersResultsComponent, UsersListComponent } from './components';

import { SharedModule } from "../../shared";

import { UsersRoutingModule } from "./users-routing.module";

@NgModule({
  declarations: [
    UsersSearchComponent,
    UsersResultsComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
  ],
  exports: []
})
export class UsersModule { }
