import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeroComponent } from './components/hero/hero.component';

import { FormsModule } from '@angular/forms';
import { StudiesComponent } from './studies/studies.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { InterestsComponent } from './interests/interests.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExperienceComponent,
    HeroComponent,
    StudiesComponent,
    PortfolioComponent,
    InterestsComponent,
  ],
  imports: [
    FormsModule,                   // npm install @angular/forms
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
