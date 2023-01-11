import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from '@components/header/header.component';
import { FilmCardComponent } from '@components/film-card/film-card.component';
import { CharacterCardComponent } from '@components/character-card/character-card.component';
import { LoaderComponent } from '@components/loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FilmCardComponent,
    LoaderComponent,
    CharacterCardComponent,
    FilmCardComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FilmCardComponent,
    LoaderComponent,
    CharacterCardComponent,
  ],
})
export class SharedModule {}
