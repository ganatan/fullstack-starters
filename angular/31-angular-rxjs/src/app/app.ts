import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RxPromise } from './services/rx-promise';
import { RxObservable } from './services/rx-observable';

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

  constructor(
    private rxPromise: RxPromise,
    private rxObservable: RxObservable,
  ) {
    console.log('00000000001:App:constructor');
  }

  loadItemsPromise() {
    this.messageFinally = '';
    this.message = '';
    this.rxPromise.loadItemsPromise()
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

  async loadItemsPromiseAwait() {
    this.messageFinally = '';
    this.message = '';
    await this.rxPromise.loadItemsPromise();
    this.message = 'loadItems:then';
    this.messageFinally = 'loadItems:finally';
  }

  loadItemsObservable() {
    this.messageFinally = '';
    this.message = '';
    this.rxObservable.loadItemsObservable$().subscribe({
      next: v => this.message = `loadItems:next:${v}`,
      error: () => this.message = 'loadItems:error',
      complete: () => this.messageFinally = 'loadItems:complete'
    });
  }

}
