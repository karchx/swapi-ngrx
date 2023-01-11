import { createSelector } from '@ngrx/store';
import { AppState } from '@interfaces/app/app-state.interface';

export const selectFeature = (state: AppState) => state.characters;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const charactersSelector = createSelector(
  selectFeature,
  (state) => state.characters
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
