import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Rx {

  constructor() {
    console.log('00000000001:rx:constructor');
  }

  loadItemsPromise(): Promise<boolean> {
    console.log('00000000001:rx:loadItems');
    let result = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        console.log('00000000001:rx:loadItems:resolve');
        resolve(true);
      }, 2000)
    })
    return result;
  }

  loadItemsObservable$(): Observable<boolean> {
    console.log('00000000001:rx:loadItems');
    return new Observable<boolean>((subscriber) => {
      setTimeout(() => {
        console.log('00000000001:rx:loadItems:next');
        subscriber.next(true);
        setTimeout(() => {
          console.log('00000000002:rx:loadItems:next');
          subscriber.next(false);
          setTimeout(() => {
            console.log('00000000003:rx:loadItems:error');
            subscriber.error('error');
            console.log('00000000004:rx:loadItems:complete');
            subscriber.complete();
            console.log('00000000005:rx:loadItems:complete');
          }, 2000);
        }, 2000);
      }, 2000);
    });
  }

}
