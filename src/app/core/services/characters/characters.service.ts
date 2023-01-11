import { Injectable } from '@angular/core';
import {
  Observable,
  map,
  of,
  concatMap,
  toArray,
  tap,
  forkJoin,
  expand,
  reduce,
  EMPTY,
} from 'rxjs';

import { ApiService } from '@services/api.service';
import { PaginatedCharacters } from '@interfaces/characters/paginated-characters.interface';
import { Character } from '@interfaces/characters/character.interface';
import { Film } from '@interfaces/films/film.interface';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  private baseUrl = 'people';
  private CHARACTER_HTTP_URL_LENGTH = `https://swapi.dev/api/people/`.length;

  constructor(private apiService: ApiService) {}

  // films$ = (character: Character) =>
  //   of(character.films).pipe(
  //     concatMap((i: any[]) => i),
  //     concatMap((i: string) => this.apiService.getDirectUrl<Film>(i)),
  //     toArray<Film>(),
  //     tap((i) => (character.films = i)),
  //     map(() => character)
  //   );

  public getCharacters(): Observable<PaginatedCharacters> {
    return this.apiService.get<PaginatedCharacters>(this.baseUrl);
  }

  public getCharacterById(characterId: number): Observable<Character> {
    const route = `${this.baseUrl}/${characterId}`;
    return this.apiService.get<Character>(route);
  }

  // public getCharacterId(characterUrl: string): number {
  //   return parseInt(
  //     characterUrl.substring(
  //       this.CHARACTER_HTTP_URL_LENGTH,
  //       characterUrl.length - 1
  //     ),
  //     10
  //   );
  // }

  // public getCharactersByFilm(film: Film) {
  //   return forkJoin(
  //     film.characters.map((url: any) => {
  //       return this.apiService.getDirectUrl<Character>(url).pipe(
  //         map((character) => {
  //           return character;
  //         })
  //       );
  //     })
  //   );
  // }

  // public getCharactersByUrl(charactersUrls: string[]): Observable<Character[]> {
  //   let characters: Character[] = [];

  //   charactersUrls.forEach((url) => {
  //     this.apiService.getDirectUrl<Character>(url).pipe(
  //       concatMap((result) =>
  //         this.films$(result).pipe(
  //           map<any, Character>(() => <Character>result),
  //           tap((result) => characters.push(result))
  //         )
  //       )
  //     );
  //   });

  //   return of(characters);
  // }
}
