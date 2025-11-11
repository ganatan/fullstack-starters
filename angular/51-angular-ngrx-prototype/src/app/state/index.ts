import { ActionReducerMap } from '@ngrx/store';
import { movieReducer, MovieState } from './movie/movie.reducer';

export interface AppState {
  movie: MovieState;
}

export const reducers: ActionReducerMap<AppState> = {
  movie: movieReducer
};
