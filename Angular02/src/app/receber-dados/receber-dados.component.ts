import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receber-dados',
  templateUrl: './receber-dados.component.html',
  styleUrls: ['./receber-dados.component.css']
})
export class ReceberDadosComponent implements OnInit {

  dado1!:string | null
  dado2!:number
  dado3!:string | null

  constructor(
    private rout:ActivatedRoute //Essa classe vê as rotas ativas
  ) { }

  ngOnInit(): void {
    console.log("Recebi", this.rout.snapshot.paramMap); // Todos os dados que foram passado na rota
    console.log("Nome:", this.rout.snapshot.paramMap.get("info1"));
    console.log("Idade:", this.rout.snapshot.paramMap.get("dado2"));
    console.log("Cidade:", this.rout.snapshot.paramMap.get("teste"));
    this.dado1 = this.rout.snapshot.paramMap.get("info1")
    this.dado2 = Number(this.rout.snapshot.paramMap.get("dado2"))
    this.dado3 = this.rout.snapshot.paramMap.get("teste")
    
    
  }

}
