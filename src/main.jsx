import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ArrowRight, ShieldCheck, Factory, BadgeCheck, Truck, CheckCircle2, ChevronDown, HardHat, Footprints, Settings, ClipboardCheck, Phone, Mail, MapPin, MessageCircle, Send, Search, Filter, Clock3, Building2, PackageCheck, Layers3, Wrench, FlaskConical, Globe, Target, Eye } from 'lucide-react';
import './styles.css';

const CONFIG = {
  brand: 'FORGEX',
  brandFullName: 'FORGEX™ | Industrial Safety Footwear',
  legalName: 'GUARDEX Footwear Private Limited',
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
  cin: 'U15201MR2026PTC481287',
  copyright: '© 2026 GUARDEX Footwear Private Limited. All rights reserved.',
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
  { id:'FX-101', name:'FORGEX Classic Steel Toe', category:'Safety Shoes', type:'Low ankle', desc:'Everyday industrial protection with PU double-density sole & certified steel toe cap.', features:['PU double-density injection sole','Steel toe impact protection (200J)','Oil & acid resistant outsole'], img:'/images/cat.jpeg', tag:'PU Double-Density' },
  { id:'FX-204', name:'FORGEX Rugged High-Ankle Boot', category:'Safety Boots', type:'High ankle', desc:'Demanding shop-floor & construction safety boot with reinforced ankle padding and anti-slip tread.', features:['High-ankle reinforced collar','PU double-density anti-skid sole','Heavy-duty steel toe cap'], img:'/images/cat1.jpeg', tag:'Heavy Duty' },
  { id:'FX-310', name:'FORGEX Executive Work Shoe', category:'Safety Shoes', type:'Low ankle', desc:'Clean corporate profile for facility managers, engineers and light shop floors.', features:['Low-profile smart workwear look','Lightweight PU double-density sole','Cushioned insole for all-day comfort'], img:'/images/cat2.jpeg', tag:'Executive' },
  { id:'FX-422', name:'FORGEX All-Terrain Safety Boot', category:'Safety Boots', type:'Mid ankle', desc:'Robust high-traction safety boot for outdoor infrastructure and heavy site operations.', features:['Deep-cleat mud & slip-resistant tread','Water-resistant leather upper','PU double-density cushioned midsole'], img:'/images/cat3.jpeg', tag:'All Terrain' },
  { id:'FX-510', name:'FORGEX Lightweight Sport Sneaker', category:'Lightweight Range', type:'Low ankle', desc:'Contemporary safety footwear engineered for active logistics, warehousing and tech floors.', features:['Sport-inspired breathable upper','Protective steel toe cap','Flexible PU lightweight sole'], img:'/images/cat5.jpeg', tag:'Lightweight' },
  { id:'FX-608', name:'FORGEX Industrial Utility Boot', category:'Safety Boots', type:'High ankle', desc:'Utility-led design for heavy manufacturing, chemical plants and engineering plants.', features:['Chemical & oil resistant PU sole','Anti-static properties design','Full-grain protective leather upper'], img:'/images/cat6.jpeg', tag:'Utility' },
  { id:'FX-701', name:'FORGEX Pro-Grip Low Ankle', category:'Safety Shoes', type:'Low ankle', desc:'High performance anti-static footwear engineered for engineering & automotive assembly.', features:['Anti-static PU compound','Puncture resistant midsole','Shock absorbing heel cavity'], img:'/images/cat7.jpeg', tag:'Pro Series' },
  { id:'FX-802', name:'FORGEX Heavy Construction Boot', category:'Safety Boots', type:'High ankle', desc:'Maximum impact & puncture protection built for infrastructure & construction sites.', features:['High tensile steel toe','Double density injection','Padded ankle protection'], img:'/images/cat8.jpeg', tag:'Construction' },
];

const leadership = [
  {
    name: 'Hirasingh Parmar',
    role: 'Director',
    desc: 'Provides business leadership, strategic direction and overall company development.',
    img: '/images/leadership-hirasingh.jpeg',
  },
  {
    name: 'Pratiksha N. Joshi',
    role: 'Director',
    desc: 'Contributes to company management, business coordination and long-term growth.',
    img: '/images/leadership-pratiksha.jpeg',
  },
  {
    name: 'Nimesh Joshi',
    role: 'Sales Head, Quality & Production Planning',
    desc: 'Responsible for sales, quality coordination and production planning to support business growth and operational efficiency.',
    img: '/images/leadership-nimesh.jpeg',
  },
];

