import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/userModel';
import { HttpClientService } from '../service/httpClient.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:UserModel = new UserModel("","","","","")

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
  }

  createUser(): void {
    this.httpClientService.createUser(this.user)
        .subscribe( data => {
          alert("User registered successfully.");
        });

  };

}
