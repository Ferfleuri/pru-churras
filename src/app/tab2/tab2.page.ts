import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  valor = 1;

  pont1 = 1;
  pont3 = 3;
  pont6 = 6;
  pont9 = 9;
  pont12 = 12;

  prontotime1 = 0;
  pontotime2 = 0;

  constructor() { }

  ponto1() {
    this.valor = this.pont1;
  }

  ponto3() {
    this.valor = this.pont3;
  }

  ponto6() {
    this.valor = this.pont6;
  }

  ponto9() {
    this.valor = this.pont9;
  }

  ponto12() {
    this.valor = this.pont12;
  }
}
