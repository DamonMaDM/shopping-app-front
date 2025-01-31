import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginregisterGuard implements CanActivate {
  constructor(private router:Router, private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user = this.authService.currentUserValue;
        if (!user) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        if (user.role === 0){
          this.router.navigate(['/home']);
          return false;
        }
        this.router.navigate(['/admin/home']);
        return false;
  }
  
}
