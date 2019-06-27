import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any = {}
  errorEmail:any;
  errorPassword:any;

  constructor(private httpClient:HttpClient, private router:Router) { }

  ngOnInit() {

  }

  onSubmit() {
    this.httpClient.post("http://127.0.0.1:8000/api/login",
    {
      "email" : this.model.email,
      "password" : this.model.password
    })
    .subscribe(
        data => {
          console.log("POST Request is successful ", data);
          localStorage.setItem("token", data['token']);
          this.router.navigate(['manageServices']);  
        },
        error => {
            console.log("Error", error);
            this.errorEmail = error['error']['email'];
            this.errorPassword = error['error']['password'];
        }
    );  
  }


}
