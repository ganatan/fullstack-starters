import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-starter');
  movie : string;

  constructor() {
    this.movie = 'Aliens';

  }
  
  changeDetection() {
    console.log('00000000001');
    this.movie = 'Aliens:changeDetection';
  }
}
