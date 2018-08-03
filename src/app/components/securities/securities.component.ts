import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DataServiceSecurities } from '../../services/securities-details.service';


import {Router} from '@angular/router';

@Component({
  selector: 'securities',
  templateUrl: 'securities.component.html',
  styleUrls: ['securities.component.css']
})

export class SecuritiesComponent implements OnInit {
  active: boolean
  temp: any;
  dataSource: any;

  displayedColumns: string[] = ['price', 'securityname'];
  user: any = JSON.parse(localStorage.getItem("currentUser"));

  constructor(private http: HttpClient, public dataservice: DataServiceSecurities,private router:Router) { }

  ngOnInit() {
    this.http.post('http://localhost:9090/getSecurityList', { "brokerId": this.user.b.id })
      .subscribe(data => {
        this.temp = data
        this.dataSource = new MatTableDataSource(this.temp);
        //console.log(this.temp);
      });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  securitiesdetails(element: any) {
    this.dataservice.securitiesdetailsdata = element;
    //console.log(element)
    this.router.navigate(['dashboard/securities-details']);
  }

  
 
}


  










