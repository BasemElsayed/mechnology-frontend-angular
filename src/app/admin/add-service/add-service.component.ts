import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  model:any = {}
  imageURL:any;
  success;
  failed;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }


  uploadImage(event)
  {
    this.imageURL = <File>event.target.files[0];
  }


  onSubmit() {
    
    this.failed = false;
    this.success = false;
    if(!this.imageURL)
    {
      this.imageURL = "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwje44_6pKLfAhUPxYUKHc3XBikQjRx6BAgBEAU&url=https%3A%2F%2Fwww.lsahomes.org%2Fin-your-home%2Fservice-images-hd%2F&psig=AOvVaw0DBQZ9cYMU7V6pXpY6jJDJ&ust=1544978848521562";
    }

    const uploadData = new FormData();
    uploadData.append('imageURL', this.imageURL, this.imageURL.name);
    uploadData.append('name', this.model.nameEnglish);
    uploadData.append('nameArabic', this.model.nameArabic);
    uploadData.append('description', this.model.descriptionEnglish);
    uploadData.append('descriptionArabic', this.model.descriptionArabic);

    
    this.httpClient.post("http://127.0.0.1:8000/api/addService", uploadData)
    .subscribe(
        data => {
          this.success = true;
          this.failed = false;
        },
        error => {
          this.failed = true;
          this.success = false;
        }
    );  

  }

}
