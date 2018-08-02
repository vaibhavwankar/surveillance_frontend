
import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/ordersecurity.service';
import {Router} from '@angular/router';

@Component({
  selector: 'buysell',
  styleUrls: ['buysell.component.css'],
  templateUrl: 'buysell.component.html',
})
export class BuysellComponent implements OnInit {
  active: boolean
  temp: any;
  dataSource: any;

  displayedColumns: string[] = ['price', 'securityname'];
  user: any = JSON.parse(localStorage.getItem("currentUser"));

  constructor(private http: HttpClient, public dataservice: DataService,private router:Router) { }

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

  ordersecurity(element: any) {
    this.dataservice.ordersecuritydata = element;
    //console.log(element)
    this.router.navigate(['dashboard/ordersecurity']);
  }


}


