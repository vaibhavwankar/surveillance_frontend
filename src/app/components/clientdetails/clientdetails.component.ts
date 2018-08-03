import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { DataServiceClients } from '../../services/clients-details.service';
import { HttpClient } from '@angular/common/http';

import {Router} from '@angular/router';

@Component({
  selector: 'clientdetails',
  templateUrl: 'clientdetails.component.html',
  styleUrls: ['clientdetails.component.css']
})
export class ClientdetailsComponent implements OnInit {

  active: boolean
  temp: any;
  dataSource: any;

  displayedColumns: string[] = ['clientId','direction','limitPrice','security','quantity','tradeType','tradeDate','value'];
  user: any = JSON.parse(localStorage.getItem("currentUser"));

  constructor(private http: HttpClient,private router:Router,public dataservice: DataServiceClients) { }

  ngOnInit() {
    var client=this.dataservice.clientsDetailsData.client_id;
    this.http.post('http://localhost:9090/getOrders', { "client_id":client})
      .subscribe(data => {
        this.temp = data
      this.dataSource = new MatTableDataSource(this.temp);
        console.log(data);
      });
  }

}
