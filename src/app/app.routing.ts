import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
         path: 'dashboard', component: DashboardComponent,
         children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
             { path: 'home', component: HomeComponent },
    //         { path: 'create', component: CreatePatientComponent },
        ]
    },


];

export const AppRouting = RouterModule.forRoot(appRoutes);
