import { Film } from './film.interface';

export interface FilmState {
  isLoading: boolean;
  films: Film[];
  error: string | null;
}
