import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { PortfolioStateService } from '../../services/portfolio-state.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  template: `
    <section class="section contact-section" id="contact" aria-labelledby="contact-title">
      <div class="container contact-card reveal" appReveal>
        <div class="contact-copy">
          <p class="section-kicker light"><span>06</span>{{ state.t('contactKicker') }}</p>
          <h2 id="contact-title">{{ state.t('contactTitle') }}</h2>
          <p>{{ state.t('contactText') }}</p>
          <p class="location"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg><span>{{ state.t('location') }}</span></p>
        </div>
        <div class="contact-actions">
          <a class="button button-light" href="https://www.linkedin.com/in/roqaia-sadave-054325245/" target="_blank" rel="noopener noreferrer"><span>{{ state.t('connectLinkedin') }}</span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg></a>
          <a class="contact-profile" href="https://github.com/Roqaia-sadaf-23" target="_blank" rel="noopener noreferrer"><span>{{ state.t('visitGithub') }}</span><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" /></svg></a>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  readonly state = inject(PortfolioStateService);
}
