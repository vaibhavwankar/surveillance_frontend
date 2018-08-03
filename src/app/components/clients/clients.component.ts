import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { DataServiceClients } from '../../services/clients-details.service';


import {Router} from '@angular/router';


@Component({
  selector: 'clients',
  templateUrl: 'clients.component.html',
  styleUrls: ['clients.component.css']
})

 export class ClientsComponent implements OnInit{
  active: boolean
  temp: any;
  dataSource: any;

  displayedColumns: string[] = ['clientId', 'name','country'];
  user: any = JSON.parse(localStorage.getItem("currentUser"));
    
  constructor(private http: HttpClient, public dataservice: DataServiceClients,private router:Router) { }

  ngOnInit() {
    this.http.post('http://localhost:9090/getClients', { "id": 1 })
      .subscribe(data => {
        this.temp = data
        this.dataSource = new MatTableDataSource(this.temp);
        //console.log(this.temp);
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  clientsdetails(element: any) {
    this.dataservice.clientsDetailsData = element;
    //console.log(element)
    this.router.navigate(['dashboard/clientdetails']);
  }


 }



