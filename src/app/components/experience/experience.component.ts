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

  constructor() { }

  ngOnInit(): void {
    // Obtener las constantes del lenguaje y experiencias laborales
    this.LANG = ServeDataService.get_languageConstants();
    this.experience = this.LANG.EXPERIENCE;

    // Suscribirse al Observable del ServeDataService para detectar cambios de idioma
    ServeDataService.get_Language().subscribe((language: string) => {
      this.LANG = ServeDataService.get_languageConstants();
      this.experience = this.LANG.EXPERIENCE;  // Actualizar experiencias laborales según el idioma
    });
  }
}
