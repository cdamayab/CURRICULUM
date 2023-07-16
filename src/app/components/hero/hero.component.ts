import { Component, OnInit } from '@angular/core';
import { ServeDataService }        from '../../services/servedata.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
    LANG: any  ;
    
    constructor() { }

    ngOnInit(): void {
        // Suscribirse al Observable del ServeDataService para detectar cambios de idioma
        this.LANG = ServeDataService.get_languageConstants();
        ServeDataService.get_Language().subscribe((language: string) => {
            this.LANG = ServeDataService.get_languageConstants();
        });
    }

}
