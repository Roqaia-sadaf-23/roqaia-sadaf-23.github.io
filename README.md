# Roqaia Sadaf — Personal Portfolio

A responsive, bilingual personal portfolio for Roqaia Sadaf, a Flutter and ASP.NET Core developer based in Al Madinah, Saudi Arabia. The site presents selected projects, technical skills, development values, and professional contact links without inventing work history or project claims.

The website is built with plain HTML, CSS, and JavaScript and is ready to host on GitHub Pages. It has no build step and no third-party dependencies.

## Technologies used

- Semantic HTML5
- Modern CSS3, including custom properties, grid, flexbox, responsive breakpoints, and light/dark themes
- Vanilla JavaScript for English/Arabic localization, RTL layout, theme persistence, navigation, dialogs, and scroll interactions
- Optimized local SVG artwork and placeholders

## Project structure

```text
.
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── main.js
├── assets/
│   ├── cv/
│   │   ├── Roqaia-Sadaf-CV.pdf
│   │   └── README.md
│   ├── icons/
│   │   └── favicon.svg
│   └── images/
│       ├── placeholders/
│       │   └── README.md
│       └── projects/
│           ├── shifaa/      # Mobile and admin dashboard screenshots
│           ├── ecommerce/   # Storefront screenshots
│           └── ozzo/        # Arabic onboarding and subscription screenshots
└── README.md
```

## Run locally

No installation is required. Opening `index.html` directly works, but a tiny local server gives behavior closer to GitHub Pages.

If Python is installed:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

Other static servers, such as the VS Code Live Server extension, work equally well.

## Adding project screenshots

### 1. Folder for each project

| Project                         | Screenshot folder                   | Current use                           |
| ------------------------------- | ----------------------------------- | ------------------------------------- |
| Shifaa Clinic Management System | `assets/images/projects/shifaa/`    | Featured cover and dialog gallery     |
| E-commerce project              | `assets/images/projects/ecommerce/` | Three-screen cover and dialog gallery |
| Ozzoma mobile project           | `assets/images/projects/ozzo/`      | Three-screen cover and dialog gallery |

Keep each project's screenshots in its own folder. This makes future project galleries easy to maintain.

### 2. Recommended image names and sizes

- Shifaa main image: `shifaa-dashboard.webp`, ideally **1600 × 1000 px** (8:5 ratio).
- Additional Shifaa images: `shifaa-mobile-patient.webp`, `shifaa-mobile-doctor.webp`, and `shifaa-admin.webp`.
- E-commerce main image: `ecommerce-cover.webp`, ideally **1200 × 800 px** (3:2 ratio).
- Additional E-commerce images: `ecommerce-01.webp`, `ecommerce-02.webp`, etc.
- Ozzo main image: `ozzo-cover.webp`, ideally **1200 × 800 px** (3:2 ratio).
- Additional Ozzo images: `ozzo-01.webp`, `ozzo-02.webp`, etc.

WebP is recommended for small file sizes. JPEG or PNG also works. Aim for each image to be below about 350 KB when possible, and remove sensitive data from screenshots before publishing.

### 3. Update image paths

The real project screenshots are already connected in `index.html`. Search for the relevant project name, replace an existing `src` path with the new relative path, and update the image dimensions and alternative text when the image content changes. Arabic cover alternative text lives in `js/main.js` under `shifaaAlt`, `ecommerceAlt`, and `ozzoAlt`.

### 4. Add more than one screenshot to a project

For a simple gallery, add more images inside the relevant project card immediately after its existing `<img>` element. Use the same project folder and keep lazy loading enabled:

```html
<div class="project-gallery" aria-label="Shifaa project screenshots">
  <img
    src="assets/images/projects/shifaa/shifaa-mobile-patient.webp"
    alt="Shifaa patient application appointment screen"
    loading="lazy"
    width="900"
    height="1600"
  />
  <img
    src="assets/images/projects/shifaa/shifaa-mobile-doctor.webp"
    alt="Shifaa doctor application schedule screen"
    loading="lazy"
    width="900"
    height="1600"
  />
</div>
```

Then add gallery styling in `css/style.css`. A good starting point is:

```css
.project-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
```

For a larger gallery or slider, keep controls keyboard accessible, label buttons, and avoid loading all full-resolution images immediately.

### 5. Replace the CV file

The Download CV control points to `assets/cv/Roqaia-Sadaf-CV.pdf`. Replace that file while preserving the exact filename to update the document without changing HTML.

## Replace other placeholder artwork

The provided SVGs are intentionally conceptual and are explicitly labeled as placeholders. Replace only the `src` path in `index.html`; do not delete the SVGs until you have confirmed the real images load on GitHub Pages. All paths are relative and case-sensitive once deployed.

## Update profile links

GitHub and LinkedIn links appear more than once in `index.html`. Use your editor's find-and-replace command for the full URLs:

- GitHub: `https://github.com/Roqaia-sadaf-23`
- LinkedIn: `https://www.linkedin.com/in/roqaia-sadave-054325245/`

Keep `target="_blank"` links paired with `rel="noopener noreferrer"`.

## Updating experience and education

The public timeline contains the verified freelance period, current full-stack focus, and education. To update it, edit the matching `.timeline-item` in `index.html` and the corresponding English and Arabic keys in `js/main.js`.

## Add another project

1. Create `assets/images/projects/project-name/` and add at least one optimized image plus a small `README.md`.
2. Copy a `.project-card` in the project grid in `index.html`.
3. Replace the title, description, image path, alt text, and detail dialog identifier.
4. Add a matching `<dialog>` near the end of `index.html`.
5. Add every new visible string to both the `en` and `ar` objects in `js/main.js`.
6. Add GitHub or live-demo buttons only when those destinations are real and publicly accessible.

## Language and theme

English is the default language. The language control switches the entire interface to Arabic and applies `dir="rtl"`. The selected language is saved in `localStorage` under `portfolio-language`.

The theme control supports light and dark themes. The selected theme is saved under `portfolio-theme`; when no preference is saved, the operating-system color preference is used.

## Deploy to GitHub Pages

1. Create a GitHub repository and add this folder's contents to it.
2. Push the repository to GitHub.
3. Open the repository on GitHub and go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and the `/ (root)` folder, then save.
6. Wait for GitHub Pages to provide the public URL.

Because `index.html` is in the repository root and all assets use relative paths, no production configuration or build command is needed.

## Update the deployed website later

After editing files and checking the site locally:

```bash
git status
git add .
git commit -m "Update portfolio content"
git push origin main
```

GitHub Pages will rebuild automatically after the push.

## Quality checklist

Before publishing personal updates:

- Confirm every project image loads and has meaningful alternative text.
- Check English and Arabic layouts.
- Check light and dark themes.
- Test the mobile menu and project detail dialogs with keyboard and touch input.
- Confirm profile URLs and CV path.
- Verify screenshots contain no private patient, client, or account information.
