import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/auth-services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl('')
  }) 


  constructor(
    private loginService: LoginService,
    private router: Router 
  ) { }

  ngOnInit() {
  }

  onLogin() {
     console.log('submit form', this.loginForm.value);
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.pass).then(resp => {
      this.router.navigate(['home']);
      console.log('resp promise compo ts -->', resp);
    }).catch(error => {
      console.error('promise -->', error);
    }); 
  }

}
