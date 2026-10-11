import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { PROJECTS } from '../../data/projects';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { RevealDirective } from '../../shared/reveal.directive';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, RevealDirective],
  template: `
    <section class="section" id="projects" aria-labelledby="projects-title">
      <div class="container">
        <div class="projects-heading section-heading reveal" appReveal>
          <div>
            <p class="section-kicker"><span>03</span>{{ state.t('projectsKicker') }}</p>
            <h2 id="projects-title">{{ state.t('projectsTitle') }}</h2>
          </div>
          <p>{{ state.t('projectsIntro') }}</p>
        </div>

        @for (project of projects; track project.id) {
          @if (project.featured) {
            <app-project-card [project]="project" (selected)="state.openProject($event)" />
          }
        }

        <div class="project-grid">
          @for (project of projects; track project.id) {
            @if (!project.featured) {
              <app-project-card [project]="project" (selected)="state.openProject($event)" />
            }
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly state = inject(PortfolioStateService);
  readonly projects = PROJECTS;
}
