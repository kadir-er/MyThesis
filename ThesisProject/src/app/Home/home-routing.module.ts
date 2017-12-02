import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }           from './home.component';
import { HomeDashboardComponent }  from './home-dashboard.component';
import { SearchComponent }    from './search.component';
import { MyPageComponent }    from './my-page.component';

import { AuthGuard }                from '../Services/auth-guard.service';

const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'my-page', component: MyPageComponent },
          { path: 'ecg', component: HomeDashboardComponent },
          { path: '', component: SearchComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(HomeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}
