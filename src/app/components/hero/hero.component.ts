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
          <p class="hero-stack">{{ state.t('heroStack') }}</p>
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
          <div class="fullstack-stage">
            <div class="backend-panel">
              <div class="editor-tabs">
                <span class="editor-dot"></span>
                <span class="editor-dot"></span>
                <span class="editor-dot"></span>
                <p><span class="csharp-icon">C#</span> ProjectsController.cs</p>
              </div>
              <div class="editor-body">
                <div class="editor-gutter">1<br />2<br />3<br />4<br />5<br />6</div>
                <div class="backend-code">
                  <p><span class="code-blue">[ApiController]</span></p>
                  <p><span class="code-blue">public class</span> <span class="code-teal">ProjectsController</span></p>
                  <p>&#123;</p>
                  <p>&nbsp;&nbsp;<span class="code-blue">[HttpGet]</span></p>
                  <p>&nbsp;&nbsp;<span class="code-blue">public async</span> Task&lt;IActionResult&gt; Get()</p>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;=&gt; Ok(<span class="code-orange">await</span> projectService.GetAll());</p>
                </div>
              </div>
              <div class="editor-status"><span>ASP.NET Core</span><span>API ready&nbsp; <i></i></span></div>
            </div>

            <div class="web-browser">
              <div class="browser-chrome">
                <div class="browser-dots"><span></span><span></span><span></span></div>
                <div class="address-bar"><span class="address-lock"></span> dashboard.roqaia.dev</div>
                <span class="browser-menu">•••</span>
              </div>
              <div class="dashboard-shell">
                <aside class="dashboard-sidebar">
                  <div class="dashboard-logo">R</div>
                  <span class="side-item active"></span>
                  <span class="side-item chart"></span>
                  <span class="side-item users"></span>
                  <span class="side-item settings"></span>
                </aside>
                <div class="dashboard-main">
                  <div class="dashboard-topbar">
                    <div class="search-box"><span></span> Search dashboard</div>
                    <div class="user-avatar">RS</div>
                  </div>
                  <div class="dashboard-heading">
                    <div><strong>Dashboard</strong><small>Welcome back, Roqaia</small></div>
                    <span class="angular-pill"><b>A</b> Angular</span>
                  </div>
                  <div class="metric-grid">
                    <div class="metric-card"><span class="metric-icon blue">↗</span><small>Total projects</small><strong>24</strong><em>+12%</em></div>
                    <div class="metric-card"><span class="metric-icon cyan">✓</span><small>Completed</small><strong>18</strong><em>+8%</em></div>
                    <div class="metric-card"><span class="metric-icon violet">◇</span><small>API uptime</small><strong>99.9%</strong><em>Live</em></div>
                  </div>
                  <div class="dashboard-lower">
                    <div class="analytics-card">
                      <div class="card-title"><span><strong>Performance</strong><small>Last 7 days</small></span><b>•••</b></div>
                      <div class="chart-area">
                        <span style="--bar: 42%"></span><span style="--bar: 67%"></span><span style="--bar: 53%"></span><span style="--bar: 84%"></span><span style="--bar: 71%"></span><span style="--bar: 92%"></span><span style="--bar: 78%"></span>
                      </div>
                      <div class="chart-labels"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
                    </div>
                    <div class="activity-card">
                      <div class="card-title"><span><strong>Activity</strong><small>Today</small></span></div>
                      <div class="activity-row"><span class="activity-avatar">UI</span><p><b>Web app</b><small>Updated</small></p><i></i></div>
                      <div class="activity-row"><span class="activity-avatar api">API</span><p><b>Backend</b><small>Deployed</small></p><i></i></div>
                      <div class="activity-row"><span class="activity-avatar db">DB</span><p><b>Database</b><small>Synced</small></p><i></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mobile-device">
              <div class="phone-speaker"></div>
              <div class="mobile-screen">
                <div class="mobile-status"><span>9:41</span><span>● ◔</span></div>
                <div class="mobile-header"><div><small>Good morning</small><strong>My workspace</strong></div><span>RS</span></div>
                <div class="mobile-progress">
                  <div><small>Project progress</small><strong>72%</strong></div>
                  <div class="progress-track"><span></span></div>
                  <p><span>12 tasks done</span><span>5 remaining</span></p>
                </div>
                <strong class="mobile-section-title">Recent projects</strong>
                <div class="mobile-project"><span class="project-mark">A</span><p><b>Angular dashboard</b><small>Web application</small></p><em>›</em></div>
                <div class="mobile-project"><span class="project-mark flutter">F</span><p><b>Flutter mobile</b><small>Cross-platform app</small></p><em>›</em></div>
                <div class="mobile-nav-bar"><span class="selected">⌂</span><span>□</span><span>◇</span><span>○</span></div>
              </div>
            </div>

            <div class="tech-badge badge-angular"><span>A</span>Angular</div>
            <div class="tech-badge badge-typescript"><span>TS</span>TypeScript</div>
            <div class="tech-badge badge-dotnet"><span>.NET</span>ASP.NET Core</div>
            <div class="tech-badge badge-flutter"><span>F</span>Flutter</div>
            <div class="tech-badge badge-sql"><span>DB</span>SQL Server</div>
          </div>
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly state = inject(PortfolioStateService);
}
