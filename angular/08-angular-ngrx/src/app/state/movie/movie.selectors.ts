import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from './movie.reducer';

export const selectMovieFeature = createFeatureSelector<MovieState>('movie');
export const selectMovie = createSelector(selectMovieFeature, s => s.value);