const navItems = [
  ['Home','/'],
  ['About','/about'],
  ['Products','/products'],
  ['Manufacturing','/manufacturing'],
  ['Quality & Compliance','/quality'],
  ['Contact','/contact'],
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
  const [open, setOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1180 && open) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-left"><ShieldCheck size={14}/> Product Brand: FORGEX™ | {CONFIG.legalName}</span>
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
          {open && <div className="nav-backdrop" onClick={() => setOpen(false)} aria-hidden="true"/>}
          <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
            {navItems.map(([label, path]) => (
              <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>
                {label}
              </NavLink>
            ))}
            <div className="mobile-cta">
              <Link className="btn btn-primary" to="/corporate-enquiry" onClick={() => setOpen(false)}>
                Get a Bulk Quote <ArrowRight size={16}/>
              </Link>
            </div>
          </nav>
          <div className="nav-actions">
            <Link className="btn btn-primary nav-quote" to="/corporate-enquiry">Get a Bulk Quote <ArrowUpRight size={16}/></Link>
            <button className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
              {open ? <X size={22}/> : <Menu size={22}/>}
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
          <p style={{marginTop:'16px', fontWeight: 700, color: '#fff', fontSize:'15px'}}>
            {CONFIG.legalName}
          </p>
          <p style={{margin: '4px 0 10px', color: '#f3a33b', fontWeight: 700, fontSize:'14px'}}>
            Product Brand: FORGEX | Industrial Safety Footwear
          </p>
          <div className="cin-badge" style={{marginTop:'10px', display:'inline-flex', alignItems:'center', gap:'8px', padding:'6px 12px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.14)', borderRadius:'6px', color:'#d0d8df', fontSize:'12.5px'}}>
            <span style={{color:'#f3a33b', fontWeight:700}}>CIN:</span>
            <strong style={{letterSpacing:'.06em', color:'#ffffff'}}>{CONFIG.cin}</strong>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us & Leadership</Link>
          <Link to="/products">Products Catalogue</Link>
          <Link to="/manufacturing">Manufacturing Facility</Link>
          <Link to="/quality">Quality & Compliance</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div>
          <h4>Enquiries & Channels</h4>
          <Link to="/dealer-enquiry">Become a Dealer</Link>
          <Link to="/corporate-enquiry">Corporate Bulk Enquiry</Link>
          <a href={CONFIG.youtube} target="_blank" rel="noreferrer" className="youtube-link" style={{margin:'10px 0'}}>
            <YoutubeIcon size={18}/> Watch on YouTube <ArrowUpRight size={13}/>
          </a>
          <a href={waLink('Hello GUARDEX, I would like to enquire about FORGEX industrial safety footwear.')} target="_blank" rel="noreferrer" style={{color:'#20b866', fontWeight: 700}}>
            <MessageCircle size={15}/> WhatsApp Enquiry <ArrowUpRight size={13}/>
          </a>
        </div>

        <div>
          <h4>Website & Enquiries</h4>
          <p className="contact-line">
            <Globe size={16}/>
            <span>
              Website: <a href={CONFIG.websiteUrl} target="_blank" rel="noreferrer" style={{color:'#fff', fontWeight:600}}>
                {CONFIG.websiteDisplay}
              </a>
            </span>
          </p>
          <p className="contact-line">
            <Mail size={16}/>
            <span>
              Sales: <a href={`mailto:${CONFIG.salesEmail}`} style={{color:'#f3a33b', fontWeight:600}}>{CONFIG.salesEmail}</a><br/>
              General Enquiries: <a href={`mailto:${CONFIG.infoEmail}`} style={{color:'#d0d8df'}}>{CONFIG.infoEmail}</a>
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
        <span>© 2026 GUARDEX Footwear Private Limited. All rights reserved. | CIN: <strong style={{color:'#f3a33b'}}>{CONFIG.cin}</strong></span>
        <span>Product Brand: FORGEX | Industrial Safety Footwear | Website: <a href="https://www.guardexfootwear.com" target="_blank" rel="noreferrer" style={{color:'#f3a33b', textDecoration:'none'}}>www.guardexfootwear.com</a></span>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a className="wa-float" href={waLink('Hello, I am interested in FORGEX safety footwear by GUARDEX Footwear Private Limited.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <MessageCircle size={22}/><span>Chat with us</span>
    </a>
  );
}

function PageIntro({ title, description }) {
  return (
    <section className="page-intro">
      <div className="container">
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

function PartnerWithForgex() {
  const categories = [
    { title: 'Industrial and corporate buyers', icon: Building2 },
    { title: 'Manufacturing companies and factories', icon: Factory },
    { title: 'Safety equipment suppliers', icon: ShieldCheck },
    { title: 'Footwear dealers and distributors', icon: Truck },
    { title: 'Contractors and bulk purchasers', icon: PackageCheck },
  ];

  return (
    <section className="section partner-section">
      <div className="container">
        <div className="partner-header text-center" style={{maxWidth:'820px', margin:'0 auto 30px'}}>
          <h2>Partner with FORGEX</h2>
          <p className="partner-lead">We welcome business enquiries from:</p>
        </div>

        <div className="partner-categories-grid">
          {categories.map((c, i) => (
            <div className="partner-category-card" key={i}>
              <div className="partner-icon-wrap">
                <c.icon size={26}/>
              </div>
              <h3>{c.title}</h3>
            </div>
          ))}
        </div>

        <div className="partner-invite-box">
          <p className="partner-invite-text">
            If your business requires industrial safety footwear, we invite you to contact us to discuss product development, future availability, bulk requirements and dealership opportunities.
          </p>

          <div className="partner-channels-grid">
            <div className="partner-email-block">
              <Mail size={22} color="#f3a33b"/>
              <div>
                <span className="partner-channel-label">Sales Enquiries:</span>
                <a href={`mailto:${CONFIG.salesEmail}`} className="partner-channel-link">{CONFIG.salesEmail}</a>
              </div>
            </div>

            <div className="partner-email-block">
              <Mail size={22} color="#f3a33b"/>
              <div>
                <span className="partner-channel-label">General Enquiries:</span>
                <a href={`mailto:${CONFIG.infoEmail}`} className="partner-channel-link">{CONFIG.infoEmail}</a>
              </div>
            </div>
          </div>

          <div className="partner-actions-row">
            <Link className="btn btn-primary" to="/corporate-enquiry">
              Corporate Bulk Enquiry <ArrowRight size={16}/>
            </Link>
            <Link className="btn btn-outline-light" to="/dealer-enquiry">
              Become a Dealer / Distributor <ArrowUpRight size={16}/>
            </Link>
            <a className="btn btn-wa" href={waLink('Hello GUARDEX, we are interested in discussing partnership opportunities for FORGEX industrial safety footwear.')} target="_blank" rel="noreferrer">
              <MessageCircle size={17}/> WhatsApp Us Direct
            </a>
          </div>
        </div>
      </div>
    </section>
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
              <h1>FORGEX – Built for Demanding Work Environments</h1>
              <p style={{fontSize:'19px', fontWeight:700, color:'#f3a33b', margin:'0 0 16px', letterSpacing:'.02em'}}>
                Industrial Safety Footwear | Designed for Work. Built for Durability.
              </p>
              <p style={{marginBottom:'14px'}}>
                FORGEX is the industrial safety footwear brand of GUARDEX Footwear Private Limited, India.
              </p>
              <p style={{marginBottom:'24px'}}>
                We are developing industrial safety footwear solutions for manufacturing units, engineering industries, construction businesses, warehouses, logistics operations and other demanding workplaces.
              </p>
              <div className="hero-buttons">
                <Link className="btn btn-primary" to="/contact">Contact Us <ArrowRight size={17}/></Link>
                <Link className="btn btn-outline-light" to="/corporate-enquiry">Business Enquiry <ArrowUpRight size={17}/></Link>
              </div>
              <div className="hero-proof">
                <div className="proof-icon"><ShieldCheck size={20}/></div>
                <div>
                  <strong>PU Double-Density Safety Footwear</strong>
                  <span>Engineered for Maximum Workplace Protection</span>
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
            <span>FORGEX™ BY GUARDEX</span>
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
              <SectionHeading title="Our Product Range" description="Industrial footwear developed for manufacturing, engineering, construction, warehousing and logistics applications."/>
              <Link className="text-link desktop-link" to="/products">View all products <ArrowRight size={16}/></Link>
            </div>

            <div className="range-overview-grid">
              <div className="range-card">
                <h3>Industrial Safety Shoes</h3>
                <p>Industrial footwear developed for manufacturing, engineering, construction, warehousing and logistics applications.</p>
              </div>
              <div className="range-card">
                <h3>PU Double-Density Safety Shoes</h3>
                <p>Safety footwear under development using a double-density polyurethane sole construction, subject to individual model specifications.</p>
              </div>
              <div className="range-card">
                <h3>Industrial Footwear Solutions</h3>
                <p>We aim to develop footwear options for industrial customers and business buyers with requirements varying by application, size and product specification.</p>
              </div>
            </div>

            <div className="product-grid">{productData.slice(0,6).map(p=><ProductCard key={p.id} product={p}/>)}</div>

            <div className="range-notice-box">
              <ClipboardCheck size={24}/>
              <div>
                <p><strong>For model availability, sizes, technical details, product testing status and bulk pricing, please contact our team.</strong></p>
                <p>Product availability and protection features will be confirmed according to the relevant model specifications and applicable certifications.</p>
              </div>
            </div>

            <div className="mobile-center"><Link className="btn btn-outline-dark" to="/products">Explore all products <ArrowRight size={16}/></Link></div>
          </div>
        </section>

        <section className="section dark-section">
          <div className="container split-layout">
            <div className="split-image">
              <img src="/images/plant-1.jpeg" alt="FORGEX Manufacturing Plant" loading="lazy"/>
              <div className="image-caption">
                <Factory size={20}/>
                <span>
                  <strong>FORGEX Manufacturing Plant</strong>
                  <small>Vasai, Palghar, Maharashtra</small>
                </span>
              </div>
            </div>
            <div className="split-copy">
              <h2>FORGEX – Protection Begins with the Right Footwear.</h2>
              <p>Our focus is on durable product design, PU double-density sole technology, comfort and quality-oriented manufacturing processes.</p>
              <p>Our manufacturing setup is currently in progress, and we are working towards developing a range of industrial safety footwear for business customers across India.</p>

              <div style={{margin:'26px 0 30px'}}>
                <h3 style={{fontSize:'19px', color:'#f3a33b', margin:'0 0 14px', letterSpacing:'.03em'}}>Our Focus</h3>
                <div className="feature-list" style={{margin:0, gap:'14px'}}>
                  <div><CheckCircle2 size={20}/><span><strong>Industrial safety footwear</strong></span></div>
                  <div><CheckCircle2 size={20}/><span><strong>PU double-density sole technology</strong></span></div>
                  <div><CheckCircle2 size={20}/><span><strong>Product development and quality control</strong></span></div>
                  <div><CheckCircle2 size={20}/><span><strong>Dealer and distributor enquiries</strong></span></div>
                  <div><CheckCircle2 size={20}/><span><strong>Corporate and bulk-order enquiries</strong></span></div>
                </div>
              </div>

              <div style={{display:'flex', gap:'12px', flexWrap:'wrap'}}>
                <Link className="btn btn-primary" to="/contact">Contact Us <ArrowRight size={16}/></Link>
                <Link className="btn btn-outline-light" to="/corporate-enquiry">Business Enquiry <ArrowUpRight size={16}/></Link>
              </div>
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
              <h2>Quality & Compliance</h2>
              <p>At FORGEX, product quality and workplace safety are important considerations in our product development process.</p>
              <p style={{marginTop:'12px', color:'var(--muted)'}}>
                The applicable BIS/ISI application and testing process for our planned safety footwear range is currently in progress. We are working towards meeting the applicable product requirements and standards.
              </p>
              <p style={{fontSize:'13px', color:'#92400e', background:'#fff8ee', borderLeft:'3px solid #d97706', padding:'10px 14px', borderRadius:'4px', margin:'18px 0 20px', fontWeight:600}}>
                Important: BIS/ISI certification has not been represented as granted.
              </p>
              <Link className="text-link" to="/quality">Learn more about Quality & Compliance <ArrowRight size={16}/></Link>
            </div>
            <div className="quality-cards">
              <div className="quality-card"><FlaskConical/><strong>Testing In Progress</strong><span>BIS/ISI application underway</span></div>
              <div className="quality-card"><ClipboardCheck/><strong>Quality Benchmark</strong><span>PU double-density sole & steel toe</span></div>
              <div className="quality-card"><BadgeCheck/><strong>Verified Standards</strong><span>Documentation upon official grant</span></div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP & MANAGEMENT SECTION */}
        <section className="section soft-section">
          <div className="container">
            <SectionHeading
              title="Leadership & Management"
              description="Experienced leadership guiding GUARDEX Footwear Private Limited towards operational excellence and customer trust."
              center
            />
            <div className="leadership-grid">
              {leadership.map(l => (
                <div className="leadership-card" key={l.name}>
                  {l.img && (
                    <div className="leadership-avatar">
                      <img src={l.img} alt={l.name} loading="lazy" />
                    </div>
                  )}
                  <h3>{l.name}</h3>
                  <div className="leadership-role">{l.role}</div>
                  <p>{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PartnerWithForgex/>
      </main>
    </>
  );
}

function About() {
  return (
    <>
      <PageIntro title="About GUARDEX Footwear Private Limited" description="An Indian footwear company developing its industrial safety footwear business under the brand name FORGEX."/>
      <section className="section">
        <div className="container split-layout about-split">
          <div className="split-image about-image">
            <img src="/images/plant-2.jpeg" alt="Industrial workplace"/>
            <div className="floating-number">
              <strong>FORGEX</strong><span>SAFETY<br/>FOOTWEAR</span>
            </div>
          </div>
          <div className="split-copy">
            <h2>About GUARDEX Footwear Private Limited</h2>
            <p><strong>GUARDEX Footwear Private Limited</strong> is an Indian footwear company developing its industrial safety footwear business under the brand name <strong>FORGEX</strong>.</p>
            <p>Our objective is to develop dependable industrial safety footwear for professionals and businesses operating in demanding work environments.</p>
            <p>We are establishing our manufacturing capabilities with a planned production setup featuring a <strong>60-station PU pouring conveyor machine</strong>, a <strong>double-density PU system</strong> and <strong>aluminium moulds</strong>.</p>
            <p>We aim to build long-term relationships with industrial buyers, dealers, distributors and corporate customers through product quality, reliable service and a commitment to continuous improvement.</p>
            <div className="info-note">
              <ShieldCheck/>
              <span>
                <strong>Manufacturing & Quality Standards</strong>
                <small>PU Double-Density direct injection sole with certified steel toe protection.</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section" style={{background:'#f6f8f9', padding:'70px 0'}}>
        <div className="container">
          <SectionHeading title="Our Mission & Vision" description="Guiding principles driving FORGEX industrial safety footwear." center/>
          <div className="mission-vision-grid">
            <div className="mission-card">
              <h3><Target size={26} color="#bd781f"/> Our Mission</h3>
              <p>To develop durable and practical industrial safety footwear that supports worker protection, comfort and the requirements of modern workplaces.</p>
            </div>
            <div className="mission-card">
              <h3><Eye size={26} color="#bd781f"/> Our Vision</h3>
              <p>To establish FORGEX as a trusted Indian industrial safety footwear brand serving customers across India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Our Values" description="The core values that define our manufacturing culture and client relationships." center/>
          <div className="values-grid-cards">
            <div className="value-mini-card">
              <Factory size={28}/>
              <strong>Quality-oriented manufacturing</strong>
            </div>
            <div className="value-mini-card">
              <Footprints size={28}/>
              <strong>Practical product design</strong>
            </div>
            <div className="value-mini-card">
              <MessageCircle size={28}/>
              <strong>Customer-focused service</strong>
            </div>
            <div className="value-mini-card">
              <Building2 size={28}/>
              <strong>Long-term business partnerships</strong>
            </div>
            <div className="value-mini-card">
              <Layers3 size={28}/>
              <strong>Continuous product development</strong>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP & MANAGEMENT SECTION */}
      <section className="section soft-section">
        <div className="container">
          <SectionHeading title="Leadership & Management" description="Experienced leadership guiding GUARDEX Footwear towards operational excellence and customer trust." center/>
          <div className="leadership-grid">
            {leadership.map(l => (
              <div className="leadership-card" key={l.name}>
                {l.img && (
                  <div className="leadership-avatar">
                    <img src={l.img} alt={l.name} loading="lazy" />
                  </div>
                )}
                <h3>{l.name}</h3>
                <div className="leadership-role">{l.role}</div>
                <p>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerWithForgex/>
    </>
  );
}

function Products() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => productData.filter(p => (category === 'All' || p.category === category) && `${p.name} ${p.id} ${p.desc}`.toLowerCase().includes(search.toLowerCase())), [category, search]);
  return (
    <>
      <PageIntro title="Our Product Range" description="Industrial footwear developed for manufacturing, engineering, construction, warehousing and logistics applications."/>
      <section className="section">
        <div className="container">

          <div className="range-overview-grid">
            <div className="range-card">
              <h3>Industrial Safety Shoes</h3>
              <p>Industrial footwear developed for manufacturing, engineering, construction, warehousing and logistics applications.</p>
            </div>
            <div className="range-card">
              <h3>PU Double-Density Safety Shoes</h3>
              <p>Safety footwear under development using a double-density polyurethane sole construction, subject to individual model specifications.</p>
            </div>
            <div className="range-card">
              <h3>Industrial Footwear Solutions</h3>
              <p>We aim to develop footwear options for industrial customers and business buyers with requirements varying by application, size and product specification.</p>
            </div>
          </div>

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

          <div className="range-notice-box">
            <ClipboardCheck size={24}/>
            <div>
              <p><strong>For model availability, sizes, technical details, product testing status and bulk pricing, please contact our team.</strong></p>
              <p>Product availability and protection features will be confirmed according to the relevant model specifications and applicable certifications.</p>
            </div>
          </div>
        </div>
      </section>
      <PartnerWithForgex/>
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
              <span>Manufactured by {CONFIG.legalName}. Engineered for industrial safety and durability.</span>
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
      <PartnerWithForgex/>
    </>
  );
}

function Manufacturing() {
  return (
    <>
      <PageIntro title="Manufacturing Facility" description="Explore GUARDEX Footwear Private Limited's modern production setup for FORGEX PU double-density safety shoes in Vasai, Maharashtra."/>
      <section className="section">
        <div className="container">
          <div className="facility-hero">
            <img src="/images/plant-1.jpeg" alt="Manufacturing setup"/>
            <div className="facility-overlay">
              <h2>Engineered for durability and industrial safety.</h2>
              <p>{CONFIG.factoryAddress}</p>
            </div>
          </div>

          <div className="range-notice-box" style={{background:'#ffffff', border:'1px solid var(--line)', marginTop:'24px', marginBottom:'28px'}}>
            <Settings size={28} color="#bd781f"/>
            <div>
              <p style={{fontSize:'16px', color:'var(--navy)', marginBottom:'6px'}}><strong>Planned Production Setup & Machinery</strong></p>
              <p style={{fontSize:'15px', color:'var(--muted)', margin:0}}>We are establishing our manufacturing capabilities with a planned production setup featuring a <strong>60-station PU pouring conveyor machine</strong>, a <strong>double-density PU system</strong> and <strong>aluminium moulds</strong>.</p>
            </div>
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
      <PartnerWithForgex/>
    </>
  );
}

function Quality() {
  return (
    <>
      <PageIntro
        title="Quality & Compliance"
        description="At FORGEX, product quality and workplace safety are important considerations in our product development process."
      />
      <section className="section">
        <div className="container quality-feature">
          <div className="quality-feature-copy">
            <h2>Quality & Compliance Standards</h2>
            <p>
              At <strong>FORGEX</strong>, product quality and workplace safety are important considerations in our product development process.
            </p>
            <p>
              The applicable BIS/ISI application and testing process for our planned safety footwear range is currently in progress.
            </p>
            <p>
              We are working towards meeting the applicable product requirements and standards.
            </p>
            <p>
              Certification status, product conformity and safety-performance claims will be updated only after the relevant official approvals and supporting documentation are available.
            </p>

            <div className="compliance-disclaimer-box">
              <ShieldCheck size={28} color="#d97706" style={{flexShrink:0}}/>
              <div>
                <strong>Regulatory Compliance Disclosure</strong>
                <p>Important: BIS/ISI certification has not been represented as granted.</p>
              </div>
            </div>

            <div className="quality-points" style={{marginTop:'32px'}}>
              <div className="quality-point-item">
                <ClipboardCheck size={24} color="#bd781f" style={{flexShrink:0}}/>
                <div>
                  <strong>Testing In Progress</strong>
                  <p>Applicable BIS/ISI application and testing process currently in progress.</p>
                </div>
              </div>
              <div className="quality-point-item">
                <FlaskConical size={24} color="#bd781f" style={{flexShrink:0}}/>
                <div>
                  <strong>Performance & Protection Objectives</strong>
                  <p>Developing dependable PU double-density safety shoes engineered for tough workplace protection.</p>
                </div>
              </div>
              <div className="quality-point-item">
                <BadgeCheck size={24} color="#bd781f" style={{flexShrink:0}}/>
                <div>
                  <strong>Transparent Documentation</strong>
                  <p>Product conformity and safety claims will be published immediately once official certifications are awarded.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="certificate-placeholder">
            <div className="certificate-inner">
              <ShieldCheck size={48} color="#bd781f"/>
              <div className="certificate-rule"/>
              <h3>Testing In Progress</h3>
              <p>BIS / ISI application and laboratory testing currently underway for the FORGEX footwear range.</p>
              <span className="status-badge-outline">TESTING IN PROGRESS</span>
              <small style={{marginTop:'14px', display:'block', color:'#667085', fontSize:'13px'}}>
                {CONFIG.legalName}
              </small>
            </div>
          </div>
        </div>

        <div className="container" style={{marginTop:'36px'}}>
          <div className="info-note wide-note">
            <ShieldCheck size={24} color="#bd781f"/>
            <span>
              <strong>Regulatory & Compliance Disclosure</strong>
              <small>
                Certification status, product conformity and safety-performance claims will be updated only after the relevant official approvals and supporting documentation are available. Important: BIS/ISI certification has not been represented as granted.
              </small>
            </span>
          </div>
        </div>
      </section>

      <PartnerWithForgex/>
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
      `Hello GUARDEX, I am submitting a ${isDealer ? 'dealer/distributor' : 'corporate bulk'} enquiry for FORGEX footwear.`,
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
            <h2>Partner with FORGEX</h2>
            <p style={{marginBottom:'16px'}}>
              If your business requires industrial safety footwear, we invite you to contact us to discuss product development, future availability, bulk requirements and dealership opportunities.
            </p>

            <div style={{marginBottom:'22px'}}>
              <strong style={{display:'block', fontSize:'14px', color:'#bd781f', textTransform:'uppercase', letterSpacing:'.06em', marginBottom:'12px'}}>
                We welcome business enquiries from:
              </strong>
              <div className="enquiry-benefits">
                {[
                  'Industrial and corporate buyers',
                  'Manufacturing companies and factories',
                  'Safety equipment suppliers',
                  'Footwear dealers and distributors',
                  'Contractors and bulk purchasers',
                ].map(text => (
                  <div key={text}><CheckCircle2 size={18}/><span>{text}</span></div>
                ))}
              </div>
            </div>

            <div style={{background:'#f0f4f8', padding:'16px', borderRadius:'6px', marginBottom:'20px'}}>
              <div style={{fontSize:'12px', color:'#526071', textTransform:'uppercase', fontWeight:700, marginBottom:'8px', letterSpacing:'.05em'}}>
                Direct Email Channels
              </div>
              <p style={{margin:'0 0 6px', fontSize:'14px'}}>
                Sales Enquiries: <a href={`mailto:${CONFIG.salesEmail}`} style={{color:'#bd781f', fontWeight:600}}>{CONFIG.salesEmail}</a>
              </p>
              <p style={{margin:0, fontSize:'14px'}}>
                General Enquiries: <a href={`mailto:${CONFIG.infoEmail}`} style={{color:'#111f2c', fontWeight:600}}>{CONFIG.infoEmail}</a>
              </p>
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
      <PageIntro title="Contact Us" description="Get in touch with GUARDEX Footwear Private Limited for FORGEX safety footwear enquiries, dealership, and bulk corporate orders."/>
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
              <a href={waLink('Hello GUARDEX, I would like to get in touch regarding FORGEX footwear.')} target="_blank" rel="noreferrer">
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
                Legal Entity & Registration
              </div>
              <strong style={{fontSize:'16px', display:'block'}}>{CONFIG.legalName}</strong>
              <small style={{color:'#d0d8df', display:'block', marginTop:'3px'}}>CIN: <strong style={{color:'#fff'}}>{CONFIG.cin}</strong></small>
              <small style={{color:'#a4b2be', display:'block', marginTop:'2px'}}>Product Brand: FORGEX | Industrial Safety Footwear</small>
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

            <div className="cin-badge" style={{marginTop:'20px', display:'inline-flex', alignItems:'center', gap:'8px', padding:'8px 14px', background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.14)', borderRadius:'6px', color:'#d0d8df', fontSize:'13px'}}>
              <span style={{color:'#f3a33b', fontWeight:700}}>CIN:</span>
              <strong style={{letterSpacing:'.06em', color:'#ffffff'}}>{CONFIG.cin}</strong>
            </div>
          </div>
        </div>
      </section>
      <PartnerWithForgex/>
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
