import { Injectable } from '@angular/core';
import {
  concatMap,
  map,
  Observable,
  of,
  toArray,
  tap,
  BehaviorSubject,
  from,
  scan,
  forkJoin,
} from 'rxjs';

import { ApiService } from '@services/api.service';
import { PaginatedFilms } from '@interfaces/films/paginated-films.interface';
import { Film } from '@interfaces/films/film.interface';

@Injectable({ providedIn: 'root' })
export class FilmsService {
  private baseUrl = 'films';

  constructor(private apiService: ApiService) {}

  public getFilms(): Observable<PaginatedFilms> {
    return this.apiService.get<PaginatedFilms>(this.baseUrl);
  }

  public getFilmById(filmId: number): Observable<Film> {
    const route = `${this.baseUrl}/${filmId}`;
    return this.apiService.get<Film>(route);
  }
}
