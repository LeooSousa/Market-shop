import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mercado } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class MercadoService {
  

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
  ) { }


  // Busca todos os produtos, autenticando via Token.
  // TODO: Este cara está aqui apenas para teste. Crie um provedor especifico para
  // produtos.
  getMercados(): Observable<Mercado[]> {
    const header = 'Authorization: Token ' + this.loginService.getCookieToken();
    const headers = new HttpHeaders(header);
    return this.http.get<Mercado[]>(environment.baseUrl + 'api/estabelecimento/', { headers });
  }

}