import { createSelector } from '@ngrx/store';
import { AppState } from '@interfaces/app/app-state.interface';

export const selectFeature = (state: AppState) => state.films;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const filmsSelector = createSelector(
  selectFeature,
  (state) => state.films
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
