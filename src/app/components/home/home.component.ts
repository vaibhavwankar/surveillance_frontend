import { Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent{

    
    user:any= JSON.parse(localStorage.getItem("currentUser"));
    constructor(){
        //console.log(this.user.list)
    }
   
    displayedColumns = ['ClientId', 'Direction', 'LimitPrice', 'Quantity','Security','Tradedate','Value'];
    dataSource = new MatTableDataSource(this.user.list);

}
