import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:string = '';
  private checkToken:boolean = false;
  
  get LoggedIn()
  {
    return this.checkToken;
  }

  constructor(private httpClient:HttpClient) {
    this.token = localStorage.getItem('token');
    this.getUser();
  }


  async getUser()
  {
    let httpHeaders = new HttpHeaders({
      'Authorization' : "Bearer " + this.token
    }); 
      
    let options = {
      headers: httpHeaders
    }; 

   this.httpClient.get("http://127.0.0.1:8000/api/details", options)
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.checkToken = true;
        },
        error => {
            console.log("Error", error);
            this.checkToken = false;
        }
    );
  }


}
