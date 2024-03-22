import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, catchError, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com';
  private http = inject(HttpClient)
  private auth = inject(AuthService)
  constructor() { }

  getUserDetails(accessToken: string): Observable<any> {
    return this.auth.idTokenClaims$.pipe(
      switchMap(idTokenClaims => {
        const idToken = idTokenClaims?.__raw;
        const headers = new HttpHeaders().set('Authorization', `Bearer ${idToken}`).set('Accept', 'application/json');
        return this.http.get(`${this.apiUrl}/user`, { headers }).pipe(
          catchError(error => {
            // Handle error (e.g., token expired)
            console.error('Error fetching user data:', error);
            return throwError(error);
          })
        );
      })
    );
  }
}
