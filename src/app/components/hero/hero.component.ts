import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { PortfolioStateService } from '../../services/portfolio-state.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [RevealDirective],
  template: `
    <section class="hero section" id="home" aria-labelledby="hero-title">
      <div class="hero-orb hero-orb-one" aria-hidden="true"></div>
      <div class="hero-orb hero-orb-two" aria-hidden="true"></div>
      <div class="container hero-grid">
        <div class="hero-copy reveal" appReveal>
          <p class="availability"><span class="status-dot" aria-hidden="true"></span>{{ state.t('availability') }}</p>
          <p class="eyebrow">{{ state.t('heroGreeting') }}</p>
          <h1 id="hero-title">{{ state.t('heroRole') }}</h1>
          <p class="hero-intro">{{ state.t('heroIntro') }}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#projects">{{ state.t('viewProjects') }}<svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg></a>
            <a class="button button-secondary" href="assets/cv/Roqaia-Sadaf-.Net-Backend-CV.pdf" download>{{ state.t('downloadCv') }}<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" /></svg></a>
          </div>
          <div class="social-links hero-social" [attr.aria-label]="state.t('socialProfiles')">
            <a href="https://github.com/Roqaia-sadaf-23" target="_blank" rel="noopener noreferrer" [attr.aria-label]="state.t('githubProfile')">GitHub</a>
            <a href="https://www.linkedin.com/in/roqaia-sadave-054325245/" target="_blank" rel="noopener noreferrer" [attr.aria-label]="state.t('linkedinProfile')">LinkedIn</a>
          </div>
        </div>

        <div class="hero-visual reveal" appReveal aria-hidden="true">
          <div class="visual-backdrop"></div>
          <div class="code-window">
            <div class="window-bar"><span></span><span></span><span></span><p>roqaia.dev</p></div>
            <div class="code-layout">
              <div class="phone-preview">
                <div class="phone-speaker"></div>
                <div class="phone-screen"><div class="app-logo">R</div><div class="ui-line wide"></div><div class="ui-line"></div><div class="ui-card"><span></span><span></span></div><div class="ui-card compact"><span></span><span></span></div></div>
              </div>
              <div class="code-preview">
                <p><span class="code-blue">class</span> <span class="code-teal">Developer</span> &#123;</p>
                <p>&nbsp;&nbsp;<span class="code-muted">final</span> focus = <span class="code-orange">'quality'</span>;</p>
                <p>&nbsp;&nbsp;<span class="code-muted">final</span> stack = [</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-orange">'Flutter'</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-orange">'ASP.NET Core'</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-orange">'SQL Server'</span></p>
                <p>&nbsp;&nbsp;];</p><p>&#125;</p>
              </div>
            </div>
          </div>
          <div class="floating-chip chip-api"><span>API</span> REST</div>
          <div class="floating-chip chip-mobile"><span>◈</span> Flutter</div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly state = inject(PortfolioStateService);
}
