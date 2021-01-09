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
          window.alert('Debe Iniciar Sesion como Usario registrado para acceder a esta página.');
          this.logged = false;
          this.router.navigate(['auth']);
        }
        return this.logged;
      }).catch(error => {
        console.log('error promise guard', error);
        this.logged = false;
        window.alert('Debe Iniciar Sesion como Usario registrado para acceder a esta página.');
        this.router.navigate(['auth']);
        return this.logged;
      })
  
      return this.logged;
  }
  
}
