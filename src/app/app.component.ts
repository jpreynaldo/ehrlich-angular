import { Component, OnInit, inject } from '@angular/core';
import { AuthorizationService } from './shared/services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public auth = inject(AuthorizationService);

  ngOnInit() {
    this.auth.initializeAuth();
  }
}
