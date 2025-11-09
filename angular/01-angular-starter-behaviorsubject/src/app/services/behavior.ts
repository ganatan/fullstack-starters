import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Behavior {

  constructor() {
    console.log('00000000001:Behavior:constructor');
  }

  loadItems() {
    console.log('00000000001:Behavior:loadItems');
    let result = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 5000)
    })
    return result;
  }

}
