import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RxPromise } from './services/rx-promise';
import { RxObservable } from './services/rx-observable';
import { finalize, firstValueFrom, lastValueFrom } from 'rxjs';

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

  loadItemsPromise(type: boolean) {
    this.messageFinally = '';
    this.message = '';
    this.rxPromise.loadItemsPromise(type)
      .then((value) => {
        this.message = 'loadItemsPromise:then:' + value;
      })
      .catch((error) => {
        this.message = 'loadItemsPromise:catch:' + error;
      })
      .finally(() => {
        this.messageFinally = 'loadItemsPromise:finally';
      })
  }
  async loadItemsPromiseAwait(type: boolean) {
    this.messageFinally = '';
    this.message = '';
    try {
      const result = await this.rxPromise.loadItemsPromise(type);
      this.message = 'loadItemsPromiseAwait:await:' + result;
    } catch (error) {
      this.message = 'loadItemsPromiseAwait:error:' + error;
    } finally {
      this.messageFinally = 'loadItemsPromiseAwait:finally';
    }
  }

  loadItemsObservable() {
    this.messageFinally = '';
    this.message = '';
    this.rxObservable.loadItemsObservable$().subscribe({
      next: v => this.message = `loadItemsObservable:next:${v}`,
      error: () => this.message = 'loadItemsObservable:error',
      complete: () => this.messageFinally = 'loadItemsObservable:complete'
    });
  }

  async loadItemsObservableAwait() {
    this.messageFinally = '';
    this.message = '';
    try {
      const v = await lastValueFrom(this.rxObservable.loadItemsObservable$());
      this.message = `loadItemsObservableAwaitLast:await:${v}`;
    } catch (error) {
      this.message = 'loadItemsObservableAwaitLast:error:' + error;
    } finally {
      this.messageFinally = 'loadItemsObservableAwaitLast:finally';
    }
  }

  async loadItemsObservableAwaitFinalize() {
    this.messageFinally = '';
    this.message = '';
    try {
      const v = await firstValueFrom(
        this.rxObservable.loadItemsObservable$().pipe(
          finalize(() => this.messageFinally = 'loadItemsObservable:complete')
        )
      );
      this.message = `loadItemsObservable:next:${v}`;
    } catch {
      this.message = 'loadItemsObservable:error';
    }
  }

}
