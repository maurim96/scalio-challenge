import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
// @ts-ignore
export class UsersRoutingModule { }
