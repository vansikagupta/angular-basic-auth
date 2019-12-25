import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/userModel';
import { HttpClientService } from '../service/httpClient.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  loggedUsername: String
  loggedUser: UserModel

  constructor(private httpService:HttpClientService, private router: Router, private authenticationService: AuthenticationService) { 
      this.loggedUsername = sessionStorage.getItem('username');
      console.log(this.loggedUsername + "is logged in");
  }

  ngOnInit() {
      this.httpService.getUser(sessionStorage.getItem('username'),sessionStorage.getItem('password')).subscribe(
        response =>this.handleSuccessfulResponse(response),
       );
    }
  
  handleSuccessfulResponse(response)
  {
      this.loggedUser=response;
      console.log(this.loggedUser.username);
  }
  
  logout()
  {
    this.authenticationService.logOut();
    this.router.navigate(['']);
  }
}

