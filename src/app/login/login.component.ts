import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username:String = ""
    password:String = ""
    invalidLogin = false

    constructor(private router: Router, private loginservice: AuthenticationService) { }

    ngOnInit() {
    }
    checkLogin(){
        this.loginservice.authenticate(this.username, this.password)
            .subscribe( data => {
                this.router.navigate(['user'])
                alert("Logged successfully.");
                console.log("logged in");
            },
            error =>{
                alert("Wrong Credentials");
                console.log("login error");
            });
    }
}
