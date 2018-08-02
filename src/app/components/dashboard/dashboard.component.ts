import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent{
    user:any= JSON.parse(localStorage.getItem("currentUser"));



    constructor(private router: Router){}

    logout(){
        localStorage.clear();
        this.router.navigate(['login']);
    }

}
    
    


