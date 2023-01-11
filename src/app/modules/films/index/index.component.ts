import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { getFilms } from '@app/store/actions/film.actions';
import {
  errorSelector,
  isLoadingSelector,
  filmsSelector,
} from '@app/store/selectors/film.selectors';
import { Film } from '@interfaces/films/film.interface';
import { AppState } from '@interfaces/app/app-state.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public error$: Observable<string | null>;
  public films$: Observable<Film[]>;

  constructor(private store: Store<AppState>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.films$ = this.store.pipe(select(filmsSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(getFilms());
  }
}
