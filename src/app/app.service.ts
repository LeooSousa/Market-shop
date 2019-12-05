import { Injectable } from '@angular/core';
import { Frete } from '../Frete';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class FreteService {
    private _Url = 'http://localhost:3000/produtos';

    constructor(private _http: Http) { }
    
    getFrete(cep: string): Observable<Frete> {
        return this._http.get(this._Url)
            .map((response: Response) => <Frete>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}