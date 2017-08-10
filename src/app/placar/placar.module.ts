import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacarComponent } from './placar.component';
import { PlacarService } from './placar.service';
import { TabuleiroService } from './../tabuleiro/tabuleiro.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlacarComponent],
  exports: [PlacarComponent],
  providers: [ PlacarService, TabuleiroService ]
})
export class PlacarModule { }
