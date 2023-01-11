import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { FilmsService } from '@services/films/films.service';
import { PaginatedFilms } from '@interfaces/films/paginated-films.interface';
import {
  getFilms,
  getFilmsSuccess,
  getFilmsFailure,
} from '../actions/film.actions';

@Injectable()
export class FilmsEffects {
  constructor(private actions$: Actions, private filmsService: FilmsService) {}

  getFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFilms),
      mergeMap(() => {
        return this.filmsService.getFilms().pipe(
          map(({ results: films }: PaginatedFilms) =>
            getFilmsSuccess({ films })
          ),
          catchError((error) => of(getFilmsFailure({ error: error.message })))
        );
      })
    )
  );
}
