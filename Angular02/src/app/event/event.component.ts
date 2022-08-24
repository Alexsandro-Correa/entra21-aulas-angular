import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  
  resultado!: number
  tamanho:number = 100

  constructor() { }

  ngOnInit(): void {
  }

  minhaFunc() {
    alert('Uma mensagem qualquer')
  }

  somar() {
    this.resultado = (1 + 5)
  }

  subtrair(a: number, b: number) {
    this.resultado = (a - b)
  }

  dividir(a: number, b: number) {
    this.resultado = (a / b)
  }

  multiplicar() {
    let a: number = Number(prompt("Informe o primeiro número"))
    let b: number = Number(prompt("Informe o primeiro número"))
    this.resultado = (a * b)
  }

  aumentar(){
    this.tamanho += 10
  }

  diminuir(){
    this.tamanho -= 5
  }
}
