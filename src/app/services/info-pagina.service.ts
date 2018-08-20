import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  cargada = false;
  datos : any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();

   }

   private cargarInfo(){

    this.http.get('assets/data/data.json')
    .subscribe( (resp : any) => {
      this.cargada = true;
      this.datos = resp;

      console.log('Respuesta desde el servicio ',resp);
      
    });

   }

}
