import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabuleiroComponent } from './tabuleiro.component';
import { TabuleiroService } from './tabuleiro.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabuleiroComponent],
  exports: [TabuleiroComponent],
  providers: [TabuleiroService]
})
export class TabuleiroModule {

 }
