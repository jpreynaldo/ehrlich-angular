import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() user: User;
  @Input() isError: boolean;
  @Output() city = new EventEmitter<string>();
  cityFC: string;

  getCity() {
    this.city.emit(this.cityFC);
  }
}
