import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="title">Heart Rate Monitoring</h1>
    <nav>
      <a routerLink="/heart" routerLinkActive="active">About Heart</a>
      <a routerLink="/heartRate" routerLinkActive="active">Heart Rate</a>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})
export class AppComponent {
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
