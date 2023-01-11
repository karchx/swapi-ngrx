import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { environment } from 'src/environments/environment';
import { filmsReducer } from '@app/store/reducers/film.reducers';
import { charactersReducer } from '../store/reducers/character.reducers';
import { FilmsEffects } from '../store/effects/film.effects';
import { CharactersEffects } from '../store/effects/character.effects';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,

    StoreModule.forRoot({
      films: filmsReducer,
      characters: charactersReducer,
    }),

    EffectsModule.forRoot([FilmsEffects, CharactersEffects]),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
