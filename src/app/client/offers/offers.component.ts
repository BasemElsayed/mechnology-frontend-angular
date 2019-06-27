import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {


  offers:any;
  counter:number = 1;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() 
  {
    this.viewCompaniesOfffer();
  }


  viewCompaniesOfffer()
  {
    this.counter = 1;
    this.httpClient.get("http://127.0.0.1:8000/api/getOffers")
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.offers = data['offers'];
            console.log("Data", this.offers[0]['duration']);
        },
        error => {
            console.log("Error", error);
        }
    );  
  }
}
