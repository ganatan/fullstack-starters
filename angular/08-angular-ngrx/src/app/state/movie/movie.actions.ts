import { createAction, props } from '@ngrx/store';

export const set = createAction('[Movie] Set', props<{ movie: string }>());
export const reset = createAction('[Movie] Reset');
