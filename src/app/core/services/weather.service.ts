import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class WeatherService {
    private apiKey = '45bc8ffb1d16f67566873788c43719b8';
    private apiUrl = 'https://api.openweathermap.org/data/2.5';

    private _http = inject(HttpClient);

    getWeather(city: string): Observable<any> {
        const url = `${this.apiUrl}/weather?q=${city}&appid=${this.apiKey}&units=imperial`;
        return this._http.get<any>(url);
      }
}