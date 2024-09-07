import { Component, OnInit } from '@angular/core';
import { ServeDataService } from '../../services/servedata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  LANG: any;  // Constantes para el lenguaje seleccionado

  constructor() { }

  ngOnInit(): void {
    // Obtener las constantes del lenguaje
    this.LANG = ServeDataService.get_languageConstants();
    
    // Suscribirse al Observable del ServeDataService para detectar cambios de idioma
    ServeDataService.get_Language().subscribe((language: string) => {
      this.LANG = ServeDataService.get_languageConstants();
    });
  }
}
