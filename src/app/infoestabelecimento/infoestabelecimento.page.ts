import { Component, OnInit } from '@angular/core';
import { Mercado } from '../model/models';
import { MercadoService } from '../services/mercado.service';

@Component({
  selector: 'app-infoestabelecimento',
  templateUrl: './infoestabelecimento.page.html',
  styleUrls: ['./infoestabelecimento.page.scss'],
})
export class InfoestabelecimentoPage implements OnInit {
  mercadoService: any;
  mercados: any[];
  erro: string;

  constructor() { }

  ngOnInit() {
    this.getInfoMercados();
  }
  getInfoMercados() {
    this.mercadoService.getMercados().subscribe((mercados: Mercado[]) => {
      this.mercados = mercados;
    }, () => {
      this.erro = 'Acesso não autorizado';
    });
  }
}
