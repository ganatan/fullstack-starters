import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Items } from './services/items';
import { Medias } from './services/medias';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-starter');

  private medias = inject(Medias);
  message:string='';
  constructor(private items: Items) {
  }

  onLoadItems() {
    console.log('00000000001:App:onLoadItems');
    this.items.load()
      .then(() => { 
        this.message = 'onLoadItems:then';
        console.log('00000000001:App:onLoadItems:then') })
      .catch(() => { 
        this.message = 'onLoadItems:catch';
        console.log('00000000001:App:onLoadItems:catch') 
      })
      .finally(() => { console.log('00000000001:App:onLoadItems:finally') });
  }

  async onLoadMedias() {
    console.log('00000000001:App:onLoadMedias');
    let result = await this.medias.load();
    this.message = 'onLoadMedias:then';
    // this.medias.load()
    //   .then(() => { 
    //     this.message = 'onLoadMedias:then';
    //     console.log('00000000001:App:onLoadMedias:then') })
    //   .catch(() => { 
    //     this.message = 'onLoadItems:catch';
    //     console.log('00000000001:App:onLoadMedias:catch') 
    //   })
    //   .finally(() => { console.log('00000000001:App:onLoadMedias:finally') });
  }

}
