import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from '../shared/services/authorization.service';

@Injectable({
  providedIn: 'root'
})
class AuthService {

  constructor(private router: Router, private authService: AuthorizationService) {
    // this.authService.initializeAuth()
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isLoggedIn = localStorage.getItem('isAuthenticated');
    if (isLoggedIn === 'true') {
      this.router.navigateByUrl('/home')
    }
    return true;
    // return isLoggedIn as boolean;
  }
}
export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthService).canActivate(next, state);
};

// export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => AuthGuard(route, state);