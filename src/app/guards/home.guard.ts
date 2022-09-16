import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor( private authService: AuthService, private router: Router ) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|UrlTree {
    if (this.authService.checkLS()) {return true};
        
    alert('You are not an authorized user. Please, log in!');    
    return this.router.parseUrl('/login');
  } 
}
