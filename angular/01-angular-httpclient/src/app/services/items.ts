import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Items {
  constructor() {
    console.log('00000000001:Items:constructor');
  }

  loadPromise() {
    console.log('00000000001:Items:load');
    let result = new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 4000)
    })
    return result
  }

  // loadObservable$(): Observable<boolean> {
  //   console.log('00000000001:Items:load');
  //   let result$ = new Observable<boolean>(subscriber => {
  //     setTimeout(() => {
  //       subscriber.next(true);
  //       setTimeout(() => {
  //         subscriber.next(false);
  //       }, 4000)
  //     }, 2000)
  //   })
  //   return result$
  // }


  loadObservable() {
    const result$ = new Observable<boolean>(subscriber => {
      let i = 0;
      setTimeout(() => {
        subscriber.next(true)
        setTimeout(() => {
          subscriber.next(false)
          setTimeout(() => {
            subscriber.error(false)
            setTimeout(() => {
              subscriber.complete()
            }, 2000)
          }, 2000)
        }, 2000)
      }, 2000)
    });
    return result$;
  }

}
