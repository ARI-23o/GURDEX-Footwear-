import React, { useMemo, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import {
  Menu, X, ArrowUpRight, ArrowRight, ShieldCheck, Factory, BadgeCheck,
  Truck, CheckCircle2, ChevronDown, HardHat, Footprints, Settings,
  ClipboardCheck, Phone, Mail, MapPin, MessageCircle, Send, Search,
  Filter, Clock3, Building2, PackageCheck, Layers3, Wrench, FlaskConical,
  Target, Eye, Sparkles, ExternalLink, Info, Check, ChevronRight
} from 'lucide-react';
import './styles.css';

const CONFIG = {
  brand: 'FORGEX',
  brandFullName: 'FORGEX™ | Industrial Safety Footwear',
  legalName: 'GUARDEX Footwear Private Limited',
  tagline: 'Industrial Safety Footwear',
  salesEmail: 'sales@guardexfootwear.com',
  enquiryEmail: 'enquiry@guardexfootwear.com',
  infoEmail: 'info@guardexfootwear.com',
  whatsappNumber: '919185038002',
  primaryPhone: '+91 91850 38002',
  phones: [
    { label: 'Factory Contact & WhatsApp', number: '+91 91850 38002', tel: '+919185038002' },
    { label: 'Hirasingh', number: '+91 97652 38002', tel: '+919765238002' },
    { label: 'Nimesh Joshi (Mobile)', number: '+91 73872 16551', tel: '+917387216551' },
    { label: 'Nimesh Joshi (Office)', number: '+91 79-7245 8345', tel: '+917972458345' },
  ],
  factoryAddress: 'Gala No. 1 & 2, Survey No. 47/2, Shankheshwar Inds. Estate, Near Jain Mandir, Village Mori, Poman (Kaman Road), Tehsil Vasai, District Palghar, Maharashtra - 401208, India.',
  factoryMapUrl: 'https://maps.app.goo.gl/Y7rBsEDcE7eh2SK48',
  officeAddress: 'Flat No. 902, Vasai One Realty, Bldg. No. 2, Ambadi Road, Diwanman, Vasai West, Palghar, Maharashtra – 401202, India.',
  officeMapUrl: 'https://maps.app.goo.gl/Xb6EA651zJ1R7bmK8?g_st=i&utm_campaign=ac-im',
  cin: 'U15201MR2026PTC481287',
  regNumber: '481287',
  roc: 'Registrar of Companies (RoC-Mumbai II), Maharashtra, India',
  incorpDate: '29 September 2026',
  status: 'Active',
  capital: '₹1,00,000 / ₹1,00,000',
  nicCode: 'Manufacture of footwear (NIC Code: 15201)',
  social: {
    youtube: 'https://youtube.com/@Forgex-safetyshoes',
    instagram: 'https://www.instagram.com/Forgex.footwear',
    facebook: 'https://www.facebook.com/share/1DfK6bySYC/?mibextid=wwXIfr',
    linkedin: 'https://www.linkedin.com/company/guardex-footwear-pvt-ltd',
  },
  copyright: '© 2026 GUARDEX Footwear Private Limited. All rights reserved.',
};

const waLink = (message) => `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

function YoutubeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32z"/>
    </svg>
  );
}

// Exactly mapped to flyer graphics and scanned content
const productData = [
  {
    id: 'FX-101',
    name: 'FORGEX Classic Steel Toe',
    category: 'Safety Shoes',
    type: 'Low Ankle',
    tag: 'Steel Toe Cap',
    img: '/images/cat1.jpeg',
    desc: 'Trusted protection for everyday work. Features heavy-duty steel toe cap impact resistance, slip-resistant outsole, and all-day comfort support.',
    features: ['Certified Steel Toe Impact (200J)', 'Slip Resistant PU Outsole', 'Premium Breathable Leather Upper', 'Cushioned Shock-Absorbing Heel'],
  },
  {
    id: 'FX-204',
    name: 'FORGEX Rugged High-Ankle Boot',
    category: 'Safety Boots',
    type: 'High Ankle',
    tag: 'Heavy Duty Boot',
    img: '/images/plant-1.jpeg',
    desc: 'Engineered for tough environments and demanding construction & infrastructure sites with reinforced ankle collar and heavy-duty steel toe.',
    features: ['Reinforced High-Ankle Collar', 'Deep-Cleat Mud & Slip Resistant Sole', 'High-Impact Steel Toe Cap', 'Breathable Weatherproof Upper'],
  },
  {
    id: 'FX-310',
    name: 'FORGEX Executive Work Shoe',
    category: 'Executive Range',
    type: 'Low Ankle',
    tag: 'Corporate & Site',
    img: '/images/plant-2.jpeg',
    desc: 'Professional look with complete protection for facility managers, site engineers, inspection teams, and corporate industrial floors.',
    features: ['Smart Sleek Executive Profile', 'Concealed Protective Steel Toe', 'Lightweight Flexible PU Sole', 'All-Day Ergonomic Cushioning'],
  },
  {
    id: 'FX-401',
    name: 'FORGEX Double-Density Safety Shoe',
    category: 'Safety Shoes',
    type: 'Low Ankle',
    tag: 'Double-Density PU',
    img: '/images/cat3.jpeg',
    desc: 'Tough outside, comfort inside. Features advanced double-density PU sole technology combining a soft comfort upper layer with a hard durable outsole.',
    features: ['Soft Upper PU Comfort Layer', 'Hard Lower PU Durable Tread', 'Certified Steel Toe Cap', 'Deep Anti-Slip Cleat Pattern'],
  },
  {
    id: 'FX-502',
    name: 'FORGEX Anti-Puncture Safety Shoe',
    category: 'Safety Shoes',
    type: 'Low Ankle',
    tag: 'Anti-Puncture Tech',
    img: '/images/cat5.jpeg',
    desc: 'Built stronger for safer steps. Designed for hazardous work environments requiring high puncture resistance against sharp nails, metal, and glass.',
    features: ['Anti-Puncture Steel/Composite Mid-Sole', 'Protects Against Nails & Metal Shards', 'Certified Steel Toe Protection', 'Heavy-Duty Slip-Resistant Outsole'],
  },
  {
    id: 'FX-603',
    name: 'FORGEX Sport Look Safety Shoe',
    category: 'Lightweight Range',
    type: 'Sport Sneaker',
    tag: 'Sporty & Agile',
    img: '/images/cat6.jpeg',
    desc: 'Modern sporty design with maximum protection (up to 200 Joules). Engineered for active logistics, high-movement assembly, warehousing, and tech facilities.',
    features: ['Sport-Inspired Breathable Upper', 'Steel Toe Cap (up to 200J)', 'Shock-Absorbing Cushioned Midsole', 'Available in 3 Dynamic Colorways'],
  },
  {
    id: 'FX-701',
    name: 'FORGEX Ergonomic PU Insole',
    category: 'Insoles & Accessories',
    type: 'Cushion Insole',
    tag: 'Ergonomic Support',
    img: '/images/cat.jpeg',
    desc: 'Engineered for all-day comfort in tough working environments. Superior cushioning, arch support, and shock-absorbing heel zone reduce foot fatigue.',
    features: ['Superior Cushioning Foam', 'Ergonomic Arch Support Layer', 'Breathable Air Ventilation Holes', 'Shock-Absorbing Heel Cavity'],
  },
  {
    id: 'FX-702',
    name: 'FORGEX PU Memory Insole',
    category: 'Insoles & Accessories',
    type: 'Memory Insole',
    tag: 'Memory Foam Tech',
    img: '/images/cat2.jpeg',
    desc: 'Superior comfort for longer work hours with advanced multi-layer memory foam that moulds to the foot and delivers maximum joint impact relief.',
    features: ['Multi-Layer PU Memory Foam', 'Custom Foot-Contour Moulding', 'Maximum Impact & Joint Relief', 'Anti-Microbial Breathable Fabric Top'],
  },
  {
    id: 'FX-801',
    name: 'FORGEX Everyday School Shoe',
    category: 'School Shoes',
    type: 'Kids Uniform',
    tag: 'Active Kids',
    img: '/images/cat7.jpeg',
    desc: 'Everyday comfort for active school kids with durable sole, secure hook & loop closure, and easy-to-clean premium synthetic leather.',
    features: ['Lightweight & Durable Plastic Sole', 'Quick Hook & Loop Velcro Closure', 'Easy-To-Clean Synthetic Leather', 'Soft Inner Cushion Lining'],
  },
  {
    id: 'FX-802',
    name: 'FORGEX School Shoes Full Range',
    category: 'School Shoes',
    type: 'Full Collection',
    tag: '12 Models Series',
    img: '/images/cat8.jpeg',
    desc: 'Complete school uniform footwear collection featuring 12 models (FX-S01 to FX-S12) including lace-up, Velcro, Mary Jane, and formal options for boys and girls.',
    features: ['12 Specialized Uniform Models', 'Lace-Up, Velcro & Mary Jane Options', 'Durable Sole Built for Playgrounds', 'Vasai & Institutional Bulk Orders'],
  },
];

const leadership = [
  {
    name: 'Hirasingh Parmar',
    role: 'Director',
    desc: 'Provides business leadership, strategic direction and overall company development for GUARDEX Footwear Private Limited.',
    img: '/images/leadership-hirasingh.jpeg',
  },
  {
    name: 'Pratiksha Joshi',
    role: 'Director',
    desc: 'Contributes to company management, organizational coordination, and long-term business growth.',
    img: '/images/leadership-pratiksha.jpeg',
  },
  {
    name: 'Nimesh Joshi',
    role: 'Sales Head, Quality & Production Planning',
    desc: 'Oversees sales operations, quality standards coordination, and production planning to support client satisfaction.',
    img: '/images/leadership-nimesh.jpeg',
  },
];

const navItems = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Products Catalogue', '/products'],
  ['Manufacturing Facility', '/manufacturing'],
  ['Quality & Compliance', '/quality'],
  ['Contact Us', '/contact'],
];

function Brand({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 shrink-0 group" aria-label="FORGEX home">
      <div className={`h-12 w-auto px-2 py-1 rounded-lg border flex items-center justify-center transition-transform group-hover:scale-102 ${
        light ? 'bg-white border-slate-700 shadow-xs' : 'bg-white border-slate-200 shadow-xs'
      }`}>
        <img src="/forgex-logo.jpg" alt="FORGEX™ Logo" className="h-9 w-auto max-w-[170px] object-contain block" />
      </div>
      <div className="flex flex-col">
        <div className={`font-extrabold text-xl sm:text-2xl tracking-wider leading-none font-display ${light ? 'text-white' : 'text-slate-900'}`}>
          FORGEX<span className="text-amber-500 font-bold">™</span>
        </div>
        <div className={`text-[9.5px] sm:text-[10.5px] font-bold tracking-widest uppercase mt-1 leading-none ${light ? 'text-slate-400' : 'text-slate-500'}`}>
          GUARDEX FOOTWEAR PVT LTD
        </div>
      </div>
    </Link>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* TOPBAR */}
      <div className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
              <ShieldCheck size={14} className="text-amber-400 shrink-0"/> Product Brand: FORGEX™
            </span>
            <span className="text-slate-600 hidden md:inline">|</span>
            <span className="hidden md:inline text-slate-400">{CONFIG.legalName}</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href={`tel:${CONFIG.primaryPhone.replace(/\s+/g,'')}`} className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone size={13} className="text-amber-400 shrink-0"/> {CONFIG.primaryPhone}
            </a>
            <span className="text-slate-700">•</span>
            <a href={`mailto:${CONFIG.salesEmail}`} className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Mail size={13} className="text-amber-400 shrink-0"/> {CONFIG.salesEmail}
            </a>
          </div>
        </div>
      </div>

      {/* STICKY NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <Brand />

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
            {navItems.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) => `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? 'text-amber-600 bg-amber-50/80 font-bold'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/70'
                }`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Action Button & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <Link
              to="/corporate-enquiry"
              className="hidden sm:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-4 lg:px-5 py-2.5 rounded-lg shadow-xs hover:shadow-md transition-all active:scale-98"
            >
              Get Bulk Quote <ArrowUpRight size={16} />
            </Link>
            
            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden p-2.5 rounded-lg border border-slate-200 text-slate-800 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label={open ? 'Close Menu' : 'Open Menu'}
            >
              {open ? <X size={22}/> : <Menu size={22}/>}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <>
            <div
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 xl:hidden"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <div className="fixed top-20 left-0 right-0 max-h-[calc(100vh-5rem)] overflow-y-auto bg-white border-b-2 border-amber-500 shadow-2xl z-50 xl:hidden p-6 animate-in slide-in-from-top-4 duration-200">
              <nav className="flex flex-col gap-1">
                {navItems.map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    end={path === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `px-4 py-3 rounded-lg text-base font-semibold flex items-center justify-between transition-colors ${
                      isActive
                        ? 'text-amber-600 bg-amber-50 font-bold'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{label}</span>
                    <ChevronRight size={18} className="text-slate-400"/>
                  </NavLink>
                ))}
              </nav>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-3">
                <Link
                  to="/corporate-enquiry"
                  onClick={() => setOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow-md text-base"
                >
                  Get Bulk Quote <ArrowRight size={18}/>
                </Link>
                <a
                  href={waLink('Hello GUARDEX, I would like to enquire about FORGEX industrial safety footwear.')}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-sm"
                >
                  <MessageCircle size={18}/> WhatsApp Direct
                </a>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}

