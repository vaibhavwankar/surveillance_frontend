import {Component,Inject} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



@Component({
    selector: 'buysell',
    styleUrls: ['buysell.component.css'],
    templateUrl: 'buysell.component.html',
  })
  export class BuysellComponent {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    quantity:number=20;
    price:string="price";
    
    constructor(public dialog: MatDialog) {}

    openDialog(): void {
        const dialogRef = this.dialog.open(BuySellDialogComponent, {
          width: '250px',
          data: {quantity: this.quantity, price: this.price}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        //   this.animal = result;
        });
      }
      

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  @Component({
    selector: 'buyselldialog',
    templateUrl: 'buyselldialog.component.html',
  })
  export class BuySellDialogComponent {
  
    constructor(
      public dialogRef: MatDialogRef<BuySellDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    onSubmit():void{
        console.log("submited")
    }
    
  
  }

  export interface DialogData {
    quantity: number;
    price: string;
  }
  


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Table with filtering
 */

