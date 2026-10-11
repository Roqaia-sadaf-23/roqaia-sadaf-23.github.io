import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { PortfolioStateService } from '../../services/portfolio-state.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  template: `
    <section class="section" id="about" aria-labelledby="about-title">
      <div class="container about-grid">
        <div class="section-heading reveal" appReveal>
          <p class="section-kicker"><span>01</span>{{ state.t('aboutKicker') }}</p>
          <h2 id="about-title">{{ state.t('aboutTitle') }}</h2>
        </div>
        <div class="about-content reveal" appReveal>
          <p class="about-lead">{{ state.t('aboutLead') }}</p>
          <p>{{ state.t('aboutBody') }}</p>
          <div class="about-principles">
            @for (principle of principles; track principle) { <span>{{ state.t(principle) }}</span> }
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly state = inject(PortfolioStateService);
  readonly principles = ['principleArchitecture', 'principleUx', 'principleIntegration', 'principleLearning'] as const;
}
