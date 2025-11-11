import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { movieReducer } from './state/movie/movie.reducer';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideStore({ movie: movieReducer }),
        provideRouter(routes)
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});


// import { TestBed } from '@angular/core/testing';
// import { App } from './app';

// describe('App', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [App],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(App);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   // it('should render title', () => {
//   //   const fixture = TestBed.createComponent(App);
//   //   fixture.detectChanges();
//   //   const compiled = fixture.nativeElement as HTMLElement;
//   //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-starter');
//   // });
// });
