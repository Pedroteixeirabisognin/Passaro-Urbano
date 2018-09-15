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

    /*
     * getOfertas2()    
    public getOfertas2():Promise<Array<Oferta>> {
        return new Promise((resolve,reject)=>{
            console.log('Passou?');
            if (true) {
                setTimeout(()=>resolve(this.ofertas),3000)
            }else{
                reject({ codigo_erro: 404, mensagem_erro: 'Servidor não encontrado'})
            }
        }).then(
            (ofertas:Array<Oferta>)=>{
      
                console.log('primeiro then')
      
            return ofertas
        }).then((ofertas:Array<Oferta>)=>{
      
                console.log('segundo then')
      
            return new Promise((resolve2,reject2)=>{

                setTimeout(()=>{resolve2(ofertas)},3000)
            })
        }).then(
            (ofertas:Array<Oferta>)=>{
      
                console.log('terceiro then executado apos 3 segundos')
      
            return ofertas
        })
        
    }*/

}