import { Component, OnInit } from '@angular/core';
import { ServeDataService } from '../../services/servedata.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    LANG: any;  // Constantes para el lenguaje seleccionado

    // Inyecta el servicio ServeDataService en el constructor
    constructor(private serveDataService: ServeDataService) { }

    ngOnInit(): void {
        // Obtener las constantes del lenguaje
        this.LANG = this.serveDataService.get_languageConstants();
        
        // Suscribirse al Observable del ServeDataService para detectar cambios de idioma
        this.serveDataService.get_Language().subscribe((language: string) => {
        this.LANG = this.serveDataService.get_languageConstants();
        });
    }
}
