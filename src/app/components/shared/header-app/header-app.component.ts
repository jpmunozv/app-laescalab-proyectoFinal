import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/auth-services/login.service';

@Component({
  selector: 'app-header-app',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.scss']
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
      name: 'Species',
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
    },

    {
      name: 'Logout',
      path: '/login'
    }


  ];
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }


  logout(){
    this.loginService.logout().then(resp => {
      console.log('logout ok -->', resp);
    }).catch(error => {
      console.error('error logout -->', error);
    })
  }

}
