import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';




@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})


export class LoginComponent {

    model:any;

    constructor(private router: Router, private loginService: LoginService, ) { 
        this.model = { 
            'username' : '',
            'password' : '',
        }
    }


    login() {
        
        this.loginService.login(this.model.username, this.model.password)
        .subscribe(data=>{

            if(data.status=="yes"){
            //console.log(data)
            localStorage.setItem('currentUser', JSON.stringify(data));
            this.router.navigate(['dashboard']);
            }
            else
            {
            alert("Invalid Credentials")
            this.router.navigate(['login']);
            //console.log(data)

            }
        })

            
        }
            
    }

