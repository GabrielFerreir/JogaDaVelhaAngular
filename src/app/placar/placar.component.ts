import { Component, OnInit } from '@angular/core';
import {ElementRef,Renderer2, ViewChild} from '@angular/core';

import { TabuleiroService } from './../tabuleiro/tabuleiro.service';
import { PlacarService } from './placar.service';

@Component({
  selector: 'app-placar',
  templateUrl: './placar.component.html',
  styleUrls: ['./placar.component.css']
})
export class PlacarComponent implements OnInit {
  @ViewChild('placar1') p1: ElementRef;
  @ViewChild('placar2') p2: ElementRef;


  constructor(private dado: TabuleiroService, private dado2: PlacarService) {

  }

  ngOnInit() {
    this.dado2.setPlacar1(this.p1);
    this.dado2.setPlacar2(this.p2);

  }

}
