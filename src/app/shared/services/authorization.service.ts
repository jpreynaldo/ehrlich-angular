import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  _isAuthenticate = new BehaviorSubject<boolean>(false);
  isAuthenticate$ = this._isAuthenticate.asObservable()
  _auth = inject(AuthService);
  router = inject(Router)
  constructor() {
  }

  /**
   * Initialize authentication value
   */
  initializeAuth() {
    this._auth.isAuthenticated$.subscribe(isAuth => {
      this._isAuthenticate.next(isAuth)
    });
  }
  /**
   * Getter if user is authenticated or not
   */
  get isAuthenticated() {
    return this._isAuthenticate.value;
  }
  /**
   * 0Auth Login Functionality
   */
  login() {
    this._auth.loginWithRedirect();
    
    
  }
  /**
   * 0Auth Logout Functionality
   */
  logout() {
    this._auth.logout({
      logoutParams: {
        returnTo: document.location.origin
      }
    });
    localStorage.clear();
  }
}
