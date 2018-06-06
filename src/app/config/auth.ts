import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginComponent } from '../templates/login/login/login.component';
import { LoginService } from '../service/login/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGaurd implements CanActivate {

  constructor(private _AccountService: LoginService,
              private route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (!this._AccountService.isAuthenticated){
      this.route.navigate(['home']);
      return false;

    } else {
      return true;
    }
  }
}