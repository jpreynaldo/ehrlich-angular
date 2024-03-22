import { Component, OnInit, inject } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  public auth = inject(AuthorizationService);

  ngOnInit(): void {
  }
  logout() {
    this.auth.logout();
  }
}
