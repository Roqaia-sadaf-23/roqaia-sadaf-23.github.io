import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';

import { PortfolioStateService } from '../../services/portfolio-state.service';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="site-footer">
      <div class="container footer-inner">
        <p>© {{ year }} Roqaia Sadaf. <span>{{ state.t('footerText') }}</span></p>
        <div class="footer-links">
          <a href="privacy-policy.html">{{ state.t('privacyPolicy') }}</a>
          <a href="https://github.com/Roqaia-sadaf-23" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/roqaia-sadave-054325245/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
    <button class="back-to-top" [class.visible]="showBackToTop()" type="button" [attr.aria-label]="state.t('backToTop')" (click)="scrollToTop()">
      <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 14 6-6 6 6" /></svg>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly state = inject(PortfolioStateService);
  readonly showBackToTop = signal(false);
  readonly year = new Date().getFullYear();

  @HostListener('window:scroll')
  updateVisibility(): void {
    this.showBackToTop.set(globalThis.scrollY > 650);
  }

  scrollToTop(): void {
    globalThis.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
