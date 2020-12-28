import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.css']
})
export class HeaderAppComponent implements OnInit {
  rutas = [
    {
      name: 'Films',
      path: '/films'
    },
    {
      name: 'People',
      path: '/people'
    },
    {
      name: 'Planets',
      path: '/planets'
    },
    {
      name: 'species',
      path: '/species'
    },
    {
      name: 'main',
      path: '/main'
    },

    {
      name: 'Login',
      path: '/login'
    },

    {
      name: 'Register',
      path: '/register'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
