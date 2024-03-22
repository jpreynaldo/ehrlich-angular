import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Weather } from '../../../../shared/interfaces/weather.interface';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  @Input() weather: Weather;
  @Output() onBack = new EventEmitter<boolean>();


  goBack() {
    this.onBack.emit(true);
  }
}
