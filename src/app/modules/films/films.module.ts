import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { IndexComponent } from './index/index.component';
import { FilmsRoutingModule } from './films-routing.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, SharedModule, FilmsRoutingModule],
})
export class FilmsModule {}
