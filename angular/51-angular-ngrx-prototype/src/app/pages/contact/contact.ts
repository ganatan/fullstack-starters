import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { selectMovie } from '../../state/movie/movie.selectors';
import * as MovieActions from '../../state/movie/movie.actions';

@Component({
  selector: 'app-contact',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './contact.html'
})
export class Contact {
  private store = inject(Store);
  movie$ = this.store.select(selectMovie);
  onMovie(v: string) { this.store.dispatch(MovieActions.set({ movie: v })); }
}
