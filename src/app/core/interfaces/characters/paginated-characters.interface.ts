import { Character } from '@interfaces/characters/character.interface';

export interface PaginatedCharacters {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}
