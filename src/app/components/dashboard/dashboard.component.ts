import { Component} from '@angular/core';


@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent{
    user:any= JSON.parse(localStorage.getItem("currentUser"));
}
    
    


