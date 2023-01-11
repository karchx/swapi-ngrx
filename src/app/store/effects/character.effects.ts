import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CharactersService } from '@services/characters/characters.service';
import { PaginatedCharacters } from '@interfaces/characters/paginated-characters.interface';
import {
  getCharacters,
  getCharactersSuccess,
  getCharactersFailure,
} from '../actions/character.actions';

@Injectable()
export class CharactersEffects {
  constructor(
    private actions$: Actions,
    private charactersService: CharactersService
  ) {}

  getCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCharacters),
      mergeMap(() => {
        return this.charactersService.getCharacters().pipe(
          map(({ results: characters }: PaginatedCharacters) =>
            getCharactersSuccess({ characters })
          ),
          catchError((error) =>
            of(getCharactersFailure({ error: error.message }))
          )
        );
      })
    )
  );
}
