import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Movies {
  getMovies(): Observable<string[]> {
    return of(['Alien', 'Heat', 'Blade Runner']).pipe(delay(2000));
  }
}
