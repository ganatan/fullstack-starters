# Creation
  ng g p pipes/budget

# Liste de pipe
  {{ 1800 | currency:'USD' }}      → $1,800.00
  {{ 0.42 | percent }}            → 42%
  {{ today | date:'short' }}       → 11/09/25, 12:00
  {{ {name:'Danny'} | json }}
  {{ users | slice:0:3 }}
  {{ stream$ | async }}

# json
  
  items : {{ items | json }}<br>

  import { JsonPipe } from '@angular/common';

  @Component({
    selector: 'app-root',
    imports: [
      RouterOutlet,
      JsonPipe],
    templateUrl: './app.html',
    styleUrl: './app.css'
  })  

# Currency

import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CurrencyPipe],  