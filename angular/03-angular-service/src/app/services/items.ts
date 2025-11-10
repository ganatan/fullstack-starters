import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Items {
  constructor() {
    console.log('00000000001:Items:constructor');
  }

  load() {
    console.log('00000000001:Items:load');
    let result = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
        console.log('00000000002:Items:load');
      }, 4000)
    })
    console.log('00000000003:Items:load');
    return result;
  }
  
}
