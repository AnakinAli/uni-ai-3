from pathlib import Path
import json
import os
import textwrap
from xml.sax.saxutils import escape

from ga_site_content import build_site_data

ROOT = Path("/home/anakin/Desktop/uni-ai")
ASSETS = ROOT / "assets"
SITE = build_site_data()

# Absolute URLs for sitemap.xml and robots.txt. Override when building for deployment, for example:
#   GA_SITE_BASE_URL=https://username.github.io/repo-name python3 build_site.py
SITEMAP_BASE_URL = os.environ.get(
    "GA_SITE_BASE_URL",
    "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
).rstrip("/")


def _sitemap_loc(slug: str) -> str:
    """Turn internal slug (/ga/) into full URL for published site."""
    if slug in ("/", ""):
        return SITEMAP_BASE_URL + "/"
    inner = slug.strip("/")
    return f"{SITEMAP_BASE_URL}/{inner}/"


def write_sitemap_xml():
    """Write sitemap.xml at site root for crawlers (GitHub Pages-friendly)."""
    entries = []
    for page in SITE["pages"].values():
        if page.get("key") == "not-found":
            continue
        slug = page.get("slug") or "/"
        loc = _sitemap_loc(slug)
        entries.append((loc, page.get("title", "")))

    entries.sort(key=lambda x: x[0])

    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    for loc, _title in entries:
        lines.append("  <url>")
        lines.append(f"    <loc>{escape(loc)}</loc>")
        lines.append("    <changefreq>monthly</changefreq>")
        lines.append("    <priority>0.8</priority>")
        lines.append("  </url>")
    lines.append("</urlset>")
    (ROOT / "sitemap.xml").write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_robots_txt():
    """Point crawlers at sitemap.xml (same base URL as sitemap)."""
    sitemap_url = f"{SITEMAP_BASE_URL}/sitemap.xml"
    body = (
        "User-agent: *\n"
        "Allow: /\n"
        "\n"
        f"Sitemap: {sitemap_url}\n"
    )
    (ROOT / "robots.txt").write_text(body, encoding="utf-8")


def ensure_dirs():
    for rel in ["assets/css", "assets/js", "assets/data", "assets/graphics"]:
        (ROOT / rel).mkdir(parents=True, exist_ok=True)


def write_site_map():
    content = "window.GA_SITE = " + json.dumps(SITE, ensure_ascii=False, indent=2) + ";\n"
    (ASSETS / "data" / "site-map.js").write_text(content, encoding="utf-8")


