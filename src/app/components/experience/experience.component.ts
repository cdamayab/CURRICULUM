import { Component, OnInit }       from '@angular/core';
import { ServeDataService }        from '../../services/servedata.service';
import { ExperienceInterface }     from "../../interfaces/experience.interface";

@Component({
  selector:    'app-experience',
  templateUrl: './experience.component.html',
  styleUrls:  ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
    LANG              : any                     ;                                    // Constantes para el lenguaje seleccionado
	experience!       : ExperienceInterface[]   ;

  	constructor(private expService: ServeDataService) { }

  	ngOnInit(): void {
        // Suscribirse al Observable del ServeDataService para detectar cambios de idioma
        this.LANG = ServeDataService.get_languageConstants();
        ServeDataService.get_Language().subscribe((language: string) => {
            this.LANG = ServeDataService.get_languageConstants();
        });

        // Obtener experiencia
  		this.experience = this.expService.get_workExperiences();
  	}

}
