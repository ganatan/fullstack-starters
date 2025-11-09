import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budget'
})
export class BudgetPipe implements PipeTransform {

  constructor() {
    console.log('00000000001:BudgetPipe:constructor')
  }

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('00000000001:BudgetPipe:transform:' + value);
    const number = Number(value) || 0;
    return `$${number.toLocaleString('en-US')}`;
  }

}