def write_css():
    css = textwrap.dedent(
        """
        html { scroll-behavior: smooth; }
        body {
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: linear-gradient(180deg, #f8fafc 0%, #ecfeff 45%, #f8fafc 100%);
          color: #0f172a;
        }
        .nav-pill {
          border-radius: 9999px;
          border: 1px solid rgb(226 232 240);
          background: rgba(255,255,255,0.82);
          padding: .6rem .95rem;
          font-size: .875rem;
          font-weight: 600;
          color: rgb(51 65 85);
          transition: all .2s ease;
        }
        .nav-pill:hover { border-color: rgb(103 232 249); color: rgb(14 116 144); }
        .nav-pill-active { border-color: rgb(34 211 238); background: rgb(236 254 255); color: rgb(8 145 178); }
        .sidebar-link,
        .sidebar-overview {
          display: block;
          border-radius: 1rem;
          border: 1px solid rgb(226 232 240);
          background: rgba(255,255,255,.92);
          padding: .85rem 1rem;
          font-size: .875rem;
          font-weight: 500;
          color: rgb(71 85 105);
          transition: all .2s ease;
        }
        .sidebar-link:hover,
        .sidebar-overview:hover { border-color: rgb(34 211 238); color: rgb(8 145 178); transform: translateY(-1px); }
        .sidebar-link.active,
        .sidebar-overview.active { border-color: rgb(34 211 238); background: rgb(236 254 255); color: rgb(8 145 178); }
        .sidebar-tree { display: grid; gap: .85rem; }
        .sidebar-group {
          border: 1px solid rgb(226 232 240);
          border-radius: 1.25rem;
          background: rgba(255,255,255,.88);
          overflow: hidden;
        }
        .sidebar-group[open] { border-color: rgb(34 211 238); }
        .sidebar-summary {
          list-style: none;
          cursor: pointer;
          padding: .95rem 1rem;
          font-size: .875rem;
          font-weight: 700;
          color: rgb(15 23 42);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: .75rem;
        }
        .sidebar-summary::-webkit-details-marker { display: none; }
        .sidebar-summary::after {
          content: "+";
          font-size: 1rem;
          color: rgb(8 145 178);
        }
        .sidebar-group[open] > .sidebar-summary::after { content: "−"; }
        .sidebar-summary.active-branch { background: rgb(236 254 255); }
        .sidebar-children {
          display: grid;
          gap: .55rem;
          padding: 0 .85rem .85rem .85rem;
        }
        .sidebar-leaf {
          display: block;
          border-radius: .9rem;
          padding: .7rem .85rem;
          font-size: .875rem;
          color: rgb(71 85 105);
          background: rgb(248 250 252);
          border: 1px solid rgb(226 232 240);
          transition: all .2s ease;
        }
        .sidebar-leaf:hover { border-color: rgb(34 211 238); color: rgb(8 145 178); }
        .sidebar-leaf.active { background: rgb(236 254 255); border-color: rgb(34 211 238); color: rgb(8 145 178); font-weight: 600; }
        .sidebar-depth-1 { margin-left: .35rem; }
        .sidebar-depth-2 { margin-left: .7rem; }
        .tooltip-term {
          position: relative;
          display: inline-flex;
          align-items: center;
          border-bottom: 1px dashed rgb(8 145 178);
          color: rgb(8 145 178);
          cursor: help;
          outline: none;
        }
        .tooltip-term::after {
          content: attr(data-tooltip);
          position: absolute;
          left: 50%;
          bottom: calc(100% + .7rem);
          transform: translateX(-50%) translateY(4px);
          width: min(20rem, 70vw);
          padding: .8rem .95rem;
          border-radius: 1rem;
          background: rgb(15 23 42);
          color: white;
          font-size: .8rem;
          line-height: 1.45;
          box-shadow: 0 18px 38px rgba(15, 23, 42, 0.28);
          opacity: 0;
          pointer-events: none;
          transition: opacity .18s ease, transform .18s ease;
          z-index: 30;
        }
        .tooltip-term:hover::after,
        .tooltip-term:focus::after {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        .info-card {
          border: 1px solid rgb(226 232 240);
          border-radius: 1.25rem;
          padding: 1rem 1.1rem;
          background: rgb(248 250 252);
        }
        .info-card-title {
          font-size: .75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .14em;
          color: rgb(8 145 178);
        }
        .info-card-body {
          margin-top: .55rem;
          font-size: .92rem;
          line-height: 1.65;
          color: rgb(71 85 105);
        }
        .simple-intro-card {
          margin-top: 1rem;
          border: 1px solid rgb(165 243 252);
          border-radius: 1rem;
          background: rgb(236 254 255);
          padding: 1rem 1.1rem;
        }
        .simple-intro-label {
          font-size: .75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .12em;
          color: rgb(8 145 178);
        }
        .simple-intro-body {
          margin-top: .45rem;
          font-size: .98rem;
          line-height: 1.7;
          color: rgb(15 23 42);
        }
        .why-matters-card {
          margin-top: 1rem;
          border: 1px solid rgb(186 230 253);
          border-radius: 1rem;
          background: rgb(240 249 255);
          padding: .95rem 1rem;
          font-size: .92rem;
          line-height: 1.65;
          color: rgb(15 23 42);
        }
        .evolution-steps {
          display: grid;
          gap: 1rem;
          align-items: stretch;
        }
        .evolution-stage {
          border: 1px solid rgb(226 232 240);
          border-radius: 1rem;
          background: white;
          padding: 1rem;
        }
        .evolution-stage-title {
          font-size: .82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .12em;
          color: rgb(8 145 178);
        }
        .evolution-sequence {
          margin-top: .65rem;
          display: flex;
          gap: .35rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        }
        .evolution-digit {
          display: inline-flex;
          width: 1.9rem;
          height: 1.9rem;
          align-items: center;
          justify-content: center;
          border-radius: .6rem;
          border: 1px solid rgb(203 213 225);
          background: rgb(248 250 252);
          color: rgb(51 65 85);
          font-size: .95rem;
          font-weight: 700;
        }
        .evolution-digit.one {
          border-color: rgb(34 197 94);
          background: rgb(240 253 244);
          color: rgb(22 101 52);
        }
        .evolution-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: rgb(8 145 178);
        }
        @media (min-width: 1024px) {
          .evolution-steps {
            grid-template-columns: 1fr auto 1fr auto 1fr;
          }
        }
        """
    ).strip() + "\n"
    (ASSETS / "css" / "site.css").write_text(css, encoding="utf-8")


