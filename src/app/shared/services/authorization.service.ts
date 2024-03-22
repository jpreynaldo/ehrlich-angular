import { Injectable, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  _isAuthenticate = new BehaviorSubject<boolean>(false);
  isAuthenticate$ = this._isAuthenticate.asObservable()
  _auth = inject(AuthService);
  constructor() {
  }

  initializeAuth() {
    this._auth.isAuthenticated$.subscribe(isAuth => {
      this._isAuthenticate.next(isAuth)
    });
  }
  get isAuthenticated() {
    return this._isAuthenticate.value;
  }
  /**
   * 0Auth Login Functionality
   */
  login() {
    this._auth.loginWithPopup();
  }

  /**
   * 0Auth Logout Functionality
   */
  logout() {
    this._auth.logout({
      logoutParams: {
        returnTo: document.location.origin
      }
    })
  }
}
