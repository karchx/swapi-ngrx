import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'films',
    loadChildren: () =>
      import('./modules/films/films.module').then((m) => m.FilmsModule),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./modules/characters/characters.module').then(
        (m) => m.CharactersModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'films',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