def write_js():
    js = textwrap.dedent(
        """
        (function () {
          function esc(value) {
            return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
          }

          function href(slug, prefix) {
            if (slug === '/') return prefix || './';
            return (prefix || '') + slug.replace(/^\\//, '');
          }

          function branchContains(currentKey, nodeKey, site) {
            if (currentKey === nodeKey) return true;
            const page = site.pages[nodeKey];
            if (!page || !page.children) return false;
            return page.children.some(function (child) { return branchContains(currentKey, child, site); });
          }

          function ancestors(page, pages) {
            const chain = [];
            let current = page;
            while (current && current.parent) {
              current = pages[current.parent];
              if (current) chain.unshift(current.key);
            }
            return chain;
          }

          function badge(text) {
            return '<span class="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">' + esc(text) + '</span>';
          }

          function glossaryPattern(terms) {
            if (!terms || !terms.length) return null;
            return new RegExp(terms.map(function (term) {
              return term.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
            }).sort(function (a, b) {
              return b.length - a.length;
            }).join('|'), 'g');
          }

          function annotateText(text, site, page) {
            const glossary = site.glossary || {};
            const terms = (page.glossaryTerms || []).filter(function (term) { return glossary[term]; });
            const pattern = glossaryPattern(terms);
            var source = String(text).replace(/\\[\\[([^\\]]+)\\]\\]/g, '$1');
            if (!pattern) return esc(source);

            var result = '';
            var lastIndex = 0;
            source.replace(pattern, function (match, offset) {
              result += esc(source.slice(lastIndex, offset));
              result += '<span class="tooltip-term" tabindex="0" data-tooltip="' + esc(glossary[match]) + '">' + esc(match) + '</span>';
              lastIndex = offset + match.length;
              return match;
            });
            result += esc(source.slice(lastIndex));
            return result;
          }

          function renderTable(table) {
            if (!table) return '';
            return '<section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">' +
              '<div class="mb-4 flex items-center justify-between gap-3"><h2 class="text-2xl font-semibold text-slate-900">' + esc(table.title) + '</h2><span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">таблица</span></div>' +
              '<div class="overflow-x-auto"><table class="min-w-full divide-y divide-slate-200 text-left text-sm"><thead class="bg-slate-50"><tr>' +
              table.columns.map(function (c) { return '<th class="px-4 py-3 font-semibold text-slate-700">' + esc(c) + '</th>'; }).join('') +
              '</tr></thead><tbody class="divide-y divide-slate-100 bg-white">' +
              table.rows.map(function (row) {
                return '<tr>' + row.map(function (cell) { return '<td class="px-4 py-3 align-top text-slate-600">' + esc(cell) + '</td>'; }).join('') + '</tr>';
              }).join('') + '</tbody></table></div></section>';
          }

          function renderReadings(items) {
            if (!items || !items.length) return '';
            return '<section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><h2 class="text-2xl font-semibold text-slate-900">Препоръчано четиво</h2><ul class="mt-4 space-y-3">' +
              items.map(function (item) {
                return '<li class="rounded-2xl border border-slate-200 px-4 py-3 text-sm leading-6 text-slate-700"><a class="font-medium text-cyan-700 hover:text-cyan-900" href="' + esc(item.href) + '" target="_blank" rel="noreferrer">' + esc(item.label) + '</a></li>';
              }).join('') + '</ul></section>';
          }

          function renderStudyTracks(page, site, prefix) {
            if (!page.studyTracks || !page.studyTracks.length) return '';
            return '<section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div class="flex items-center justify-between gap-3"><h2 class="text-2xl font-semibold text-slate-900">Как да използвате сайта</h2><span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">учебни пътеки</span></div><div class="mt-5 grid gap-4 lg:grid-cols-2">' +
              page.studyTracks.map(function (track) {
                return '<article class="rounded-2xl border border-slate-200 bg-slate-50 p-5"><h3 class="text-lg font-semibold text-slate-900">' + esc(track.title) + '</h3><p class="mt-2 text-sm leading-6 text-slate-600">' + esc(track.description) + '</p><div class="mt-4 flex flex-wrap gap-2">' +
                  track.pages.map(function (key) {
                    const item = site.pages[key];
                    return item ? '<a class="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-cyan-300 hover:text-cyan-800" href="' + href(item.slug, prefix) + '">' + esc(item.nav) + '</a>' : '';
                  }).join('') + '</div></article>';
              }).join('') + '</div></section>';
          }

          function renderChildren(page, site, prefix) {
            if (!page.children || !page.children.length) return '';
            return '<section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div class="flex items-center justify-between gap-3"><h2 class="text-2xl font-semibold text-slate-900">Подстраници</h2><span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">' + page.children.length + ' страници</span></div><div class="mt-5 grid gap-4 md:grid-cols-2">' +
              page.children.map(function (childKey) {
                const child = site.pages[childKey];
                return '<a class="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-cyan-300 hover:bg-white hover:shadow-sm" href="' + href(child.slug, prefix) + '"><p class="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">' + esc(child.level) + '</p><h3 class="mt-2 text-lg font-semibold text-slate-900 group-hover:text-cyan-800">' + esc(child.title) + '</h3><p class="mt-2 text-sm leading-6 text-slate-600">' + esc(child.summary) + '</p></a>';
              }).join('') + '</div></section>';
          }

          function renderLinkGroup(title, keys, site, prefix) {
            if (!keys || !keys.length) return '';
            return '<section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><h2 class="text-2xl font-semibold text-slate-900">' + esc(title) + '</h2><div class="mt-4 flex flex-wrap gap-3">' +
              keys.map(function (key) {
                const item = site.pages[key];
                return item ? '<a class="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:text-cyan-800" href="' + href(item.slug, prefix) + '">' + esc(item.nav) + '</a>' : '';
              }).join('') + '</div></section>';
          }

          function renderFigure(page, prefix) {
            if (!page.diagram) return '';
            return '<figure class="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"><img class="w-full rounded-2xl border border-slate-100 bg-slate-50" src="' + esc((prefix || '') + 'assets/graphics/' + page.diagram) + '" alt="' + esc(page.title) + '"><figcaption class="mt-3 text-sm leading-6 text-slate-600">' + esc(page.figureCaption || '') + '</figcaption></figure>';
          }

          function renderPrerequisites(page, site, prefix) {
            if (!page.prerequisites || !page.prerequisites.length) return '';
            return '<section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><h2 class="text-2xl font-semibold text-slate-900">Преди тази страница</h2><div class="mt-4 flex flex-wrap gap-3">' +
              page.prerequisites.map(function (key) {
                const item = site.pages[key];
                return item ? '<a class="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:border-cyan-300 hover:text-cyan-800" href="' + href(item.slug, prefix) + '">' + esc(item.nav) + '</a>' : '';
              }).join('') + '</div></section>';
          }

          function renderSequence(sequence) {
            return '<div class="evolution-sequence">' + String(sequence).split('').map(function (digit) {
              const kind = digit === '1' ? ' one' : ' zero';
              return '<span class="evolution-digit' + kind + '">' + esc(digit) + '</span>';
            }).join('') + '</div>';
          }

          function renderSimpleExample(section, site, page) {
            const card = section.exampleCard;
            if (!card) return '';
            return '<div class="mt-5 rounded-2xl border border-cyan-200 bg-cyan-50 p-5">' +
              '<h3 class="text-xl font-semibold text-slate-900">' + esc(card.title) + '</h3>' +
              (card.intro ? '<p class="mt-3 text-sm leading-6 text-slate-700">' + annotateText(card.intro, site, page) + '</p>' : '') +
              (card.items && card.items.length ? '<ul class="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">' + card.items.map(function (item) { return '<li>' + esc(item) + '</li>'; }).join('') + '</ul>' : '') +
              (card.conclusion ? '<p class="mt-4 rounded-2xl border border-cyan-300 bg-white px-4 py-3 text-sm leading-6 text-cyan-950">' + esc(card.conclusion) + '</p>' : '') +
              '</div>';
          }

          function renderVisualSteps(section) {
            const steps = section.visualSteps || [];
            if (!steps.length) return '';
            return '<div class="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">' +
              '<div class="flex flex-wrap items-center justify-between gap-3"><h3 class="text-xl font-semibold text-slate-900">Step-by-step evolution</h3><span class="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-600">от поколение към поколение</span></div>' +
              '<div class="mt-5 evolution-steps">' +
              steps.map(function (step, index) {
                const stage = '<div class="evolution-stage"><p class="evolution-stage-title">' + esc(step.label) + '</p>' +
                  (step.sequences || []).map(renderSequence).join('') +
                  '</div>';
                if (index === steps.length - 1) return stage;
                return stage + '<div class="evolution-arrow" aria-hidden="true">→</div>';
              }).join('') +
              '</div></div>';
          }

          function renderSections(page, site) {
            return (page.sections || []).map(function (section) {
              return '<section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">' +
                '<h2 class="text-2xl font-semibold text-slate-900">' + esc(section.title) + '</h2>' +
                (section.simpleIntro ? '<div class="simple-intro-card"><p class="simple-intro-label">С прости думи</p><p class="simple-intro-body">' + annotateText(section.simpleIntro, site, page) + '</p></div>' : '') +
                (section.paragraphs || []).map(function (paragraph) {
                  return '<p class="mt-4 text-base leading-7 text-slate-700">' + annotateText(paragraph, site, page) + '</p>';
                }).join('') +
                (section.bullets && section.bullets.length ? '<ul class="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">' + section.bullets.map(function (bullet) { return '<li>' + annotateText(bullet, site, page) + '</li>'; }).join('') + '</ul>' : '') +
                (section.equations && section.equations.length ? '<div class="mt-5 grid gap-3">' + section.equations.map(function (equation) { return '<div class="rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-3 font-mono text-sm text-cyan-950">' + esc(equation) + '</div>'; }).join('') + '</div>' : '') +
                renderSimpleExample(section, site, page) +
                renderVisualSteps(section) +
                (section.whyMatters ? '<p class="why-matters-card">' + annotateText(section.whyMatters, site, page) + '</p>' : '') +
                (section.note ? '<p class="mt-4 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900">' + annotateText(section.note, site, page) + '</p>' : '') +
                '</section>';
            }).join('');
          }

          function renderGlossaryCards(page, site) {
            if (!page.glossaryTerms || !page.glossaryTerms.length) return '';
            return '<section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div class="flex items-center justify-between gap-3"><h2 class="text-2xl font-semibold text-slate-900">Полезни термини</h2><span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">hover или focus</span></div><div class="mt-5 grid gap-4 md:grid-cols-2">' +
              page.glossaryTerms.map(function (term) {
                const description = site.glossary[term];
                if (!description) return '';
                return '<div class="info-card"><p class="info-card-title">' + esc(term) + '</p><p class="info-card-body">' + esc(description) + '</p></div>';
              }).join('') + '</div></section>';
          }

          function renderHero(page, site, prefix) {
            const crumbs = ancestors(page, site.pages).concat([page.key]).map(function (key, index, arr) {
              const item = site.pages[key];
              if (!item) return '';
              if (index === arr.length - 1) return '<span class="text-slate-500">' + esc(item.nav) + '</span>';
              return '<a class="text-cyan-700 hover:text-cyan-900" href="' + href(item.slug, prefix) + '">' + esc(item.nav) + '</a>';
            }).join('<span class="mx-2 text-slate-300">/</span>');
            return '<section class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"><div class="flex flex-wrap items-center gap-3"><span class="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-900">' + esc(page.level) + '</span><span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">' + esc(page.nav) + '</span></div><h1 class="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">' + esc(page.title) + '</h1><p class="mt-4 max-w-3xl text-lg leading-8 text-slate-600">' + esc(page.summary) + '</p><div class="mt-6 flex flex-wrap gap-3">' + page.bullets.slice(0, 3).map(badge).join('') + '</div><div class="mt-6 text-sm text-slate-500">' + crumbs + '</div></section>';
          }

          function renderSidebar(page, site, prefix) {
            function node(key, depth) {
              const item = site.pages[key];
              const active = key === page.key;
              const onPath = branchContains(page.key, key, site);
              const hasChildren = item.children && item.children.length;
              if (!hasChildren) {
                return '<a class="sidebar-leaf sidebar-depth-' + Math.min(depth, 2) + (active ? ' active' : '') + '" href="' + href(item.slug, prefix) + '">' + esc(item.nav) + '</a>';
              }
              return '<details class="sidebar-group sidebar-depth-' + Math.min(depth, 2) + '"' + (onPath ? ' open' : '') + '>' +
                '<summary class="sidebar-summary' + (onPath ? ' active-branch' : '') + '">' + esc(item.nav) + '</summary>' +
                '<div class="sidebar-children">' +
                '<a class="sidebar-overview' + (active ? ' active' : '') + '" href="' + href(item.slug, prefix) + '">Преглед на раздела</a>' +
                item.children.map(function (childKey) { return node(childKey, depth + 1); }).join('') +
                '</div></details>';
            }

            return '<div class="sidebar-tree">' +
              '<a class="sidebar-link' + (page.key === 'home' ? ' active' : '') + '" href="' + href('/', prefix) + '">Начало</a>' +
              site.topLevel.filter(function (key) { return key !== 'home'; }).map(function (key) { return node(key, 0); }).join('') +
              '</div>';
          }

          function renderNav(site, prefix, currentKey) {
            const current = site.pages[currentKey];
            const chain = current ? ancestors(current, site.pages) : [];
            return site.topLevel.map(function (key) {
              const item = site.pages[key];
              const active = key === currentKey || chain.indexOf(key) !== -1 ? ' nav-pill-active' : '';
              return '<a class="nav-pill' + active + '" href="' + href(item.slug, prefix) + '">' + esc(item.nav) + '</a>';
            }).join('');
          }

          function init() {
            const site = window.GA_SITE;
            if (!site) return;
            const body = document.body;
            const page = site.pages[body.dataset.page];
            const prefix = body.dataset.rootPrefix || '';
            if (!page) return;

            document.title = page.title + ' | Genetic Algorithms';
            const meta = document.querySelector('meta[name="description"]');
            if (meta) meta.setAttribute('content', page.summary);

            document.getElementById('main-nav').innerHTML = renderNav(site, prefix, page.key);
            document.getElementById('mobile-nav').innerHTML = renderSidebar(page, site, prefix);
            document.getElementById('site-sidebar').innerHTML = renderSidebar(page, site, prefix);

            const tables = (page.tables || []).map(function (key) { return site.tables[key]; }).map(renderTable).join('');
            const relatedPrimary = renderLinkGroup('Прочетете след това', page.relatedPrimary, site, prefix);
            const relatedSecondary = renderLinkGroup('Полезни, но по-широки теми', page.relatedSecondary, site, prefix);
            document.getElementById('page-content').innerHTML =
              renderHero(page, site, prefix) +
              renderStudyTracks(page, site, prefix) +
              renderPrerequisites(page, site, prefix) +
              renderFigure(page, prefix) +
              renderChildren(page, site, prefix) +
              renderSections(page, site) +
              renderGlossaryCards(page, site) +
              tables +
              relatedPrimary +
              relatedSecondary +
              renderReadings(page.readings);

            document.getElementById('footer-links').innerHTML = site.topLevel.slice(1).map(function (key) {
              const item = site.pages[key];
              return '<a class="text-slate-500 transition hover:text-cyan-700" href="' + href(item.slug, prefix) + '">' + esc(item.nav) + '</a>';
            }).join('');

            const toggle = document.getElementById('menu-toggle');
            const panel = document.getElementById('mobile-panel');
            if (toggle && panel) {
              toggle.addEventListener('click', function () {
                panel.classList.toggle('hidden');
              });
            }
          }

          document.addEventListener('DOMContentLoaded', init);
        })();
        """
    ).strip() + "\n"
    (ASSETS / "js" / "site.js").write_text(js, encoding="utf-8")


