import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';

import { AppComponent }            from './app.component';
import { AppRoutingModule }        from './Routers/app-routing.module';

import { LoginRoutingModule }      from './Routers/login-routing.module';
import { LoginComponent }          from './Login/login.component';
import { PageNotFoundComponent }   from './not-found.component';

import { CrisisCenterHomeComponent } from "./HeartInfo/heart-info";
import {HeartRateComponent} from "./HeartRate/heart-rate.component";
import {HomeModule} from "./Home/home.module";
import {Service} from "./Services/app.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    LoginRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HeartRateComponent,
    CrisisCenterHomeComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
