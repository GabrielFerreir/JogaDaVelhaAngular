import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlacarComponent } from './placar/placar.component';
import { TabuleiroModule } from './tabuleiro/tabuleiro.module';

@NgModule({
  declarations: [
    AppComponent,
    PlacarComponent
  ],
  imports: [
    BrowserModule,
    TabuleiroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
