import { Injectable } from '@angular/core';

import {ElementRef,Renderer2, ViewChild} from '@angular/core';
import { TabuleiroService } from './../tabuleiro/tabuleiro.service';

let placar1;
let placar2;

@Injectable()
export class PlacarService {


  VezBorda(){
    if(!this.tabuleiroService.EAVezDoJogador1){
      if(placar1) {
        placar1.nativeElement.className = "textFields div borderAtive";
        placar2.nativeElement.className = "textFields div";
      } else{
        alert("AAA")
      }
    }
      else if(this.tabuleiroService.EAVezDoJogador1) {
        placar2.nativeElement.className = "textFields div borderAtive";
        placar1.nativeElement.className = "textFields div";
      }
  }

  setPlacar1(valor) {
    console.log('Pegou valo 1 - ' + valor);
    placar1 = valor;
  }

  getPlacar1() {
    console.log('recuperou valor 1- ' + placar1);
    return placar1;
  }
  setPlacar2(valor) {
    console.log('Pegou valor 2 - ' + valor);
    placar2 = valor;
  }

  getPlacar2() {
    console.log('recuperou valor 2 - ' + placar2);
    return placar2;
  }



  constructor(private tabuleiroService: TabuleiroService) {


   }

}
