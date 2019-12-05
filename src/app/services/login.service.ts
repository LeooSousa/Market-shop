import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public cookieToken: string;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService) { }

  // Envia o usuário e senha que vem do formulário. Se as credenciais estiverem corretas
  // retorna um token válido.
  post(data: any) {
    return this.http.post(environment.baseUrl + 'token/', data);
  }

  // O controle de cookies pode ser responsabilidade 
  // de outro provedor.
  // Armazeza o token no cookie.
  setCookie(name: string, value: string) {
    this.cookieService.set(name, value);
  }

  // Recupera um token do cookie.
  getCookie(name: string) {
    return this.cookieService.get(name);
  }

  getCookieToken() {
    this.cookieToken = this.getCookie('token');
    return this.cookieToken;
  }

  clearCookie() {
    this.cookieService.deleteAll();
  }
}



