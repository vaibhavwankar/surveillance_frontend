import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouting } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatInputModule, MatTableModule, MatToolbarModule,MatProgressBarModule} from '@angular/material';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

import { BuysellComponent } from './components/buysell/buysell.component';
import {BuySellDialogComponent} from './components/buysell/buysell.component';




import { LoginService } from './services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    BuysellComponent,
    BuySellDialogComponent,

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
    MatDialogModule
  ],
  exports: [CommonModule,MatToolbarModule, MatInputModule, MatTableModule,MatProgressBarModule,MatRadioModule,  
  ],
  exports: [CommonModule,MatToolbarModule, MatInputModule, MatTableModule,MatProgressBarModule,],
  providers: [LoginService],
  bootstrap: [AppComponent],
  entryComponents: [
    BuySellDialogComponent,
  ],
})
export class AppModule { }
