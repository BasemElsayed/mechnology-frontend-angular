import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

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
    uploadData.append('name', this.model.name);

    
    this.httpClient.post("http://127.0.0.1:8000/api/addTeam", uploadData)
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