def svg_content(title, subtitle, labels):
    nodes = []
    x = 80
    for label in labels:
        nodes.append(f'<rect x="{x}" y="210" width="130" height="48" rx="18" fill="#ecfeff" stroke="#06b6d4" stroke-width="2" />')
        nodes.append(f'<text x="{x + 65}" y="240" text-anchor="middle" font-size="16" fill="#0f172a" font-family="Arial, sans-serif">{label}</text>')
        x += 145
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="360" viewBox="0 0 1200 360" role="img" aria-labelledby="title desc">
  <title id="title">{title}</title>
  <desc id="desc">{subtitle}</desc>
  <rect width="1200" height="360" fill="#f8fafc" rx="24" />
  <rect x="40" y="40" width="1120" height="280" rx="28" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
  <text x="80" y="100" font-size="34" font-weight="700" fill="#0f172a" font-family="Arial, sans-serif">{title}</text>
  <text x="80" y="140" font-size="18" fill="#475569" font-family="Arial, sans-serif">{subtitle}</text>
  <path d="M80 182 H1080" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" stroke-dasharray="10 12" />
  {' '.join(nodes)}
</svg>"""


def write_graphics():
    specs = {
        "site-navigation.svg": ("Карта на сайта", "Начало и основните hubs от PDF спецификацията", ["Начало", "ГА", "Теория", "Представяния", "Оператори", "Оценяване"]),
        "ga-process-flow.svg": ("Каноничен процес", "Init -> Evaluate -> Select -> Crossover -> Mutate -> Replace", ["Init", "Evaluate", "Select", "Cross", "Mutate", "Replace"]),
        "theory-map.svg": ("Теоретична карта", "Формален модел, schema theorem, convergence и NFL", ["Model", "Schema", "Convergence", "NFL"]),
        "representation-overview.svg": ("Представяния", "Binary, real, permutations, random keys и GP", ["Binary", "Real", "Perm", "Random keys", "GP"]),
        "operators-overview.svg": ("Оператори", "Selection pressure, recombination и mutation", ["Selection", "Pressure", "Crossover", "Mutation"]),
        "pareto-front-illustration.svg": ("Pareto front", "Tradeoff между цели вместо единичен optimum", ["Objective 1", "Objective 2", "Tradeoff"]),
        "metrics-map.svg": ("Метрики", "ERT, ECDF, HV, IGD и benchmarks", ["ERT", "ECDF", "HV", "IGD", "Benchmarks"]),
        "library-selection-flow.svg": ("Избор на библиотека", "Tooling според problem type и workflow", ["DEAP", "pymoo", "pygmo", "jMetal"]),
    }
    for filename, (title, subtitle, labels) in specs.items():
        (ASSETS / "graphics" / filename).write_text(svg_content(title, subtitle, labels), encoding="utf-8")


def page_template(page_key, prefix):
    home_href = prefix or "./"
    return textwrap.dedent(
        f"""<!doctype html>
