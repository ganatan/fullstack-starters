import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Calculator } from './services/calculator';
import { Counter } from './components/counter/counter';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Counter
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-starter');

  result: string = '';

  constructor(private calculator: Calculator) {
    console.log('00000000001:App:constructor')
  }

  add(a: number, b: number): number {
    console.log('00000000001:App:add')
    let result = a + b;
    this.result = `${result}`;
    return result;
  }

}
