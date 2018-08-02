import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { DataServiceSecurities } from '../../services/securities-details.service';
import { HttpClient } from '@angular/common/http';

import {Router} from '@angular/router';

@Component({
  selector: 'securities-details',
  templateUrl: 'securities-details.component.html',
  styleUrls: ['securities-details.component.css']
})  
export class SecuritiesDetailsComponent implements OnInit {

  active: boolean
  temp: any;
  dataSource: any;

  displayedColumns: string[] = ['clientId','direction','limitPrice','security','quantity','tradeType','tradeDate','value'];
  user: any = JSON.parse(localStorage.getItem("currentUser"));

  constructor(private http: HttpClient,private router:Router,public dataservice: DataServiceSecurities) { }

  ngOnInit() {
    var security=this.dataservice.securitiesdetailsdata.security_name;
    this.http.post('http://localhost:9000/getSecurityDetails', { "brokerId": this.user.b.id,"security":security })
      .subscribe(data => {
        this.temp = data
      this.dataSource = new MatTableDataSource(this.temp);
        console.log(data);
      });
  }

}
