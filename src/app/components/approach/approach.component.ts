import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import type { TranslationKey } from '../../data/translations';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { RevealDirective } from '../../shared/reveal.directive';

interface ApproachItem { readonly title: TranslationKey; readonly text: TranslationKey; }

@Component({
  selector: 'app-approach',
  imports: [RevealDirective],
  template: `
    <section class="section approach-section" aria-labelledby="approach-title">
      <div class="container">
        <div class="section-heading centered reveal" appReveal>
          <p class="section-kicker"><span>04</span>{{ state.t('approachKicker') }}</p>
          <h2 id="approach-title">{{ state.t('approachTitle') }}</h2>
        </div>
        <div class="approach-grid">
          @for (item of items; track item.title; let index = $index) {
            <article class="approach-item reveal" appReveal>
              <span>{{ (index + 1).toString().padStart(2, '0') }}</span>
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
export class ApproachComponent {
  readonly state = inject(PortfolioStateService);
  readonly items: readonly ApproachItem[] = [
    { title: 'approachCleanTitle', text: 'approachCleanText' },
    { title: 'approachUiTitle', text: 'approachUiText' },
    { title: 'approachApiTitle', text: 'approachApiText' },
    { title: 'approachGitTitle', text: 'approachGitText' },
    { title: 'approachLearnTitle', text: 'approachLearnText' },
  ];
}
