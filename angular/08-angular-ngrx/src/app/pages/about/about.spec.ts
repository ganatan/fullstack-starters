import { TestBed } from '@angular/core/testing';
import { About } from './about';
import { provideStore, Store } from '@ngrx/store';
import { movieReducer } from '../../state/movie/movie.reducer';
import * as MovieActions from '../../state/movie/movie.actions';
import { selectMovie } from '../../state/movie/movie.selectors';
import { firstValueFrom } from 'rxjs';

describe('About', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
      providers: [provideStore({ movie: movieReducer })]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(About);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should update movie from action', async () => {
    const fixture = TestBed.createComponent(About);
    fixture.detectChanges();
    const store = TestBed.inject(Store);
    store.dispatch(MovieActions.set({ movie: 'Heat' }));
    const v = await firstValueFrom(store.select(selectMovie));
    expect(v).toBe('Heat');
  });
});
