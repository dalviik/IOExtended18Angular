import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../services/info-pagina.service';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor( public _servicio: InfoPaginaService ) { }

  ngOnInit() {
  }

}
