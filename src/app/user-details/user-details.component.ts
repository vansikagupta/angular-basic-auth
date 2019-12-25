import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/userModel';
import { HttpClientService } from '../service/httpClient.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  loggedUsername: String
  loggedUser: UserModel

  constructor(private httpService:HttpClientService) { 
      this.loggedUsername = sessionStorage.getItem('username');
      console.log(this.loggedUsername + "is logged in");
  }

  ngOnInit() {
      this.httpService.getUser(this.loggedUsername).subscribe(
        response =>this.handleSuccessfulResponse(response),
       );
    }
  
  handleSuccessfulResponse(response)
  {
      this.loggedUser=response;
  }
  
}

