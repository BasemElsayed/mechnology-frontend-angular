import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  english;
  arabic;
  portfolios:any;
  modalValue = {
    maintenancePlace : '',
    maintenanceScope : '',
    maintenanceDuration : '',
    maintenanceDescription : '',
    maintenancePlaceArabic : '',
    maintenanceScopeArabic : '',
    maintenanceDurationArabic : '',
    maintenanceDescriptionArabic : '',
    imageURL:''
  };
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
    this.viewPortfolios();
  }


  viewPortfolios()
  {
    this.httpClient.get("http://127.0.0.1:8000/api/getPortfolio")
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.portfolios = data['portfolios'];
            //console.log("Data", this.services[0]['name']);
        },
        error => {
            console.log("Error", error);
        }
    );  
  }

  popModalUp(port)
  {
    this.modalValue = port;
  }
}
