import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoestabelecimentoPage } from './infoestabelecimento.page';

const routes: Routes = [
  {
    path: '',
    component: InfoestabelecimentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoestabelecimentoPage]
})
export class InfoestabelecimentoPageModule {}
