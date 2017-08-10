import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlacarComponent } from './placar/placar.component';
import { TabuleiroModule } from './tabuleiro/tabuleiro.module';
import { PlacarModule } from './placar/placar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabuleiroModule,
    PlacarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
