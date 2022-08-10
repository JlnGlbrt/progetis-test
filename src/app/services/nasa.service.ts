import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private readonly API_ENDPOINT: string = 'https://api.nasa.gov/';
  private readonly API_KEY: string = 'P54zcnnhKZxivfEkWy7vl1SIZmBfWkqfd414nqYw';

  constructor(private http: HttpClient) { }

  public getAPOD(): Observable<JSON> {
    var serviceEndpoint = 'planetary/apod'
    var apiUrl = this.API_ENDPOINT + serviceEndpoint + '?api_key=' + this.API_KEY;

    return this.http.get<JSON>(apiUrl).pipe(take(1),
      catchError((err: any) => {
        return throwError(() => err);
      })
    );
  }

  public getAsteroidsNeoWs(start_date: string, end_date: string): Observable<JSON> {
    var serviceEndpoint = 'neo/rest/v1/feed'
    var apiUrl = this.API_ENDPOINT + serviceEndpoint + '?start_date=' + start_date + '&end_date=' + end_date + '&api_key=' + this.API_KEY;

    return this.http.get<JSON>(apiUrl).pipe(take(1),
      catchError((err: any) => {
        return throwError(() => err);
      })
    );
  }
}
