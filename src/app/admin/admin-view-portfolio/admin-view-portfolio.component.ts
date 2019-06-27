import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-view-portfolio',
  templateUrl: './admin-view-portfolio.component.html',
  styleUrls: ['./admin-view-portfolio.component.css']
})
export class AdminViewPortfolioComponent implements OnInit {

  portfolios:any;

  model:any = {}
  imageURL:any;
  success;
  failed;
  failedDelete;

  modalValue = {
    id : '',
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

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
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

  popModalUp(serv)
  {
    this.modalValue = serv;
    this.model = serv;
    this.imageURL = serv.imageURL;
  }


  uploadImage(event)
  {
    this.imageURL = <File>event.target.files[0];
  }


  onSubmit() {

    if(!this.imageURL)
    {
      this.imageURL = "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwje44_6pKLfAhUPxYUKHc3XBikQjRx6BAgBEAU&url=https%3A%2F%2Fwww.lsahomes.org%2Fin-your-home%2Fservice-images-hd%2F&psig=AOvVaw0DBQZ9cYMU7V6pXpY6jJDJ&ust=1544978848521562";
    }
    const uploadData = new FormData();
    uploadData.append('imageURL', this.imageURL);
    uploadData.append('maintenancePlace', this.model.maintenancePlace);
    uploadData.append('maintenancePlaceArabic', this.model.maintenancePlaceArabic);
    uploadData.append('maintenanceScope', this.model.maintenanceScope);
    uploadData.append('maintenanceScopeArabic', this.model.maintenanceScopeArabic);
    uploadData.append('maintenanceDuration', this.model.maintenanceDuration);
    uploadData.append('maintenanceDurationArabic', this.model.maintenanceDurationArabic);
    uploadData.append('maintenanceDescription', this.model.maintenanceDescription);
    uploadData.append('maintenanceDescriptionArabic', this.model.maintenanceDescriptionArabic);

    
    this.httpClient.post("http://127.0.0.1:8000/api/editPortfolio/" + this.modalValue.id ,uploadData)
    .subscribe(
        data => {
          this.success = true;
          this.failed = false;
          window.location.reload();
        },
        error => {
          this.failed = true;
          this.success = false;
        }
    );

  }


  delete(id)
  {
    this.httpClient.get("http://127.0.0.1:8000/api/deletePortfolio/" + id)
    .subscribe(
        data => {
          this.failedDelete = false;
          window.location.reload();
        },
        error => {
          this.failedDelete = true;
        }
    );
  }

}
