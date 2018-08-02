import { Component } from '@angular/core';
import { DataService } from '../../services/ordersecurity.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'ordersecurity',
    templateUrl: 'ordersecurity.component.html',
    styleUrls: ['ordersecurity.component.css'],
})
export class OrderSecurityComponent {
    data: any;
    clientid;
    quantity;
    direction = "";
    user: any = JSON.parse(localStorage.getItem("currentUser"));

    ordertype: any[] = [
        { value: "B", viewValue: "Buy" },
        { value: "S", viewValue: "Sell" },
    ];
    constructor(public dataservice: DataService, private http: HttpClient, private router: Router) {
        this.data = this.dataservice.ordersecuritydata;

    }

    buysellorder() {
        var datatosend = {
            clientId: this.clientid,
            security: this.data.security_name,
            tradeDate: "2018-07-19",
            quantity: parseInt(this.quantity),
            tradeType: "LIMIT",
            tradingPrice: this.data.price,
            direction: this.direction,
            value: this.data.price * parseInt(this.quantity),
            brokerId: this.user.b.id
        }
        //console.log(datatosend)
        this.http.post('http://localhost:9090/buySell', datatosend)
            .subscribe(data => {
                if (data==1) {
                    alert("Order Successful")
                    this.http.post('http://localhost:9090/login', { "id": this.user.b.id, "password": this.user.b.id })
                        .subscribe(data => {
                            //console.log(data)
                            localStorage.setItem('currentUser', JSON.stringify(data));
                        })

                }
                else if(data==2) {
                    alert("Quantity Limit Exceeded")

                }
                else if(data==3) {
                    alert("Price variation Exceeded")

                }
                else if(data==4) {
                    alert("Daily Limit Exceeded")

                }
                this.router.navigate(['dashboard/buysell']);
            });

    }


}
