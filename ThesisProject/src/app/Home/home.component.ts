import { Component } from '@angular/core';

@Component({
  template:  `
    <h3>ADMIN</h3>
    <nav>
      <a routerLink="./" routerLinkActive="active">Search</a>
      <a routerLink="./ecg" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
      <a routerLink="./my-page" routerLinkActive="active">My Page</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class HomeComponent {

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
