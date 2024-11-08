import { Component, OnInit } from '@angular/core';
import { ServeDataService  } from '../../services/servedata.service';

@Component({
  selector   :  'app-header',
  templateUrl:  './header.component.html',
  styleUrls  : ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    LANG              : any                     ;                                    // Constantes para el lenguaje seleccionado
    languageOptions   : string[] = []           ;
    selectedLanguage  : string = ''             ;
    
    // Inyecta el servicio ServeDataService en el constructor
    constructor(private serveDataService: ServeDataService) { }

    ngOnInit(): void {
        // Suscribirse al Observable del ServeDataService para detectar cambios de idioma
        this.LANG = this.serveDataService.get_languageConstants();
        this.serveDataService.get_Language().subscribe((language: string) => {
            this.LANG = this.serveDataService.get_languageConstants();
        });
        // Inicializo el lenguaje
        this.serveDataService.set_language("es");
        // Cargo las opciones de lenguajes disponibles 
        // Cargo las opciones de lenguajes disponibles
        this.serveDataService.loadLanguageOptions().then((languages) => {
            this.languageOptions = languages;
        }).catch((error) => {
            console.error('Error al cargar las opciones de idiomas:', error);
        });
    }

    onLanguageChange(event: Event): void {
        const selectedValue = (event.target as HTMLSelectElement)?.value;
        if (selectedValue) {
        this.serveDataService.set_language(selectedValue);
        this.LANG = this.serveDataService.get_languageConstants();
        }
    }

}
