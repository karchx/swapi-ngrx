import { createAction, props } from '@ngrx/store';
import { Character } from '@interfaces/characters/character.interface';

// Constants
const GET_CHARACTERS = '[Characters] Get Characters';
const GET_CHARACTERS_SUCCESS = '[Characters] Get Characters Success';
const GET_CHARACTERS_FAILURE = '[Characters] Get Characters Failure';
const SET_CHARACTERS = '[Characters] Set Characters';

export const getCharacters = createAction(GET_CHARACTERS);
export const getCharactersSuccess = createAction(
  GET_CHARACTERS_SUCCESS,
  props<{ characters: Character[] }>()
);
export const getCharactersFailure = createAction(
  GET_CHARACTERS_FAILURE,
  props<{ error: string }>()
);

export const setCharacters = createAction(SET_CHARACTERS, props<{ characters: string[] }>())
