import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabuleiroComponent } from './tabuleiro/tabuleiro.component';

@NgModule({
  declarations: [
    AppComponent,
    TabuleiroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
