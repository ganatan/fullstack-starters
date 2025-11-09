import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Behavior } from './services/behavior';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-starter');

  message: string = '';
  messageFinally: string = '';

  constructor(private behavior: Behavior) {
    console.log('00000000001:App:constructor');
  }

  loadItems() {
    this.messageFinally = '';
    this.message = '';
    this.behavior.loadItems()
      .then(() => {
        this.message = 'loadItems:then';
      })
      .catch(() => {
        this.message = 'loadItems:catch';
      })
      .finally(() => {
        this.messageFinally = 'loadItems:finally';
      })
  }
}
