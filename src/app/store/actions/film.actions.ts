import { createAction, props } from '@ngrx/store';
import { Film } from '@interfaces/films/film.interface';

// Constants
const GET_FILMS = '[Films] Get Films';
const GET_FILMS_SUCCESS = '[Films] Get Films Success';
const GET_FILMS_FAILURE = '[Films] Get Films Failure';

export const getFilms = createAction(GET_FILMS);
export const getFilmsSuccess = createAction(
  GET_FILMS_SUCCESS,
  props<{ films: Film[] }>()
);
export const getFilmsFailure = createAction(
  GET_FILMS_FAILURE,
  props<{ error: string }>()
);
