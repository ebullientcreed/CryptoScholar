import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseOffersComponent } from './browse-offers/browse-offers.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component:LandingComponent
  },
  {
    redirectTo: '',
    path: '',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
