import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ArrowRight, ShieldCheck, Factory, BadgeCheck, Truck, CheckCircle2, ChevronDown, HardHat, Footprints, Settings, ClipboardCheck, Phone, Mail, MapPin, MessageCircle, Send, Search, Filter, Clock3, Building2, PackageCheck, Layers3, Wrench, FlaskConical, Globe } from 'lucide-react';
import './styles.css';

const CONFIG = {
  brand: 'FORGEX',
  brandFullName: 'FORGEX™ | Industrial Safety Footwear',
  legalName: 'GURDEX Footwear Private Limited',
  tagline: 'Industrial Safety Footwear',
  websiteDisplay: 'www.guardexfootwear.com',
  websiteUrl: 'https://www.guardexfootwear.com',
  salesEmail: 'sales@guardexfootwear.com',
  infoEmail: 'info@guardexfootwear.com',
  whatsappNumber: '919185038002',
  primaryPhone: '+91 91850 38002',
  phones: [
    { label: 'Sales & Orders', number: '+91 91850 38002', tel: '+919185038002' },
    { label: 'Factory & Sales', number: '+91 73872 16551', tel: '+917387216551' },
    { label: 'Landline / Office', number: '+91 79-72458345', tel: '+917972458345' },
    { label: 'Support & Enquiries', number: '+91 97652 38002', tel: '+919765238002' },
  ],
  factoryAddress: 'Gala No. 1 & 2, Survey No. 47/2, Shankheshwar Industries Estate, Near Jain Mandir, Village Mori, Vasai, District Palghar, Maharashtra – 401208.',
  officeAddress: 'Flat No. 902, Vasaione Reality, Ambadi Road, Diwanman, Vasai West, District Palghar, Maharashtra – 401202.',
  youtube: 'https://youtube.com/@forgex-safetyshoes?si=REaSka5B6_rHnmQg',
  statusNote: 'Manufacturing setup in progress. BIS/ISI application and testing in progress.',
  copyright: '© 2026 GURDEX Footwear Private Limited. All rights reserved.',
};

