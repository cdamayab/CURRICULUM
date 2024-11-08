import { Injectable } from '@angular/core';
import { LanguajeInterface } from '../interfaces/languaje.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServeDataService {
  private languageConstants: any;
  selectedLanguage: BehaviorSubject<string> = new BehaviorSubject<string>('es');
  private languagesUrl = 'assets/languages.json';  // Ruta al archivo JSON que contiene la lista de idiomas

  constructor(private http: HttpClient) {}

  // Cargar archivos de idioma con import dinámico
  async set_language(language: string): Promise<void> {
    try {
      const languageModule = await import(`../data/languajes/${language}.language`);
      this.languageConstants = languageModule.LangConstans;
      this.selectedLanguage.next(language);
    } catch (error) {
      const errorModule = await import('../data/languajes/error.language');
      this.languageConstants = errorModule.LangConstans;
      this.selectedLanguage.next('');
      console.warn(`Error: No se encuentra el archivo de idioma para '${language}', se utilizan las constantes de error.`);
    }
  }

  // Retorna un observable para seguir el idioma seleccionado
  get_Language(): Observable<string> {
    return this.selectedLanguage.asObservable();
  }

  // Retorna las constantes del lenguaje actual
  get_languageConstants(): LanguajeInterface | undefined {
    return this.languageConstants;
  }

  // Cargar la lista de opciones de idioma desde el archivo JSON
  loadLanguageOptions(): Promise<string[]> {
    return this.http.get<{ languages: string[] }>(this.languagesUrl)
      .toPromise()
      .then((data) => {
        if (data && data.languages) {
          return data.languages;
        } else {
          return [];
        }
      })
      .catch((error) => {
        console.error('Error al cargar las opciones de idiomas:', error);
        return [];
      });
  }
}
