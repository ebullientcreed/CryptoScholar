import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BrowseOffersComponent } from './browse-offers/browse-offers.component';
import { TransactionLogComponent } from './transaction-log/transaction-log.component';

const routes: Routes = [
  {
    path: '',
    component:LandingComponent
  },
  {
    path:'browse',
    component:BrowseOffersComponent
  },
  {
    path:'transactions',
    component:TransactionLogComponent
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