const waLink = (message) => `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

function YoutubeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{flexShrink:0}}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

const productData = [
  { id:'FX-101', name:'FORGEX Classic Steel Toe', category:'Safety Shoes', type:'Low ankle', desc:'Everyday industrial protection with PU double-density sole & certified steel toe cap.', features:['PU double-density injection sole','Steel toe impact protection (200J)','Oil & acid resistant outsole'], img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85', tag:'PU Double-Density' },
  { id:'FX-204', name:'FORGEX Rugged High-Ankle Boot', category:'Safety Boots', type:'High ankle', desc:'Demanding shop-floor & construction safety boot with reinforced ankle padding and anti-slip tread.', features:['High-ankle reinforced collar','PU double-density anti-skid sole','Heavy-duty steel toe cap'], img:'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85', tag:'Heavy Duty' },
  { id:'FX-310', name:'FORGEX Executive Work Shoe', category:'Safety Shoes', type:'Low ankle', desc:'Clean corporate profile for facility managers, engineers and light shop floors.', features:['Low-profile smart workwear look','Lightweight PU double-density sole','Cushioned insole for all-day comfort'], img:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85', tag:'Executive' },
  { id:'FX-422', name:'FORGEX All-Terrain Safety Boot', category:'Safety Boots', type:'Mid ankle', desc:'Robust high-traction safety boot for outdoor infrastructure and heavy site operations.', features:['Deep-cleat mud & slip-resistant tread','Water-resistant leather upper','PU double-density cushioned midsole'], img:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=85', tag:'All Terrain' },
  { id:'FX-510', name:'FORGEX Lightweight Sport Sneaker', category:'Lightweight Range', type:'Low ankle', desc:'Contemporary safety footwear engineered for active logistics, warehousing and tech floors.', features:['Sport-inspired breathable upper','Protective steel toe cap','Flexible PU lightweight sole'], img:'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=85', tag:'Lightweight' },
  { id:'FX-608', name:'FORGEX Industrial Utility Boot', category:'Safety Boots', type:'High ankle', desc:'Utility-led design for heavy manufacturing, chemical plants and engineering plants.', features:['Chemical & oil resistant PU sole','Anti-static properties design','Full-grain protective leather upper'], img:'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=85', tag:'Utility' },
];

const leadership = [
  {
    name: 'Hirasingh Parmar',
    role: 'Director',
    desc: 'Provides business leadership, strategic direction and overall company development.',
  },
  {
    name: 'Pratiksha N. Joshi',
    role: 'Director',
    desc: 'Contributes to company management, business coordination and long-term growth.',
  },
  {
    name: 'Nimesh Joshi',
    role: 'Head – Marketing, Quality & Production Planning',
    desc: 'Responsible for marketing, quality coordination and production planning to support business growth and operational efficiency.',
  },
];

const navItems = [
  ['Home','/'],
  ['About Us','/about'],
  ['Products Catalogue','/products'],
  ['Manufacturing Facility','/manufacturing'],
  ['Quality & Certifications','/quality'],
];

function Brand({ light=false }) {
  return (
    <Link to="/" className={`brand ${light?'brand-light':''}`} aria-label="FORGEX home">
      <div className="brand-logo-wrap">
        <img src="/forgex-logo.jpg" alt="FORGEX™ Logo" className="brand-logo-img" />
      </div>
      <div className="brand-text">
        <strong>FORGEX<span>™</span></strong>
        <small>{CONFIG.legalName.toUpperCase()}</small>
      </div>
    </Link>
  );
}

function Header() {
  const [open,setOpen] = useState(false);
  const location = useLocation();
  React.useEffect(()=>setOpen(false),[location.pathname]);
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span><ShieldCheck size={14}/> Product Brand: FORGEX™ | {CONFIG.legalName}</span>
          <span className="topbar-right">
            <a href={`tel:${CONFIG.primaryPhone.replace(/\s+/g,'')}`} style={{display:'inline-flex', alignItems:'center', gap:'6px', marginRight:'16px'}}>
              <Phone size={13}/> {CONFIG.primaryPhone}
            </a>
            <a href={`mailto:${CONFIG.salesEmail}`} style={{display:'inline-flex', alignItems:'center', gap:'6px'}}>
              <Mail size={13}/> {CONFIG.salesEmail}
            </a>
          </span>
        </div>
      </div>
      <header className="header">
        <div className="container nav-wrap">
          <Brand/>
          <nav className={open?'nav nav-open':'nav'} aria-label="Main navigation">
            {navItems.map(([label,path])=><NavLink key={path} to={path} end={path==='/'}>{label}</NavLink>)}
            <div className="mobile-cta">
              <Link className="btn btn-primary" to="/corporate-enquiry">Get a Bulk Quote <ArrowRight size={16}/></Link>
            </div>
          </nav>
          <div className="nav-actions">
            <Link className="btn btn-primary nav-quote" to="/corporate-enquiry">Get a Bulk Quote <ArrowUpRight size={16}/></Link>
            <button className="menu-btn" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>
              {open?<X/>:<Menu/>}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Brand light/>
          <p style={{marginTop:'16px', fontWeight: 600, color: '#fff'}}>
            {CONFIG.legalName}
          </p>
          <p style={{margin: '4px 0 12px', color: '#f3a33b', fontWeight: 700}}>
            Product Brand: FORGEX | Industrial Safety Footwear
          </p>
          <p style={{fontSize: '13px', lineHeight: '1.6'}}>
            Discover FORGEX industrial safety footwear with advanced PU double-density soles engineered for tough work environments.
          </p>
          <div className="status-pill status-pill-dark">
            <Factory size={16}/>
            <span>{CONFIG.statusNote}</span>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us & Leadership</Link>
          <Link to="/products">Products Catalogue</Link>
          <Link to="/manufacturing">Manufacturing Facility</Link>
          <Link to="/quality">Quality & Certifications</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div>
          <h4>Enquiries & Channels</h4>
          <Link to="/dealer-enquiry">Become a Dealer</Link>
          <Link to="/corporate-enquiry">Corporate Bulk Enquiry</Link>
          <a href={CONFIG.youtube} target="_blank" rel="noreferrer" className="youtube-link" style={{margin:'10px 0'}}>
            <YoutubeIcon size={18}/> Watch on YouTube <ArrowUpRight size={13}/>
          </a>
          <a href={waLink('Hello GURDEX, I would like to enquire about FORGEX industrial safety footwear.')} target="_blank" rel="noreferrer" style={{color:'#20b866', fontWeight: 700}}>
            <MessageCircle size={15}/> WhatsApp Enquiry <ArrowUpRight size={13}/>
          </a>
        </div>

        <div>
          <h4>Contact & Orders</h4>
          <p className="contact-line">
            <Globe size={16}/>
            <a href={CONFIG.websiteUrl} target="_blank" rel="noreferrer" style={{color:'#fff', fontWeight:600}}>
              {CONFIG.websiteDisplay}
            </a>
          </p>
          <p className="contact-line">
            <Mail size={16}/>
            <span>
              Sales: <a href={`mailto:${CONFIG.salesEmail}`} style={{color:'#f3a33b'}}>{CONFIG.salesEmail}</a><br/>
              General: <a href={`mailto:${CONFIG.infoEmail}`} style={{color:'#d0d8df'}}>{CONFIG.infoEmail}</a>
            </span>
          </p>
          <p className="contact-line">
            <Phone size={16}/>
            <span>
              <a href={`tel:${CONFIG.primaryPhone.replace(/\s+/g,'')}`} style={{color:'#fff', fontWeight:600}}>{CONFIG.primaryPhone}</a><br/>
              <a href="tel:+917387216551" style={{color:'#c0ccd6'}}>+91 73872 16551</a>
            </span>
          </p>
          <p className="contact-line">
            <MapPin size={16}/>
            <span style={{fontSize:'12px', lineHeight:'1.5'}}>
              <strong>Plant:</strong> Vasai, Palghar, Maharashtra – 401208
            </span>
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>{CONFIG.copyright}</span>
        <span>Product Brand: FORGEX™ | Website: {CONFIG.websiteDisplay}</span>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a className="wa-float" href={waLink('Hello, I am interested in FORGEX safety footwear by GURDEX Footwear Private Limited.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <MessageCircle size={22}/><span>Chat with us</span>
    </a>
  );
}

function PageIntro({ title, description, crumb }) {
  return (
    <section className="page-intro">
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link><span>/</span><span>{crumb || title}</span>
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

function SectionHeading({ title, description, center = false }) {
  return (
    <div className={`section-heading ${center ? 'text-center' : ''}`}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image">
        <img src={product.img} alt={`${product.name} footwear`} loading="lazy" />
        <span className="product-tag">{product.tag}</span>
        <span className="product-arrow"><ArrowUpRight size={19}/></span>
      </Link>
      <div className="product-info">
        <div className="product-meta"><span>{product.category}</span><span>{product.id}</span></div>
        <h3><Link to={`/products/${product.id}`}>{product.name}</Link></h3>
        <p>{product.desc}</p>
        <Link className="text-link" to={`/products/${product.id}`}>View details <ArrowRight size={15}/></Link>
      </div>
    </article>
  );
}

function CTA({ title = 'Need footwear for your team?', text = 'Tell us your requirements and our team can help you explore the right product range.', button = 'Enquire for Bulk Orders', to = '/corporate-enquiry' }) {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="btn btn-light" to={to}>{button} <ArrowUpRight size={17}/></Link>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-bg"/>
          <div className="container hero-content">
            <div className="hero-copy">
              <h1>Protection that works <em>as hard as you do.</em></h1>
              <p>Discover <strong>FORGEX™</strong> industrial safety footwear manufactured by <strong>{CONFIG.legalName}</strong>. Engineered with PU double-density injection soles and steel toe protection for tough industrial demands.</p>
              <div className="hero-buttons">
                <Link className="btn btn-primary" to="/products">Explore the Range <ArrowRight size={17}/></Link>
                <Link className="btn btn-outline-light" to="/corporate-enquiry">Corporate Bulk Enquiry <ArrowUpRight size={17}/></Link>
              </div>
              <div className="hero-proof">
                <div className="proof-icon"><ShieldCheck size={20}/></div>
                <div>
                  <strong>{CONFIG.statusNote}</strong>
                  <span>Engineered in Vasai, Maharashtra</span>
                </div>
              </div>
            </div>
            <div className="hero-stamp">
              <span>PRODUCT BRAND</span>
              <strong>FORGEX<br/>SAFETY</strong>
              <div className="stamp-rule"/>
              <span>{CONFIG.legalName.toUpperCase()}</span>
            </div>
          </div>
          <div className="hero-bottom container">
            <span><span className="orange-dot"/> PU DOUBLE-DENSITY INDUSTRIAL FOOTWEAR</span>
            <span>FORGEX™ BY GURDEX</span>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div><ShieldCheck/><span><strong>PU Double-Density</strong><small>High durability & shock absorption</small></span></div>
            <div><Factory/><span><strong>Vasai Manufacturing Plant</strong><small>Shankheshwar Industrial Estate</small></span></div>
            <div><PackageCheck/><span><strong>Bulk & Corporate Orders</strong><small>Direct procurement pricing</small></span></div>
            <div><Truck/><span><strong>Dealer & Distributor Network</strong><small>Expansion across India</small></span></div>
          </div>
        </section>

        <section className="section section-products">
          <div className="container">
            <div className="section-top">
              <SectionHeading title="FORGEX Product Range" description="Engineered for high-risk industrial, manufacturing, construction and logistics environments with PU double-density technology."/>
              <Link className="text-link desktop-link" to="/products">View all products <ArrowRight size={16}/></Link>
            </div>
            <div className="product-grid">{productData.slice(0,3).map(p=><ProductCard key={p.id} product={p}/>)}</div>
            <div className="mobile-center"><Link className="btn btn-outline-dark" to="/products">Explore all products <ArrowRight size={16}/></Link></div>
          </div>
        </section>

        <section className="section dark-section">
          <div className="container split-layout">
            <div className="split-image">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85" alt="Industrial manufacturing plant" loading="lazy"/>
              <div className="image-caption">
                <Factory size={20}/>
                <span>
                  <strong>FORGEX Manufacturing Plant</strong>
                  <small>Vasai, Palghar, Maharashtra</small>
                </span>
              </div>
            </div>
            <div className="split-copy">
              <h2>More than footwear.<br/><em>Confidence on every shift.</em></h2>
              <p>From shop floors to harsh outdoor infrastructure sites, FORGEX safety footwear by GURDEX Footwear Private Limited delivers unmatched comfort, grip, and toe protection.</p>
              <div className="feature-list">
                <div><CheckCircle2/><span><strong>PU Double-Density Direct Injection</strong><small>Enhanced longevity, slip resistance & flexibility</small></span></div>
                <div><CheckCircle2/><span><strong>BIS / ISI Testing Standards</strong><small>Application & testing in progress</small></span></div>
                <div><CheckCircle2/><span><strong>Direct Manufacturer Pricing</strong><small>Transparent bulk quotes for distributors & corporates</small></span></div>
              </div>
              <Link className="btn btn-primary" to="/about">About GURDEX & Leadership <ArrowRight size={16}/></Link>
            </div>
          </div>
        </section>

        <section className="section industries">
          <div className="container">
            <SectionHeading title="Built for Demanding Industry Sectors" description="FORGEX footwear is engineered for tough operational environments across India." center/>
            <div className="industry-grid">
              {[
                { icon: Factory, title: 'Manufacturing & Plants', text: 'Machinery floors, chemical plants & fabrication units' },
                { icon: HardHat, title: 'Construction & Infra', text: 'Site engineers, contractors and heavy equipment work' },
                { icon: Settings, title: 'Engineering & Utilities', text: 'Maintenance workshops, electrical & industrial servicing' },
                { icon: Truck, title: 'Logistics & Warehousing', text: 'High-movement distribution centers & freight operations' },
              ].map(x=>(
                <div className="industry-card" key={x.title}>
                  <span className="industry-icon"><x.icon size={24}/></span>
                  <h3>{x.title}</h3>
                  <p>{x.text}</p>
                  <ArrowUpRight className="industry-arrow" size={18}/>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section quality-preview">
          <div className="container quality-inner">
            <div>
              <h2>Trust starts with transparent standards.</h2>
              <p>We believe in full transparency with our partners. Our manufacturing facility in Vasai is equipped for modern PU double-density production, with ISI/BIS testing currently in progress.</p>
              <div className="status-pill" style={{marginBottom:'20px'}}>
                <ClipboardCheck size={16}/>
                <span>{CONFIG.statusNote}</span>
              </div>
              <br/>
              <Link className="text-link" to="/quality">Explore quality approach <ArrowRight size={16}/></Link>
            </div>
            <div className="quality-cards">
              <div className="quality-card"><FlaskConical/><strong>Impact Testing</strong><span>200 Joules steel toe resistance</span></div>
              <div className="quality-card"><ClipboardCheck/><strong>Quality Checks</strong><span>PU sole bonding & adhesion</span></div>
              <div className="quality-card"><BadgeCheck/><strong>Certifications</strong><span>BIS/ISI application in progress</span></div>
            </div>
          </div>
        </section>
        <CTA/>
      </main>
    </>
  );
}

function About() {
  return (
    <>
      <PageIntro title="Built around the people who do the work." description="GURDEX Footwear Private Limited is dedicated to producing reliable, protective, and comfortable industrial safety footwear under the brand FORGEX™."/>
      <section className="section">
        <div className="container split-layout about-split">
          <div className="split-image about-image">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85" alt="Industrial workplace"/>
            <div className="floating-number">
              <strong>FORGEX</strong><span>SAFETY<br/>FOOTWEAR</span>
            </div>
          </div>
          <div className="split-copy">
            <h2>Industrial footwear.<br/><em>A manufacturer's commitment.</em></h2>
            <p><strong>{CONFIG.legalName}</strong> manufactures <strong>FORGEX™</strong> industrial safety footwear, focusing on PU double-density safety shoes engineered for performance, durability, and user protection.</p>
            <p>With our state-of-the-art facility located at Shankheshwar Industries Estate in Vasai, Maharashtra, we are committed to building long-term relationships with distributors, corporate procurement heads, and safety officers across India.</p>
            <div className="info-note">
              <ShieldCheck/>
              <span>
                <strong>Manufacturing & Quality Status</strong>
                <small>{CONFIG.statusNote}</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP & MANAGEMENT SECTION */}
      <section className="section soft-section">
        <div className="container">
          <SectionHeading title="Leadership & Management" description="Experienced leadership guiding GURDEX Footwear towards operational excellence and customer trust." center/>
          <div className="leadership-grid">
            {leadership.map(l => (
              <div className="leadership-card" key={l.name}>
                <h3>{l.name}</h3>
                <div className="leadership-role">{l.role}</div>
                <p>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="The Core Pillars of FORGEX" description="Clear values that guide our production, partner relations, and service delivery." center/>
          <div className="value-grid">
            {[
              { icon: Footprints, title: 'PU Double-Density Technology', text: 'Dual density polyurethane soles that combine lightweight shock absorption with high abrasion resistance.' },
              { icon: Building2, title: 'Partner-Centric Growth', text: 'Direct, transparent communication and dedicated commercial support for dealers, distributors and corporate buyers.' },
              { icon: BadgeCheck, title: 'Quality & Compliance', text: 'Adhering to Indian industrial safety norms with active BIS/ISI testing and rigorous in-house batch inspections.' },
            ].map(v => (
              <div className="value-card" key={v.title}>
                <v.icon size={28}/>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Partner with FORGEX" text="Connect directly with our leadership team for dealership or institutional supply agreements."/>
    </>
  );
}

function Products() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => productData.filter(p => (category === 'All' || p.category === category) && `${p.name} ${p.id} ${p.desc}`.toLowerCase().includes(search.toLowerCase())), [category, search]);
  return (
    <>
      <PageIntro title="FORGEX Safety Footwear Catalogue" description="Explore our range of PU double-density safety shoes and heavy-duty boots engineered by GURDEX Footwear Private Limited."/>
      <section className="section">
        <div className="container">
          <div className="catalog-toolbar">
            <div className="catalog-count">
              <strong>{filtered.length.toString().padStart(2, '0')}</strong>
              <span>models available<br/><small>FORGEX Range</small></span>
            </div>
            <div className="catalog-controls">
              <label className="search-field">
                <Search size={17}/>
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search FORGEX model or feature" aria-label="Search products"/>
              </label>
              <label className="select-field">
                <Filter size={16}/>
                <select value={category} onChange={e => setCategory(e.target.value)} aria-label="Filter by category">
                  <option>All</option>
                  <option>Safety Shoes</option>
                  <option>Safety Boots</option>
                  <option>Lightweight Range</option>
                </select>
                <ChevronDown size={15}/>
              </label>
            </div>
          </div>
          {filtered.length ? (
            <div className="product-grid product-grid-all">
              {filtered.map(p => <ProductCard key={p.id} product={p}/>)}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={28}/>
              <h3>No products found</h3>
              <p>Try searching for another keyword or reset the category filter.</p>
              <button className="btn btn-outline-dark" onClick={() => { setSearch(''); setCategory('All'); }}>Clear filters</button>
            </div>
          )}
          <p className="catalog-disclaimer">
            Note: {CONFIG.statusNote} All technical parameters are verified according to standard industrial testing criteria. Contact us for bulk specifications and custom order sizing.
          </p>
        </div>
      </section>
      <CTA title="Request a Sample or Custom Quote" text="Discuss bulk quantities, sizes, and pricing with our sales team on WhatsApp or email."/>
    </>
  );
}

function ProductDetail() {
  const { pathname } = useLocation();
  const id = pathname.split('/').pop();
  const product = productData.find(p => p.id === id);
  if (!product) return <NotFound />;
  return (
    <>
      <PageIntro title={product.name} description={`Detailed specifications for model ${product.id} from the FORGEX industrial safety footwear collection.`}/>
      <section className="section">
        <div className="container detail-layout">
          <div className="detail-image">
            <img src={product.img} alt={`${product.name}`} />
            <span className="product-tag">{product.tag}</span>
          </div>
          <div className="detail-copy">
            <div className="product-meta"><span>{product.category}</span><span>Model: {product.id}</span></div>
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <div className="detail-warning">
              <ShieldCheck size={20}/>
              <span>Manufactured by {CONFIG.legalName}. {CONFIG.statusNote}</span>
            </div>
            <h3>Key Features & Specifications</h3>
            <ul className="check-list">
              {product.features.map(f => (
                <li key={f}><CheckCircle2 size={17}/>{f}</li>
              ))}
            </ul>
            <div className="detail-actions">
              <Link className="btn btn-primary" to={`/corporate-enquiry?product=${encodeURIComponent(product.name)}`}>
                Enquire for Bulk Order <ArrowRight size={16}/>
              </Link>
              <a className="btn btn-outline-dark" href={waLink(`Hello, I would like to enquire about ${product.name} (${product.id}). Please share bulk pricing and technical details.`)} target="_blank" rel="noreferrer">
                WhatsApp Enquiry <MessageCircle size={16}/>
              </a>
            </div>
          </div>
        </div>
      </section>
      <CTA/>
    </>
  );
}

function Manufacturing() {
  return (
    <>
      <PageIntro title="Manufacturing Facility" description="Explore GURDEX Footwear Private Limited's modern production setup for FORGEX PU double-density safety shoes in Vasai, Maharashtra."/>
      <section className="section">
        <div className="container">
          <div className="facility-hero">
            <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=85" alt="Manufacturing setup"/>
            <div className="facility-overlay">
              <h2>Engineered for durability and industrial safety.</h2>
              <p>{CONFIG.factoryAddress}</p>
            </div>
          </div>

          <div className="status-pill" style={{marginTop:'28px', fontSize:'15px', padding:'12px 18px'}}>
            <Factory size={20}/>
            <span>{CONFIG.statusNote}</span>
          </div>

          <div className="process-grid">
            {[
              { n: '01', icon: Layers3, title: 'Raw Material Selection', text: 'High-grade leather, certified steel toe caps, and premium polyurethane formulations.' },
              { n: '02', icon: Wrench, title: 'Upper Stitching & Assembly', text: 'Precision cut patterns and reinforced multi-row stitching for structural endurance.' },
              { n: '03', icon: ClipboardCheck, title: 'PU Direct Injection', text: 'Double-density PU moulding ensuring a permanent mechanical bond between upper and sole.' },
              { n: '04', icon: PackageCheck, title: 'Final Inspection & Packing', text: 'Thorough inspection for toe cap clearance, sole adhesion, and secure batch dispatch packaging.' },
            ].map(s => (
              <article className="process-card" key={s.n}>
                <div className="process-top"><span>{s.n}</span><s.icon size={23}/></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>

          <div className="info-note wide-note">
            <MapPin size={22}/>
            <span>
              <strong>Manufacturing Facility Address</strong>
              <small>{CONFIG.factoryAddress}</small>
            </span>
          </div>
        </div>
      </section>
      <CTA title="Schedule a Factory Visit or Discussion" text="Connect with our production planning and marketing team for customized specifications."/>
    </>
  );
}

function Quality() {
  return (
    <>
      <PageIntro title="Quality & Certifications" description="High standards and rigorous inspection protocols for FORGEX industrial safety footwear."/>
      <section className="section">
        <div className="container quality-feature">
          <div className="quality-feature-copy">
            <h2>Commitment to industrial protection.</h2>
            <p>Every pair of FORGEX footwear is built with safety as the primary priority. GURDEX Footwear Private Limited follows strict production benchmarks to ensure reliable slip resistance, toe protection, and long wear life.</p>
            <div className="quality-points">
              {[
                { icon: ClipboardCheck, title: 'BIS / ISI Standards Benchmark', text: 'Application and official testing procedures currently in progress for BIS/ISI certifications.' },
                { icon: FlaskConical, title: 'Steel Toe Cap Impact Resistance', text: 'Engineered to withstand 200 Joules impact energy and compression forces.' },
                { icon: BadgeCheck, title: 'PU Double-Density Sole Tests', text: 'Testing sole flexibility, anti-skid coefficient, and oil/chemical resistance.' },
              ].map(x => (
                <div key={x.title}>
                  <x.icon size={22}/>
                  <span><strong>{x.title}</strong><small>{x.text}</small></span>
                </div>
              ))}
            </div>
          </div>
          <div className="certificate-placeholder">
            <div className="certificate-inner">
              <ShieldCheck size={42}/>
              <div className="certificate-rule"/>
              <h3>Testing In Progress</h3>
              <p>BIS / ISI application and laboratory testing currently underway for the FORGEX footwear line.</p>
              <span className="certificate-stamp">TESTING<br/>IN PROGRESS</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="info-note wide-note">
            <BadgeCheck size={22}/>
            <span>
              <strong>Regulatory & Compliance Disclosure</strong>
              <small>{CONFIG.statusNote} Official certificate documents and test reports will be displayed immediately upon formal grant.</small>
            </span>
          </div>
        </div>
      </section>
      <CTA title="Need technical specifications for procurement?" text="Contact our quality & production planning head directly."/>
    </>
  );
}

function EnquiryForm({ type = 'corporate' }) {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', city: '', quantity: '', product: '', message: '' });
  const [errors, setErrors] = useState({});
  const isDealer = type === 'dealer';
  const title = isDealer ? 'Dealer & Distributor Enquiry' : 'Corporate Bulk Enquiry';
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });

  function submit(e) {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.phone.trim()) next.phone = 'Please enter a phone number.';
    else if (!/^[+\d\s()-]{8,20}$/.test(form.phone.trim())) next.phone = 'Enter a valid phone number.';
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!form.city.trim()) next.city = 'Please enter your city.';
    if (!form.message.trim()) next.message = 'Please tell us a little about your requirement.';
    setErrors(next);
    if (Object.keys(next).length) return;
    const msg = [
      `Hello GURDEX, I am submitting a ${isDealer ? 'dealer/distributor' : 'corporate bulk'} enquiry for FORGEX footwear.`,
      `Name: ${form.name}`,
      `Company: ${form.company || 'Not provided'}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || 'Not provided'}`,
      `City: ${form.city}`,
      `Estimated quantity: ${form.quantity || 'To be discussed'}`,
      `Product interest: ${form.product || 'Not specified'}`,
      `Requirement: ${form.message}`,
    ].join('\n');
    window.open(waLink(msg), '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <PageIntro title={title} description={isDealer ? 'Interested in becoming an authorized distributor for FORGEX safety footwear? Share your business profile to get started.' : 'Procuring safety footwear for your enterprise or workforce? Connect with our corporate sales team.'} />
      <section className="section enquiry-section">
        <div className="container enquiry-layout">
          <aside className="enquiry-aside">
            <h2>{isDealer ? 'Grow your business with FORGEX.' : 'Get a direct manufacturer quote.'}</h2>
            <p>{isDealer ? 'Join our expanding dealer and distributor network across industrial belts in India.' : 'Direct factory supply, reliable delivery timelines, and customized bulk packaging.'}</p>
            <div className="enquiry-benefits">
              {(isDealer ? [
                ['Building2', 'Attractive dealer margins & territory support'],
                ['Truck', 'Direct dispatches from Vasai manufacturing plant'],
                ['MessageCircle', 'Direct access to company management'],
              ] : [
                ['PackageCheck', 'PU Double-Density direct manufacturer pricing'],
                ['ClipboardCheck', 'Consistent sizing & batch traceability'],
                ['MessageCircle', 'Prompt quotations & sample coordination'],
              ]).map(([IconText, text]) => (
                <div key={text}><CheckCircle2 size={18}/><span>{text}</span></div>
              ))}
            </div>
            <div className="aside-contact">
              <span>Need an immediate response?</span>
              <a href={waLink(`Hello, I have a ${isDealer ? 'dealer' : 'corporate bulk'} enquiry for FORGEX.`)} target="_blank" rel="noreferrer">
                <MessageCircle size={17}/> WhatsApp Us Direct <ArrowUpRight size={15}/>
              </a>
            </div>
          </aside>
          <form className="enquiry-form" onSubmit={submit} noValidate>
            <div className="form-heading">
              <div><h3>Tell us about your requirement</h3></div>
              <span className="required-note">* Required fields</span>
            </div>
            <div className="form-grid">
              <Field label="Full name" name="name" value={form.name} onChange={update} error={errors.name} required placeholder="Your full name"/>
              <Field label="Company / Organisation" name="company" value={form.company} onChange={update} placeholder="Company or shop name"/>
              <Field label="Phone number" name="phone" value={form.phone} onChange={update} error={errors.phone} required placeholder="+91 ..." type="tel"/>
              <Field label="Work email" name="email" value={form.email} onChange={update} error={errors.email} placeholder="you@company.com" type="email"/>
              <Field label="City / Delivery Location" name="city" value={form.city} onChange={update} error={errors.city} required placeholder="e.g. Mumbai, Pune, Ahmedabad"/>
              <Field label="Estimated quantity" name="quantity" value={form.quantity} onChange={update} placeholder="e.g. 100 pairs"/>
              <div className="field full-field">
                <label htmlFor="product">Product Interest</label>
                <select id="product" name="product" value={form.product} onChange={update}>
                  <option value="">Select a product model (optional)</option>
                  {productData.map(p => <option key={p.id} value={`${p.name} (${p.id})`}>{p.name} — {p.id}</option>)}
                  <option value="All Models">Multiple models / full catalogue</option>
                </select>
              </div>
              <div className="field full-field">
                <label htmlFor="message">Your Requirement <span>*</span></label>
                <textarea id="message" name="message" value={form.message} onChange={update} placeholder={isDealer ? 'Share your distribution reach, existing brands dealt with, and target market.' : 'Detail your workforce size, footwear specs, delivery location, and target timeline.'} rows="4" aria-invalid={!!errors.message}/>
                {errors.message && <small className="field-error">{errors.message}</small>}
              </div>
            </div>
            <div className="form-foot">
              <p><ShieldCheck size={15}/> Submitting sends your requirement directly to our team via WhatsApp.</p>
              <button className="btn btn-primary" type="submit">Submit Enquiry on WhatsApp <Send size={16}/></button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, value, onChange, error, required, placeholder, type = 'text' }) {
  return (
    <div className="field">
      <label htmlFor={name}>{label} {required && <span>*</span>}</label>
      <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} aria-invalid={!!error}/>
      {error && <small className="field-error">{error}</small>}
    </div>
  );
}

function Contact() {
  return (
    <>
      <PageIntro title="Contact Us" description="Get in touch with GURDEX Footwear Private Limited for FORGEX safety footwear enquiries, dealership, and bulk corporate orders."/>
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-main">
            <h2>Connect with our team.</h2>
            <p>Whether you require technical consultation, bulk quotations, or wish to explore dealership opportunities, our sales and management team is here to assist.</p>

            <div className="address-card-group">
              <div className="address-block">
                <strong><Factory size={18} color="#bd781f"/> Manufacturing Facility</strong>
                <p>{CONFIG.factoryAddress}</p>
              </div>

              <div className="address-block">
                <strong><Building2 size={18} color="#bd781f"/> Registered / Office Address</strong>
                <p>{CONFIG.officeAddress}</p>
              </div>
            </div>

            <div className="contact-options">
              <Link to="/corporate-enquiry">
                <span><PackageCheck/></span>
                <div><strong>Corporate Bulk Orders</strong><small>Direct factory quotes & specifications</small></div>
                <ArrowUpRight/>
              </Link>
              <Link to="/dealer-enquiry">
                <span><Building2/></span>
                <div><strong>Dealer / Distributor</strong><small>Regional distribution partnership</small></div>
                <ArrowUpRight/>
              </Link>
              <a href={CONFIG.youtube} target="_blank" rel="noreferrer">
                <span style={{color:'#ff4444', background:'#fff0f0'}}><YoutubeIcon size={20}/></span>
                <div><strong>Official YouTube Channel</strong><small>Watch product & manufacturing videos</small></div>
                <ArrowUpRight/>
              </a>
              <a href={waLink('Hello GURDEX, I would like to get in touch regarding FORGEX footwear.')} target="_blank" rel="noreferrer">
                <span style={{color:'#20b866', background:'#e8faee'}}><MessageCircle size={20}/></span>
                <div><strong>WhatsApp Chat</strong><small>Instant response on +91 91850 38002</small></div>
                <ArrowUpRight/>
              </a>
            </div>
          </div>

          <div className="contact-card">
            <h3>Contact Information</h3>

            <div style={{marginBottom:'20px'}}>
              <div style={{fontSize:'12px', color:'#ffb64e', textTransform:'uppercase', letterSpacing:'.08em', fontWeight:700, marginBottom:'6px'}}>
                Legal Entity
              </div>
              <strong style={{fontSize:'16px', display:'block'}}>{CONFIG.legalName}</strong>
              <small style={{color:'#a4b2be'}}>Product Brand: FORGEX | Industrial Safety Footwear</small>
            </div>

            <div style={{marginBottom:'20px'}}>
              <div style={{fontSize:'12px', color:'#ffb64e', textTransform:'uppercase', letterSpacing:'.08em', fontWeight:700, marginBottom:'8px'}}>
                Phone Numbers
              </div>
              <div className="phones-list">
                {CONFIG.phones.map(p => (
                  <div className="phone-item" key={p.number}>
                    <a href={`tel:${p.tel}`}>{p.number}</a>
                    <span className="phone-label">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{marginBottom:'20px'}}>
              <div style={{fontSize:'12px', color:'#ffb64e', textTransform:'uppercase', letterSpacing:'.08em', fontWeight:700, marginBottom:'8px'}}>
                Email Addresses
              </div>
              <p className="contact-line">
                <Mail size={16}/>
                <span>
                  Sales: <a href={`mailto:${CONFIG.salesEmail}`} style={{color:'#f3a33b', fontWeight:600}}>{CONFIG.salesEmail}</a>
                </span>
              </p>
              <p className="contact-line">
                <Mail size={16}/>
                <span>
                  General: <a href={`mailto:${CONFIG.infoEmail}`} style={{color:'#d0d8df'}}>{CONFIG.infoEmail}</a>
                </span>
              </p>
            </div>

            <div>
              <div style={{fontSize:'12px', color:'#ffb64e', textTransform:'uppercase', letterSpacing:'.08em', fontWeight:700, marginBottom:'8px'}}>
                Official Website
              </div>
              <p className="contact-line">
                <Globe size={16}/>
                <a href={CONFIG.websiteUrl} target="_blank" rel="noreferrer" style={{color:'#fff', fontWeight:600}}>
                  {CONFIG.websiteDisplay}
                </a>
              </p>
            </div>

            <div className="contact-card-note">
              <Clock3 size={20}/>
              <span>
                <strong>Operational Hours</strong>
                <small>Monday – Saturday: 9:00 AM – 6:30 PM</small>
              </span>
            </div>

            <div className="status-pill status-pill-dark" style={{marginTop:'20px'}}>
              <Factory size={16}/>
              <span style={{fontSize:'12px'}}>{CONFIG.statusNote}</span>
            </div>
          </div>
        </div>
      </section>
      <CTA/>
    </>
  );
}

function NotFound() {
  return (
    <PageIntro title="This page isn’t here." description="The page may have moved, or the link may be incorrect.">
      <Link className="btn btn-primary" to="/">Return home</Link>
    </PageIntro>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/manufacturing" element={<Manufacturing/>}/>
        <Route path="/quality" element={<Quality/>}/>
        <Route path="/dealer-enquiry" element={<EnquiryForm type="dealer"/>}/>
        <Route path="/corporate-enquiry" element={<EnquiryForm type="corporate"/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
      <FloatingWhatsApp/>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement._reactRoot) {
  rootElement._reactRoot = createRoot(rootElement);
}
rootElement._reactRoot.render(<React.StrictMode><App/></React.StrictMode>);
