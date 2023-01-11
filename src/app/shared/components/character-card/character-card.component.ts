import { Component, Input } from '@angular/core';
import { Film } from '@interfaces/films/film.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() name: string = '';
  @Input() eye_color: string = '';
  @Input() gender: string = '';
  @Input() films: string[] | Film[] = [];
}
