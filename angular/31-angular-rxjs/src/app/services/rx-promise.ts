import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RxPromise {

  constructor() {
    console.log('00000000001:RxPromise:constructor');
  }

  loadItemsPromise(type: boolean): Promise<boolean> {
    console.log('00000000001:RxPromise:loadItems');
    let result = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        console.log('00000000001:RxPromise:loadItems:resolve');
        if (type) {
          resolve(true);
        } else {
          reject(false);
        }
      }, 2000)
    })
    return result;
  }

}
