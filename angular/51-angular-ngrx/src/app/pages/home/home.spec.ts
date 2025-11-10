import { TestBed } from '@angular/core/testing';
import { Home } from './home';
import { provideStore, Store } from '@ngrx/store';
import { movieReducer } from '../../state/movie/movie.reducer';
import * as MovieActions from '../../state/movie/movie.actions';
import { selectMovie } from '../../state/movie/movie.selectors';
import { firstValueFrom } from 'rxjs';

describe('Home', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideStore({ movie: movieReducer })]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Home);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should read and update movie via store', async () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const store = TestBed.inject(Store);
    const initial = await firstValueFrom(store.select(selectMovie));
    expect(initial).toBe('Inception');
    store.dispatch(MovieActions.set({ movie: 'Aliens' }));
    const updated = await firstValueFrom(store.select(selectMovie));
    expect(updated).toBe('Aliens');
  });
});
