import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from '@interfaces/app/app-state.interface';
import {setCharacters} from '@app/store/actions/character.actions';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss'],
})
export class FilmCardComponent {
  @Input() title: string = '';
  @Input() episode: number = 4;
  @Input() director: string = 'George Lucas';
  @Input() characters: string[] = [];

  constructor(private router: Router, private store: Store<AppState>) {}

  public goToViewCharacters() {
    // this.store.dispatch(getFilms());
    this.store.dispatch(setCharacters({ characters: this.characters }));
    this.router.navigateByUrl('/characters');
  }
}
