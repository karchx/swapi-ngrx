import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { getCharacters } from '@app/store/actions/character.actions';
import {
  errorSelector,
  isLoadingSelector,
  charactersSelector,
} from '@app/store/selectors/character.selectors';
import { Character } from '@interfaces/characters/character.interface';
import { AppState } from '@interfaces/app/app-state.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public error$: Observable<string | null>;
  public characters$: Observable<Character[]>;

  constructor(private store: Store<AppState>, private router: Router) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.characters$ = this.store.pipe(select(charactersSelector));
  }

  ngOnInit(): void {
    const { charactersUrls } = window.history.state;
    console.log('charactersUrls', charactersUrls);
    this.store.dispatch(getCharacters());
  }
}
