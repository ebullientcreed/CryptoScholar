import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { BrowseOffersComponent } from './browse-offers/browse-offers.component';
import { TransactionLogComponent } from './transaction-log/transaction-log.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoService } from './services/info.service';
import { KomodoService } from './services/komodo.service';
import { SharedDataService } from './services/shared-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    BrowseOffersComponent,
    TransactionLogComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [KomodoService,InfoService, SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
