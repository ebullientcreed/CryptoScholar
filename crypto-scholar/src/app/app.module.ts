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
import { KomodoService } from 'src/services/komodo.service';
import { HttpClientModule } from '@angular/common/http';

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [KomodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
