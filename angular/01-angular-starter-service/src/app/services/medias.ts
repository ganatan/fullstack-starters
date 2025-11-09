import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Medias {
  
  constructor() {
    console.log('00000000001:Medias:constructor');
  }
  
  async load() {
    console.log('00000000001:Medias:load');
    let result = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
        console.log('00000000002:Medias:load');
      }, 4000)
    })
    console.log('00000000003:Medias:load');
    return result;
  }
}
