import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule} from '@angular/forms';

import {MatInputModule, MatTableModule, MatToolbarModule,MatProgressBarModule} from '@angular/material';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material';

import {MatProgressSpinnerModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatOptionModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

import { BuysellComponent } from './components/buysell/buysell.component';
import { OrderSecurityComponent } from './components/ordersecurity/ordersecurity.component';

import { BuysellComponent } from './components/buysell/buysell.component';
import { OrderSecurityComponent } from './components/ordersecurity/ordersecurity.component';

import { SecuritiesComponent } from './components/securities/securities.component';
import { LoginService } from './services/login.service';
import { DataService } from './services/ordersecurity.service';

import { SecuritiesDetailsComponent } from './components/securities-details/securities-details.component';
import { DataServiceSecurities } from './services/securities-details.service';
import { DataServiceClients} from './services/clients-details.service';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientdetailsComponent } from './components/clientdetails/clientdetails.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    BuysellComponent,

    SecuritiesComponent,
    OrderSecurityComponent,
    SecuritiesDetailsComponent,
    ClientsComponent,
    ClientdetailsComponent


  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FormsModule,
    MatToolbarModule, MatInputModule, MatTableModule,MatProgressBarModule,
    CommonModule,
    BrowserAnimationsModule,
    MatRadioModule,

    MatDialogModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule, 
    MatInputModule, MatTableModule,MatProgressBarModule,MatRadioModule,MatProgressSpinnerModule
  ],
  providers: [LoginService,DataService,DataServiceSecurities,DataServiceClients],
  bootstrap: [AppComponent],

  

})
export class AppModule { }
