# Concepts
  
  Analogie simple
    Un composant, c’est une maison complète : avec des murs (HTML), des couleurs (CSS) et des règles (TS).

  Une directive
    C’est un petit pouvoir que tu colles sur un élément existant pour lui donner une compétence spéciale.

# Liste Types de directive
  Type de directive	      Effet

  Directive de composant	      Directive + template (un composant)
  Directive structurelle	      Modifie la structure du DOM (*ngIf, *ngFor)
  Directive d’attribut	        Modifie l’apparence / le comportement (ngClass, ngStyle)

# Creation Directives

  ng generate directive directives/highlightBinding
  ng g d directives/highlightBinding

  ng generate directive directives/highlightRenderer
  ng g d directives/highlightRenderer


# Rajout de code avec HostBinding

  - highlightBinding.ts

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

# Rajout de code avec Renderer

  - highlightRenderer.ts

    import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

    @Directive({
      selector: '[appHighlightRenderer]',
      standalone: true
    })
    export class HighlightRenderer {
      constructor(private el: ElementRef, private renderer: Renderer2) {}

      @HostListener('mouseenter')
      enter() {
        this.renderer.setStyle(this.el.nativeElement, 'background', 'yellow')
      }

      @HostListener('mouseleave')
      leave() {
        this.renderer.setStyle(this.el.nativeElement, 'background', 'red')
      }
    }



  - App.ts

    import { Component, signal } from '@angular/core';
    import { RouterOutlet } from '@angular/router';

    import { Highlight } from './directives/highlight';

    @Component({
      selector: 'app-root',
      imports: [
        RouterOutlet,
        Highlight,
      ],
      templateUrl: './app.html',
      styleUrl: './app.css'
    })
    export class App {
      protected readonly title = signal('angular-starter');
    }

  - App.thml

    <h1>angular-directive</h1>
    <p appHighlightBinding>Directive HighlightBinding</p>
    <router-outlet />
