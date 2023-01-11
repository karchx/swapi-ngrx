import { Character } from './character.interface';

export interface CharacterState {
  isLoading: boolean;
  characters: Character[];
  charactersUrls: string[];
  error: string | null;
}
