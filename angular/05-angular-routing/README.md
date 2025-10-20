
# angular-routing

  ng g component pages/home
  ng g component pages/about


  Ajout de RouterLink dans app.ts

# Improve Code

  - app.routes.ts

  import { Routes } from '@angular/router';
  import { Home } from './pages/home/home';
  import { About } from './pages/about/about';

  export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: '**', redirectTo: '' }
  ];

  - app.html

    <h1>angular-routing</h1>

    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/about">About</a></li>
    </ul>

    <router-outlet></router-outlet>

  - app.ts

    import { Component, signal } from '@angular/core';
    import { RouterLink, RouterOutlet } from '@angular/router';

    @Component({
      selector: 'app-root',
      imports: [
        RouterLink,
        RouterOutlet],
      templateUrl: './app.html',
      styleUrl: './app.css'
    })
    export class App {
      protected readonly title = signal('angular-starter');

    }
        