<html lang="bg">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Генетични алгоритми - статичен справочник по PDF спецификацията.">
    <title>Genetic Algorithms</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {{
        theme: {{
          extend: {{
            boxShadow: {{ soft: "0 20px 45px rgba(15, 23, 42, 0.08)" }}
          }}
        }}
      }};
    </script>
    <link rel="stylesheet" href="{prefix}assets/css/site.css">
    <script defer src="{prefix}assets/data/site-map.js"></script>
    <script defer src="{prefix}assets/js/site.js"></script>
  </head>
  <body data-page="{page_key}" data-root-prefix="{prefix}" class="text-slate-900">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cyan-700">Skip to content</a>
    <div class="mx-auto max-w-[1600px] px-4 pb-16 pt-6 sm:px-6 lg:px-8">
      <header class="rounded-[2rem] border border-slate-200 bg-white/85 p-5 shadow-soft backdrop-blur">
        <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <a href="{home_href}" class="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-700">Genetic Algorithms</a>
            <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Статичен учебен сайт, изграден по структурата от PDF документа и подготвен за GitHub Pages deployment.</p>
          </div>
          <button id="menu-toggle" type="button" class="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 xl:hidden">Меню</button>
        </div>
        <nav id="main-nav" class="mt-5 hidden flex-wrap gap-3 xl:flex"></nav>
        <div id="mobile-panel" class="mt-4 hidden rounded-3xl border border-slate-200 bg-slate-50 p-4 xl:hidden">
          <nav id="mobile-nav" class="flex flex-col gap-3"></nav>
        </div>
      </header>
      <div class="mt-8 grid gap-8 xl:grid-cols-[280px_minmax(0,1fr)]">
        <aside class="space-y-4 xl:sticky xl:top-6 xl:self-start">
          <div class="rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-sm">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Навигация в секцията</p>
            <div id="site-sidebar" class="mt-4 space-y-3"></div>
          </div>
          <div class="rounded-[2rem] border border-slate-200 bg-slate-950 p-5 text-sm leading-6 text-slate-200 shadow-sm">
            <p class="font-semibold text-white">Static and future-proof</p>
            <p class="mt-3">HTML файлове във вложени папки, Tailwind от CDN и относителни връзки за безпроблемен GitHub Pages deploy.</p>
          </div>
        </aside>
        <main id="main-content">
          <div id="page-content" class="space-y-6"></div>
        </main>
      </div>
      <footer class="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p class="text-sm font-semibold text-slate-900">Genetic Algorithms Static Site</p>
            <p class="mt-2 text-sm leading-6 text-slate-600">Подготвен за GitHub Pages, без framework, без bundler и без client-side router.</p>
          </div>
          <nav id="footer-links" class="flex flex-wrap gap-3 text-sm"></nav>
        </div>
      </footer>
    </div>
  </body>
</html>
"""
    )


def write_pages():
    for item in SITE["pages"].values():
        slug = item["slug"]
        if item["key"] == "not-found":
            (ROOT / "404.html").write_text(page_template("not-found", ""), encoding="utf-8")
            continue
        segments = [segment for segment in slug.strip("/").split("/") if segment]
        prefix = "../" * len(segments)
        if slug == "/":
            (ROOT / "index.html").write_text(page_template(item["key"], ""), encoding="utf-8")
        else:
            folder = ROOT.joinpath(*segments)
            folder.mkdir(parents=True, exist_ok=True)
            (folder / "index.html").write_text(page_template(item["key"], prefix), encoding="utf-8")


def write_readme():
    readme = textwrap.dedent(
        """
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
        """
    ).strip() + "\n"
    (ROOT / "README.md").write_text(readme, encoding="utf-8")
    (ROOT / ".nojekyll").write_text("", encoding="utf-8")


def main():
    ensure_dirs()
    write_site_map()
    write_sitemap_xml()
    write_robots_txt()
    write_css()
    write_js()
    write_graphics()
    write_pages()
    write_readme()


if __name__ == "__main__":
    main()
