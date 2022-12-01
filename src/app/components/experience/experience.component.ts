import { Component, OnInit } from '@angular/core';
import { MockupService }     from "../../services/mockup.service";
import { Experience }        from "../../interfaces/experience";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

	experience!: Experience[];

  	constructor(private expService: MockupService) { }

  	ngOnInit(): void {
  		this.experience = this.expService.get_wExperiences();
  	}

}
