import { Component, OnInit } from '@angular/core';
import { ServeDataService }        from '../../services/servedata.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
    LANG: any  ;
    
    // Inyecta el servicio ServeDataService en el constructor
    constructor(private serveDataService: ServeDataService) { }

    ngOnInit(): void {
        // Suscribirse al Observable del ServeDataService para detectar cambios de idioma
        this.LANG = this.serveDataService.get_languageConstants();
        this.serveDataService.get_Language().subscribe((language: string) => {
            this.LANG = this.serveDataService.get_languageConstants();
        });
    }

}
