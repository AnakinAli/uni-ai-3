(function () {
  function esc(value) {
    return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function href(slug, prefix) {
    if (slug === '/') return prefix || './';
    return (prefix || '') + slug.replace(/^\//, '');
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
      return term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }).sort(function (a, b) {
      return b.length - a.length;
    }).join('|'), 'g');
  }

  function annotateText(text, site, page) {
    const glossary = site.glossary || {};
    const terms = (page.glossaryTerms || []).filter(function (term) { return glossary[term]; });
    const pattern = glossaryPattern(terms);
    var source = String(text).replace(/\[\[([^\]]+)\]\]/g, '$1');
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
