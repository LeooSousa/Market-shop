import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
import { Frete } from '../Frete';
import { FreteService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Lista de Mercados',
      url: '/mercados',
      icon: 'list'
    },
    {
      title: 'Logar',
      url: '/logar',
      icon: 'contact'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'contact'
    }

  ];
  frete: any;
  cep: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _freteService: FreteService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  CalcularFrete(): void {
    this._freteService.getFrete(this.cep)
        .subscribe((data: Frete) => this.frete = data,
        error => console.log(error));                                                                            
  }
  Cep(cep: any) {
    throw new Error("Method not implemented.");
  }
}
