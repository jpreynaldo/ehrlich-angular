import { Component, OnInit, inject } from '@angular/core';
import { AuthorizationService } from './core/services/authorization.service';
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

 async ngOnInit() {
    this.authService.initializeAuth();
    if (this.authService.isAuthenticated) {
      const accessToken = await this.authService.getAccessToken();
    }
  }
}
