import { Injectable } from '@angular/core';
import { PlacarComponent } from './../placar/placar.component';

@Injectable()
export class TabuleiroService {

  vitoriasJogador1: number = 0;
  vitoriasJogador2: number = 0;
  EAVezDoJogador1: boolean = false;
  mensagem:string;

  // borderPlacar(){
  //   this.placar.placar1.nativeElement.className = "textFields div borderAtive";
  //   this.placar.placar2.nativeElement.className = "textFields div borderAtive";
  // }



  constructor() { }

}
