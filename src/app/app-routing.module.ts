import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from "./core/components";

import { SharedModule } from "./shared";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  {
    path: '',
    children: [
      {
        path: 'users',
        loadChildren: () => import('./modules/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: '**',
        redirectTo: 'page-not-found'
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SharedModule,
  ],
  declarations: [],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
