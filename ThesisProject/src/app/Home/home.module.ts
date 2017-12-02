import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { HomeComponent }           from './home.component';
import { HomeDashboardComponent }  from './home-dashboard.component';
import { SearchComponent }    from './search.component';
import { MyPageComponent }    from './my-page.component';

import { HomeRoutingModule }       from './home-routing.module';
import { EcgComponent } from "../ECG/ecg.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { DxChartModule, DxSelectBoxModule } from "devextreme-angular";
import { Service } from "../Services/app.service";


@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    HttpModule,
    HttpClientModule,
    DxChartModule,
    DxSelectBoxModule
  ],
  declarations: [
    HomeComponent,
    HomeDashboardComponent,
    SearchComponent,
    MyPageComponent,
    EcgComponent
  ],
  providers:[
    Service
  ]
})
export class HomeModule {}
