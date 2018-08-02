import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { BuysellComponent } from './components/buysell/buysell.component';

import {OrderSecurityComponent } from './components/ordersecurity/ordersecurity.component';
import {SecuritiesComponent } from './components/securities/securities.component';
import { SecuritiesDetailsComponent } from './components/securities-details/securities-details.component';
import { ClientsComponent} from './components/clients/clients.component';
import { ClientdetailsComponent } from './components/clientdetails/clientdetails.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {

        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'buysell', component: BuysellComponent },

            { path: 'ordersecurity', component: OrderSecurityComponent },
            
            {path: 'securities' , component:SecuritiesComponent },
            {path:'securities-details', component:SecuritiesDetailsComponent},
            {path:'clients', component:ClientsComponent},
            {path:'clientdetails', component:ClientdetailsComponent}
        ]
    },


];

export const AppRouting = RouterModule.forRoot(appRoutes);
