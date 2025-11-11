import { Component, Input } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-design',
  imports: [FormsModule],
  templateUrl: './edit-design.html',
  styleUrl: './edit-design.css',
})
export class EditDesign {
  @Input() value: string = '';
}
