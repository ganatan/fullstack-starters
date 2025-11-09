import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Edit } from './components/edit/edit';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Edit,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-starter');

  constructor() {
    console.log('00000000001:constructor');
  }

  send(): void {
    console.log('00000000001:send');
  }
}
