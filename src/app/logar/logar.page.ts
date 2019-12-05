import { ActivatedRoute, Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  NavController,
  ToastController
} from '@ionic/angular';
import { AlertOptions, LoadingOptions, ToastOptions } from '@ionic/core';
import { AuthService } from '../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { reject } from 'q';
import { LoginService} from '../services/login.service'

@Component({
  selector: 'app-logar',
  templateUrl: './logar.page.html',
  styleUrls: ['./logar.page.scss'],
})
export class LogarPage  {

  formLogin: FormGroup;
  userId: string;
  email: string;
  token: string;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private navCtrl: NavController
  ) {
    this.createForm();
  }


  ionViewWillEnter() {
    this.createForm();
  }

  private createForm() {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.loginService.post(this.formLogin.value).subscribe((response: any) => {
      console.log('Resonse', response);
      this.loginService.setCookie('user_id', response.user_id);
      this.loginService.setCookie('email', response.email);
      this.loginService.setCookie('token', response.token);
      this.userData();
      this.irParaListagem();
    },
      (error) => {
        console.log(error.json);
        reject(error.json);
      });
  }

  userData() {
    this.email = this.loginService.getCookie('email');
    this.userId = this.loginService.getCookie('user_id');
    this.token = this.loginService.getCookie('token');
  }

  logout() {
    this.loginService.clearCookie();
  }

  irParaListagem(){
    this.navCtrl.navigateForward('/mercados');
  }
}