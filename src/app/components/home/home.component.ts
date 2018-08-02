import { Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent{

    user:any
    dataSource:any
    constructor()
    {
        this.user= JSON.parse(localStorage.getItem("currentUser"));
        this.dataSource = new MatTableDataSource(this.user.list);
        if(this.user.o_per > 75.0 &&  this.user.o_per<100.0){
            alert(this.user.o_per+"% Of Your Daily Limit Completed")
        }
        else if(this.user.o_per >= 100.0){
            alert("100% Of Your Daily Limit Completed")
        }
    }
   
    displayedColumns = ['ClientId', 'Direction', 'LimitPrice', 'Quantity','Security','Tradedate','Value'];
   

}
     
    