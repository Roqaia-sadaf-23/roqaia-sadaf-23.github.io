import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { AboutComponent } from './components/about/about.component';
import { ApproachComponent } from './components/approach/approach.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectDetailsModalComponent } from './components/project-details-modal/project-details-modal.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioStateService } from './services/portfolio-state.service';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ApproachComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    ProjectDetailsModalComponent,
  ],
  template: `
    <a class="skip-link" href="#main-content">{{ state.t('skipLink') }}</a>
    <app-header />
    <main id="main-content">
      <app-hero />
      <app-about />
      <app-skills />
      <app-projects />
      <app-approach />
      <app-experience />
      <app-contact />
    </main>
    <app-footer />
    <app-project-details-modal
      [project]="state.selectedProject()"
      (dismissed)="state.closeProject()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly state = inject(PortfolioStateService);
}
