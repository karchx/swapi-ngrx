import { createReducer, on } from '@ngrx/store';

import { CharacterState } from '@interfaces/characters/character-state.interface';
import {
  getCharacters,
  getCharactersSuccess,
  getCharactersFailure,
  setCharacters,
} from '../actions/character.actions';

export const initialState: CharacterState = {
  isLoading: false,
  characters: [],
  charactersUrls: [],
  error: null,
};

export const charactersReducer = createReducer(
  initialState,
  on(getCharacters, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getCharactersSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    characters: action.characters,
  })),
  on(getCharactersFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(setCharacters, (state, action) => ({
    ...state,
    isLoading: false,
    charactersUrls: action.characters,
  }))
);
