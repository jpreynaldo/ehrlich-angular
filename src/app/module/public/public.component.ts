import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AuthorizationService } from '../../core/services/authorization.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss'
})
export class PublicComponent {
  public auth = inject(AuthorizationService);


  login() {
    this.auth.login();
  }
}
