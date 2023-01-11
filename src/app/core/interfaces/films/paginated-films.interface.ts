import { Film } from '@interfaces/films/film.interface';

export interface PaginatedFilms {
  count: number;
  next: string | null;
  previous: string | null;
  results: Film[];
}
