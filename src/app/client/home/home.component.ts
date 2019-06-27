import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  english;
  arabic;
  constructor() { }

  ngOnInit() {
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
  }

}
