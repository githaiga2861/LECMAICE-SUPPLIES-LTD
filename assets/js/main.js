/* =========================================================================
   Lecmaice Supplies Ltd — site behaviour
   Sections: storage · quote list · reveals · header · catalogue · forms
   ========================================================================= */
(function () {
  'use strict';

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const KES = n => 'KSh ' + Number(n).toLocaleString('en-KE');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Storage with in-memory fallback ---------- */
  const store = (() => {
    let mem = {};
    let ok = true;
    try { localStorage.setItem('__t', '1'); localStorage.removeItem('__t'); } catch (e) { ok = false; }
    return {
      get(k, d) {
        try { const v = ok ? localStorage.getItem(k) : mem[k]; return v ? JSON.parse(v) : d; }
        catch (e) { return d; }
      },
      set(k, v) {
        try { const s = JSON.stringify(v); if (ok) localStorage.setItem(k, s); else mem[k] = s; }
        catch (e) { mem[k] = JSON.stringify(v); }
      }
    };
  })();

  /* ---------- Toast ---------- */
  let toastEl, toastTimer;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      toastEl.setAttribute('role', 'status');
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    requestAnimationFrame(() => toastEl.classList.add('on'));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('on'), 2600);
  }

  /* =======================================================================
     Quote list — the site's basket. B2B supply is quoted, not checked out.
     ======================================================================= */
  const Quote = {
    items: store.get('lecmaice.quote', []),
    save() { store.set('lecmaice.quote', this.items); this.render(); },
    find(sku) { return this.items.find(i => i.sku === sku); },
    add(sku, qty) {
      const p = (window.PRODUCTS || []).find(x => x.sku === sku);
      if (!p) return;
      const existing = this.find(sku);
      if (existing) existing.qty += (qty || 1);
      else this.items.push({ sku: p.sku, name: p.name, price: p.price, unit: p.unit, img: p.img, qty: qty || 1 });
      this.save();
      toast(p.name + ' added to quote');
    },
    setQty(sku, qty) {
      const it = this.find(sku);
      if (!it) return;
      it.qty = Math.max(1, Math.min(99999, qty || 1));
      this.save();
    },
    remove(sku) { this.items = this.items.filter(i => i.sku !== sku); this.save(); },
    clear() { this.items = []; this.save(); },
    count() { return this.items.reduce((n, i) => n + i.qty, 0); },
    total() { return this.items.reduce((n, i) => n + i.qty * i.price, 0); },
    render() {
      const badge = $('.quote-btn .count');
      if (badge) {
        const c = this.count();
        badge.textContent = c;
        badge.classList.toggle('on', c > 0);
      }
      const body = $('#drawerBody');
      if (body) {
        if (!this.items.length) {
          body.innerHTML =
            '<div class="drawer__empty"><img src="assets/img/lecmaice-mark-light.png" alt="">' +
            '<p>Your quote list is empty.</p>' +
            '<a class="btn btn--sm" href="catalogue.html">Browse the catalogue</a></div>';
        } else {
          body.innerHTML = this.items.map(i => `
            <div class="q-item" data-sku="${i.sku}">
              ${i.img ? `<img src="${i.img}" alt="${i.name}">` : `<div class="q-item__ph">${i.sku.slice(-3)}</div>`}
              <div>
                <b>${i.name}</b>
                <small>${i.sku} · ${KES(i.price)} ${i.unit ? '· ' + i.unit : ''}</small>
                <div class="qty">
                  <button type="button" data-step="-1" aria-label="Reduce quantity">−</button>
                  <input type="number" min="1" value="${i.qty}" aria-label="Quantity for ${i.name}">
                  <button type="button" data-step="1" aria-label="Increase quantity">+</button>
                </div>
              </div>
              <button class="q-item__rm" type="button" aria-label="Remove ${i.name}">×</button>
            </div>`).join('');
        }
      }
      const totalEl = $('#drawerTotal');
      if (totalEl) totalEl.textContent = KES(this.total());
      const lineEl = $('#drawerLines');
      if (lineEl) lineEl.textContent = this.items.length + (this.items.length === 1 ? ' line' : ' lines');
      document.dispatchEvent(new CustomEvent('quote:change'));
    }
  };
  window.Quote = Quote;

  /* Drawer open/close */
  function openDrawer(open) {
    const d = $('#quoteDrawer'), s = $('#drawerScrim');
    if (!d) return;
    d.classList.toggle('open', open);
    s.classList.toggle('open', open);
    d.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('no-scroll', open);
    if (open) { const c = $('.drawer__head button', d); if (c) c.focus(); }
  }

  document.addEventListener('click', e => {
    const openBtn = e.target.closest('[data-open-quote]');
    if (openBtn) { e.preventDefault(); openDrawer(true); return; }
    if (e.target.closest('[data-close-quote]') || e.target.id === 'drawerScrim') { openDrawer(false); return; }

    const add = e.target.closest('[data-add]');
    if (add) {
      e.preventDefault();
      const qtyInput = add.dataset.qtyFrom ? $(add.dataset.qtyFrom) : null;
      Quote.add(add.dataset.add, qtyInput ? parseInt(qtyInput.value, 10) : 1);
      add.classList.add('added');
      setTimeout(() => add.classList.remove('added'), 1400);
      return;
    }

    const row = e.target.closest('.q-item');
    if (row) {
      const sku = row.dataset.sku;
      if (e.target.closest('.q-item__rm')) { Quote.remove(sku); return; }
      const step = e.target.closest('[data-step]');
      if (step) {
        const it = Quote.find(sku);
        Quote.setQty(sku, it.qty + parseInt(step.dataset.step, 10));
      }
    }
    if (e.target.closest('[data-clear-quote]')) { Quote.clear(); toast('Quote list cleared'); }
  });

  document.addEventListener('change', e => {
    const row = e.target.closest('.q-item');
    if (row && e.target.matches('input[type="number"]')) Quote.setQty(row.dataset.sku, parseInt(e.target.value, 10));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { openDrawer(false); closeModal(); }
  });

  /* =======================================================================
     Scroll reveals — one shared observer, per-element animation type
     ======================================================================= */
  function initReveals(scope) {
    const els = $$('[data-anim]', scope || document).filter(el => !el.dataset.observed);
    if (reduced || !('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const delay = parseInt(el.dataset.delay || 0, 10);
        setTimeout(() => el.classList.add('in'), delay);
        obs.unobserve(el);
      });
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
    els.forEach(el => { el.dataset.observed = '1'; io.observe(el); });
  }

  /* Stagger indices for grids */
  $$('[data-stagger]').forEach(g => {
    Array.from(g.children).forEach((c, i) => c.style.setProperty('--i', i));
  });
  $$('.split-line').forEach((l, i) => l.style.setProperty('--i', i % 6));

  /* Counters */
  function initCounters() {
    const nums = $$('[data-count]');
    if (!nums.length) return;
    const run = el => {
      const target = parseFloat(el.dataset.count);
      const dur = 1500, t0 = performance.now();
      const suffix = el.dataset.suffix || '';
      const step = now => {
        const p = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target >= 100 ? Math.round(target * eased) : (target * eased).toFixed(target % 1 ? 1 : 0);
        el.textContent = Number(val).toLocaleString('en-KE') + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (reduced) { nums.forEach(n => n.textContent = Number(n.dataset.count).toLocaleString('en-KE') + (n.dataset.suffix || '')); return; }
    const io = new IntersectionObserver((es, obs) => {
      es.forEach(e => { if (e.isIntersecting) { run(e.target); obs.unobserve(e.target); } });
    }, { threshold: .5 });
    nums.forEach(n => io.observe(n));
  }

  /* =======================================================================
     Header behaviour
     ======================================================================= */
  function initHeader() {
    const header = $('.header');
    if (!header) return;
    let last = 0;
    const bar = $('.scroll-progress');
    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle('is-stuck', y > 40);
      header.classList.toggle('is-hidden', y > 400 && y > last && !$('#quoteDrawer.open'));
      last = y;
      if (bar) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const burger = $('.burger'), mnav = $('.mobile-nav');
    if (burger && mnav) {
      burger.addEventListener('click', () => {
        const open = !mnav.classList.contains('open');
        mnav.classList.toggle('open', open);
        burger.classList.toggle('open', open);
        burger.setAttribute('aria-expanded', String(open));
        document.body.classList.toggle('no-scroll', open);
        $$('a', mnav).forEach((a, i) => a.style.transitionDelay = (open ? 0.12 + i * 0.06 : 0) + 's');
      });
      $$('a', mnav).forEach(a => a.addEventListener('click', () => {
        mnav.classList.remove('open'); burger.classList.remove('open'); document.body.classList.remove('no-scroll');
      }));
    }
  }

  /* =======================================================================
     Product cards + catalogue
     ======================================================================= */
  function cardHTML(p, i) {
    const media = p.img
      ? `<img src="${p.img}" alt="${p.name}" loading="lazy">`
      : `<div class="p-card__ph"><img src="assets/img/lecmaice-mark.png" alt=""><span>${p.sub}</span></div>`;
    return `
      <article class="p-card" data-anim="rise" data-delay="${(i % 4) * 70}" data-sku="${p.sku}">
        <div class="p-card__media">
          ${p.tag ? `<span class="p-card__tag ${p.tag === 'Best seller' ? 'p-card__tag--hot' : ''}">${p.tag}</span>` : ''}
          ${media}
          <button class="p-card__quick" type="button" data-quick="${p.sku}">Quick view</button>
        </div>
        <div class="p-card__body">
          <span class="p-card__sku">${p.sku}</span>
          <h3 class="p-card__name">${p.name}</h3>
          <p class="p-card__desc">${p.blurb}</p>
          <div class="p-card__foot">
            <span class="p-card__price">${KES(p.price)}<small>${p.unit}</small></span>
            <button class="p-card__add" type="button" data-add="${p.sku}" aria-label="Add ${p.name} to quote list">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
            </button>
          </div>
        </div>
      </article>`;
  }

  function initFeatured() {
    const grid = $('#featuredGrid');
    if (!grid) return;
    const picks = ['LT-PP-314', 'LT-CW-201', 'LT-BT-101', 'LT-PP-311', 'LT-ST-502', 'LT-UF-401', 'LT-PP-303', 'LT-OF-601'];
    grid.innerHTML = picks.map((sku, i) => {
      const p = PRODUCTS.find(x => x.sku === sku);
      return p ? cardHTML(p, i) : '';
    }).join('');
    initReveals(grid);
  }

  function initCatalogue() {
    const grid = $('#catalogueGrid');
    if (!grid) return;

    const state = { cats: [], q: '', sort: 'featured' };
    const params = new URLSearchParams(location.search);
    if (params.get('cat')) state.cats = [params.get('cat')];
    if (params.get('q')) state.q = params.get('q');

    /* Build filter rail */
    const rail = $('#filterCats');
    if (rail) {
      rail.innerHTML = CATEGORIES.map(c => {
        const n = PRODUCTS.filter(p => p.cat === c.id).length;
        const on = state.cats.includes(c.id) ? 'checked' : '';
        return `<label class="filter-opt"><input type="checkbox" value="${c.id}" ${on}><span>${c.name}</span><em class="n">${n}</em></label>`;
      }).join('');
    }
    const subRail = $('#filterSubs');
    function renderSubs() {
      if (!subRail) return;
      const keep = $$('#filterSubs input:checked').map(i => i.value);
      const pool = state.cats.length ? PRODUCTS.filter(p => state.cats.includes(p.cat)) : PRODUCTS;
      const subs = Array.from(new Set(pool.map(p => p.sub))).sort();
      subRail.innerHTML = subs.map(s =>
        `<label class="filter-opt"><input type="checkbox" data-sub value="${s}" ${keep.includes(s) ? 'checked' : ''}><span>${s}</span><em class="n">${pool.filter(p => p.sub === s).length}</em></label>`
      ).join('');
    }
    renderSubs();

    const searchInput = $('#catSearch');
    if (searchInput && state.q) searchInput.value = state.q;

    function currentSubs() { return $$('#filterSubs input:checked').map(i => i.value); }

    function apply() {
      const subs = currentSubs();
      let list = PRODUCTS.filter(p => {
        if (state.cats.length && !state.cats.includes(p.cat)) return false;
        if (subs.length && !subs.includes(p.sub)) return false;
        if (state.q) {
          const hay = (p.name + ' ' + p.sku + ' ' + p.sub + ' ' + p.blurb).toLowerCase();
          if (!hay.includes(state.q.toLowerCase())) return false;
        }
        return true;
      });
      if (state.sort === 'price-asc') list.sort((a, b) => a.price - b.price);
      if (state.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
      if (state.sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));

      grid.innerHTML = list.length
        ? list.map(cardHTML).join('')
        : `<div class="drawer__empty" style="grid-column:1/-1">
             <p class="h-sm">No products match that filter.</p>
             <p>Try a different keyword, or ask us to source it — we supply beyond this catalogue.</p>
             <a class="btn btn--sm" href="contact.html">Ask us to source it</a>
           </div>`;
      const count = $('#resultCount');
      if (count) count.textContent = list.length + ' of ' + PRODUCTS.length + ' products';
      initReveals(grid);
    }

    document.addEventListener('change', e => {
      if (e.target.closest('#filterCats')) {
        state.cats = $$('#filterCats input:checked').map(i => i.value);
        renderSubs();
        apply();
      }
      if (e.target.closest('#filterSubs')) apply();
      if (e.target.id === 'catSort') { state.sort = e.target.value; apply(); }
    });
    if (searchInput) {
      let t;
      searchInput.addEventListener('input', () => {
        clearTimeout(t);
        t = setTimeout(() => { state.q = searchInput.value.trim(); apply(); }, 180);
      });
    }
    const clearBtn = $('#clearFilters');
    if (clearBtn) clearBtn.addEventListener('click', () => {
      state.cats = []; state.q = ''; state.sort = 'featured';
      $$('.filter-rail input:checked').forEach(i => i.checked = false);
      renderSubs();
      if (searchInput) searchInput.value = '';
      const sortSel = $('#catSort'); if (sortSel) sortSel.value = 'featured';
      apply();
    });
    const ft = $('#filterToggle');
    if (ft) ft.addEventListener('click', () => $('.filter-rail').classList.toggle('open'));

    apply();
  }

  /* ---------- Quick view modal ---------- */
  function closeModal() {
    const m = $('#quickView');
    if (m && m.classList.contains('open')) {
      m.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }
  }
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-quick]');
    const modal = $('#quickView');
    if (btn && modal) {
      const p = PRODUCTS.find(x => x.sku === btn.dataset.quick);
      if (!p) return;
      $('#qvBody').innerHTML = `
        <div class="modal__media">
          ${p.img ? `<img src="${p.img}" alt="${p.name}">` : `<img src="assets/img/lecmaice-mark.png" alt="" style="opacity:.25">`}
        </div>
        <div class="modal__body">
          <span class="mono flare">${p.sku}</span>
          <h3 class="h-md" style="margin:10px 0 12px">${p.name}</h3>
          <p class="lede" style="font-size:.95rem">${p.blurb}</p>
          <table class="spec-table">
            ${Object.entries(p.specs).map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
          </table>
          <div class="p-card__price" style="font-size:1.6rem">${KES(p.price)}<small>${p.unit} · excl. VAT</small></div>
          <div class="pd__actions">
            <button class="btn" type="button" data-add="${p.sku}">Add to quote <span class="arw">→</span></button>
            <a class="btn btn--ghost" href="product.html?sku=${p.sku}">Full details</a>
          </div>
        </div>`;
      modal.classList.add('open');
      document.body.classList.add('no-scroll');
    }
    if (e.target.id === 'quickView' || e.target.closest('.modal__close')) closeModal();
  });

  /* ---------- Product detail page ---------- */
  function initProductPage() {
    const root = $('#productDetail');
    if (!root) return;
    const sku = new URLSearchParams(location.search).get('sku');
    const p = PRODUCTS.find(x => x.sku === sku) || PRODUCTS[0];
    const cat = CATEGORIES.find(c => c.id === p.cat);
    document.title = p.name + ' — Lecmaice Supplies Ltd';
    $('#pdCrumb').textContent = p.name;
    root.innerHTML = `
      <div class="pd">
        <div class="pd__gallery" data-anim="scale">
          ${p.img ? `<img src="${p.img}" alt="${p.name}">` : `<img src="assets/img/lecmaice-mark.png" alt="" style="opacity:.22">`}
        </div>
        <div data-anim="slide-r">
          <span class="eyebrow">${cat ? cat.name : ''} · ${p.sub}</span>
          <h1 class="h-lg" style="text-transform:uppercase">${p.name}</h1>
          <p class="pd__price">${KES(p.price)}</p>
          <p class="mono" style="color:var(--steel)">${p.unit} · excl. VAT · volume pricing on request</p>
          <p class="lede" style="margin-top:22px">${p.blurb}</p>
          <table class="spec-table">
            ${Object.entries(p.specs).map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
          </table>
          <div class="qty" style="padding:8px 14px">
            <button type="button" onclick="var i=document.getElementById('pdQty');i.value=Math.max(1,+i.value-1)">−</button>
            <input id="pdQty" type="number" value="1" min="1" aria-label="Quantity">
            <button type="button" onclick="var i=document.getElementById('pdQty');i.value=+i.value+1">+</button>
          </div>
          <div class="pd__actions">
            <button class="btn" type="button" data-add="${p.sku}" data-qty-from="#pdQty">Add to quote <span class="arw">→</span></button>
            <a class="btn btn--ghost" href="https://wa.me/254725780795?text=${encodeURIComponent('Hello Lecmaice, I would like a quote for ' + p.name + ' (' + p.sku + ')')}" target="_blank" rel="noopener">Ask on WhatsApp</a>
          </div>
          <div class="pill-row">
            <span class="pill">Nairobi same-day dispatch</span>
            <span class="pill">Countrywide courier</span>
            <span class="pill">30-day account terms</span>
            <span class="pill">Branding available</span>
          </div>
        </div>
      </div>`;

    const related = PRODUCTS.filter(x => x.cat === p.cat && x.sku !== p.sku).slice(0, 4);
    const rel = $('#relatedGrid');
    if (rel) rel.innerHTML = related.map(cardHTML).join('');
    initReveals();
  }

  /* =======================================================================
     Accordions
     ======================================================================= */
  function initAccordion() {
    $$('.acc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.acc-item');
        const panel = $('.acc-panel', item);
        const open = item.classList.contains('open');
        $$('.acc-item.open').forEach(i => {
          i.classList.remove('open');
          $('.acc-panel', i).style.maxHeight = null;
          $('.acc-btn', i).setAttribute('aria-expanded', 'false');
        });
        if (!open) {
          item.classList.add('open');
          panel.style.maxHeight = panel.scrollHeight + 'px';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* =======================================================================
     Forms — client-side validation, mailto handoff (no backend on Pages)
     ======================================================================= */
  function initForms() {
    $$('form[data-validate]').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        let valid = true;
        $$('[required]', form).forEach(input => {
          const field = input.closest('.field');
          const ok = input.type === 'email'
            ? /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim())
            : input.value.trim().length > 0;
          field.classList.toggle('invalid', !ok);
          if (!ok && valid) { input.focus(); valid = false; }
        });
        if (!valid) return;

        const data = Object.fromEntries(new FormData(form).entries());
        const lines = [];
        Object.entries(data).forEach(([k, v]) => { if (v) lines.push(k.replace(/_/g, ' ') + ': ' + v); });

        if (form.dataset.includeQuote === 'true' && Quote.items.length) {
          lines.push('', 'QUOTE LIST');
          Quote.items.forEach(i => lines.push(`${i.qty} × ${i.name} (${i.sku}) — ${KES(i.price)} ${i.unit}`));
          lines.push('Indicative total: ' + KES(Quote.total()) + ' excl. VAT');
        }

        const subject = encodeURIComponent(form.dataset.subject || 'Website enquiry');
        const body = encodeURIComponent(lines.join('\n'));
        window.location.href = `mailto:lecmaicesupplies@gmail.com?subject=${subject}&body=${body}`;

        const success = $('.form-success', form);
        if (success) { success.classList.add('on'); success.scrollIntoView({ block: 'center', behavior: 'smooth' }); }
        form.reset();
      });
      $$('[required]', form).forEach(input => {
        input.addEventListener('input', () => input.closest('.field').classList.remove('invalid'));
      });
    });
  }

  /* ---------- Quote page summary ---------- */
  function initQuotePage() {
    const wrap = $('#quoteTable');
    if (!wrap) return;
    const paint = () => {
      if (!Quote.items.length) {
        wrap.innerHTML = `<div class="drawer__empty"><p class="h-sm">Your quote list is empty.</p>
          <p>Add items from the catalogue and they will appear here.</p>
          <a class="btn btn--sm" href="catalogue.html">Browse the catalogue</a></div>`;
        return;
      }
      wrap.innerHTML = `
        <table class="spec-table" style="margin:0">
          <tr><td>Item</td><td>Qty</td><td>Line total</td></tr>
          ${Quote.items.map(i => `<tr>
            <td style="width:auto;color:var(--paper);font-family:var(--font-body);text-transform:none;letter-spacing:0">
              <b>${i.name}</b><br><span class="mono" style="color:var(--steel)">${i.sku}</span>
            </td>
            <td>${i.qty}</td>
            <td>${KES(i.qty * i.price)}</td>
          </tr>`).join('')}
          <tr><td>Indicative total (excl. VAT)</td><td></td><td><b>${KES(Quote.total())}</b></td></tr>
        </table>`;
    };
    paint();
    document.addEventListener('quote:change', paint);
  }

  /* ---------- Year stamp ---------- */
  function initYear() { $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear()); }

  /* ---------- Hover tilt on featured cards ---------- */
  function initTilt() {
    if (reduced || window.matchMedia('(hover: none)').matches) return;
    document.addEventListener('mousemove', e => {
      const card = e.target.closest('[data-tilt]');
      if (!card) return;
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 6}deg) translateY(-6px)`;
    });
    document.addEventListener('mouseout', e => {
      const card = e.target.closest('[data-tilt]');
      if (card) card.style.transform = '';
    });
  }

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initFeatured();
    initCatalogue();
    initProductPage();
    initQuotePage();
    initAccordion();
    initForms();
    initCounters();
    initTilt();
    initYear();
    initReveals();
    Quote.render();
  });
})();
