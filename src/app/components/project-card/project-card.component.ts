import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';

import type { Project } from '../../models/project.model';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-project-card',
  imports: [NgTemplateOutlet, RevealDirective],
  template: `
    @if (project().featured) {
      <article class="featured-project reveal" appReveal>
        <div class="project-media">
          <img [src]="cardImages()[0]!.src" [alt]="state.t(cardImages()[0]!.altKey)" loading="lazy" width="1280" height="720" />
          <span class="featured-label">{{ state.t('featuredLabel') }}</span>
        </div>
        <div class="project-content">
          <ng-container [ngTemplateOutlet]="projectBody" />
        </div>
      </article>
    } @else {
      <article class="project-card reveal" appReveal>
        <div class="project-card-image" [class.mobile-preview-strip]="cardImages().length > 1">
          @for (image of cardImages(); track image.src) {
            <img [src]="image.src" [alt]="state.t(image.altKey)" loading="lazy" width="640" height="1280" />
          }
        </div>
        <div class="project-card-body">
          <ng-container [ngTemplateOutlet]="projectBody" />
        </div>
      </article>
    }

    <ng-template #projectBody>
      <p class="project-type">{{ state.t(project().typeKey) }}</p>
      <h3>{{ project().titleKey ? state.t(project().titleKey!) : project().title }}</h3>
      <p>{{ state.t(project().descriptionKey) }}</p>
      @if (project().technologies.length) {
        <div class="tech-list" role="group" [attr.aria-label]="state.t('technologiesUsed')">
          @for (technology of project().technologies; track technology) { <span>{{ technology }}</span> }
        </div>
      }
      @if (project().featureKeys?.length) {
        <ul class="feature-list">
          @for (feature of project().featureKeys!; track feature) { <li>{{ state.t(feature) }}</li> }
        </ul>
      }
      <div class="project-actions">
        <button class="text-button project-details" type="button" (click)="selected.emit(project())">
          <span>{{ state.t('viewDetails') }}</span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg>
        </button>
        @if (project().links[0]; as source) {
          <a class="text-button" [href]="source.url" target="_blank" rel="noopener noreferrer">
            <span>{{ state.t('viewSource') }}</span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg>
          </a>
        }
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  readonly project = input.required<Project>();
  readonly selected = output<Project>();
  readonly state = inject(PortfolioStateService);
  readonly cardImages = computed(() => this.project().images.slice(0, this.project().cardImageCount));
}
