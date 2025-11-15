import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Calculator {
  constructor() {
    console.log('00000000001:Calculator:constructor')
  }

  add(a: number, b: number): number {
    return a + b;
  }

}
