import { Component, OnInit } from '@angular/core';

import {ElementRef,Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tabuleiro',
  templateUrl: './tabuleiro.component.html',
  styleUrls: ['./tabuleiro.component.css']
})
export class TabuleiroComponent implements OnInit {

@ViewChild('tabuleiro') tabuleiro: ElementRef;

  @ViewChild('IC1') cC1: ElementRef;
  @ViewChild('IC2') cC2: ElementRef;
  @ViewChild('IC3') cC3: ElementRef;

  @ViewChild('IC4') cC4: ElementRef;
  @ViewChild('IC5') cC5: ElementRef;
  @ViewChild('IC6') cC6: ElementRef;

  @ViewChild('IC7') cC7: ElementRef;
  @ViewChild('IC8') cC8: ElementRef;
  @ViewChild('IC9') cC9: ElementRef;

NumeroDeJogadas: number = 0;
txtC1: string = '';
txtC2: string = '';
txtC3: string = '';

txtC4: string = '';
txtC5: string = '';
txtC6: string = '';

txtC7: string = '';
txtC8: string = '';
txtC9: string = '';

  C1(){
    this.txtC1 = this.verificaJogador();
    console.log(this.NumeroDeJogadas);
    this.NumeroDeJogadas++;
    this.verificaVencedor();
  }
  C2(){
    this.txtC2 = this.verificaJogador();
    console.log(this.NumeroDeJogadas);
    this.NumeroDeJogadas++;
    this.verificaVencedor();
  }
  C3(){
    this.txtC3 = this.verificaJogador();
    console.log(this.NumeroDeJogadas);
    this.NumeroDeJogadas++;
    this.verificaVencedor();
  }
  C4(){
    this.txtC4 = this.verificaJogador();
    console.log(this.NumeroDeJogadas);
    this.NumeroDeJogadas++;
    this.verificaVencedor();
  }
  C5(){
    this.txtC5 = this.verificaJogador();
    console.log(this.NumeroDeJogadas);
    this.NumeroDeJogadas++;
    this.verificaVencedor();
  }
  C6(){
    this.txtC6 = this.verificaJogador();
    console.log(this.NumeroDeJogadas);
    this.NumeroDeJogadas++;
    this.verificaVencedor();
  }
  C7(){
    this.txtC7 = this.verificaJogador();
    console.log(this.NumeroDeJogadas);
    this.NumeroDeJogadas++;
    this.verificaVencedor();
  }
  C8(){
    this.txtC8 = this.verificaJogador();
    console.log(this.NumeroDeJogadas);
    this.NumeroDeJogadas++;
    this.verificaVencedor();
  }
  C9(){
    this.txtC9 = this.verificaJogador();
    console.log(this.NumeroDeJogadas);
    this.NumeroDeJogadas++;
    this.verificaVencedor();
  }


