# Roqaia Sadaf — Personal Portfolio

A responsive, bilingual personal portfolio for Roqaia Sadaf, a Flutter and ASP.NET Core developer based in Saudi Arabia. The original HTML/CSS/JavaScript site has been migrated to Angular 22 while preserving its content, visual design, screenshots, links, Arabic/English support, light/dark themes, and Sakinah privacy policy.

## Technology

- Angular 22.2 with standalone components
- Strict TypeScript 6
- Angular Signals and modern `@if` / `@for` template control flow
- Zoneless change detection
- Existing responsive CSS design, with no UI framework
- GitHub Actions deployment to GitHub Pages

## Application structure

```text
src/app/
├── components/
│   ├── header/
│   ├── hero/
│   ├── about/
│   ├── skills/
│   ├── projects/
│   ├── project-card/
│   ├── project-details-modal/
│   ├── approach/
│   ├── experience/
│   ├── contact/
│   └── footer/
├── data/                  # Bilingual copy and typed project records
├── models/                # Project interfaces
├── services/              # Shared signal-based UI/preferences state
└── shared/                # Reusable reveal-on-scroll directive
```

The existing `assets/` directory remains the source for project screenshots, the favicon, and the CV. `privacy-policy.html` remains a standalone static page and is copied into the Angular production output with its own CSS and small theme script.

## Local development

Angular 22 requires Node.js `^22.22.3`, `^24.15.0`, or `>=26.0.0`. Install dependencies and start the development server:

```bash
npm install
npm start
```

`npm start` runs `ng serve`. Open `http://localhost:4200/` in a browser. You can also run the Angular CLI command directly:

```bash
npx ng serve
```

## Production build

```bash
npm run build
```

The optimized static site is written to `dist/portfolio/browser/`. The app uses `<base href="/">` because `roqaia-sadaf-23.github.io` is a GitHub user site served from the domain root. Navigation uses section anchors rather than client-side routes, and the static privacy page is included in the build, so refreshes do not require a route fallback.

## GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` builds and publishes `dist/portfolio/browser` when changes are pushed to `main`. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The workflow is configured for:

<https://roqaia-sadaf-23.github.io/>

No deployment is performed from this working copy.

## Portfolio behavior

- Language and theme preferences are stored as `portfolio-language` and `portfolio-theme` in `localStorage`.
- Arabic updates the document language and direction to `ar` / `rtl`; English uses `en` / `ltr`.
- Project cards are rendered from strongly typed records in `src/app/data/projects.ts`.
- One reusable native-dialog component provides project details, screenshot galleries, Escape-key closing, backdrop closing, initial close-button focus, and focus restoration.
- The existing mobile navigation, active section indicator, reveal animations, back-to-top control, social links, downloadable CV, and SEO metadata are preserved.

## Updating content

- Edit bilingual UI copy in `src/app/data/translations.ts`.
- Edit project metadata, screenshots, tags, features, and links in `src/app/data/projects.ts`.
- Replace the CV at `assets/cv/Roqaia-Sadaf-.Net-Backend-CV.pdf`, or update the path in `HeroComponent` if its filename changes.
- Keep project screenshots under `assets/images/projects/<project-name>/` and avoid publishing private or sensitive information.
