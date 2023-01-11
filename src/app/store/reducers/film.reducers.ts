import { createReducer, on } from '@ngrx/store';

import { FilmState } from '@interfaces/films/film-state.interface';
import {
  getFilms,
  getFilmsSuccess,
  getFilmsFailure,
} from '../actions/film.actions';

export const initialState: FilmState = {
  isLoading: false,
  films: [],
  error: null,
};

export const filmsReducer = createReducer(
  initialState,
  on(getFilms, (state) => ({ ...state, isLoading: true })),
  on(getFilmsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    films: action.films,
  })),
  on(getFilmsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
