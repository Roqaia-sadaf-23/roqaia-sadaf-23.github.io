import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import type { TranslationKey } from '../../data/translations';
import { PortfolioStateService } from '../../services/portfolio-state.service';
import { RevealDirective } from '../../shared/reveal.directive';

interface SkillGroup { readonly icon: string; readonly title: TranslationKey; readonly items: readonly (string | TranslationKey)[]; }

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  template: `
    <section class="section section-tinted" id="skills" aria-labelledby="skills-title">
      <div class="container">
        <div class="section-heading centered reveal" appReveal>
          <p class="section-kicker"><span>02</span>{{ state.t('skillsKicker') }}</p>
          <h2 id="skills-title">{{ state.t('skillsTitle') }}</h2>
          <p>{{ state.t('skillsIntro') }}</p>
        </div>
        <div class="skills-grid">
          @for (group of groups; track group.title) {
            <article class="skill-card reveal" appReveal>
              <div class="skill-icon">{{ group.icon }}</div>
              <h3>{{ state.t(group.title) }}</h3>
              <div class="skill-tags">
                @for (item of group.items; track item) { <span>{{ labels[item] ? state.t(labels[item]!) : item }}</span> }
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  readonly state = inject(PortfolioStateService);
  readonly labels: Readonly<Record<string, TranslationKey | undefined>> = {
    'Responsive UI': 'responsiveUi',
    'API integration': 'stateIntegration',
    'Data modeling': 'dataModeling',
    Accessibility: 'accessibility',
    'API testing': 'apiTesting',
    'RESTful APIs': 'restfulApis',
    'Clean Architecture': 'cleanArchitecture',
    'Git & GitHub': 'gitGithub',
  };
  readonly groups: readonly SkillGroup[] = [
    { icon: '</>', title: 'frontendTitle', items: ['Angular 22', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Accessibility'] },
    { icon: '{ }', title: 'backendTitle', items: ['C#', 'ASP.NET Core', 'RESTful APIs', 'Entity Framework Core', 'LINQ', 'JWT', 'CQRS', 'MediatR', 'API integration'] },
    { icon: '◆', title: 'mobileTitle', items: ['Flutter', 'Dart', 'GetX'] },
    { icon: '▱', title: 'databaseTitle', items: ['SQL Server', 'T-SQL', 'Data modeling'] },
    { icon: '⌁', title: 'architectureToolsTitle', items: ['Clean Architecture', 'Git & GitHub', 'Postman', 'Swagger', 'API testing'] },
  ];
}
