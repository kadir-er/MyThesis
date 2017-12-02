import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }    from '../not-found.component';

import { CanDeactivateGuard }       from '../Services/can-deactivate-guard.service';
import { AuthGuard }                from '../Services/auth-guard.service';
import { SelectivePreloadingStrategy } from '../selective-preloading-strategy';
import {CrisisCenterHomeComponent} from "../HeartInfo/heart-info";
import {HeartRateComponent} from "../HeartRate/heart-rate.component";

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: 'app/Home/home.module#HomeModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'heart',
    component : CrisisCenterHomeComponent
  },
  { path: 'heartRate', component: HeartRateComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategy,

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
