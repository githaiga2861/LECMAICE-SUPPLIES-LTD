/* =========================================================================
   Lecmaice Supplies Ltd — Catalogue data
   Prices are indicative Kenyan retail rates in KES (exclusive of VAT).
   Volume pricing is quoted per order. Update this file to update the site.
   ========================================================================= */

const CATEGORIES = [
  {
    id: 'branded-tapes',
    name: 'Branded Tapes',
    blurb: 'Custom-printed packaging tape that seals the carton and sells the brand on every delivery.',
    img: 'assets/img/products/tape-assorted.jpg'
  },
  {
    id: 'corporate-wear',
    name: 'Branded Corporate Wear',
    blurb: 'Embroidered shirts, polos, jackets and caps tailored to your house colours.',
    img: 'assets/img/products/corp-shirts.jpg'
  },
  {
    id: 'ppe',
    name: 'PPE & Safety Gear',
    blurb: 'Head-to-toe protection that meets KEBS and EN standards for site, plant and kitchen.',
    img: 'assets/img/products/ppe-overall-boots.jpg'
  },
  {
    id: 'uniforms',
    name: 'Workwear & Uniforms',
    blurb: 'Chef whites, security, housekeeping, cold-room and field uniforms made to order.',
    img: 'assets/img/products/chef-jacket.jpg'
  },
  {
    id: 'stationery',
    name: 'Stationery',
    blurb: 'Everything the desk runs on — writing, filing, paper and branded desk gifts.',
    img: 'assets/img/products/pens.jpg'
  },
  {
    id: 'office',
    name: 'Office & General Supplies',
    blurb: 'Machines, furniture, pantry and housekeeping consumables on one delivery note.',
    img: 'assets/img/products/office-kit.jpg'
  }
];

