import { TestBed } from '@angular/core/testing';
import { Contact } from './contact';
import { provideStore, Store } from '@ngrx/store';
import { movieReducer } from '../../state/movie/movie.reducer';
import * as MovieActions from '../../state/movie/movie.actions';
import { selectMovie } from '../../state/movie/movie.selectors';
import { firstValueFrom } from 'rxjs';

describe('Contact', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [provideStore({ movie: movieReducer })]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Contact);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should sync movie in store', async () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    const store = TestBed.inject(Store);
    store.dispatch(MovieActions.set({ movie: 'Blade Runner' }));
    const v = await firstValueFrom(store.select(selectMovie));
    expect(v).toBe('Blade Runner');
  });
});
