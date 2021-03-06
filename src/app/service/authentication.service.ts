import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserModel } from '../model/userModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    constructor(private httpClient:HttpClient) { 
    }

    authenticate(username, password) {
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        //let formData = "username="+username+'&'+"password="+password;
        const formData: FormData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        return this.httpClient.get<any>('http://localhost:8081/rest/validateLogin',{headers}).pipe(
        map(
          userData => {
            sessionStorage.setItem('username',username);
            sessionStorage.setItem('password',password);
            return userData;
          }
          ));
    }
  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
    }

  logOut() {
    sessionStorage.removeItem('username')
  }
}