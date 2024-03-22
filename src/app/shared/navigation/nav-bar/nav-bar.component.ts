import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  public auth = inject(AuthorizationService);

  ngOnInit(): void {
    // console.log(this.auth.isAuthenticated());
  }
  logout() {
    this.auth.logout();
  }
}
