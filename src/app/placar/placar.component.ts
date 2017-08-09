import { Component, OnInit } from '@angular/core';

import { TabuleiroService } from './../tabuleiro/tabuleiro.service';

@Component({
  selector: 'app-placar',
  templateUrl: './placar.component.html',
  styleUrls: ['./placar.component.css']
})
export class PlacarComponent implements OnInit {

  // V1 = this.dado.vitoriasJogador1;
  V1 = this.dado.vitoriasJogador1;
  V2 = this.dado.vitoriasJogador2;

  constructor(private dado: TabuleiroService) { }

  ngOnInit() {
  }

}
