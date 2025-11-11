import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { selectMovie } from '../../state/movie/movie.selectors';
import * as MovieActions from '../../state/movie/movie.actions';

@Component({
  selector: 'app-about',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './about.html'
})
export class About {
  private store = inject(Store);
  movie$ = this.store.select(selectMovie);
  onMovie(v: string) { this.store.dispatch(MovieActions.set({ movie: v })); }
}
