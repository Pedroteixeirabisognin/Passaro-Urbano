import { Oferta } from './shared/oferta.model';
import { promise } from 'protractor';
import { resolve } from 'path';
import { reject } from 'q';
import {Injectable} from '@angular/core';
import { Http } from '@angular/http';

//import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasService{

    constructor(private http: Http) {    }

    
    public getOfertas(): Promise<Array<Oferta>>{
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
        .toPromise()
        .then((resposta:any)=>resposta.json())
    }

    public getOfertasPorCategoria(categoria:string): Promise<Oferta[]> {
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta:any)=>resposta.json())
    }

}