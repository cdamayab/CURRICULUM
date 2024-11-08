import { Component, OnInit } from '@angular/core';
import { ServeDataService } from '../../services/servedata.service';
import { LanguajeInterface, ExperienceInterface } from "../../interfaces/languaje.interface";

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
    LANG: any;  // Constantes para el lenguaje seleccionado
    experience!: ExperienceInterface[];  // Arreglo de experiencias laborales

    constructor(private serveDataService: ServeDataService) { }

    async ngOnInit(): Promise<void> {
        // Obtener las constantes del lenguaje y experiencias laborales
        this.LANG = this.serveDataService.get_languageConstants();
        if (this.LANG) {
            this.experience = this.LANG.EXPERIENCE;
        }
        
        // Suscribirse al Observable del ServeDataService para detectar cambios de idioma
        this.serveDataService.get_Language().subscribe((language: string) => {
            this.LANG = this.serveDataService.get_languageConstants();
            this.experience = this.LANG.EXPERIENCE;  // Actualizar experiencias laborales según el idioma
        });
    }
}
