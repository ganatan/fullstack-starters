import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Items } from './services/items';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  items = inject(Items);
  protected readonly title = signal('angular-starter');

  constructor(
    // private items:Items
  ) {
    console.log('00000000001:app:constructor');
  }

  loadItemsPromise() {
    console.log('00000000001:app:loadItems');
    this.items.loadPromise()
      .then((value) => { console.log('00000000001:app:loadItems:then:' + value) })
      .catch((error) => { console.log('00000000001:app:loadItems:catch:' + error) })
      .finally(() => { console.log('00000000001:app:loadItems:finally') })
  }

  loadItemsObservable() {
    console.log('00000000001:app:loadItems');
    // this.items.loadObservable$.
    this.items.loadObservable$().subscribe(value => {
      console.log('Observable reçu :', value);
    });

  }
}
