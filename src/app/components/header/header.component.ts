import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  HostListener,
  inject,
  Renderer2,
  signal,
  viewChild,
} from '@angular/core';

import { PortfolioStateService } from '../../services/portfolio-state.service';

interface NavigationItem {
  readonly id: 'about' | 'skills' | 'projects' | 'experience' | 'contact';
  readonly label: 'navAbout' | 'navSkills' | 'navProjects' | 'navExperience' | 'navContact';
}

@Component({
  selector: 'app-header',
  template: `
    <header class="site-header" [class.scrolled]="scrolled()" [class.menu-open]="state.mobileNavigationOpen()">
      <div class="container header-inner">
        <a class="brand" href="#home" [attr.aria-label]="state.t('brandLabel')">
          <span class="brand-mark" aria-hidden="true">RS</span>
          <span class="brand-name">Roqaia Sadaf</span>
        </a>

        <nav class="desktop-nav" [attr.aria-label]="state.t('primaryNav')">
          @for (item of navigation; track item.id) {
            <a
              [href]="'#' + item.id"
              [class.active]="activeSection() === item.id"
              [attr.aria-current]="activeSection() === item.id ? 'location' : null"
            >{{ state.t(item.label) }}</a>
          }
        </nav>

        <div class="header-actions">
          <button
            #menuButton
            class="control-button language-toggle"
            type="button"
            [attr.aria-label]="state.language() === 'en' ? state.t('switchArabic') : state.t('switchEnglish')"
            [title]="state.language() === 'en' ? state.t('switchArabic') : state.t('switchEnglish')"
            (click)="state.toggleLanguage()"
          >
            <span class="language-current" aria-hidden="true">{{ state.language() === 'en' ? 'AR' : 'EN' }}</span>
          </button>
          <button
            class="control-button theme-toggle"
            type="button"
            [attr.aria-label]="state.theme() === 'dark' ? state.t('switchLight') : state.t('switchDark')"
            [title]="state.theme() === 'dark' ? state.t('switchLight') : state.t('switchDark')"
            (click)="state.toggleTheme()"
          >
            <svg class="theme-icon theme-icon-sun" aria-hidden="true" viewBox="0 0 24 24">
              <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.64 5.64l1.42 1.42M16.94 16.94l1.42 1.42M18.36 5.64l-1.42 1.42M7.06 16.94l-1.42 1.42" />
              <circle cx="12" cy="12" r="4" />
            </svg>
            <svg class="theme-icon theme-icon-moon" aria-hidden="true" viewBox="0 0 24 24">
              <path d="M20.4 15.2A8.4 8.4 0 0 1 8.8 3.6 8.5 8.5 0 1 0 20.4 15.2Z" />
            </svg>
          </button>
          <button
            class="menu-toggle"
            type="button"
            [attr.aria-expanded]="state.mobileNavigationOpen()"
            aria-controls="mobile-nav"
            [attr.aria-label]="state.mobileNavigationOpen() ? state.t('closeMenu') : state.t('openMenu')"
            (click)="state.toggleMobileNavigation()"
          ><span></span><span></span><span></span></button>
        </div>
      </div>

      @if (state.mobileNavigationOpen()) {
        <nav #mobileNav id="mobile-nav" class="mobile-nav" [attr.aria-label]="state.t('mobileNav')">
          @for (item of navigation; track item.id) {
            <a
              [href]="'#' + item.id"
              [class.active]="activeSection() === item.id"
              [attr.aria-current]="activeSection() === item.id ? 'location' : null"
              (click)="state.closeMobileNavigation()"
            >{{ state.t(item.label) }}</a>
          }
        </nav>
      }
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly state = inject(PortfolioStateService);
  readonly scrolled = signal(false);
  readonly activeSection = signal<string>('');
  readonly navigation: readonly NavigationItem[] = [
    { id: 'about', label: 'navAbout' },
    { id: 'skills', label: 'navSkills' },
    { id: 'projects', label: 'navProjects' },
    { id: 'experience', label: 'navExperience' },
    { id: 'contact', label: 'navContact' },
  ];

  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(Renderer2);
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');
  private readonly mobileNav = viewChild<ElementRef<HTMLElement>>('mobileNav');

  constructor() {
    effect(() => {
      const open = this.state.mobileNavigationOpen();
      this.renderer.setStyle(this.document.body, 'overflow', open ? 'hidden' : '');
      if (open) queueMicrotask(() => this.mobileNav()?.nativeElement.querySelector('a')?.focus());
    });

    afterNextRender(() => {
      this.updateScrollState();
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible?.target.id) this.activeSection.set(visible.target.id);
        },
        { rootMargin: '-25% 0px -55%', threshold: [0.05, 0.2, 0.5] },
      );
      this.navigation.forEach(({ id }) => {
        const section = this.document.getElementById(id);
        if (section) observer.observe(section);
      });
    });
  }

  @HostListener('window:scroll')
  updateScrollState(): void {
    this.scrolled.set(globalThis.scrollY > 18);
  }

  @HostListener('window:resize')
  closeDesktopMenu(): void {
    if (globalThis.innerWidth > 860) this.state.closeMobileNavigation();
  }

  @HostListener('document:keydown.escape')
  closeMenuFromKeyboard(): void {
    const wasOpen = this.state.mobileNavigationOpen();
    this.state.closeMobileNavigation();
    if (wasOpen) queueMicrotask(() => this.menuButton()?.nativeElement.focus());
  }
}
