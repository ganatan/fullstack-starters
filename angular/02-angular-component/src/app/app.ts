import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Edit } from './components/edit/edit';
import { EditDesign } from './components/edit-design/edit-design';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Edit,
    EditDesign,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-starter');
  
  appEditValue: string = 'Aliens';
  appEditDesignValue: string = 'Gladiator';

  constructor() {
    console.log('00000000001:constructor');
  }

  changeAppEdit(): void {
    this.appEditValue =  this.appEditValue + 'Changed';
    this.appEditDesignValue =  this.appEditDesignValue + 'Changed';
    console.log('00000000001:send');
  }
}
