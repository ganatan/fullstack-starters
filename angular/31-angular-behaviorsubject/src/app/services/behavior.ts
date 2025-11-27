import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviorService {
  private readonly behaviorSubject = new BehaviorSubject<string>('init behavior');
  readonly behaviorSubject$ = this.behaviorSubject.asObservable();

  private readonly subject = new Subject<string>();
  readonly subject$ = this.subject.asObservable();

  updateBehaviorSubject() {
    const value = 'behavior ' + new Date().toLocaleTimeString();
    this.behaviorSubject.next(value);
  }

  updateSubject() {
    const value = 'subject ' + new Date().toLocaleTimeString();
    this.subject.next(value);
  }

  getPromise(): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('promise ' + new Date().toLocaleTimeString());
      }, 1000);
    });
  }

  getObservable(): Observable<string> {
    return of('observable ' + new Date().toLocaleTimeString());
  }
}
