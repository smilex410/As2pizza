/* =========================================================
   L'As 2 Pizz — interactions
   ========================================================= */
(function () {
  'use strict';

  /* ── Données de la carte ──────────────────────────── */
  const CARTE = {
    tomate: [
      { n: 'Margarita',          d: 'Sauce tomate, mozzarella',                                                     s: 9.00,  l: 14.00 },
      { n: 'Jambon-Fromage',     d: 'Sauce tomate, mozzarella, jambon',                                             s: 9.50,  l: 14.50 },
      { n: 'Royale',             d: 'Sauce tomate, mozzarella, jambon, champignons',                                s: 10.00, l: 15.00 },
      { n: 'Calzone',            d: 'Chausson — sauce tomate, mozzarella, jambon, champignons, œuf',                s: 10.50, l: 15.50 },
      { n: 'Soufflée',           d: 'Sauce tomate, mozzarella, roquefort, gorgonzola, champignons',                 s: 10.50, l: 15.50 },
      { n: 'Orientale',          d: 'Sauce tomate, mozzarella, merguez, poivrons',                                  s: 11.00, l: 16.00 },
      { n: 'Napolitaine',        d: 'Sauce tomate, mozzarella, anchois, câpres',                                    s: 11.00, l: 16.00 },
      { n: 'Pizza Steak',        d: 'Sauce tomate, mozzarella, steak haché, roquefort, filet de crème fraîche',     s: 11.00, l: 16.00 },
      { n: 'Fruits de Mer',      d: 'Sauce tomate, mozzarella, fruits de mer, persillade',                          s: 11.00, l: 16.00 },
      { n: 'Fromaggio',          d: 'Sauce tomate, mozzarella, roquefort, gorgonzola',                              s: 11.00, l: 16.00 },
      { n: 'Chavignol',          d: 'Sauce tomate, mozzarella, chèvre, miel',                                       s: 11.00, l: 16.00 },
      { n: 'Primeure',           d: 'Sauce tomate, mozzarella, champignons, poivrons, aubergine, persillade',       s: 11.00, l: 16.00 },
      { n: 'Exotique',           d: 'Sauce tomate, mozzarella, champignons, ananas, poulet curry',                  s: 11.00, l: 16.00 },
      { n: 'Thon',               d: 'Sauce tomate, mozzarella, oignons, olives, persillade, thon',                  s: 11.00, l: 16.00 },
      { n: '4 Saisons',          d: 'Sauce tomate, mozzarella, jambon, champignons, poivrons, œuf, olives',         s: 11.50, l: 16.50 },
      { n: 'Diabolo',            d: 'Sauce tomate, mozzarella, steak haché, chorizo, merguez',                      s: 12.00, l: 17.00 },
      { n: 'Spéciale',           d: 'Sauce tomate, mozzarella, chorizo, merguez, poulet curry, poivrons, miel',     s: 12.00, l: 17.00 },
      { n: 'Andalouse',          d: 'Sauce tomate, mozzarella, chorizo, poivrons, sauce andalouse',                 s: 12.00, l: 17.00 }
    ],
    creme: [
      { n: 'Roquefort-Crème',    d: 'Crème fraîche, mozzarella, roquefort, champignons',                            s: 11.00, l: 16.00 },
      { n: 'Savoyarde',          d: 'Crème fraîche, mozzarella, pommes de terre, lardons, raclette',                s: 11.00, l: 16.00 },
      { n: 'Campanaire',         d: 'Crème fraîche, mozzarella, lardons, oignons, champignons',                     s: 11.00, l: 16.00 },
      { n: 'Indienne',           d: 'Crème fraîche, mozzarella, curry, poulet, poivrons',                           s: 11.00, l: 16.00 },
      { n: 'Fermière',           d: 'Crème fraîche, mozzarella, lardons, chèvre, miel',                             s: 12.00, l: 17.00 },
      { n: 'Buffalo',            d: 'Crème fraîche, mozzarella, steak haché, pommes de terre, oignons',             s: 12.00, l: 17.00 },
      { n: 'Boisé',              d: 'Crème fraîche, mozzarella, champignons, raclette, poulet',                     s: 12.00, l: 17.00 },
      { n: 'Tartiflette',        d: 'Crème fraîche, mozzarella, pommes de terre, lardons, jambon, oignons, reblochon', s: 13.00, l: 18.00 },
      { n: 'Saumon',             d: 'Crème fraîche, mozzarella, saumon, basilic',                                   s: 13.00, l: 18.00 },
      { n: 'Saint-Jacques',      d: 'Crème fraîche, mozzarella, Saint-Jacques, crevettes, persillade',              s: 13.00, l: 18.00 },
      { n: 'Raviole',            d: 'Crème fraîche, mozzarella, raviole, persillade, + 1 ingrédient au choix',      s: 13.00, l: 18.00 }
    ],
    salade: [
      { n: 'Salade Chèvre',      d: 'Salade verte, tomates cerises, lardons, maïs, tartine de chèvre chaud, œuf au plat, olives, crème de basilic, emmental', s: 10.00, l: 9.20, alt: true },
      { n: 'Salade Saumon',      d: 'Salade verte, tomates cerises, saumon, maïs, croûtons, olives, crème de basilic, emmental', s: 10.00, l: 9.00, alt: true }
    ],
    autre: [
      { grp: 'Dessert' },
      { n: 'Tiramisu',           d: 'Fait maison, cacao amer',                                                      p: 3.00 },
      { grp: 'Boissons' },
      { n: 'Canette 33 cl',      d: 'Sodas et boissons fraîches',                                                   p: 1.50 },
      { n: 'Eau 50 cl',          d: '',                                                                             p: 1.50 },
      { n: 'Bouteille 1,5 L',    d: 'À partager',                                                                   p: 3.00 },
      { grp: 'Pour les grandes tablées' },
      { n: 'Plaque à pizza',     d: '60 cm × 40 cm — la solution des anniversaires et des soirées foot', p: 30.00, wide: true }
    ]
  };

  const euro = (v) => v.toFixed(2).replace('.', ',') + ' €';
  const esc  = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const menuEl  = document.getElementById('menu');
  const sizesEl = document.getElementById('sizes');
  let cat  = 'tomate';
  let size = 's';

  function render() {
    const rows = CARTE[cat] || [];
    const hasSizes = cat === 'tomate' || cat === 'creme' || cat === 'salade';
    sizesEl.classList.toggle('is-hidden', !hasSizes);
    menuEl.classList.toggle('menu--single', cat === 'autre' || cat === 'salade');

    // Les salades ont deux prix "sur place / à emporter" plutôt que deux tailles.
    const segs = sizesEl.querySelectorAll('.seg__b');
    if (cat === 'salade') {
      segs[0].textContent = 'Sur place';
      segs[1].textContent = 'À emporter';
    } else {
      segs[0].textContent = '33 cm';
      segs[1].textContent = '40 cm';
    }

    const label = cat === 'salade'
      ? (size === 's' ? 'sur place' : 'à emporter')
      : (size === 's' ? '33 cm' : '40 cm');

    menuEl.innerHTML = rows.map((r, i) => {
      if (r.grp) return `<p class="grp">${esc(r.grp)}</p>`;

      const price = r.p != null ? r.p : (size === 's' ? r.s : r.l);
      const sub   = r.p != null ? '' : `<small>${label}</small>`;

      return `
        <article class="item${r.wide ? ' item--wide' : ''}">
          <div class="item__txt">
            <h3 class="item__name">${esc(r.n)}</h3>
            ${r.d ? `<p class="item__desc">${esc(r.d)}</p>` : ''}
          </div>
          <p class="item__price">${euro(price)}${sub}</p>
        </article>`;
    }).join('');
  }

  document.querySelectorAll('.tab').forEach((t) => {
    t.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((o) => {
        o.classList.toggle('is-on', o === t);
        o.setAttribute('aria-selected', String(o === t));
      });
      cat = t.dataset.cat;
      render();
    });
  });

  sizesEl.querySelectorAll('.seg__b').forEach((b) => {
    b.addEventListener('click', () => {
      sizesEl.querySelectorAll('.seg__b').forEach((o) => {
        o.classList.toggle('is-on', o === b);
        o.setAttribute('aria-pressed', String(o === b));
      });
      size = b.dataset.size;
      render();
    });
  });

  render();

  /* ── Menu mobile ──────────────────────────────────── */
  const burger = document.getElementById('burger');
  const nav    = document.getElementById('nav');

  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });

  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      burger.focus();
    }
  });

  /* ── Ombre du header au scroll ────────────────────── */
  const hdr = document.getElementById('hdr');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      hdr.classList.toggle('is-stuck', window.scrollY > 40);
      ticking = false;
    });
  }, { passive: true });

  /* ── Apparition au scroll ─────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  /* ── Lien de nav actif ────────────────────────────── */
  const secs  = ['carte', 'maison', 'commander', 'infos'].map((id) => document.getElementById(id)).filter(Boolean);
  const links = new Map([...document.querySelectorAll('.nav a')].map((a) => [a.getAttribute('href').slice(1), a]));

  if (secs.length && 'IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        const a = links.get(en.target.id);
        if (a && en.isIntersecting) {
          links.forEach((l) => l.classList.remove('is-active'));
          a.classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    secs.forEach((s) => spy.observe(s));
  }

  /* ── Année du footer ──────────────────────────────── */
  document.getElementById('yr').textContent = new Date().getFullYear();
})();
