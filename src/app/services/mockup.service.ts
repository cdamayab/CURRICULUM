import { Injectable }    from '@angular/core';
import { Experience }    from "../interfaces/experience";
import { arrExperience } from "../data/mockup-experience";

@Injectable({
  providedIn: 'root'
})
export class MockupService {
	
	arrWexperiences: Experience[]  = arrExperience;

  	constructor() { }

  	get_wExperiences(): Experience[] {
    	return this.arrWexperiences;
  	}

  	get_experience(id: number): Experience | undefined {
    	return this.arrWexperiences.find((r) => r.id === id);
  	}
}
