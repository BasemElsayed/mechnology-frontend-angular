import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat: number = 30.0414154;
  lng: number = 31.2064058;
  addressEnglish:string = '';
  addressArabic:string = '';
  emailCont:string = '';
  phone:string = '';
  mobile:string = '';
  from:string = '';
  to:string = '';
  holidaysEnglish:string = '';
  holidaysArabic:string = '';

  english;
  arabic;
  model:any = {}
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    var temp = localStorage.getItem("lang");
    if(temp == "english")
    {
      this.english = temp;
    }
    if(temp == "arabic")
    {
      this.arabic = temp;
    }
    else
    {
      this.english = "english";
    }
    this.viewContacs();
  }

  viewContacs()
  {
    this.httpClient.get("http://127.0.0.1:8000/api/getContact")
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.addressEnglish = data['contacts'][0].addressEnglish;
            this.addressArabic = data['contacts'][0].addressArabic;
            this.emailCont = data['contacts'][0].email;
            this.phone = data['contacts'][0].phone;
            this.mobile = data['contacts'][0].mobile;
            this.from = data['contacts'][0].from;
            this.to = data['contacts'][0].to;
            this.holidaysEnglish = data['contacts'][0].holidaysEnglish;
            this.holidaysArabic = data['contacts'][0].holidaysArabic;
            this.lat = data['contacts'][0].latitude;
            this.lng = data['contacts'][0].langitude;
            //console.log("Data", this.services[0]['name']);
        },
        error => {
            console.log("Error", error);
        }
    );  
  }



  customer() {
    this.httpClient.post("http://127.0.0.1:8000/api/sendMessageCustomer", this.model)
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            alert("Message is sent successfully");
        },
        error => {
            console.log("Error", error);
            alert("Error");
        }
    );
  }

  company() {
    this.httpClient.post("http://127.0.0.1:8000/api/sendMessageCompany", this.model)
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            alert("Message is sent successfully");
        },
        error => {
            console.log("Error", error);
            alert("Error");
        }
    );
  }

  

}
