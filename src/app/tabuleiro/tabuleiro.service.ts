import { Injectable } from '@angular/core';

@Injectable()
export class TabuleiroService {

  vitoriasJogador1: number = 0;
  vitoriasJogador2: number = 0;
  EAVezDoJogador1: boolean = true;
  mensagem:string;



  constructor() { }

}
