import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  links!: Array<any>;

  constructor() {}

  ngOnInit(): void {
    this.links = new Array();
    this.links.push({
      rota: 'vaiPagina',
      textContent: 'Tabela',
      cor: 'far fa-circle nav-icon text-info',
    });
    this.links.push({
      rota: 'outro',
      textContent: 'Outro',
      cor: 'far fa-circle nav-icon text-warning',
    });
    this.links.push({
      rota: 'property',
      textContent: 'Property',
      cor: 'far fa-circle nav-icon text-danger',
    });
    this.links.push({
      rota: 'event',
      textContent: 'Event',
      cor: 'far fa-circle nav-icon text-info',
    });
    this.links.push({
      rota: 'maoDupla',
      textContent: 'Mão Dupla',
      cor: 'far fa-circle nav-icon text-danger',
    });
    this.links.push({
      rota: ['receber', 'Alexsandro', 24, 'Lages'],
      textContent: 'Receber',
      cor: 'far fa-circle nav-icon text-info',
    });
    this.links.push({
      rota: 'enviar',
      textContent: 'Enviar',
      cor: 'far fa-circle nav-icon text-warning',
      // hexa: "FF0000"
    });
    this.links.push({
      rota: 'diretivaIf',
      textContent: 'Diretiva If',
      cor: 'far fa-circle nav-icon text-danger',
    });
    this.links.push({
      rota: 'diretivaFor/:lista',
      textContent: 'Diretiva For',
      cor: 'far fa-circle nav-icon text-info',
    });
    this.links.push({
      rota: 'consumindoApi',
      textContent: 'Consumindo API',
      cor: 'far fa-circle nav-icon text-danger',
    });
  }
}
