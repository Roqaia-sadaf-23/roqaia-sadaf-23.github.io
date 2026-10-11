import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import type { TranslationKey } from '../../data/translations';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { RevealDirective } from '../../shared/reveal.directive';

interface TimelineItem { readonly label: TranslationKey; readonly title: TranslationKey; readonly text: TranslationKey; }

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  template: `
    <section class="section section-tinted" id="experience" aria-labelledby="experience-title">
      <div class="container experience-grid">
        <div class="section-heading reveal" appReveal>
          <p class="section-kicker"><span>05</span>{{ state.t('experienceKicker') }}</p>
          <h2 id="experience-title">{{ state.t('experienceTitle') }}</h2>
          <p>{{ state.t('experienceIntro') }}</p>
        </div>
        <div class="timeline reveal" appReveal>
          @for (item of timeline; track item.title) {
            <article class="timeline-item">
              <span class="timeline-dot" aria-hidden="true"></span>
              <p class="timeline-label">{{ state.t(item.label) }}</p>
              <h3>{{ state.t(item.title) }}</h3>
              <p>{{ state.t(item.text) }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  readonly state = inject(PortfolioStateService);
  readonly timeline: readonly TimelineItem[] = [
    { label: 'freelancePeriod', title: 'freelanceTitle', text: 'freelanceText' },
    { label: 'currentFocus', title: 'portfolioDevelopment', text: 'portfolioDevelopmentText' },
    { label: 'educationYear', title: 'educationTitle', text: 'educationText' },
  ];
}
