import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-view-teams',
  templateUrl: './admin-view-teams.component.html',
  styleUrls: ['./admin-view-teams.component.css']
})
export class AdminViewTeamsComponent implements OnInit {
  
  
  teams:any;
  failedDelete;
  constructor(private httpClient:HttpClient) { }
  
  ngOnInit() {
    this.viewTeams();
  }

  viewTeams()
  {
    this.httpClient.get("http://127.0.0.1:8000/api/getTeams")
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.teams = data['teams'];
            console.log("Data", this.teams);
        },
        error => {
            console.log("Error", error);
        }
    );  
  }

  delete(id)
  {
    this.httpClient.get("http://127.0.0.1:8000/api/deleteTeam/" + id)
    .subscribe(
        data => {
          console.log("POST Request is successful ", data);
          this.failedDelete = false;
          window.location.reload();
        },
        error => {
            console.log("Error", error);
            this.failedDelete = true;
        }
    ); 

  }

}
