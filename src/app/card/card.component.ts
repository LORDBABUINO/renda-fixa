import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  classe = 'Fundo de Renda Fixa'
  perfil = 'agressivo'
  nome = 'bradesco fi rf idka pré 2'
  cnpj = "24.022.566/0001-82"
  aplicacao_minima = 10000
  constructor() { }

  ngOnInit() {
  }

}