// Modal for Full Product Inspection
function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">{product.category} • {product.id}</span>
            <h3 className="text-xl font-bold font-display">{product.name}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-center justify-center">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-auto max-h-[420px] object-contain rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {product.desc}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Specifications & Features:</h4>
              <ul className="grid grid-cols-1 gap-2 text-sm text-slate-700">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <Link
                to={`/corporate-enquiry?model=${encodeURIComponent(product.name)}`}
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-sm transition-colors"
              >
                Enquire Bulk Quote <ArrowRight size={16}/>
              </Link>
              <a
                href={waLink(`Hello GUARDEX, I want to enquire about ${product.name} (${product.id}).`)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors"
              >
                <MessageCircle size={16}/> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onSelect }) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-amber-400/70 transition-all duration-300 flex flex-col">
      {/* Product Image Box */}
      <div className="relative aspect-[4/3] w-full bg-slate-50 flex items-center justify-center p-3 border-b border-slate-100 overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-104 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase">
            {product.type}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-amber-500 text-slate-950 text-[11px] font-extrabold px-2 py-0.5 rounded shadow-xs">
            {product.id}
          </span>
        </div>
      </div>

      {/* Info Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs font-bold text-amber-600 tracking-wider uppercase">{product.category}</div>
          <h3 className="font-bold text-lg text-slate-900 mt-1 font-display group-hover:text-amber-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {product.desc}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.features.slice(0, 2).map((feat, idx) => (
              <span key={idx} className="inline-flex items-center gap-1 text-[11.5px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                <Check size={11} className="text-amber-500 shrink-0"/> {feat}
              </span>
            ))}
          </div>
        </div>

        {/* Action Row */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <button
            onClick={() => onSelect(product)}
            className="text-xs sm:text-sm font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1 transition-colors"
          >
            View Spec Sheet <ArrowUpRight size={14}/>
          </button>
          <Link
            to={`/corporate-enquiry?model=${encodeURIComponent(product.name)}`}
            className="text-xs font-bold bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white px-3 py-1.5 rounded-md transition-colors"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}

