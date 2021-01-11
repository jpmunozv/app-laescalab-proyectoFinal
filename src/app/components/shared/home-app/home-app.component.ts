import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.component.html',
  styleUrls: ['./home-app.component.scss']
})
export class HomeAppComponent implements OnInit {
  public image : string = "/assets/img/home.jpg";
  
  constructor() { }

  ngOnInit() {
  }

}
