import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../services/info-pagina.service';
@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {
  
  constructor( public _servicio: InfoPaginaService ) { }
  
  fullSpeakers: boolean = false;
  
  ngOnInit() {



  }

  
  
}
