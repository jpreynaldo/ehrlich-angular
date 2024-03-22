import { Component, OnInit, inject } from '@angular/core';
import { GithubService } from '../../core/services/github.service';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { WeatherService } from '../../core/services/weather.service';
import { Weather } from '../../shared/interfaces/weather.interface';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent implements OnInit {
  private _githubService = inject(GithubService);
  private _router = inject(Router);
  private _weatherService = inject(WeatherService);
  public auth = inject(AuthService);
  weatherData: Weather | null;
  isWeatherError: boolean;
  

  ngOnInit(): void {
    this.getUserDetail();
  }

  getUserDetail() {
    const accessToken = localStorage.getItem('accessToken');
    this._githubService.getUserDetails(accessToken as string).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }


  getWeather(city: any) {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    });
    this._weatherService.getWeather(city).subscribe({
        next: (data) => {
          if (data) {
            this.weatherData = {
              date: formattedDate,
              temperature: data.main.temp,
              description: data.weather[0].description,
              main: data.weather[0].main,
              pressure: data.main.pressure,
              humidity: data.main.humidity
            }
            this.isWeatherError = false;
          }
        }, error: (err) => {
          this.isWeatherError = true;
        }
      });
  }
  
  goBack(isBack: any) {
    if (isBack) {
      this.weatherData = null
    }
  }
}
