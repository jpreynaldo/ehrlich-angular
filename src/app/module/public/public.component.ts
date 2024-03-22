import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss'
})
export class PublicComponent {
  public auth = inject(AuthService);
}
