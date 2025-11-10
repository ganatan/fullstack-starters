import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { selectMovie } from '../../state/movie/movie.selectors';
import * as MovieActions from '../../state/movie/movie.actions';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './home.html'
})
export class Home {
  private store = inject(Store);
  movie$ = this.store.select(selectMovie);
  onMovie(v: string) { this.store.dispatch(MovieActions.set({ movie: v })); }
  reset() { this.store.dispatch(MovieActions.reset()); }
}