const PRODUCTS = [
  /* ---------------- Branded tapes ---------------- */
  {
    sku: 'LT-BT-101', name: 'Custom Printed Packaging Tape', cat: 'branded-tapes', sub: 'BOPP tape',
    price: 480, unit: 'per roll (48mm × 100m)', img: 'assets/img/products/tape-printed.jpg', tag: 'Best seller',
    blurb: 'Up to three spot colours printed on acrylic BOPP tape. Ideal for e-commerce and distribution cartons.',
    specs: { Material: 'BOPP acrylic, 45 micron', Print: '1–3 spot colours, repeat every 300mm', Width: '48mm / 60mm / 72mm', Length: '50m / 100m rolls', MOQ: '36 rolls', 'Lead time': '7–10 working days' }
  },
  {
    sku: 'LT-BT-102', name: 'Branded Kraft Paper Tape', cat: 'branded-tapes', sub: 'Paper tape',
    price: 720, unit: 'per roll (50mm × 50m)', img: 'assets/img/products/tape-kraft.jpg', tag: 'Recyclable',
    blurb: 'Water-activated kraft tape for brands moving away from plastic. Tears by hand, recycles with the box.',
    specs: { Material: 'Kraft paper, water-activated gum', Print: 'Flexographic, up to 2 colours', Width: '50mm / 75mm', MOQ: '24 rolls', 'Lead time': '10–14 working days' }
  },
  {
    sku: 'LT-BT-103', name: 'Tamper-Evident Security Tape', cat: 'branded-tapes', sub: 'Security tape',
    price: 1450, unit: 'per roll (50mm × 50m)', img: 'assets/img/products/tape-assorted.jpg', tag: 'Void print',
    blurb: 'Leaves a VOID message on the carton if lifted. Standard for pharma, electronics and cash-in-transit packing.',
    specs: { Material: 'Polyester with void-release adhesive', Message: 'VOID / OPENED — customisable', Serialisation: 'Optional sequential numbering', MOQ: '20 rolls', 'Lead time': '12–15 working days' }
  },
  {
    sku: 'LT-BT-104', name: 'Clear & Brown Sealing Tape', cat: 'branded-tapes', sub: 'Plain tape',
    price: 145, unit: 'per roll (48mm × 100m)', img: null, tag: 'Ex-stock',
    blurb: 'Unprinted general-purpose carton tape held in stock in Nairobi for same-day pickup.',
    specs: { Material: 'BOPP hot-melt', Colours: 'Clear, brown', Width: '24mm / 48mm / 72mm', 'Case pack': '36 rolls', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-BT-105', name: 'Floor Marking & Hazard Tape', cat: 'branded-tapes', sub: 'Safety tape',
    price: 890, unit: 'per roll (50mm × 33m)', img: null, tag: null,
    blurb: 'Black-yellow and red-white PVC tape for aisle marking, exclusion zones and 5S floor layouts.',
    specs: { Material: 'PVC, 150 micron', Colours: 'Black/yellow, red/white, solid colours', Adhesion: 'Rubber resin, indoor floors', MOQ: '10 rolls', 'Lead time': '3–5 working days' }
  },
  {
    sku: 'LT-BT-106', name: 'Branded Label & Sticker Rolls', cat: 'branded-tapes', sub: 'Labels',
    price: 6, unit: 'per label (min 1,000)', img: null, tag: null,
    blurb: 'Die-cut vinyl or paper labels for cartons, asset tagging and product packaging. Any shape, any size.',
    specs: { Material: 'Gloss paper, matte vinyl, transparent PP', Print: 'Full colour digital', Finish: 'Matte / gloss / soft-touch lamination', MOQ: '1,000 pcs', 'Lead time': '5–8 working days' }
  },

  /* ---------------- Corporate wear ---------------- */
  {
    sku: 'LT-CW-201', name: 'Embroidered Corporate Shirt', cat: 'corporate-wear', sub: 'Shirts',
    price: 2350, unit: 'per shirt', img: 'assets/img/products/corp-shirts.jpg', tag: 'Best seller',
    blurb: 'Long or short-sleeve poplin shirt with contrast collar and chest embroidery of your logo.',
    specs: { Fabric: '65/35 poly-cotton poplin, 120gsm', Sizes: 'S–5XL, men & women cuts', Branding: 'Chest embroidery up to 8,000 stitches', Colours: 'White, sky, navy, grey + custom', MOQ: '10 pcs', 'Lead time': '7–12 working days' }
  },
  {
    sku: 'LT-CW-202', name: 'Branded Pique Polo Shirt', cat: 'corporate-wear', sub: 'Polos',
    price: 1450, unit: 'per polo', img: 'assets/img/products/corp-polos.jpg', tag: null,
    blurb: 'Heavyweight cotton pique polo with embroidered crest — the everyday uniform for field and floor teams.',
    specs: { Fabric: '100% combed cotton pique, 210gsm', Sizes: 'S–4XL', Branding: 'Embroidery or heat transfer', Colours: '18 stock colours', MOQ: '12 pcs', 'Lead time': '5–8 working days' }
  },
  {
    sku: 'LT-CW-203', name: 'Round-Neck Promotional T-Shirt', cat: 'corporate-wear', sub: 'T-shirts',
    price: 690, unit: 'per t-shirt', img: null, tag: 'Event pricing',
    blurb: 'Cotton tee printed front and back for activations, CSR days and staff giveaways.',
    specs: { Fabric: '100% cotton, 180gsm', Sizes: 'S–3XL, kids available', Branding: 'Screen print, DTF or vinyl', MOQ: '25 pcs', 'Lead time': '4–7 working days' }
  },
  {
    sku: 'LT-CW-204', name: 'Embroidered Baseball Cap', cat: 'corporate-wear', sub: 'Caps',
    price: 620, unit: 'per cap', img: 'assets/img/products/corp-polos.jpg', tag: null,
    blurb: 'Six-panel brushed cotton cap with metal buckle or snapback closure and 3D or flat embroidery.',
    specs: { Fabric: 'Brushed cotton twill', Closure: 'Metal buckle, velcro or snapback', Branding: 'Front embroidery, side and rear optional', MOQ: '24 pcs', 'Lead time': '7–10 working days' }
  },
  {
    sku: 'LT-CW-205', name: 'Corporate Softshell Jacket', cat: 'corporate-wear', sub: 'Jackets',
    price: 4200, unit: 'per jacket', img: null, tag: 'Premium',
    blurb: 'Wind and shower-resistant softshell with fleece backing — for supervisors, drivers and field officers.',
    specs: { Fabric: '3-layer bonded softshell, 300gsm', Sizes: 'S–4XL', Branding: 'Embroidery, reflective piping optional', MOQ: '10 pcs', 'Lead time': '10–14 working days' }
  },
  {
    sku: 'LT-CW-206', name: 'Branded Reflective Vest', cat: 'corporate-wear', sub: 'Hi-vis',
    price: 480, unit: 'per vest', img: 'assets/img/products/reflective-vest.jpg', tag: 'Ex-stock',
    blurb: 'Class 2 hi-vis vest with printed logo front and back. Lime or orange, held in stock in Nairobi.',
    specs: { Material: '120gsm polyester mesh', Tape: '5cm silver reflective, EN ISO 20471 class 2', Sizes: 'M–3XL', Branding: 'Screen print or heat transfer', 'Lead time': 'Ex-stock to 5 days' }
  },
  {
    sku: 'LT-CW-207', name: 'Branded Fleece Hoodie', cat: 'corporate-wear', sub: 'Sweatshirts',
    price: 2650, unit: 'per hoodie', img: null, tag: null,
    blurb: 'Brushed fleece hoodie for cold-store crews, night shifts and highland site teams.',
    specs: { Fabric: 'Cotton-rich fleece, 320gsm', Sizes: 'S–4XL', Branding: 'Embroidery or print', MOQ: '15 pcs', 'Lead time': '8–12 working days' }
  },
  {
    sku: 'LT-CW-208', name: 'Corporate Gift Set', cat: 'corporate-wear', sub: 'Gifting',
    price: 3100, unit: 'per set', img: 'assets/img/products/notebooks.jpg', tag: 'Seasonal',
    blurb: 'Branded notebook, metal pen, tumbler and gift box — configured to your budget for end-of-year gifting.',
    specs: { Includes: 'A5 notebook, metal pen, 500ml tumbler, box', Branding: 'Laser engraving, debossing or print', MOQ: '25 sets', 'Lead time': '10–15 working days' }
  },

  /* ---------------- PPE ---------------- */
  {
    sku: 'LT-PP-301', name: 'Vented Safety Helmet', cat: 'ppe', sub: 'Head protection',
    price: 950, unit: 'per helmet', img: 'assets/img/products/hard-hat.jpg', tag: 'KEBS',
    blurb: 'HDPE shell with 6-point harness and ratchet adjuster. Takes visor and ear-muff attachments.',
    specs: { Standard: 'EN 397 / KS ISO 3873', Shell: 'High-density polyethylene', Harness: '6-point textile with ratchet', Colours: 'White, yellow, blue, red, green', Branding: 'Logo print or sticker', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-PP-302', name: 'Latex-Coated Grip Gloves', cat: 'ppe', sub: 'Hand protection',
    price: 210, unit: 'per pair', img: 'assets/img/products/gloves-grip.jpg', tag: 'Ex-stock',
    blurb: 'Crinkle-latex palm on a seamless liner — the workhorse glove for handling, loading and general site work.',
    specs: { Standard: 'EN 388 (2141X)', Liner: '10-gauge polycotton', Coating: 'Crinkle latex palm', Sizes: '8, 9, 10', 'Case pack': '120 pairs', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-PP-303', name: 'Nitrile Examination Gloves', cat: 'ppe', sub: 'Hand protection',
    price: 890, unit: 'box of 100', img: 'assets/img/products/gloves-nitrile.jpg', tag: 'Food safe',
    blurb: 'Powder-free nitrile gloves for kitchens, clinics, labs and food processing lines.',
    specs: { Standard: 'EN 455 / EN 374, food-contact grade', Material: 'Nitrile, powder free', Thickness: '4 mil', Sizes: 'S, M, L, XL', 'Case pack': '10 boxes', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-PP-304', name: 'Chemical-Resistant Rubber Gloves', cat: 'ppe', sub: 'Hand protection',
    price: 520, unit: 'per pair', img: 'assets/img/products/gloves-chemical.jpg', tag: null,
    blurb: 'Flock-lined heavy rubber gauntlet for cleaning chemicals, dyeing and wet processing.',
    specs: { Standard: 'EN 374 chemical splash', Material: 'Natural rubber, flock lined', Length: '33cm gauntlet', Sizes: 'M, L, XL', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-PP-305', name: 'Leather Rigger Gloves', cat: 'ppe', sub: 'Hand protection',
    price: 450, unit: 'per pair', img: 'assets/img/products/gloves-leather.jpg', tag: null,
    blurb: 'Split-leather palm and reinforced thumb for welding support, rigging and material handling.',
    specs: { Standard: 'EN 388 / EN 407 (contact heat)', Material: 'Cow split leather, cotton back', Cuff: 'Rubberised safety cuff', Sizes: '10, 11', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-PP-306', name: 'Clear Safety Goggles', cat: 'ppe', sub: 'Eye protection',
    price: 320, unit: 'per pair', img: 'assets/img/products/goggles.jpg', tag: null,
    blurb: 'Anti-scratch polycarbonate lens with side shields and adjustable temples.',
    specs: { Standard: 'EN 166 1F', Lens: 'Polycarbonate, anti-scratch, UV400', Fit: 'Adjustable length temples', Options: 'Clear, smoke, over-spec models', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-PP-307', name: 'Full Face Shield', cat: 'ppe', sub: 'Face protection',
    price: 780, unit: 'per unit', img: 'assets/img/products/face-shield.jpg', tag: null,
    blurb: 'Ratchet headgear with replaceable anti-fog visor for grinding, chemical decanting and kitchens.',
    specs: { Standard: 'EN 166', Visor: '0.5mm PET, anti-fog, replaceable', Headgear: 'Ratchet adjust, foam brow pad', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-PP-308', name: 'Corded Ear Plugs', cat: 'ppe', sub: 'Hearing protection',
    price: 95, unit: 'per pair', img: 'assets/img/products/earplugs.jpg', tag: null,
    blurb: 'Reusable triple-flange silicone plugs on a cord, supplied with a carry case.',
    specs: { Standard: 'EN 352-2', SNR: '27 dB', Material: 'Reusable TPE, washable', Pack: '100 pairs per box', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-PP-309', name: '3-Ply & KN95 Face Masks', cat: 'ppe', sub: 'Respiratory',
    price: 550, unit: 'box of 50', img: 'assets/img/products/face-masks.jpg', tag: null,
    blurb: 'Disposable 3-ply surgical masks and KN95 respirators for clinics, food handling and dusty environments.',
    specs: { Types: '3-ply surgical, KN95, N95 valved', Filtration: '≥95% BFE', Pack: '50 pcs per box, 40 boxes per carton', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-PP-310', name: 'Disposable Hairnets', cat: 'ppe', sub: 'Food hygiene',
    price: 420, unit: 'pack of 100', img: 'assets/img/products/hairnets.jpg', tag: 'Food safe',
    blurb: 'Non-woven mob caps for kitchens, food plants and cleanrooms. Blue and white.',
    specs: { Material: 'Non-woven polypropylene, 10gsm', Size: '21 inch, elasticated', Colours: 'Blue, white', Pack: '100 pcs', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-PP-311', name: 'Steel-Toe Safety Boots', cat: 'ppe', sub: 'Footwear',
    price: 3850, unit: 'per pair', img: 'assets/img/products/safety-boots.jpg', tag: 'Best seller',
    blurb: 'Full-grain leather boot with steel toe cap and midsole, oil and slip-resistant outsole.',
    specs: { Standard: 'EN ISO 20345 S3 SRC', Toe: '200J steel toe cap', Midsole: 'Anti-penetration steel plate', Sizes: 'UK 4–13', Branding: 'Optional heel embroidery', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-PP-312', name: 'PVC Gumboots', cat: 'ppe', sub: 'Footwear',
    price: 1250, unit: 'per pair', img: 'assets/img/products/gumboots.jpg', tag: null,
    blurb: 'Food-grade white and industrial black gumboots with cleated slip-resistant sole.',
    specs: { Material: 'PVC, seamless mould', Options: 'Plain toe or steel toe', Colours: 'White (food), black, green', Sizes: 'UK 4–13', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-PP-313', name: 'Executive Leather Shoes', cat: 'ppe', sub: 'Footwear',
    price: 4300, unit: 'per pair', img: 'assets/img/products/exec-shoes.jpg', tag: null,
    blurb: 'Formal leather shoes issued with office and front-desk uniforms. Brogue and plain-toe styles.',
    specs: { Upper: 'Genuine leather', Sole: 'Rubber, slip resistant', Styles: 'Brogue, oxford, slip-on', Sizes: 'UK 5–12', 'Lead time': '3–5 working days' }
  },
  {
    sku: 'LT-PP-314', name: 'Reflective Boiler Suit', cat: 'ppe', sub: 'Coveralls',
    price: 2950, unit: 'per suit', img: 'assets/img/products/ppe-overall-boots.jpg', tag: 'Best seller',
    blurb: 'Two-tone poly-cotton coverall with reflective bands at chest, arms and legs. Logo embroidered free on 20+ pcs.',
    specs: { Fabric: '65/35 poly-cotton twill, 220gsm', Reflective: '5cm silver tape, chest/arms/legs', Sizes: '36–58', Colours: 'Navy/orange, grey/lime, khaki', MOQ: '10 pcs', 'Lead time': '7–10 working days' }
  },
  {
    sku: 'LT-PP-315', name: 'Laboratory Dust Coat', cat: 'ppe', sub: 'Coveralls',
    price: 1350, unit: 'per coat', img: 'assets/img/products/dust-coat-colour.jpg', tag: null,
    blurb: 'Poly-cotton dust coat in white, green, blue or red for labs, stores, clinics and food plants.',
    specs: { Fabric: '65/35 poly-cotton drill, 190gsm', Sizes: 'S–4XL', Colours: 'White, green, blue, red, maroon', Branding: 'Chest embroidery', 'Lead time': '3–6 working days' }
  },
  {
    sku: 'LT-PP-316', name: 'Green Utility Dust Coat', cat: 'ppe', sub: 'Coveralls',
    price: 1290, unit: 'per coat', img: 'assets/img/products/dust-coat-green.jpg', tag: null,
    blurb: 'Heavy-drill dust coat with three pockets and stud front, cut for store and workshop crews.',
    specs: { Fabric: '100% cotton drill, 230gsm', Closure: 'Press studs', Pockets: '2 hip, 1 chest', Sizes: 'S–4XL', 'Lead time': '3–6 working days' }
  },
  {
    sku: 'LT-PP-317', name: 'PVC Rain Coat', cat: 'ppe', sub: 'Weather',
    price: 1650, unit: 'per coat', img: 'assets/img/products/rain-coat.jpg', tag: null,
    blurb: 'Hooded waterproof coat for security, agriculture and outdoor operations through the long rains.',
    specs: { Material: 'PVC-coated polyester, welded seams', Colours: 'Yellow, navy, orange', Sizes: 'M–3XL', Branding: 'Reflective tape and print optional', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-PP-318', name: 'First Aid Kit — Workplace', cat: 'ppe', sub: 'Site safety',
    price: 4800, unit: 'per kit', img: null, tag: 'DOSH aligned',
    blurb: 'Wall-mounted metal box stocked to Kenyan workplace requirements, with a register card and refill service.',
    specs: { Box: 'Metal, wall mount, lockable', Contents: '10-person or 25-person schedule', Compliance: 'Aligned to OSHA 2007 first-aid guidance', Refills: 'Quarterly refill contract available', 'Lead time': '2–4 working days' }
  },

  /* ---------------- Uniforms ---------------- */
  {
    sku: 'LT-UF-401', name: 'Chef Jacket & Trouser Set', cat: 'uniforms', sub: 'Hospitality',
    price: 3400, unit: 'per set', img: 'assets/img/products/chef-jacket.jpg', tag: 'Made to order',
    blurb: 'Double-breasted chef jacket with contrast trim, plus checked or black trousers and apron.',
    specs: { Fabric: 'Poly-cotton twill, 220gsm', Colours: 'White, black, maroon + contrast trims', Sizes: 'S–4XL', Branding: 'Chest and sleeve embroidery', MOQ: '5 sets', 'Lead time': '10–14 working days' }
  },
  {
    sku: 'LT-UF-402', name: 'Security Guard Uniform', cat: 'uniforms', sub: 'Security',
    price: 4650, unit: 'per set', img: 'assets/img/products/security-uniform.jpg', tag: null,
    blurb: 'Shirt, trousers, tie, epaulettes and belt supplied as a complete kit with company insignia.',
    specs: { Includes: 'Shirt, trouser, tie, epaulettes, belt', Fabric: 'Poly-viscose shirting, poly-wool trouser', Sizes: 'S–4XL', Branding: 'Embroidered badges and name tapes', MOQ: '10 sets', 'Lead time': '12–18 working days' }
  },
  {
    sku: 'LT-UF-403', name: 'Cold Room Insulated Suit', cat: 'uniforms', sub: 'Cold chain',
    price: 8900, unit: 'per suit', img: 'assets/img/products/coldroom-suit.jpg', tag: 'Specialist',
    blurb: 'Quilted, hi-vis freezer suit rated for sustained work at −25°C in cold stores and processing plants.',
    specs: { Rating: 'Tested to −25°C', Shell: 'Water-repellent polyester, quilted lining', Reflective: 'EN ISO 20471 tape', Sizes: 'M–4XL', 'Lead time': '15–21 working days' }
  },
  {
    sku: 'LT-UF-404', name: 'Sublimated Staff Uniform', cat: 'uniforms', sub: 'Field teams',
    price: 2100, unit: 'per set', img: 'assets/img/products/staff-uniform.jpg', tag: null,
    blurb: 'Full-colour sublimated shirt and cap for delivery riders, promoters and events crews.',
    specs: { Fabric: 'Micro-mesh polyester, quick dry', Print: 'Full sublimation, edge to edge', Sizes: 'S–4XL', MOQ: '15 sets', 'Lead time': '10–14 working days' }
  },
  {
    sku: 'LT-UF-405', name: 'Canvas Work Apron', cat: 'uniforms', sub: 'Hospitality',
    price: 1450, unit: 'per apron', img: 'assets/img/products/apron.jpg', tag: null,
    blurb: 'Waxed canvas apron with leather straps and tool pockets — baristas, butchers, workshops.',
    specs: { Fabric: '12oz waxed canvas', Straps: 'Genuine leather, cross-back', Pockets: '3 front, 1 chest', Branding: 'Leather patch or embroidery', 'Lead time': '7–10 working days' }
  },
  {
    sku: 'LT-UF-406', name: 'Housekeeping Uniform', cat: 'uniforms', sub: 'Facilities',
    price: 2450, unit: 'per set', img: null, tag: null,
    blurb: 'Tunic and trouser or dress set for hotel, hospital and facility housekeeping teams.',
    specs: { Fabric: 'Poly-cotton, easy-care finish', Styles: 'Tunic + trouser, A-line dress', Sizes: 'S–4XL', Branding: 'Embroidered logo and name tag', MOQ: '10 sets', 'Lead time': '10–14 working days' }
  },
  {
    sku: 'LT-UF-407', name: 'School Uniform Package', cat: 'uniforms', sub: 'Education',
    price: 3200, unit: 'per learner set', img: null, tag: null,
    blurb: 'Sweaters, shirts, skirts, shorts, ties and PE kit supplied per school specification, term by term.',
    specs: { Includes: 'Sweater, 2 shirts, bottom, tie, PE kit', Fabric: 'Acrylic knit, poly-cotton shirting', Sizes: 'Age 4–18', Service: 'On-site fitting days available', 'Lead time': '3–5 weeks per term' }
  },

  /* ---------------- Stationery ---------------- */
  {
    sku: 'LT-ST-501', name: 'Pens, Pencils & Markers Pack', cat: 'stationery', sub: 'Writing',
    price: 780, unit: 'assorted pack', img: 'assets/img/products/pens.jpg', tag: 'Ex-stock',
    blurb: 'Ballpoints, gel pens, HB pencils, permanent markers and whiteboard markers in one restock pack.',
    specs: { Includes: '20 ballpoint, 10 gel, 12 pencil, 8 marker', Brands: 'Bic, Faber-Castell, Artline and equivalents', Options: 'Split by item, any quantity', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-ST-502', name: 'Branded PU Notebook', cat: 'stationery', sub: 'Books & pads',
    price: 950, unit: 'per notebook', img: 'assets/img/products/notebooks.jpg', tag: 'Brandable',
    blurb: 'A5 soft-touch PU notebook with elastic closure, ribbon marker and debossed or foil logo.',
    specs: { Size: 'A5 (148 × 210mm)', Pages: '192 pages, 80gsm cream', Cover: 'Soft-touch PU, 8 colours', Branding: 'Deboss, foil or full-colour print', MOQ: '25 pcs', 'Lead time': '7–12 working days' }
  },
  {
    sku: 'LT-ST-503', name: 'Branded Sticky Note Cubes', cat: 'stationery', sub: 'Books & pads',
    price: 380, unit: 'per cube', img: 'assets/img/products/sticky-notes.jpg', tag: null,
    blurb: 'Custom-printed sticky note pads and cubes — desk-level brand visibility that gets used daily.',
    specs: { Sizes: '76 × 76mm pad, 90 × 90mm cube', Sheets: '100 (pad) / 500 (cube)', Print: 'Full colour on each sheet', MOQ: '100 pcs', 'Lead time': '8–12 working days' }
  },
  {
    sku: 'LT-ST-504', name: 'Copier Paper A4 80gsm', cat: 'stationery', sub: 'Paper',
    price: 640, unit: 'per ream (500 sheets)', img: null, tag: 'Ex-stock',
    blurb: 'Bright white multipurpose paper that runs clean through copiers, laser and inkjet printers.',
    specs: { Size: 'A4 / A3 / Legal', Weight: '70gsm, 80gsm, 100gsm', Brightness: '100–104 CIE', 'Case pack': '5 reams per box', 'Lead time': 'Ex-stock, bulk on 24 hrs' }
  },
  {
    sku: 'LT-ST-505', name: 'Box Files & Lever Arch Files', cat: 'stationery', sub: 'Filing',
    price: 420, unit: 'per file', img: null, tag: null,
    blurb: 'Board box files, lever arch files and document wallets, printable with your department labels.',
    specs: { Types: 'Box file, lever arch, ring binder, wallet', Sizes: 'A4, foolscap', Colours: '8 colours', Branding: 'Spine label printing', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-ST-506', name: 'Desk Accessories Set', cat: 'stationery', sub: 'Desk',
    price: 1350, unit: 'per set', img: null, tag: null,
    blurb: 'Stapler, punch, tape dispenser, scissors, pen holder and clip caddy for a new desk in one line item.',
    specs: { Includes: 'Stapler + pins, 2-hole punch, dispenser, scissors, organiser', Finish: 'Metal and ABS', Options: 'Heavy-duty stapler upgrade', 'Lead time': 'Ex-stock' }
  },
  {
    sku: 'LT-ST-507', name: 'Whiteboard & Accessories', cat: 'stationery', sub: 'Boards',
    price: 6800, unit: '4ft × 3ft board', img: null, tag: null,
    blurb: 'Magnetic whiteboard with aluminium frame, supplied with markers, duster and installation in Nairobi.',
    specs: { Sizes: '3×2, 4×3, 6×4, 8×4 ft', Surface: 'Magnetic melamine or porcelain', Includes: '4 markers, duster, tray', Service: 'Wall mounting included in Nairobi', 'Lead time': '2–4 working days' }
  },
  {
    sku: 'LT-ST-508', name: 'Branded Company Diary', cat: 'stationery', sub: 'Books & pads',
    price: 1250, unit: 'per diary', img: 'assets/img/products/notebooks.jpg', tag: 'Seasonal',
    blurb: 'A4 or A5 dated diary with your logo, calendar pages and customised opening spread.',
    specs: { Size: 'A4, A5, pocket', Layout: 'Day-per-page or week-per-spread', Cover: 'PU, bonded leather or fabric', MOQ: '50 pcs', 'Order by': 'October for January delivery' }
  },
  {
    sku: 'LT-ST-509', name: 'Custom Rubber & Self-Ink Stamps', cat: 'stationery', sub: 'Office print',
    price: 1100, unit: 'per stamp', img: null, tag: null,
    blurb: 'Self-inking and pre-inked stamps for received, paid, company seals and signature blocks.',
    specs: { Types: 'Self-inking, pre-inked, wooden handle, embosser', Colours: 'Black, blue, red, green', Artwork: 'Set free from your logo file', 'Lead time': '1–3 working days' }
  },

  /* ---------------- Office & general ---------------- */
  {
    sku: 'LT-OF-601', name: 'Office Setup Bundle', cat: 'office', sub: 'Bundles',
    price: 48000, unit: 'per workstation', img: 'assets/img/products/office-kit.jpg', tag: 'Bundle',
    blurb: 'Desk, ergonomic chair, pedestal, filing, and a full stationery starter kit delivered and assembled.',
    specs: { Includes: '1.4m desk, mesh chair, 3-drawer pedestal, stationery kit', Assembly: 'Included in Nairobi metro', Warranty: '12 months on furniture', 'Lead time': '5–10 working days' }
  },
  {
    sku: 'LT-OF-602', name: 'Ergonomic Mesh Office Chair', cat: 'office', sub: 'Furniture',
    price: 16500, unit: 'per chair', img: null, tag: null,
    blurb: 'Breathable mesh back, lumbar support, adjustable arms and gas lift — built for full working days.',
    specs: { Back: 'Elastic mesh with lumbar adjust', Base: 'Nylon 5-star, castors', Load: 'Up to 120kg', Adjust: 'Height, tilt, arm height', Warranty: '12 months' }
  },
  {
    sku: 'LT-OF-603', name: 'Toner & Ink Cartridges', cat: 'office', sub: 'Consumables',
    price: 5400, unit: 'per cartridge', img: null, tag: 'By model',
    blurb: 'Genuine and compatible cartridges for HP, Canon, Epson, Brother and Kyocera fleets.',
    specs: { Brands: 'HP, Canon, Epson, Brother, Kyocera, Ricoh', Types: 'Genuine, compatible, refill service', Service: 'Standing order by printer model', 'Lead time': '24–72 hours' }
  },
  {
    sku: 'LT-OF-604', name: 'Cleaning & Housekeeping Pack', cat: 'office', sub: 'Housekeeping',
    price: 7800, unit: 'monthly pack', img: null, tag: 'Subscription',
    blurb: 'Detergents, disinfectant, mops, bin liners, air freshener and hand soap on a scheduled monthly drop.',
    specs: { Includes: 'Multi-surface cleaner, disinfectant, mop set, 200 liners, 4 hand soaps', Schedule: 'Monthly or fortnightly', Sizing: 'Priced per headcount', 'Lead time': 'Scheduled delivery' }
  },
  {
    sku: 'LT-OF-605', name: 'Washroom Consumables Pack', cat: 'office', sub: 'Housekeeping',
    price: 6200, unit: 'monthly pack', img: null, tag: null,
    blurb: 'Tissue, hand towels, soap refills and sanitiser sized to your floor count and traffic.',
    specs: { Includes: 'Toilet rolls, hand towel rolls, soap, sanitiser refills', Dispensers: 'Supplied free on annual contract', Schedule: 'Monthly', 'Lead time': 'Scheduled delivery' }
  },
  {
    sku: 'LT-OF-606', name: 'Pantry & Kitchen Supplies', cat: 'office', sub: 'Pantry',
    price: 9500, unit: 'monthly pack', img: null, tag: null,
    blurb: 'Tea, coffee, sugar, milk, cups, cutlery and pantry cleaning items for staff kitchens.',
    specs: { Includes: 'Tea, coffee, sugar, UHT milk, disposables', Sizing: 'Per 25 / 50 / 100 staff', Schedule: 'Weekly or monthly', 'Lead time': 'Scheduled delivery' }
  },
  {
    sku: 'LT-OF-607', name: 'Safety & Wayfinding Signage', cat: 'office', sub: 'Signage',
    price: 1850, unit: 'per sign', img: null, tag: null,
    blurb: 'Photoluminescent fire exit, mandatory PPE, assembly point and hazard signs in PVC or aluminium.',
    specs: { Material: '3mm PVC, ACM or vinyl', Sizes: 'A5 to A2 standard, custom on request', Compliance: 'ISO 7010 pictograms', Install: 'Available in Nairobi', 'Lead time': '3–7 working days' }
  },
  {
    sku: 'LT-OF-608', name: 'Fire Extinguisher & Service', cat: 'office', sub: 'Site safety',
    price: 5900, unit: '6kg DCP unit', img: null, tag: 'Certified',
    blurb: 'DCP, CO₂ and foam extinguishers with wall brackets, plus annual service and refill certification.',
    specs: { Types: 'DCP 1–9kg, CO₂ 2–5kg, foam 9L', Certification: 'Service certificate issued on refill', Includes: 'Bracket and signage', Service: 'Annual reminder scheduling', 'Lead time': '2–5 working days' }
  },
  {
    sku: 'LT-OF-609', name: 'Branded Water Bottles & Tumblers', cat: 'office', sub: 'Gifting',
    price: 1450, unit: 'per bottle', img: null, tag: null,
    blurb: 'Stainless vacuum bottles and tumblers, laser-engraved for staff onboarding kits and client gifting.',
    specs: { Capacity: '500ml, 750ml, 1L', Material: '304 stainless, double wall', Branding: 'Laser engrave or UV print', MOQ: '25 pcs', 'Lead time': '7–12 working days' }
  }
];

if (typeof module !== 'undefined') { module.exports = { CATEGORIES, PRODUCTS }; }
