import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-consumindo-api',
  templateUrl: './consumindo-api.component.html',
  styleUrls: ['./consumindo-api.component.css']
})
export class ConsumindoApiComponent implements OnInit {

  pokemon!:string

  constructor(
    private service:PokemonService
  ) { }

  ngOnInit(): void {
  }

  buscar():void {
    this.service.quemEhEssePokemon(this.pokemon)
    .pipe(
      catchError(
        (error)=>{
          let lista = [
    {
        "ability": {
            "name": "overgrow",
            "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
    },
    {
        "ability": {
            "name": "chlorophyll",
            "url": "https://pokeapi.co/api/v2/ability/34/"
        },
        "is_hidden": true,
        "slot": 3
    }
]
          return of(lista)
        }
      )
    ).subscribe((response)=>{
      console.log("Deu certo", response);

    })
  }

  types():void{
    this.service.quaisOsTipos()
    .pipe(
      catchError((error)=>{

        return of(['Merendar', 'Teste'])

      })
    ).subscribe((response)=>{
      console.log("Funcionou.."), response;

    })
  }

}
