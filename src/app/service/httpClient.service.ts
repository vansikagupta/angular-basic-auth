import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../model/userModel';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

    constructor(private httpClient:HttpClient) {
    }

    getUser(username, password)
    {
        console.log("in getuser");
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.httpClient.get<UserModel>('http://localhost:8081/rest/loginuser',{headers});
    }    

    public createUser(user) {
        //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.httpClient.post<UserModel>("http://localhost:8081/rest/registration", user);
    }
}