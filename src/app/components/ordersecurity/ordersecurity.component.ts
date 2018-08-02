import {Component} from '@angular/core';
import { DataService } from '../../services/ordersecurity.service';


@Component({
  selector: 'ordersecurity',
  templateUrl: 'ordersecurity.component.html',
  styleUrls: ['ordersecurity.component.css'],
})


export class OrderSecurityComponent {
    data:any;

    ordertype: any[] = [
        {value: '0', viewValue: 'Buy'},
        {value: '1', viewValue: 'Sell'},
      ];
    constructor(public dataservice:DataService){
        this.data=this.dataservice.ordersecuritydata;
        //console.log(this.data)
    }
    

}
