import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/auth-services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  
  private logged: boolean;
  
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.loginService.currentUSer().then(resp => {
        if (resp.uid != null) {
          this.logged = true;
          //this.router.navigate(['home']);
        } else {
          window.alert('protected route');
          this.logged = false;
          this.router.navigate(['login']);
        }
        return this.logged;
      }).catch(error => {
        console.log('error promise guard', error);
        this.logged = false;
        window.alert('protected route');
        //this.router.navigate(['login']);
        return this.logged;
      })
  
      return this.logged;
  }
  
}
