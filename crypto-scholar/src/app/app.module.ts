import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BrowseOffersComponent } from './browse-offers/browse-offers.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HeaderComponent } from './header/header.component';
import { WalletComponent } from './header/wallet/wallet.component';
import { TransactionLogComponent } from './transaction-log/transaction-log.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BrowseOffersComponent,
    UserPageComponent,
    HeaderComponent,
    WalletComponent,
    TransactionLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
