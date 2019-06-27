import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    english;
    arabic;
  aboutUs:string = '';
  vision:string = '';
  aboutUsArabic:string = '';
  visionArabic:string = '';
  job:string = '';
  worker:string = '';
  client:string = '';
  missions:any;
  constructor(private httpClient:HttpClient) 
  { 

  }

  ngOnInit() 
  {
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
    this.viewAbout();
    this.viewMission();
  }


  viewAbout()
  {
    this.httpClient.get("http://127.0.0.1:8000/api/getAbout")
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.aboutUs = data['about'][0].aboutUs;
            this.aboutUsArabic = data['about'][0].aboutUsArabic;
            this.vision = data['about'][0].vision;
            this.visionArabic = data['about'][0].visionArabic;
            this.job = data['about'][0].job;
            this.worker = data['about'][0].worker;
            this.client = data['about'][0].client;
            //console.log("Data", this.services[0]['name']);
        },
        error => {
            console.log("Error", error);
        }
    );  
  }

  viewMission()
  {
    this.httpClient.get("http://127.0.0.1:8000/api/getMissions")
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.missions = data['missions'];
            //console.log("Data", this.services[0]['name']);
        },
        error => {
            console.log("Error", error);
        }
    );  
  }

}
