import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: '**', redirectTo: '' }
];


// import { Routes } from '@angular/router';
// import { Home } from './pages/home/home';
// import { About } from './pages/about/about';

// export const routes: Routes = [
//   { path: '', component: Home },
//   { path: 'about', component: About },
//   { path: '**', redirectTo: '' }
// ];
