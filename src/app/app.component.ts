import { Component, OnInit, inject } from '@angular/core';
import { AuthorizationService } from './shared/services/authorization.service';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public auth = inject(AuthService);
  router = inject(Router)
  public authService = inject(AuthorizationService);

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(isAuth => {
      this.authService._isAuthenticate.next(isAuth);
      if (isAuth === true) {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/home']);
        });
      }
      console.log(this.auth.user$)
      this.auth.user$.subscribe(user => {
        console.log(user)
      })
    });
  }
}