// Official MCA Registration Details Card matching reference layout
function CompanyProfileCard() {
  return (
    <div className="bg-slate-950 text-white rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl my-8">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-slate-800 mb-6">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#10b981" aria-hidden="true" className="shrink-0">
          <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z"/>
        </svg>
        <h3 className="text-base sm:text-lg font-bold text-white tracking-wide font-display">
          Company Profile & Registration Details
        </h3>
      </div>

      {/* 2-Column Key Value Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 text-sm">
        <div>
          <span className="block text-xs font-medium text-slate-400">Company Name:</span>
          <span className="font-bold text-slate-100 tracking-wide mt-0.5 block">{CONFIG.legalName.toUpperCase()}</span>
        </div>

        <div>
          <span className="block text-xs font-medium text-slate-400">Corporate Identification Number (CIN):</span>
          <span className="font-bold text-amber-400 tracking-wider mt-0.5 block font-mono text-base">{CONFIG.cin}</span>
        </div>

        <div>
          <span className="block text-xs font-medium text-slate-400">Registration Number:</span>
          <span className="font-bold text-slate-100 mt-0.5 block font-mono">{CONFIG.regNumber}</span>
        </div>

        <div>
          <span className="block text-xs font-medium text-slate-400">Class & Type:</span>
          <span className="font-bold text-slate-100 mt-0.5 block">Private, Non-government company (Company limited by shares)</span>
        </div>

        <div>
          <span className="block text-xs font-medium text-slate-400">Registered Office Jurisdiction:</span>
          <span className="font-bold text-slate-100 mt-0.5 block">{CONFIG.roc}</span>
        </div>

        <div>
          <span className="block text-xs font-medium text-slate-400">Date of Incorporation & Status:</span>
          <span className="font-bold text-slate-100 mt-0.5 block">
            {CONFIG.incorpDate} &nbsp;|&nbsp; <span className="text-emerald-400 font-extrabold uppercase">● {CONFIG.status}</span>
          </span>
        </div>

        <div>
          <span className="block text-xs font-medium text-slate-400">Authorized Capital / Paid-up Capital:</span>
          <span className="font-bold text-slate-100 mt-0.5 block">{CONFIG.capital}</span>
        </div>

        <div>
          <span className="block text-xs font-medium text-slate-400">Principal Business Activity:</span>
          <span className="font-bold text-slate-100 mt-0.5 block">{CONFIG.nicCode}</span>
        </div>

        <div className="md:col-span-2 pt-3 border-t border-slate-800/80">
          <span className="block text-xs font-medium text-slate-400">Registered Office Address:</span>
          <span className="font-medium text-slate-300 mt-0.5 block leading-relaxed text-xs sm:text-sm">
            {CONFIG.officeAddress}
          </span>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ badge, title, description, center = false }) {
  return (
    <div className={`mb-10 sm:mb-12 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

function PartnerWithForgex() {
  const categories = [
    { title: 'Industrial & Corporate Buyers', icon: Building2 },
    { title: 'Factories & Manufacturing Units', icon: Factory },
    { title: 'Safety Equipment Suppliers', icon: ShieldCheck },
    { title: 'Footwear Dealers & Distributors', icon: Truck },
    { title: 'Contractors & Infrastructure Firms', icon: PackageCheck },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
            Partner with FORGEX™
          </h2>
          <p className="mt-3 text-slate-300 text-base sm:text-lg">
            We welcome business enquiries, institutional bulk procurement, and dealership opportunities across India.
          </p>
        </div>

        {/* 5 Category Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-12">
          {categories.map((c, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 hover:border-amber-400/60 hover:bg-white/10 transition-all rounded-xl p-4 text-center flex flex-col items-center justify-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <c.icon size={24} />
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">{c.title}</h4>
            </div>
          ))}
        </div>

        {/* Contact Channels Bar */}
        <div className="bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto text-center">
          <p className="text-sm sm:text-base text-slate-300 mb-6 max-w-2xl mx-auto">
            If your business requires certified industrial safety footwear, contact our commercial team to discuss custom production runs, bulk pricing, and distribution tie-ups.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="bg-slate-900/80 border border-white/10 rounded-xl p-4 text-left">
              <span className="text-xs text-slate-400 block font-medium">Sales Enquiries:</span>
              <a href={`mailto:${CONFIG.salesEmail}`} className="text-amber-400 font-bold text-sm hover:underline block truncate mt-0.5">
                {CONFIG.salesEmail}
              </a>
            </div>
            <div className="bg-slate-900/80 border border-white/10 rounded-xl p-4 text-left">
              <span className="text-xs text-slate-400 block font-medium">Bulk & Commercial:</span>
              <a href={`mailto:${CONFIG.enquiryEmail}`} className="text-amber-400 font-bold text-sm hover:underline block truncate mt-0.5">
                {CONFIG.enquiryEmail}
              </a>
            </div>
            <div className="bg-slate-900/80 border border-white/10 rounded-xl p-4 text-left">
              <span className="text-xs text-slate-400 block font-medium">Direct Phone & WhatsApp:</span>
              <a href="tel:+919185038002" className="text-amber-400 font-bold text-sm hover:underline block truncate mt-0.5">
                +91 91850 38002
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/corporate-enquiry"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm shadow-md transition-all flex items-center gap-2"
            >
              Submit Corporate Enquiry <ArrowRight size={16}/>
            </Link>
            <a
              href={waLink('Hello GUARDEX, we are interested in discussing partnership opportunities for FORGEX industrial safety footwear.')}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 rounded-xl text-sm shadow-md transition-all flex items-center gap-2"
            >
              <MessageCircle size={17}/> WhatsApp Us Direct
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          {/* Column 1: Brand & Registration */}
          <div className="flex flex-col gap-4">
            <Brand light />
            <p className="text-sm text-slate-400 leading-relaxed mt-2">
              <strong className="text-slate-200">{CONFIG.legalName}</strong> manufactures reliable industrial safety footwear under the brand name <strong className="text-amber-400">FORGEX™</strong>.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300">
              <span className="text-amber-400 font-bold">CIN:</span>
              <strong className="font-mono text-white tracking-wider">{CONFIG.cin}</strong>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 font-display">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navItems.map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="hover:text-amber-400 transition-colors inline-block py-0.5">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/corporate-enquiry" className="text-amber-400 font-semibold hover:underline inline-block py-0.5">
                  Corporate Bulk Enquiry →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & WhatsApp */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 font-display">
              Follow & Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
              <a href={CONFIG.social.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-slate-300 hover:text-red-400 transition-colors">
                <span className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-red-400 shrink-0"><YoutubeIcon size={14}/></span>
                <span>YouTube <span className="text-slate-400 text-xs block">@Forgex-safetyshoes</span></span>
              </a>
              <a href={CONFIG.social.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-slate-300 hover:text-pink-400 transition-colors">
                <span className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-pink-400 shrink-0"><InstagramIcon size={14}/></span>
                <span>Instagram <span className="text-slate-400 text-xs block">@Forgex.footwear</span></span>
              </a>
              <a href={CONFIG.social.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-slate-300 hover:text-blue-400 transition-colors">
                <span className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-blue-400 shrink-0"><FacebookIcon size={14}/></span>
                <span>Facebook <span className="text-slate-400 text-xs block">FORGEX Footwear</span></span>
              </a>
              <a href={CONFIG.social.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-slate-300 hover:text-sky-400 transition-colors">
                <span className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-sky-400 shrink-0"><LinkedinIcon size={14}/></span>
                <span>LinkedIn <span className="text-slate-400 text-xs block">GUARDEX Footwear Pvt Ltd</span></span>
              </a>
              <a href={waLink('Hello GUARDEX, I would like to enquire about FORGEX industrial safety footwear.')} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 font-bold mt-1">
                <span className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0"><MessageCircle size={14}/></span>
                <span>WhatsApp Enquiry <span className="text-emerald-500/80 text-xs block font-mono">+91 91850 38002</span></span>
              </a>
            </div>
          </div>

          {/* Column 4: Contact & Addresses */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 font-display">
              Contact & Locations
            </h4>
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <Mail size={15} className="text-amber-400 shrink-0 mt-0.5"/>
                <div>
                  <span className="text-slate-300 font-semibold">Sales: </span>
                  <a href={`mailto:${CONFIG.salesEmail}`} className="text-amber-400 hover:underline">{CONFIG.salesEmail}</a>
                  <br/>
                  <span className="text-slate-400 font-normal">Enquiries: </span>
                  <a href={`mailto:${CONFIG.enquiryEmail}`} className="text-slate-300 hover:underline">{CONFIG.enquiryEmail}</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone size={15} className="text-amber-400 shrink-0 mt-0.5"/>
                <div>
                  <span className="text-slate-300 font-semibold">Factory / WhatsApp: </span>
                  <a href="tel:+919185038002" className="text-white font-bold hover:underline">+91 91850 38002</a>
                  <br/>
                  <span className="text-slate-400 font-normal">Office Desk: </span>
                  <a href="tel:+917972458345" className="text-slate-300 hover:underline">+91 79-7245 8345</a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-amber-400 shrink-0 mt-0.5"/>
                <div className="leading-snug">
                  <strong className="text-slate-200">Office:</strong> Flat No. 902, Vasai One Realty, Ambadi Rd, Vasai West, Palghar – 401202<br/>
                  <a href={CONFIG.officeMapUrl} target="_blank" rel="noreferrer" className="text-amber-400 hover:underline font-semibold inline-flex items-center gap-1 mt-1">
                    📍 View on Google Maps <ArrowUpRight size={12}/>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Factory size={15} className="text-amber-400 shrink-0 mt-0.5"/>
                <div className="leading-snug">
                  <strong className="text-slate-200">Factory:</strong> Gala No. 1 & 2, Survey No. 47/2, Shankheshwar Inds. Estate, Mori, Poman, Vasai – 401208<br/>
                  <a href={CONFIG.factoryMapUrl} target="_blank" rel="noreferrer" className="text-amber-400 hover:underline font-semibold inline-flex items-center gap-1 mt-1">
                    📍 View on Google Maps <ArrowUpRight size={12}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Profile & Registration Details Card (MCA Falconebiz) */}
        <CompanyProfileCard />

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <span>
            {CONFIG.copyright} | CIN: <strong className="text-amber-400 font-mono">{CONFIG.cin}</strong>
          </span>
          <span className="text-slate-400">
            Product Brand: <strong className="text-white">FORGEX™</strong> | Industrial Safety Footwear
          </span>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={waLink('Hello, I am interested in FORGEX safety footwear by GUARDEX Footwear Private Limited.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl flex items-center gap-2.5 transition-transform hover:scale-105 active:scale-95 group"
    >
      <MessageCircle size={22} className="shrink-0" />
      <span className="hidden sm:inline text-sm font-bold tracking-wide">Chat with us</span>
    </a>
  );
}

function PageIntro({ title, description, badge }) {
  return (
    <div className="bg-slate-900 text-white py-14 sm:py-20 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-3 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// PAGES
// ----------------------------------------------------------------------

function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative bg-slate-950 text-white min-h-[580px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden">
        {/* Background Image with Dark Vignette */}
        <div
          className="absolute inset-0 bg-cover bg-[center_right] z-0"
          style={{ backgroundImage: `url('/images/hero-clean.jpg')` }}
        />
        {/* Dark Gradient Overlay for razor-sharp typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/20 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 w-full flex-1 flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.15]">
              FORGEX – Built for Demanding Work Environments
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Industrial safety footwear developed by <strong>GUARDEX Footwear Private Limited</strong> for manufacturing units, engineering plants, construction sites, warehouses, and heavy operations across India.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm sm:text-base active:scale-98"
              >
                Explore Footwear Catalogue <ArrowRight size={18}/>
              </Link>
              <Link
                to="/corporate-enquiry"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-sm sm:text-base"
              >
                Bulk Business Enquiry <ArrowUpRight size={18}/>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="relative z-20 border-t border-white/15 bg-slate-950/60 backdrop-blur-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs uppercase tracking-widest text-slate-400 text-center sm:text-left">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block"/> PU DOUBLE-DENSITY INDUSTRIAL FOOTWEAR
            </span>
            <span className="font-semibold text-slate-300">FORGEX™ BY GUARDEX FOOTWEAR PVT LTD</span>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0">
                <ShieldCheck size={22}/>
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">PU Double-Density</h4>
                <p className="text-xs text-slate-500 mt-0.5">High durability & shock absorption</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0">
                <Factory size={22}/>
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Vasai Manufacturing Plant</h4>
                <p className="text-xs text-slate-500 mt-0.5">Shankheshwar Industrial Estate</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0">
                <PackageCheck size={22}/>
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Bulk & Corporate Orders</h4>
                <p className="text-xs text-slate-500 mt-0.5">Direct procurement commercial pricing</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0">
                <Truck size={22}/>
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">All-India Distribution</h4>
                <p className="text-xs text-slate-500 mt-0.5">Dealer & supply network expansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS SHOWCASE */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
                Industrial Footwear Range
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Engineered for manufacturing, engineering, logistics, and industrial safety.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 font-bold text-amber-600 hover:text-amber-700 text-sm transition-colors"
            >
              View all 10 products <ArrowRight size={16}/>
            </Link>
          </div>

          {/* 6 Featured Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productData.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-colors"
            >
              Explore Complete Product Catalog <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* TECHNICAL FOCUS & PROCESS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Protection Begins With The Right Footwear"
            description="Our manufacturing setup is built around polyurethane (PU) double-density injection moulding, durable upper materials, and certified impact protection."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center mb-4">
                <Factory size={24}/>
              </div>
              <h3 className="font-bold text-lg text-slate-900 font-display">60-Station PU Conveyor</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Planned automatic conveyor system ensuring consistent sole density, precise chemical formulation, and high bond strength between upper and sole.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center mb-4">
                <ShieldCheck size={24}/>
              </div>
              <h3 className="font-bold text-lg text-slate-900 font-display">Steel Toe Impact (200J)</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Reinforced high-tensile steel toe caps engineered to protect workers against compression loads and heavy falling objects up to 200 Joules.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center mb-4">
                <Layers3 size={24}/>
              </div>
              <h3 className="font-bold text-lg text-slate-900 font-display">Double-Density Cushioning</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                A dual-layer construction with a softer shock-absorbing PU midsole for worker comfort, paired with a high-abrasion, slip-resistant outer tread.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEMANDING WORKPLACE SECTORS */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Built for Demanding Industry Sectors
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Engineered to meet specific hazards across Indian manufacturing and infrastructure sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Factory, title: 'Manufacturing & Plants', text: 'Automotive assembly, fabrication yards, processing plants, and machine floors.' },
              { icon: HardHat, title: 'Construction & Infra', text: 'Civil contractors, infrastructure sites, heavy equipment, and road works.' },
              { icon: Settings, title: 'Engineering & Utilities', text: 'Power stations, workshops, electrical servicing, and facility maintenance.' },
              { icon: Truck, title: 'Logistics & Warehousing', text: 'Distribution hubs, cargo terminals, freight transit, and packaging floors.' },
            ].map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-amber-400/50 transition-colors">
                <s.icon size={26} className="text-amber-400 mb-3" />
                <h3 className="font-bold text-base text-white">{s.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Leadership & Management"
            description="Experienced leadership guiding GUARDEX Footwear Private Limited towards manufacturing excellence, quality control, and customer trust."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {leadership.map((person, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-shadow">
                <div className="aspect-[4/5] w-full overflow-hidden bg-slate-100">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-slate-900 font-display">{person.name}</h3>
                  <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mt-1">{person.role}</div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerWithForgex />

      {/* Product Spec Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}

function About() {
  return (
    <main>
      <PageIntro
        title="About GUARDEX Footwear Private Limited"
        description="An Indian footwear manufacturer developing industrial safety footwear and utility footwear under the brand name FORGEX™."
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display">
                Protecting India’s Workforce with Precision Footwear
              </h2>
              <div className="mt-4 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>GUARDEX Footwear Private Limited</strong> (CIN: {CONFIG.cin}) is incorporated under the Companies Act, 2013, with registered headquarters in Vasai, Maharashtra.
                </p>
                <p>
                  Our primary mission is to engineer dependable, durable, and certified industrial safety footwear under the registered brand name <strong>FORGEX™</strong>.
                </p>
                <p>
                  We are developing our state-of-the-art manufacturing facility in Shankheshwar Industrial Estate, Vasai, featuring a <strong>60-station PU pouring conveyor machine</strong>, <strong>double-density PU injection systems</strong>, and precision aluminium moulds.
                </p>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-3">
                <ShieldCheck size={22} className="text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-amber-900">
                  <strong>Commitment to Quality:</strong> All products are designed around rigorous dimensional standards, certified steel toe impact resistance, and ergonomic sole cushioning for demanding industrial shifts.
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl">
              <h3 className="text-xl font-bold font-display text-white mb-6">Corporate Highlights</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-slate-400">Company Name</span>
                  <span className="font-bold text-white">{CONFIG.legalName}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-slate-400">Product Brand</span>
                  <span className="font-bold text-amber-400">FORGEX™</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-slate-400">CIN</span>
                  <span className="font-mono font-bold text-white">{CONFIG.cin}</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-slate-400">Manufacturing Base</span>
                  <span className="font-semibold text-white">Vasai, Maharashtra</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Core Technology</span>
                  <span className="font-semibold text-amber-400">PU Double-Density Injection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Mission & Vision"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs border-l-4 border-l-amber-500">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center mb-4">
                <Target size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Our Mission</h3>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                To develop durable, ergonomic, and practical industrial safety footwear that protects Indian workers, enhances workplace safety compliance, and delivers outstanding long-term durability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs border-l-4 border-l-slate-900">
              <div className="w-12 h-12 rounded-xl bg-slate-900/10 text-slate-900 flex items-center justify-center mb-4">
                <Eye size={26} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display">Our Vision</h3>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                To establish FORGEX™ as a trusted, household name in Indian industrial safety footwear, recognized across manufacturing hubs, infrastructure sites, and institutions nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            description="The foundational principles driving our factory floor, engineering processes, and client relationships."
            center
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Factory, title: 'Quality-Oriented Manufacturing', desc: 'Strict batch control and chemical consistency.' },
              { icon: Footprints, title: 'Practical Ergonomic Design', desc: 'Crafted for all-day comfort on hard floors.' },
              { icon: MessageCircle, title: 'Customer-Focused Service', desc: 'Transparent communication and responsive fulfillment.' },
              { icon: Building2, title: 'Long-Term Partnerships', desc: 'Fostering deep dealer and corporate buyer trust.' },
              { icon: Layers3, title: 'Continuous Development', desc: 'Iterating designs to meet evolving workplace standards.' },
            ].map((val, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center mb-3">
                  <val.icon size={22} />
                </div>
                <h4 className="font-bold text-sm text-slate-900 leading-snug">{val.title}</h4>
                <p className="mt-2 text-xs text-slate-500">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Management Team"
            description="Experienced professionals guiding GUARDEX Footwear towards operational efficiency and customer trust."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {leadership.map((person, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="aspect-[4/5] w-full overflow-hidden bg-slate-100">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-slate-900 font-display">{person.name}</h3>
                  <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mt-1">{person.role}</div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerWithForgex />
    </main>
  );
}

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [modalProduct, setModalProduct] = useState(null);

  const categories = ['All', 'Safety Shoes', 'Safety Boots', 'Executive Range', 'Lightweight Range', 'Insoles & Accessories', 'School Shoes'];

  const filteredProducts = useMemo(() => {
    return productData.filter((p) => {
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tag.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <main>
      <PageIntro
        title="FORGEX™ Product Range"
        description="Explore our complete line of industrial safety shoes, safety boots, executive workwear, ergonomic insoles, and school footwear."
      />

      <section className="py-12 sm:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter & Search Bar */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products by model, code or feature..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-slate-950 shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Counter */}
          <div className="mb-6 flex items-center justify-between text-xs sm:text-sm text-slate-500">
            <span>Showing <strong className="text-slate-900">{filteredProducts.length}</strong> products</span>
            {selectedCategory !== 'All' && (
              <span>Filtered by: <strong className="text-amber-600">{selectedCategory}</strong></span>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={(p) => setModalProduct(p)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto my-12">
              <Info size={36} className="text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold text-lg text-slate-900">No products matched</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">Try adjusting your search terms or category filter.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchTerm(''); }}
                className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
        />
      )}
    </main>
  );
}

function Manufacturing() {
  return (
    <main>
      <PageIntro
        title="Manufacturing Facility"
        description="Engineering excellence in Vasai, Maharashtra: 60-Station automatic PU pouring conveyor machine, precision moulds, and quality testing."
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Advanced Polyurethane Direct Injection Moulding"
            description="Our planned production setup is tailored specifically for direct-on-upper PU double-density safety footwear manufacturing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 font-display">60-Station PU Pouring Conveyor</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Automated continuous round-table conveyor allowing uniform cycle times, consistent metering of polyol and isocyanate, and high output productivity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 font-display">Double-Density Injection</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Direct dual-injection technology: a low-density polyurethane midsole for all-day cushion paired with a high-density outsole for abrasion resistance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 font-display">Aluminium Moulds</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                CNC-machined aluminium moulds ensuring sharp tread definitions, deep anti-skid cleating, and consistent anatomical footbed ergonomics.
              </p>
            </div>
          </div>

          {/* Plant Address Banner */}
          <div className="mt-12 p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold font-display text-white">Vasai Manufacturing Unit</h4>
              <p className="text-slate-300 text-sm mt-1 max-w-xl">
                {CONFIG.factoryAddress}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CONFIG.factoryMapUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl text-sm inline-flex items-center gap-2 border border-white/15 transition-colors"
              >
                📍 View on Google Maps <ArrowUpRight size={14}/>
              </a>
              <Link
                to="/contact"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm whitespace-nowrap transition-colors"
              >
                Contact Factory Office →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PartnerWithForgex />
    </main>
  );
}

function Quality() {
  return (
    <main>
      <PageIntro
        title="Quality & Compliance"
        description="Our approach to product durability, safety certifications, and continuous quality control."
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Testing & Certification in Progress"
            description="At FORGEX, worker safety and product integrity are top priorities. Our planned safety footwear line is currently undergoing the applicable BIS/ISI application and laboratory testing process."
          />

          {/* Important Transparent Compliance Notice */}
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-300/80 mb-12">
            <div className="flex items-start gap-3">
              <Info size={24} className="text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-900 text-base font-bold block">Regulatory Compliance Notice</strong>
                <p className="text-amber-800 text-sm mt-1 leading-relaxed">
                  The applicable BIS/ISI testing and application process for our planned safety footwear range is in progress. We are working diligently to meet and exceed all statutory industrial safety footwear criteria under relevant Indian standards (such as IS 15298). Official certification documentation will be provided upon formal grant.
                </p>
              </div>
            </div>
          </div>

          {/* Quality Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <FlaskConical size={28} className="text-amber-600 mb-3" />
              <h3 className="font-bold text-lg text-slate-900 font-display">Steel Toe Impact Testing</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Testing steel toe caps for impact resistance against falling objects (up to 200 Joules) and compression load thresholds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <ClipboardCheck size={28} className="text-amber-600 mb-3" />
              <h3 className="font-bold text-lg text-slate-900 font-display">Sole Bond & Flex Adhesion</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Verifying that direct PU injection bond strength resists separation under harsh chemical, oil, and wet working conditions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <BadgeCheck size={28} className="text-amber-600 mb-3" />
              <h3 className="font-bold text-lg text-slate-900 font-display">Slip & Abrasion Resistance</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Analyzing outsole tread friction coefficients across wet steel, ceramic, and greasy factory floor surfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PartnerWithForgex />
    </main>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <PageIntro
        title="Contact GUARDEX Footwear"
        description="Reach out to our sales desk, factory management, or visit our registered corporate office in Vasai West."
      />

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Details Column */}
            <div className="space-y-6">
              {/* Registered Office Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
                <h3 className="text-xl font-bold text-slate-900 font-display">Registered Office Address</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {CONFIG.officeAddress}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                  <a
                    href={CONFIG.officeMapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-xs transition-colors"
                  >
                    📍 Open Google Maps Directions <ExternalLink size={14}/>
                  </a>
                  <a
                    href="tel:+917972458345"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold"
                  >
                    <Phone size={14}/> +91 79-7245 8345
                  </a>
                </div>
              </div>

              {/* Manufacturing Plant Card */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
                <h3 className="text-xl font-bold text-slate-900 font-display">Manufacturing Plant</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  {CONFIG.factoryAddress}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-3">
                  <a
                    href={CONFIG.factoryMapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-lg text-xs transition-colors"
                  >
                    📍 Open Factory Google Maps <ExternalLink size={14}/>
                  </a>
                  <a
                    href="tel:+919185038002"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold"
                  >
                    <Phone size={14}/> +91 91850 38002
                  </a>
                </div>
              </div>

              {/* Key Phone Numbers */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Direct Contact Directory</h4>
                <div className="space-y-2 text-sm">
                  {CONFIG.phones.map((p, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="text-slate-600 text-xs font-medium">{p.label}</span>
                      <a href={`tel:${p.tel}`} className="font-bold text-slate-900 hover:text-amber-600 text-xs font-mono">
                        {p.number}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Message Form */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-2xl font-bold text-slate-900 font-display">Send us a Message</h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 mb-6">
                Fill out the form below and our sales coordination team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                  <CheckCircle2 size={36} className="text-emerald-600 mx-auto mb-2"/>
                  <h4 className="font-bold text-emerald-900 text-lg">Thank You!</h4>
                  <p className="text-xs sm:text-sm text-emerald-700 mt-1">Your message has been received. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Company / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Industrial Solutions"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Dealership Query / Safety Shoes Quote"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your requirements, estimated quantity or enquiry..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    Submit Message <Send size={16}/>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <PartnerWithForgex />
    </main>
  );
}

function CorporateEnquiry() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialModel = searchParams.get('model') || '';

  const [model, setModel] = useState(initialModel);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <PageIntro
        title="Corporate & Commercial Bulk Enquiry"
        description="Direct manufacturer pricing for industrial companies, civil contractors, safety equipment suppliers, and institutional distributors."
      />

      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 size={48} className="text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 font-display">Enquiry Submitted Successfully</h3>
                <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-md mx-auto">
                  Our commercial sales coordination team has received your details. We will prepare your customized quotation and call or WhatsApp you within 24 hours.
                </p>
                <Link
                  to="/"
                  className="mt-6 inline-block bg-slate-900 text-white font-bold px-6 py-3 rounded-xl text-sm"
                >
                  Return to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-display">Bulk Procurement Quotation Request</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">Please provide your organization requirements below.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Company / Firm Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Larson Steel Fabrication"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="procurement@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98200 12345"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Estimated Quantity (Pairs) *</label>
                    <select
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white"
                    >
                      <option value="">Select Quantity Range</option>
                      <option value="50-200">50 – 200 Pairs (Trial / Facility)</option>
                      <option value="200-500">200 – 500 Pairs (Quarterly Batch)</option>
                      <option value="500-1000">500 – 1,000 Pairs (Annual Supply)</option>
                      <option value="1000+">1,000+ Pairs (Large Corporate / Dealer)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Preferred Model / Category</label>
                    <input
                      type="text"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      placeholder="e.g. FORGEX Classic Steel Toe (FX-101)"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Delivery Destination (City / State) *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mumbai, Pune, Ahmedabad, Chennai, etc."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Application Notes / Custom Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Describe specific site hazards (oil/acid, puncture risk, high heat), size ratio requirements, or testing certificate needs..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none text-sm"
                  />
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 text-center sm:text-left">
                    Direct enquiry routed to <strong>{CONFIG.salesEmail}</strong>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    Submit Quotation Request <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center py-20 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-amber-500 font-display">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 mt-2 font-display">Page Not Found</h2>
        <p className="text-slate-600 text-sm mt-2">The page you requested could not be found.</p>
        <Link
          to="/"
          className="mt-6 inline-block bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/corporate-enquiry" element={<CorporateEnquiry />} />
        <Route path="/dealer-enquiry" element={<CorporateEnquiry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
if (container) {
  if (!window.__react_root__) {
    window.__react_root__ = createRoot(container);
  }
  window.__react_root__.render(<App />);
}
