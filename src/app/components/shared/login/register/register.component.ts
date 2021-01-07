import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/auth-services/register.service';
import { FirestoreService } from 'src/app/services/auth-services/firestore.service';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  get email() {return this.registerForm.get('email')};
  get pass() {return this.registerForm.get('pass')};
  public registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
    name: new FormControl(''),
  })

  constructor(
    private registerService: RegisterService,
    private firestoreService: FirestoreService,
    private router: Router 
  ) { }

  ngOnInit() {
  }

  register() {
    console.log('try register', this.registerForm.value);
    this.registerService.registerByUserEmail(this.registerForm.value.email, this.registerForm.value.pass).then(resp => {
      const newUser: User = {
        email: resp.email,
        emailVerified: resp.emailVerified,
        name: this.registerForm.value.name,
        uid: resp.uid
      }
      this.firestoreService.createUser(newUser).then(resp => {
        console.log('id new user -->', resp);
      })
      console.log('registro DONEE???? -->', resp);
      this.router.navigate(['register-done']);
    }).catch(error => {
      console.log(error);
    })
  }

}
