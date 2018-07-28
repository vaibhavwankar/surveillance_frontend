import { Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent{

    progress=80;
     a:Element[]= [
        {position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com'},
        {position: 1, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com'},
        {position: 1, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com'},
        {position: 1, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com'},
        {position: 1, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'}
      ];
    displayedColumns = ['position', 'firstName', 'lastName', 'email'];
    dataSource = new MatTableDataSource(this.a);

}
export interface Element {
    position: number;
    firstName: string;
    lastName: string;
    email: string;
  }
  
//   const ELEMENT_DATA: Element[] = [
//     {position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com'},
//     {position: 1, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com'},
//     {position: 1, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com'},
//     {position: 1, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com'},
//     {position: 1, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'}
//   ];
     
    


