import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mao-dupla',
  templateUrl: './mao-dupla.component.html',
  styleUrls: ['./mao-dupla.component.css']
})
export class MaoDuplaComponent implements OnInit {

  numero1!:number
  numero2!:number
  resultado!:number
  curso:string = "Angular"

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => { // Função que executa algo com o tempo
      this.curso = "Merendar"
    }, 15000); // 15000 é o tempo, que é igual a 15 segundos.

  }

  somar(){
    this.resultado = this.numero1 + this.numero2
  }

}
