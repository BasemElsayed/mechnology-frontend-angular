import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {


  english;
  arabic;
  matrix : any[][] = new Array();
  basic : any[][] = new Array();
  teams:any;
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
    this.viewTeams();
  }


  viewTeams()
  {
    this.httpClient.get("http://127.0.0.1:8000/api/getTeams")
    .subscribe(
        data => {
            console.log("POST Request is successful ", data);
            this.teams = data['teams'];
            console.log("length : " + this.teams.length);
            var i = 0
            var team1 = this.teams[i++];
            var team2 = null;
            var team3 = null;
            if(i < this.teams.length)
            {
              team2 = this.teams[i++];
            }
            if(i < this.teams.length)
            {
              team3 = this.teams[i++];
            }
            this.basic.push([team1, team2, team3]);
            for(; i<this.teams.length ;)
            {
              var team1 = this.teams[i++];
              var team2 = null;
              var team3 = null;
              if(i < this.teams.length)
              {
                team2 = this.teams[i++];
              }
              if(i < this.teams.length)
              {
                team3 = this.teams[i++];
              }
              this.matrix.push([team1, team2, team3]);
            }

            for(var i=0; i<this.matrix.length ;i++)
            {
              for(var j=0; j < this.matrix[i].length ;j++)
              {
                //console.log("Name : " + this.matrix[i][j].name);
              }
            }

            //console.log("Data", this.services[0]['name']);
        },
        error => {
            console.log("Error", error);
        }
    );  
  }

}
