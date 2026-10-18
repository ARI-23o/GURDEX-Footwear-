import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ArrowRight, ShieldCheck, Factory, BadgeCheck, Truck, CheckCircle2, ChevronDown, HardHat, Footprints, Settings, ClipboardCheck, Phone, Mail, MapPin, MessageCircle, Send, Search, Filter, Clock3, Building2, PackageCheck, Gauge, Layers3, Wrench, FlaskConical } from 'lucide-react';
import './styles.css';

const CONFIG = {
  brand: 'GURDEX',
  legalName: 'GURDEX Footwear Private Limited',
  whatsappNumber: '910000000000', // Replace with the client's verified WhatsApp number, country code included.
  phone: '+91 XXXXX XXXXX',
  email: 'sales@example.com',
  address: 'Company address to be confirmed',
  website: 'https://www.example.com', // Replace with the approved domain before launch.
};
const waLink = (message) => `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
const productData = [
  { id:'GX-101', name:'Classic Steel Toe', category:'Safety Shoes', type:'Low ankle', desc:'Everyday protection concept for industrial work environments.', features:['Protective toe concept','Oil-resistant sole concept','Comfort-fit lining'], img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85', tag:'Core range' },
  { id:'GX-204', name:'Rugged High-Ankle Boot', category:'Safety Boots', type:'High ankle', desc:'A rugged boot silhouette for demanding shop-floor conditions.', features:['High-ankle profile','Reinforced upper concept','Grip-focused outsole'], img:'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=1000&q=85', tag:'Heavy duty' },
  { id:'GX-310', name:'Executive Work Shoe', category:'Safety Shoes', type:'Low ankle', desc:'A cleaner workwear profile for facilities and light industrial use.', features:['Low-profile design','Padded collar concept','Easy-clean upper'], img:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1000&q=85', tag:'Workwear' },
  { id:'GX-422', name:'All-Terrain Safety Boot', category:'Safety Boots', type:'Mid ankle', desc:'A robust visual concept for outdoor and site-based teams.', features:['Supportive ankle shape','Deep-lug outsole concept','Durable construction look'], img:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1000&q=85', tag:'Site ready' },
  { id:'GX-510', name:'Lightweight Safety Sneaker', category:'Lightweight Range', type:'Low ankle', desc:'A contemporary safety-footwear concept for active workdays.', features:['Sport-inspired silhouette','Flexible profile concept','Breathable-look upper'], img:'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=85', tag:'Lightweight' },
  { id:'GX-608', name:'Industrial Utility Boot', category:'Safety Boots', type:'High ankle', desc:'A utility-led design direction for varied industrial applications.', features:['Protective boot silhouette','Textured outsole concept','Workwear-ready styling'], img:'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1000&q=85', tag:'Utility' },
];
const navItems = [
  ['Home','/'], ['About Us','/about'], ['Products Catalogue','/products'], ['Manufacturing Facility','/manufacturing'], ['Quality & Certifications','/quality'],
];

function Brand({ light=false }) { return <Link to="/" className={`brand ${light?'brand-light':''}`} aria-label="GURDEX home"><span className="brand-mark"><ShieldCheck size={25}/></span><span><strong>GURDEX</strong><small>INDUSTRIAL FOOTWEAR</small></span></Link>; }

function Header() {
  const [open,setOpen] = useState(false); const location = useLocation();
  React.useEffect(()=>setOpen(false),[location.pathname]);
  return <><div className="topbar"><div className="container topbar-inner"><span><ShieldCheck size={14}/> Industrial safety footwear concept demo</span><span className="topbar-right">Built for B2B enquiries <ArrowUpRight size={14}/></span></div></div><header className="header"><div className="container nav-wrap"><Brand/><nav className={open?'nav nav-open':'nav'} aria-label="Main navigation">{navItems.map(([label,path])=><NavLink key={path} to={path} end={path==='/'}>{label}</NavLink>)}<div className="mobile-cta"><Link className="btn btn-primary" to="/corporate-enquiry">Get a Bulk Quote <ArrowRight size={16}/></Link></div></nav><div className="nav-actions"><Link className="btn btn-primary nav-quote" to="/corporate-enquiry">Get a Bulk Quote <ArrowUpRight size={16}/></Link><button className="menu-btn" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></div></header></>;
}

function Footer() { return <footer className="footer"><div className="container footer-grid"><div className="footer-about"><Brand light/><p>Industrial safety footwear for teams that keep the world moving. Explore the range and connect with us for dealer or corporate enquiries.</p><span className="demo-note">Concept website — company details awaiting verification.</span></div><div><h4>Explore</h4><Link to="/about">About Us</Link><Link to="/products">Products Catalogue</Link><Link to="/manufacturing">Manufacturing Facility</Link><Link to="/quality">Quality & Certifications</Link></div><div><h4>Enquiries</h4><Link to="/dealer-enquiry">Become a Dealer</Link><Link to="/corporate-enquiry">Corporate Bulk Enquiry</Link><Link to="/contact">Contact Us</Link><a href={waLink('Hello GURDEX, I would like to enquire about industrial safety footwear.')} target="_blank" rel="noreferrer">WhatsApp us <ArrowUpRight size={13}/></a></div><div><h4>Contact</h4><p className="contact-line"><Phone size={15}/>{CONFIG.phone}</p><p className="contact-line"><Mail size={15}/>{CONFIG.email}</p><p className="contact-line"><MapPin size={15}/>{CONFIG.address}</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {CONFIG.legalName}. Demo concept.</span><span>Privacy · Terms · Sitemap</span></div></footer> }

function FloatingWhatsApp(){return <a className="wa-float" href={waLink('Hello GURDEX, please share more information about your safety footwear range.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={22}/><span>Chat with us</span></a>}

function PageIntro({title,description,crumb}) {
  return (
    <section className="page-intro">
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{crumb||title}</span>
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

function SectionHeading({title,description,center=false}) {
  return (
    <div className={`section-heading ${center?'text-center':''}`}>
      <h2>{title}</h2>
      {description&&<p>{description}</p>}
    </div>
  );
}

function ProductCard({product}) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image">
        <img src={product.img} alt={`${product.name} footwear concept`} loading="lazy"/>
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

function CTA({title='Need footwear for your team?',text='Tell us your requirements and our team can help you explore the right product range.',button='Enquire for Bulk Orders',to='/corporate-enquiry'}) {
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
              <p>Industrial safety footwear designed around the demands of modern work environments. Explore our range and enquire for your team or dealer network.</p>
              <div className="hero-buttons">
                <Link className="btn btn-primary" to="/products">Explore the Range <ArrowRight size={17}/></Link>
                <Link className="btn btn-outline-light" to="/corporate-enquiry">Corporate Enquiry <ArrowUpRight size={17}/></Link>
              </div>
              <div className="hero-proof">
                <div className="proof-icon"><ShieldCheck size={20}/></div>
                <div><strong>Safety-led design</strong><span>Product specifications to be confirmed</span></div>
              </div>
            </div>
            <div className="hero-stamp"><span>BUILT FOR</span><strong>THE<br/>WORKDAY</strong><div className="stamp-rule"/><span>GURDEX FOOTWEAR</span></div>
          </div>
          <div className="hero-bottom container"><span><span className="orange-dot"/> FOOTWEAR FOR INDUSTRY</span><span>01 — PRODUCT RANGE</span></div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div><ShieldCheck/><span><strong>Safety-first focus</strong><small>Designed for demanding workplaces</small></span></div>
            <div><Factory/><span><strong>Manufacturing-led</strong><small>Facility information coming soon</small></span></div>
            <div><PackageCheck/><span><strong>Bulk order enquiries</strong><small>For teams and procurement</small></span></div>
            <div><Truck/><span><strong>Dealer opportunities</strong><small>Connect with our sales team</small></span></div>
          </div>
        </section>

        <section className="section section-products">
          <div className="container">
            <div className="section-top">
              <SectionHeading title="Footwear for the work ahead" description="Explore the concept range. Final models, technical details and availability will be confirmed with GURDEX."/>
              <Link className="text-link desktop-link" to="/products">View all products <ArrowRight size={16}/></Link>
            </div>
            <div className="product-grid">{productData.slice(0,3).map(p=><ProductCard key={p.id} product={p}/>)}</div>
            <div className="mobile-center"><Link className="btn btn-outline-dark" to="/products">Explore all products <ArrowRight size={16}/></Link></div>
          </div>
        </section>

        <section className="section dark-section">
          <div className="container split-layout">
            <div className="split-image">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85" alt="Industrial production environment" loading="lazy"/>
              <div className="image-caption"><Factory size={20}/><span><strong>Made for demanding work</strong><small>Manufacturing imagery shown for demo purposes</small></span></div>
            </div>
            <div className="split-copy">
              <h2>More than footwear.<br/><em>Confidence on every shift.</em></h2>
              <p>From day-to-day industrial use to demanding site environments, the right footwear starts with understanding the work. GURDEX's product range and manufacturing capabilities can be presented here using verified company information.</p>
              <div className="feature-list">
                <div><CheckCircle2/><span><strong>Product-led approach</strong><small>Clear models and technical information</small></span></div>
                <div><CheckCircle2/><span><strong>Business-ready enquiries</strong><small>Dedicated routes for dealers and buyers</small></span></div>
                <div><CheckCircle2/><span><strong>Quality transparency</strong><small>Verified testing and certificates only</small></span></div>
              </div>
              <Link className="btn btn-primary" to="/about">Get to know GURDEX <ArrowRight size={16}/></Link>
            </div>
          </div>
        </section>

        <section className="section industries">
          <div className="container">
            <SectionHeading title="Made for work environments that demand more" description="Illustrative application areas. Confirm suitability against the final certified product specifications." center/>
            <div className="industry-grid">
              {[{icon:Factory,title:'Manufacturing',text:'Production floors and industrial facilities'},{icon:HardHat,title:'Construction',text:'Site teams and project environments'},{icon:Settings,title:'Engineering',text:'Maintenance and technical operations'},{icon:Truck,title:'Logistics',text:'Warehousing and movement of goods'}].map(x=>(
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
              <h2>Trust starts with<br/>transparent standards.</h2>
              <p>Learn about product testing, quality checks and verified certifications once the company's documentation is supplied.</p>
              <Link className="text-link" to="/quality">Explore quality approach <ArrowRight size={16}/></Link>
            </div>
            <div className="quality-cards">
              <div className="quality-card"><FlaskConical/><strong>Product testing</strong><span>Details to be verified</span></div>
              <div className="quality-card"><ClipboardCheck/><strong>Quality checks</strong><span>Process to be confirmed</span></div>
              <div className="quality-card"><BadgeCheck/><strong>Certifications</strong><span>Display verified records only</span></div>
            </div>
          </div>
        </section>
        <CTA/>
      </main>
    </>
  );
}

function About(){
  return (
    <>
      <PageIntro title="Built around the people who do the work." description="A company introduction page designed to communicate GURDEX's purpose, approach and business focus — ready for verified company details."/>
      <section className="section">
        <div className="container split-layout about-split">
          <div className="split-image about-image">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85" alt="Industrial work environment"/>
            <div className="floating-number"><strong>01</strong><span>SAFETY<br/>IN FOCUS</span></div>
          </div>
          <div className="split-copy">
            <h2>Work-ready footwear.<br/><em>A business-first mindset.</em></h2>
            <p>GURDEX Footwear Private Limited is presented here as an industrial safety footwear manufacturer. This demo layout is ready to be updated with the company's founding story, manufacturing footprint, team and business milestones.</p>
            <p>We believe a strong company website should make it easy for distributors, procurement teams and industrial buyers to understand the product range and start a conversation.</p>
            <div className="info-note"><ShieldCheck/><span><strong>Content verification note</strong><small>Company history, production capacity, locations and any performance claims should be confirmed before launch.</small></span></div>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <SectionHeading title="The things a buyer needs to know" description="Clear information helps potential partners make confident, informed enquiries." center/>
          <div className="value-grid">
            {[{icon:Footprints,title:'Purpose-built range',text:'Present products by use case, construction and verified technical specifications.'},{icon:Building2,title:'Partner-focused',text:'Make it easy for dealers, distributors and corporate teams to contact the right channel.'},{icon:BadgeCheck,title:'Transparent claims',text:'Publish only confirmed testing information, certifications and compliance details.'}].map(v=>(
              <div className="value-card" key={v.title}><v.icon/><h3>{v.title}</h3><p>{v.text}</p></div>
            ))}
          </div>
        </div>
      </section>
      <CTA title="Let’s start a conversation" text="Share your business requirements and connect with the right enquiry channel."/>
    </>
  );
}

function Products(){
  const [category,setCategory]=useState('All');
  const [search,setSearch]=useState('');
  const filtered=useMemo(()=>productData.filter(p=>(category==='All'||p.category===category)&&`${p.name} ${p.id} ${p.desc}`.toLowerCase().includes(search.toLowerCase())),[category,search]);
  return (
    <>
      <PageIntro title="Find the right fit for the job." description="Browse the illustrative GURDEX catalogue. Ask about available models, sizing and verified technical specifications."/>
      <section className="section">
        <div className="container">
          <div className="catalog-toolbar">
            <div className="catalog-count"><strong>{filtered.length.toString().padStart(2,'0')}</strong><span>products shown<br/><small>Demo catalogue</small></span></div>
            <div className="catalog-controls">
              <label className="search-field"><Search size={17}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search products or model" aria-label="Search products"/></label>
              <label className="select-field"><Filter size={16}/><select value={category} onChange={e=>setCategory(e.target.value)} aria-label="Filter by category"><option>All</option><option>Safety Shoes</option><option>Safety Boots</option><option>Lightweight Range</option></select><ChevronDown size={15}/></label>
            </div>
          </div>
          {filtered.length ? (
            <div className="product-grid product-grid-all">{filtered.map(p=><ProductCard key={p.id} product={p}/>)}</div>
          ) : (
            <div className="empty-state"><Search size={28}/><h3>No products found</h3><p>Try a different keyword or select another category.</p><button className="btn btn-outline-dark" onClick={()=>{setSearch('');setCategory('All')}}>Clear filters</button></div>
          )}
          <p className="catalog-disclaimer">Catalogue disclaimer: model numbers, images, features and category names are illustrative demo content, not confirmed GURDEX product specifications.</p>
        </div>
      </section>
      <CTA title="Need a product recommendation?" text="Tell us the application, order quantity and delivery location to start an enquiry."/>
    </>
  );
}

function ProductDetail(){
  const {pathname}=useLocation();
  const id=pathname.split('/').pop();
  const product=productData.find(p=>p.id===id);
  if(!product)return <NotFound/>;
  return (
    <>
      <PageIntro title={product.name} description="A concept product detail page. Confirm all technical specifications, sizes and availability with GURDEX before placing an order."/>
      <section className="section">
        <div className="container detail-layout">
          <div className="detail-image"><img src={product.img} alt={`${product.name} concept`} /><span className="product-tag">{product.tag}</span></div>
          <div className="detail-copy">
            <div className="product-meta"><span>{product.category}</span><span>Model concept: {product.id}</span></div>
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
            <div className="detail-warning"><ShieldCheck/><span>Technical claims are not confirmed. Request the current datasheet and compliance details before purchase.</span></div>
            <h3>Concept highlights</h3>
            <ul className="check-list">{product.features.map(f=><li key={f}><CheckCircle2 size={17}/>{f}</li>)}</ul>
            <div className="detail-actions">
              <Link className="btn btn-primary" to={`/corporate-enquiry?product=${encodeURIComponent(product.name)}`}>Enquire about this model <ArrowRight size={16}/></Link>
              <a className="btn btn-outline-dark" href={waLink(`Hello GURDEX, I would like details about ${product.name} (${product.id}). Please share verified specifications and pricing.`)} target="_blank" rel="noreferrer">WhatsApp enquiry <MessageCircle size={16}/></a>
            </div>
          </div>
        </div>
      </section>
      <CTA/>
    </>
  );
}

function Manufacturing(){
  return (
    <>
      <PageIntro title="The process behind every pair." description="A dedicated page to showcase GURDEX's manufacturing facility, process and production capabilities using verified details and original photography."/>
      <section className="section">
        <div className="container">
          <div className="facility-hero">
            <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=85" alt="Industrial manufacturing environment shown for design concept"/>
            <div className="facility-overlay">
              <h2>From process to finished product.</h2>
              <p>Replace concept imagery with photographs of the actual GURDEX facility before launch.</p>
            </div>
          </div>
          <div className="process-grid">
            {[{n:'01',icon:Layers3,title:'Material selection',text:'Document approved materials, incoming checks and supplier standards.'},{n:'02',icon:Wrench,title:'Production process',text:'Show the real production stages, equipment and trained teams.'},{n:'03',icon:ClipboardCheck,title:'In-process checks',text:'Explain inspection points and the quality records maintained.'},{n:'04',icon:PackageCheck,title:'Final inspection',text:'Describe packing, batch traceability and dispatch workflows.'}].map(s=>(
              <article className="process-card" key={s.n}><div className="process-top"><span>{s.n}</span><s.icon size={23}/></div><h3>{s.title}</h3><p>{s.text}</p></article>
            ))}
          </div>
          <div className="info-note wide-note"><Factory/><span><strong>Content needed from GURDEX</strong><small>Facility address, actual factory photos, machinery details, production capacity, manufacturing process and any approved quality-control documentation.</small></span></div>
        </div>
      </section>
      <CTA/>
    </>
  );
}

function Quality(){
  return (
    <>
      <PageIntro title="Confidence built on evidence." description="A clear, transparent place to explain testing, inspection and compliance — with certification claims published only after verification."/>
      <section className="section">
        <div className="container quality-feature">
          <div className="quality-feature-copy">
            <h2>Show the evidence behind the promise.</h2>
            <p>Industrial buyers need clear, current product information. This page is structured to present the quality process, applicable standards, test reports and certificates supplied and approved by GURDEX.</p>
            <div className="quality-points">
              {[{icon:ClipboardCheck,title:'Documented checks',text:'Explain incoming, in-process and final inspection.'},{icon:FlaskConical,title:'Testing information',text:'Publish the actual test method, report and scope where applicable.'},{icon:BadgeCheck,title:'Verified certifications',text:'Show issuer, certificate number, scope and validity dates.'}].map(x=>(
                <div key={x.title}><x.icon/><span><strong>{x.title}</strong><small>{x.text}</small></span></div>
              ))}
            </div>
          </div>
          <div className="certificate-placeholder">
            <div className="certificate-inner">
              <ShieldCheck size={42}/>
              <div className="certificate-rule"/>
              <h3>Verified records</h3>
              <p>Certificate artwork and report references will be added after document verification.</p>
              <span className="certificate-stamp">DEMO<br/>PLACEHOLDER</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="info-note wide-note"><BadgeCheck/><span><strong>Important compliance note</strong><small>No ISO, BIS, EN ISO or other certification is claimed by this demo. Applicable standards and certificate validity must be confirmed directly from current documents.</small></span></div>
        </div>
      </section>
      <CTA title="Need compliance information?" text="Tell us which product and documentation your procurement team requires."/>
    </>
  );
}

function EnquiryForm({type='corporate'}){
  const [form,setForm]=useState({name:'',company:'',phone:'',email:'',city:'',quantity:'',product:'',message:''});
  const [errors,setErrors]=useState({});
  const isDealer=type==='dealer';
  const title=isDealer?'Dealer & Distributor Enquiry':'Corporate Bulk Enquiry';
  const update=e=>setForm({...form,[e.target.name]:e.target.value});
  function submit(e){
    e.preventDefault();
    const next={};
    if(!form.name.trim())next.name='Please enter your name.';
    if(!form.phone.trim())next.phone='Please enter a phone number.';
    else if(!/^[+\d\s()-]{8,20}$/.test(form.phone.trim()))next.phone='Enter a valid phone number.';
    if(form.email&&!/^\S+@\S+\.\S+$/.test(form.email))next.email='Enter a valid email address.';
    if(!form.city.trim())next.city='Please enter your city.';
    if(!form.message.trim())next.message='Please tell us a little about your requirement.';
    setErrors(next);
    if(Object.keys(next).length)return;
    const msg=[
      `Hello GURDEX, I am submitting a ${isDealer?'dealer/distributor':'corporate bulk'} enquiry.`,
      `Name: ${form.name}`,
      `Company: ${form.company||'Not provided'}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email||'Not provided'}`,
      `City: ${form.city}`,
      `Estimated quantity: ${form.quantity||'To be discussed'}`,
      `Product interest: ${form.product||'Not specified'}`,
      `Requirement: ${form.message}`
    ].join('\n');
    window.open(waLink(msg),'_blank','noopener,noreferrer');
  }
  return (
    <>
      <PageIntro title={title} description={isDealer?'Interested in distributing GURDEX footwear? Share your business details and territory to start a conversation.':'Planning a bulk requirement? Share your team size, application and product needs to begin a conversation.'}/>
      <section className="section enquiry-section">
        <div className="container enquiry-layout">
          <aside className="enquiry-aside">
            <h2>{isDealer?'Grow with a footwear partner.':'A better enquiry starts with the right details.'}</h2>
            <p>{isDealer?'Tell us about your distribution business and the markets you serve.':'Share a few details about your organisation and estimated requirements so the sales team can follow up.'}</p>
            <div className="enquiry-benefits">
              {(isDealer?[['Building2','Business profile and territory'],['Truck','Distribution and supply discussion'],['MessageCircle','Direct enquiry channel']]:[['PackageCheck','Product and quantity discussion'],['ClipboardCheck','Technical documentation requests'],['MessageCircle','Direct enquiry channel']]).map(([IconText,text])=>(
                <div key={text}><CheckCircle2 size={18}/><span>{text}</span></div>
              ))}
            </div>
            <div className="aside-contact">
              <span>Prefer WhatsApp?</span>
              <a href={waLink(`Hello GURDEX, I have a ${isDealer?'dealer':'corporate bulk'} enquiry.`)} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Start a chat <ArrowUpRight size={15}/></a>
            </div>
          </aside>
          <form className="enquiry-form" onSubmit={submit} noValidate>
            <div className="form-heading">
              <div><h3>Tell us about your requirement</h3></div>
              <span className="required-note">* Required fields</span>
            </div>
            <div className="form-grid">
              <Field label="Full name" name="name" value={form.name} onChange={update} error={errors.name} required placeholder="Your full name"/>
              <Field label="Company / organisation" name="company" value={form.company} onChange={update} placeholder="Company name"/>
              <Field label="Phone number" name="phone" value={form.phone} onChange={update} error={errors.phone} required placeholder="+91 ..." type="tel"/>
              <Field label="Work email" name="email" value={form.email} onChange={update} error={errors.email} placeholder="you@company.com" type="email"/>
              <Field label="City / delivery location" name="city" value={form.city} onChange={update} error={errors.city} required placeholder="City, state"/>
              <Field label="Estimated quantity" name="quantity" value={form.quantity} onChange={update} placeholder="e.g. 250 pairs"/>
              <div className="field full-field">
                <label htmlFor="product">Product interest</label>
                <select id="product" name="product" value={form.product} onChange={update}>
                  <option value="">Select a range (optional)</option>
                  {productData.map(p=><option key={p.id} value={`${p.name} (${p.id})`}>{p.name} — {p.id}</option>)}
                  <option value="Multiple products">Multiple products / not sure yet</option>
                </select>
              </div>
              <div className="field full-field">
                <label htmlFor="message">Your requirement <span>*</span></label>
                <textarea id="message" name="message" value={form.message} onChange={update} placeholder={isDealer?'Tell us about your business, territory and distribution plans.':'Tell us about the application, required sizes, quantity or technical documentation.'} rows="4" aria-invalid={!!errors.message}/>
                {errors.message&&<small className="field-error">{errors.message}</small>}
              </div>
            </div>
            <div className="form-foot">
              <p><ShieldCheck size={15}/> Demo form: submitting opens WhatsApp with your entered details. No data is stored on a server.</p>
              <button className="btn btn-primary" type="submit">Continue on WhatsApp <Send size={16}/></button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({label,name,value,onChange,error,required,placeholder,type='text'}){
  return (
    <div className="field">
      <label htmlFor={name}>{label} {required&&<span>*</span>}</label>
      <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} aria-invalid={!!error}/>
      {error&&<small className="field-error">{error}</small>}
    </div>
  );
}

function Contact(){
  return (
    <>
      <PageIntro title="Let’s talk footwear." description="Reach out for product information, dealer opportunities or corporate bulk requirements."/>
      <section className="section">
        <div className="container contact-layout">
          <div className="contact-main">
            <h2>Tell us what you’re looking for.</h2>
            <p>Choose the most relevant enquiry route, or use the contact details below once the official company information is confirmed.</p>
            <div className="contact-options">
              <Link to="/dealer-enquiry"><span><Building2/></span><div><strong>Dealer / Distributor</strong><small>Discuss distribution opportunities</small></div><ArrowUpRight/></Link>
              <Link to="/corporate-enquiry"><span><PackageCheck/></span><div><strong>Corporate bulk orders</strong><small>Discuss team or procurement requirements</small></div><ArrowUpRight/></Link>
              <a href={waLink('Hello GURDEX, I would like to get in touch with your team.')} target="_blank" rel="noreferrer"><span><MessageCircle/></span><div><strong>WhatsApp</strong><small>Start a direct enquiry</small></div><ArrowUpRight/></a>
            </div>
          </div>
          <div className="contact-card">
            <h3>Contact information</h3>
            <p className="contact-line"><Phone/>{CONFIG.phone}</p>
            <p className="contact-line"><Mail/>{CONFIG.email}</p>
            <p className="contact-line"><MapPin/>{CONFIG.address}</p>
            <div className="contact-card-note"><Clock3/><span><strong>Business hours</strong><small>To be confirmed by GURDEX</small></span></div>
            <span className="demo-note">Replace all placeholder details before launch.</span>
          </div>
        </div>
      </section>
      <CTA/>
    </>
  );
}

function NotFound(){
  return (
    <PageIntro title="This page isn’t here." description="The page may have moved, or the link may be incorrect.">
      <Link className="btn btn-primary" to="/">Return home</Link>
    </PageIntro>
  );
}

function ScrollToTop(){
  const {pathname}=useLocation();
  React.useEffect(()=>{window.scrollTo(0,0)},[pathname]);
  return null;
}

function App(){
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

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
