import { Component, OnInit } from '@angular/core';
import { Mercado } from '../model/models';
import { MercadoService } from '../services/mercado.service';

@Component({
  selector: 'app-mercados',
  templateUrl: './mercados.page.html',
  styleUrls: ['./mercados.page.scss'],
})
export class MercadosPage implements OnInit {

  mercados: Mercado[];
  erro: string;

  constructor(
    private mercadoService: MercadoService,
  ) { }

  ngOnInit() {
    this.getMercados();
  }

  getMercados() {
    this.mercadoService.getMercados().subscribe((mercados: Mercado[]) => {
      this.mercados = mercados;
    }, () => {
      this.erro = 'Acesso não autorizado';
    });
  }

}
