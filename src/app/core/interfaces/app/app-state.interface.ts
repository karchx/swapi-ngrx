import { FilmState } from '../films/film-state.interface';
import { CharacterState } from '../characters/character-state.interface';

export interface AppState {
  films: FilmState;
  characters: CharacterState;
}