  verificaJogador(){
    if(this.NumeroDeJogadas % 2 == 0){
      return "X"
    } else if(this.NumeroDeJogadas % 2 == 1){
      return "O"
    }
  }
  verificaVencedor(){

        if(this.txtC1 == "X" && this.txtC2 == "X" && this.txtC3 == "X" || this.txtC1 == "O" && this.txtC2 == "O" && this.txtC3 == "O"){
          this.tabuleiro.nativeElement.className = "bloqueiaClick";
          this.cC1.nativeElement.className = "ativo";
          this.cC2.nativeElement.className = "ativo";
          this.cC3.nativeElement.className = "ativo";
          if(this.txtC1 == "X") {
            console.log("Fim de Jogo | X venceu");
          } else if(this.txtC1 == "O"){
            console.log("Fim de Jogo | O venceu");
          }
         this.reset();
       }

       else if(this.txtC4 == "X" && this.txtC5 == "X" && this.txtC6 == "X" || this.txtC4 == "O" && this.txtC5 == "O" && this.txtC6 == "O"){
         this.tabuleiro.nativeElement.className = "bloqueiaClick";
         this.cC4.nativeElement.className = "ativo";
         this.cC5.nativeElement.className = "ativo";
         this.cC6.nativeElement.className = "ativo";
         if(this.txtC4 == "X") {
           console.log("Fim de Jogo | X venceu");
         } else if(this.txtC4 == "O"){
           console.log("Fim de Jogo | O venceu");
         }
        this.reset();
      }

      else if(this.txtC7 == "X" && this.txtC8 == "X" && this.txtC9 == "X" || this.txtC7 == "O" && this.txtC8 == "O" && this.txtC9 == "O"){
        this.tabuleiro.nativeElement.className = "bloqueiaClick";
        this.cC7.nativeElement.className = "ativo";
        this.cC8.nativeElement.className = "ativo";
        this.cC9.nativeElement.className = "ativo";
        if(this.txtC7 == "X") {
          console.log("Fim de Jogo | X venceu");
        } else if(this.txtC7 == "O"){
          console.log("Fim de Jogo | O venceu");
        }
       this.reset();
     }

       else if(this.txtC1 == "X" && this.txtC4 == "X" && this.txtC7 == "X" || this.txtC1 == "O" && this.txtC4 == "O" && this.txtC7 == "O") {
         this.tabuleiro.nativeElement.className = "bloqueiaClick";
         this.cC1.nativeElement.className = "ativo";
         this.cC4.nativeElement.className = "ativo";
         this.cC7.nativeElement.className = "ativo";
         if(this.txtC1 == "X") {
           console.log("Fim de Jogo | X venceu");
         } else if(this.txtC1 == "O"){
           console.log("Fim de Jogo | O venceu");
         }
       this.reset();
      }

      else if(this.txtC2 == "X" && this.txtC5 == "X" && this.txtC8 == "X" || this.txtC2 == "O" && this.txtC5 == "O" && this.txtC8 == "O") {
        this.tabuleiro.nativeElement.className = "bloqueiaClick";
        this.cC2.nativeElement.className = "ativo";
        this.cC5.nativeElement.className = "ativo";
        this.cC8.nativeElement.className = "ativo";
        if(this.txtC2 == "X") {
          console.log("Fim de Jogo | X venceu");
        } else if(this.txtC2 == "O"){
          console.log("Fim de Jogo | O venceu");
        }
      this.reset();
      }

      else if(this.txtC3 == "X" && this.txtC6 == "X" && this.txtC9 == "X" || this.txtC3 == "O" && this.txtC6 == "O" && this.txtC9 == "O") {
        this.tabuleiro.nativeElement.className = "bloqueiaClick";
        this.cC3.nativeElement.className = "ativo";
        this.cC6.nativeElement.className = "ativo";
        this.cC9.nativeElement.className = "ativo";
        if(this.txtC3 == "X") {
          console.log("Fim de Jogo | X venceu");
        } else if(this.txtC3 == "O"){
          console.log("Fim de Jogo | O venceu");
        }
      this.reset();
      }

      else if(this.txtC1 == "X" && this.txtC5 == "X" && this.txtC9 == "X" || this.txtC1 == "O" && this.txtC5 == "O" && this.txtC9 == "O") {
        this.tabuleiro.nativeElement.className = "bloqueiaClick";
        this.cC1.nativeElement.className = "ativo";
        this.cC5.nativeElement.className = "ativo";
        this.cC9.nativeElement.className = "ativo";
        if(this.txtC1 == "X") {
          console.log("Fim de Jogo | X venceu");
        } else if(this.txtC1 == "O"){
          console.log("Fim de Jogo | O venceu");
        }
      this.reset();
      }

      else if(this.txtC3 == "X" && this.txtC5 == "X" && this.txtC7 == "X" || this.txtC3 == "O" && this.txtC5 == "O" && this.txtC7 == "O") {
        this.tabuleiro.nativeElement.className = "bloqueiaClick";
        this.cC3.nativeElement.className = "ativo";
        this.cC5.nativeElement.className = "ativo";
        this.cC7.nativeElement.className = "ativo";
        if(this.txtC3 == "X") {
          console.log("Fim de Jogo | X venceu");
        } else if(this.txtC3 == "O"){
          console.log("Fim de Jogo | O venceu");
        }
      this.reset();
      }}

  reset(){



    setTimeout(() => this.txtC1 = '', 2000);
    setTimeout(() => this.txtC2 = '', 2000);
    setTimeout(() => this.txtC3 = '', 2000);

    setTimeout(() => this.txtC4 = '', 2000);
    setTimeout(() => this.txtC5 = '', 2000);
    setTimeout(() => this.txtC6 = '', 2000);

    setTimeout(() => this.txtC7 = '', 2000);
    setTimeout(() => this.txtC8 = '', 2000);
    setTimeout(() => this.txtC9 = '', 2000);

    setTimeout(() => this.tabuleiro.nativeElement.className = "", 2500);
    setTimeout(() => this.cC1.nativeElement.className = "", 2500);
    setTimeout(() => this.cC2.nativeElement.className = "", 2500);
    setTimeout(() => this.cC3.nativeElement.className = "", 2500);
    setTimeout(() => this.cC4.nativeElement.className = "", 2500);
    setTimeout(() => this.cC5.nativeElement.className = "", 2500);
    setTimeout(() => this.cC6.nativeElement.className = "", 2500);
    setTimeout(() => this.cC7.nativeElement.className = "", 2500);
    setTimeout(() => this.cC8.nativeElement.className = "", 2500);
    setTimeout(() => this.cC9.nativeElement.className = "", 2500);



    this.NumeroDeJogadas = 0;
  }

  constructor() {

  }

  ngOnInit() {
  }

}
