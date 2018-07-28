import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class LoginService{
    
    constructor(private http: HttpClient) {}

    login(username, password):Observable<any> {
        

        // this.http.get('http://localhost:8080/login/'+username)
        // .subscribe(data=>{
        //     console.log(data)
        //     return data;
        // })

        return this.http.post('http://localhost:9090/login',{"id":parseInt(username),"password":parseInt(password)})
        .pipe(data=>{
            return data;
        })
        
        

    }

    logout(){

    }
}