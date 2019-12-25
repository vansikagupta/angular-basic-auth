import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../model/userModel';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

    constructor(private httpClient:HttpClient) {
    }

    getUser(username)
    {
        console.log("in getuser")
        return this.httpClient.get<UserModel>('http://localhost:8081/rest/loginuser');
    }    

    public createUser(user) {
        return this.httpClient.post<UserModel>("http://localhost:8081/registration", user);
    }
}