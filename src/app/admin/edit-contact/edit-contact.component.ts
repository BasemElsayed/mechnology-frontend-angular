import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  lat: number;
  lng: number;
  addressEnglish:string = '';
  addressArabic:string = '';
  emailCont:string = '';
  phone:string = '';
  mobile:string = '';
  from:string = '';
  to:string = '';
  holidaysEnglish:string = '';
  holidaysArabic:string = '';

  model:any = {};
  success;
  failed;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.viewContacs();
  }

  viewContacs()
  {
    this.httpClient.get("http://127.0.0.1:8000/api/getContact")
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.model.addressEnglish = data['contacts'][0].addressEnglish;
            this.model.addressArabic = data['contacts'][0].addressArabic;
            this.model.email = data['contacts'][0].email;
            this.model.phone = data['contacts'][0].phone;
            this.model.mobile = data['contacts'][0].mobile;
            this.model.from = data['contacts'][0].from;
            this.model.to = data['contacts'][0].to;
            this.model.holidaysEnglish = data['contacts'][0].holidaysEnglish;
            this.model.holidaysArabic = data['contacts'][0].holidaysArabic;
            this.model.latitude = data['contacts'][0].latitude;
            this.model.langitude = data['contacts'][0].langitude;
            //console.log("Data", this.services[0]['name']);
        },
        error => {
            console.log("Error", error);
        }
    );  
  }



  onSubmit() 
  {
    
    this.failed = false;
    this.success = false;
    
    this.httpClient.post("http://127.0.0.1:8000/api/updateContact", this.model)
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.success = true;
            this.failed = false;  
        },
        error => {
            console.log("Error", error);
            this.success = false;
            this.failed = true;
        }
    );
  }



}
