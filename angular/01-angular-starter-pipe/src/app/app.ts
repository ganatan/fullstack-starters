import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BudgetPipe } from './pipes/budget-pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    BudgetPipe,
    CurrencyPipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-starter');

  budgetMovie: number = 714844358;
  nameMovie: string = 'Dune: Part Two'

}
