import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacarComponent } from './placar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlacarComponent],
  exports: [PlacarComponent],
  providers: []
})
export class PlacarModule { }
