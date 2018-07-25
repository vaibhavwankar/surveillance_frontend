import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService{
    
    constructor(private http: HttpClient) {}

    login(username, password) {

        // this.http.get('http://localhost:8080/login/'+username)
        // .subscribe(data=>{
        //     console.log(data)
        //     return data;
        // })

        this.http.post('http://localhost:8080/savedata',{"id":username,"name":password})
        .subscribe(data=>{
            console.log(data)
        })
        

    }

    logout(){

    }
}