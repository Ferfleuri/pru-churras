import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  valor = 1;


  pontotime1 = 0;
  pontotime2 = 0;

  vitoriatime1 = 0;
  vitoriatime2 = 0;

  constructor() { }

  pontoTime1() {
    this.valor = 1
  }

  pontoTime3() {
    this.valor = 3
  }

  pontoTime6() {
    this.valor = 6
  }

  pontoTime9() {
    this.valor = 9
  }

  pontoTime12() {
    this.valor = 12
  }

  somarPontos() {

    this.pontotime1 += this.valor
    this.valor = 1
    if (this.pontotime1 >= 13) {
      this.vitoriatime1 + 1
      this.pontotime1 = 0
      this.pontotime2 = 0
    }
  }

  subPontos() {

    this.valor = 1
    if (this.pontotime1 >= 1) {
      this.pontotime1 -= this.valor
    }
  }


  somarPontos2() {

    this.pontotime2 += this.valor
    this.valor = 1
    if (this.pontotime2 >= 13) {
      this.vitoriatime2 + 1
      this.pontotime1 = 0
      this.pontotime2 = 0
    }
  }

  subPontos2() {

    this.valor = 1
    if (this.pontotime2 >= 1) {
      this.pontotime2 -= this.valor
    }
  }


}
