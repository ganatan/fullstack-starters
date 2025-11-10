import { Directive } from '@angular/core';

import {  HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightBinding]'
})
export class HighlightBinding {

  constructor() { 
    console.log('00000000001:HighlightBinding:constructor')
  }

  @HostBinding('style.background') bg = ''

  @HostListener('mouseenter')
  enter() {
    console.log('00000000001:HighlightBinding:mouseenter')
    this.bg = 'yellow'
  }

  @HostListener('mouseleave')
  leave() {
    console.log('00000000001:HighlightBinding:mouseleave')
    this.bg = 'red'
  }  

}
