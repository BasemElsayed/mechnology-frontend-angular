import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
  reloadContact()
  {
    window.location.reload();
  }

  languages($select)
  {
    console.log($select);
    localStorage.setItem("lang", $select);
    window.location.reload();
  }
}
