import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { translations, type Language, type TranslationKey } from '../data/translations';
import type { Project } from '../models/project.model';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class PortfolioStateService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly language = signal<Language>(this.readLanguage());
  readonly theme = signal<Theme>(this.readTheme());
  readonly mobileNavigationOpen = signal(false);
  readonly selectedProject = signal<Project | null>(null);
  readonly isRtl = computed(() => this.language() === 'ar');

  constructor() {
    effect(() => {
      const language = this.language();
      const theme = this.theme();
      const copy = translations[language];
      const root = this.document.documentElement;

      root.lang = language;
      root.dir = language === 'ar' ? 'rtl' : 'ltr';
      root.dataset['theme'] = theme;
      this.title.setTitle(copy.pageTitle);
      this.meta.updateTag({ name: 'description', content: copy.metaDescription });
      this.meta.updateTag({ property: 'og:title', content: copy.pageTitle }, "property='og:title'");
      this.meta.updateTag({ property: 'og:description', content: copy.metaDescription }, "property='og:description'");
      this.meta.updateTag({ name: 'twitter:title', content: copy.pageTitle });
      this.meta.updateTag({ name: 'twitter:description', content: copy.metaDescription });
      this.meta.updateTag({ name: 'theme-color', content: theme === 'dark' ? '#09172a' : '#f7f9fc' });
      this.meta.updateTag({ property: 'og:locale', content: language === 'ar' ? 'ar_SA' : 'en_US' });
      this.savePreference('portfolio-language', language);
      this.savePreference('portfolio-theme', theme);
    });
  }

  t(key: TranslationKey): string {
    return translations[this.language()][key];
  }

  toggleLanguage(): void {
    this.language.update((language) => (language === 'en' ? 'ar' : 'en'));
  }

  toggleTheme(): void {
    this.theme.update((theme) => (theme === 'light' ? 'dark' : 'light'));
  }

  toggleMobileNavigation(): void {
    this.mobileNavigationOpen.update((open) => !open);
  }

  closeMobileNavigation(): void {
    this.mobileNavigationOpen.set(false);
  }

  openProject(project: Project): void {
    this.selectedProject.set(project);
  }

  closeProject(): void {
    this.selectedProject.set(null);
  }

  private readLanguage(): Language {
    return this.readPreference('portfolio-language') === 'ar' ? 'ar' : 'en';
  }

  private readTheme(): Theme {
    const savedTheme = this.readPreference('portfolio-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
    return globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private readPreference(key: string): string | null {
    try {
      return globalThis.localStorage?.getItem(key) ?? null;
    } catch {
      return null;
    }
  }

  private savePreference(key: string, value: string): void {
    try {
      globalThis.localStorage?.setItem(key, value);
    } catch {
      // The selected preference remains active for this visit.
    }
  }
}
