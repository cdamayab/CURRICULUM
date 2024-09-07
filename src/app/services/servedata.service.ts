import { Injectable }                  from '@angular/core';
import { LanguajeInterface }           from '../interfaces/languaje.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class ServeDataService {
    private static languageConstants       : any;
  static selectedLanguage                : BehaviorSubject<string> = new BehaviorSubject<string>('es');

    constructor() {}

    static set_language(language: string) :void {
        try {
            const languageModule = require('../data/languajes/'+language+'.language');
            ServeDataService.languageConstants = languageModule.LangConstans;
            ServeDataService.selectedLanguage.next(language);
        } catch (error) {
            ServeDataService.languageConstants = require('../data/languajes/error.language').LangConstans;
            ServeDataService.selectedLanguage.next('');
            console.warn("Error: No se encuentra el archivo de idioma para '"+language+"', se utilizan las constantes de error.");
        }
    }

    static get_Language(): Observable<string> {
        return ServeDataService.selectedLanguage.asObservable();
      }

    static get_languageConstants(): LanguajeInterface | undefined {
      return ServeDataService.languageConstants;
    }

    static loadLanguageOptions(): string[] {
    const context = require.context('../data/languajes/', false, /\.language\.ts$/);
    const uniqueOptions: Set<string> = new Set();
    
    context.keys().forEach((key: string) => {
        const matchResult = key.match(/([^/]+)\.language\.ts$/);
        if (matchResult && matchResult[1]) {
            uniqueOptions.add(matchResult[1]);
        }
    });
    
    return Array.from(uniqueOptions);
    }

  }
