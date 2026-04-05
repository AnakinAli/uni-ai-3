# Genetic Algorithms Static Site

Static educational website about genetic algorithms, generated from the PDF structure and source list in this project.

## Stack

- Plain HTML pages in nested folders
- Tailwind CSS from CDN
- Shared vanilla JavaScript for grouped navigation, breadcrumbs, glossary tooltips and content rendering
- Relative links so the site works on GitHub Pages project pages and user pages

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## GitHub Pages deployment

1. Push the repository to GitHub.
2. Open repository settings and go to `Pages`.
3. Publish from the branch that contains this site.
4. Use the repository root as the source when GitHub offers the option.
5. Wait for the Pages deployment to finish.

## Sitemap

- `sitemap.xml` and `robots.txt` are generated at the repository root when you run `python3 build_site.py`.
- Set your real GitHub Pages (or custom domain) base URL before building for production:

```bash
GA_SITE_BASE_URL=https://yourname.github.io/your-repo python3 build_site.py
```

The default placeholder `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME` must be replaced for correct absolute links.

## Notes

- The deployed site does not need a build step.
- The PDF remains the primary source of truth for information architecture.
- `ga_site_content.py` stores the richer content model, glossary terms and related-page logic.
- `build_site.py` can regenerate the static structure if the content map changes.
