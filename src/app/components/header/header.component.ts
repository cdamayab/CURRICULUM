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
    
    constructor(){}

    ngOnInit(): void {
        // Suscribirse al Observable del ServeDataService para detectar cambios de idioma
        this.LANG = ServeDataService.get_languageConstants();
        ServeDataService.get_Language().subscribe((language: string) => {
            this.LANG = ServeDataService.get_languageConstants();
        });
        // Inicializo el lenguaje
        ServeDataService.set_language("es");
        // Cargo las opciones de lenguajes disponibles 
        this.languageOptions = ServeDataService.loadLanguageOptions();
    }

    onLanguageChange(event: Event): void {
        const selectedValue = (event.target as HTMLSelectElement)?.value;
        if (selectedValue) {
        ServeDataService.set_language(selectedValue);
        this.LANG = ServeDataService.get_languageConstants();
        }
    }

}
