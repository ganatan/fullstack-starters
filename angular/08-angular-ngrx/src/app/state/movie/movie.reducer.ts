import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './movie.actions';

export interface MovieState {
  value: string;
}

export const initialState: MovieState = {
  value: 'Inception'
};

export const movieReducer = createReducer(
  initialState,
  on(MovieActions.set, (s, { movie }) => ({ ...s, value: movie })),
  on(MovieActions.reset, () => initialState)
);
