# Lecmaice Supplies Ltd — Website

Marketing and catalogue website for **Lecmaice Supplies Ltd** (Nairobi, Kenya) — supplier of branded tapes,
corporate wear, PPE and safety gear, uniforms, stationery and general office supplies.

> *Serving your best life*

Static site. No build step, no framework, no dependencies. Open `index.html` and it runs.

---

## Quick start

```bash
git clone https://github.com/<your-username>/lecmaice-supplies.git
cd lecmaice-supplies

# any static server works
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly from the file system also works, though a local server is closer to production.

---

## Deploy to GitHub Pages

1. Push this folder to a new GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main`. The workflow in `.github/workflows/deploy.yml` publishes the site.

The site will be live at `https://<your-username>.github.io/<repo-name>/`.

**Custom domain (e.g. lecmaice.co.ke):** add a file named `CNAME` at the repo root containing just your
domain, then point an `A` record at GitHub's Pages IPs (or a `CNAME` record at `<username>.github.io`)
with your domain registrar.

---

## Structure

```
.
├── index.html              Home — hero, categories, featured products, capability sections
├── catalogue.html          Full catalogue with search, category/type filters, sorting, quick view
├── product.html            Product detail — reads ?sku=LT-XX-000 from the URL
├── quote.html              Quote list review and submission
├── about.html              Company story, commitments, capability, sectors
├── contact.html            Enquiry form, contact cards, map, departments, coverage, FAQ
├── 404.html
├── robots.txt / sitemap.xml
├── assets/
│   ├── css/styles.css      Full design system — tokens, components, animations, responsive
│   ├── js/products.js      ALL CATALOGUE DATA lives here (categories + products)
│   ├── js/main.js          Nav, scroll reveals, quote list, filtering, forms, accordions
│   └── img/
│       ├── lecmaice-logo.png / .jpg          Logo (transparent / white background)
│       ├── lecmaice-logo-light.png           Light version for dark backgrounds
│       ├── lecmaice-mark.png / -light.png    Icon-only mark
│       ├── favicon.png
│       └── products/                         32 product photographs
└── .github/workflows/deploy.yml
```

---

## Editing the catalogue

Everything on the shop side is driven by **`assets/js/products.js`**. There is no CMS and no database —
edit the file, commit, and the site updates.

### Add a product

```js
{
  sku: 'LT-PP-319',                       // must be unique — used in URLs and the quote list
  name: 'Welding Helmet',
  cat: 'ppe',                             // must match a CATEGORIES id
  sub: 'Head protection',                 // groups it under the "Product type" filter
  price: 4200,                            // number only, in KES, excluding VAT
  unit: 'per helmet',                     // shown under the price
  img: 'assets/img/products/welding-helmet.jpg',   // or null for a branded placeholder
  tag: 'Ex-stock',                        // small badge, or null. 'Best seller' renders orange
  blurb: 'Auto-darkening shade 9–13 with grind mode.',
  specs: {                                // any number of rows; shown on the product page
    Standard: 'EN 379',
    'Lead time': 'Ex-stock'
  }
}
```

### Category ids

`branded-tapes` · `corporate-wear` · `ppe` · `uniforms` · `stationery` · `office`

To add a category, add an entry to `CATEGORIES` and give it a card in the "Six aisles" grid on `index.html`.

### Product images

Drop a JPG in `assets/img/products/` — roughly square, under 1000px, on a white background works best.
Set `img: null` on any product without a photo and it gets a branded placeholder instead of a broken frame.

---

## Before going live — check these

These values were written as sensible defaults. Confirm each against how the business actually operates:

| What | Where |
|---|---|
| Physical/collection address (currently "Nairobi, Kenya") | `contact.html`, footer of every page |
| Opening hours | `contact.html`, footer |
| Free-delivery threshold (KSh 20,000) and delivery timings per county | `contact.html` |
| "Est. 2014" in the hero eyebrow | `index.html` |
| Statistics: 10+ years, 500+ line items, 47 counties, 24 hr turnaround | `index.html`, `about.html` |
| All product prices, MOQs and lead times | `assets/js/products.js` |
| Google Maps embed (currently a general Nairobi pin) | `contact.html` — replace with your Maps place embed |
| FAQ answers, especially account-opening requirements | `contact.html` |
| Testimonials — currently role-based and unattributed; replace with real, permissioned quotes | `index.html` |

Phone `0725 780 795` and email `lecmaicesupplies@gmail.com` are taken from the company catalogue and used
throughout, including the WhatsApp links (`wa.me/254725780795`).

---

## Forms

GitHub Pages cannot run server-side code, so both forms validate in the browser and then hand off to the
visitor's email client via `mailto:`, pre-filled with every field (and, on `quote.html`, the full quote list).

To have submissions arrive in an inbox directly, sign up for [Formspree](https://formspree.io) or
[Web3Forms](https://web3forms.com) and, in `assets/js/main.js`, replace the `window.location.href = 'mailto:...'`
line inside `initForms()` with a `fetch()` POST to your endpoint. Everything else stays as is.

---

## The quote list

The site is quote-driven rather than checkout-driven, which is how most Kenyan B2B supply actually works:
LPOs, M-Pesa, 30-day terms.

Visitors add items from any card, review them in the slide-out drawer, then send the whole list from
`quote.html`. The list persists in `localStorage` between visits and falls back to in-memory storage where
that is blocked. No payment processing, no cart abandonment, no PCI scope.

To add a real checkout later, the `Quote` object in `main.js` already holds line items, quantities and
totals — wire it to a payment provider without touching the UI.

---

## Design system

| Token | Value | Use |
|---|---|---|
| `--navy-950` | `#04102A` | Page background |
| `--navy-900` | `#001A45` | Brand navy, sampled from the logo |
| `--flare` | `#FC4009` | Brand orange, sampled from the logo |
| `--paper` | `#F4F2ED` | Light sections and body text on dark |
| `--steel` | `#8CA0BE` | Secondary text on dark |

Type: **Archivo** (display, 800), **Instrument Sans** (body), **IBM Plex Mono** (SKUs, labels, eyebrows),
all loaded from Google Fonts.

### Scroll animations

Add `data-anim="…"` to any element. Available: `rise`, `fade`, `mask`, `wipe`, `scale`, `blur`, `flip`,
`slide-l`, `slide-r`, `zoom-in`, `skew`. Add `data-delay="120"` for a delay in milliseconds, or
`data-stagger` on a parent to cascade its children automatically.

All motion is disabled automatically under `prefers-reduced-motion: reduce`.

---

## Browser support

Modern evergreen browsers (Chrome, Edge, Firefox, Safari) on desktop and mobile. Uses
`IntersectionObserver`, CSS custom properties, `clip-path` and CSS grid.

---

## Licence

Code: MIT (see `LICENSE`).

The Lecmaice Supplies Ltd name, logo, mark and the tagline "Serving your best life" are the property of
Lecmaice Supplies Ltd and are not covered by the MIT licence. Product photographs were taken from the
company's own product catalogue; confirm you hold the rights to any supplier imagery before publishing.
