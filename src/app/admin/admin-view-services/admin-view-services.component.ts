import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-view-services',
  templateUrl: './admin-view-services.component.html',
  styleUrls: ['./admin-view-services.component.css']
})
export class AdminViewServicesComponent implements OnInit {

  services:any;

  model:any = {}
  imageURL:any;
  success;
  failed;
  failedDelete;

  modalValue = {
    id : '',
    name : '',
    description : '',
    imageURL : '',
    nameArabic : '',
    descriptionArabic: ''
  };

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.viewServices();
  }

  viewServices()
  {
    this.httpClient.get("http://127.0.0.1:8000/api/getServices")
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.services = data['services'];
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
    console.log("ssssssssss");
    const uploadData = new FormData();
    uploadData.append('imageURL', this.imageURL);
    uploadData.append('name', this.model.name);
    uploadData.append('nameArabic', this.model.nameArabic);
    uploadData.append('description', this.model.description);
    uploadData.append('descriptionArabic', this.model.descriptionArabic);

    
    this.httpClient.post("http://127.0.0.1:8000/api/editService/" + this.modalValue.id ,uploadData)
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
    this.httpClient.get("http://127.0.0.1:8000/api/deleteService/" + id)
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
