import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Phone, MessageCircle, Home, Building2, Send } from 'lucide-react';
import logo from '../assets/logo/jayGRPLogo.svg';
import T from './T';
import { TOP_MENU, MEGA_MENU, telHref, waHref } from '../data/site';

export const MenuLink = ({ link }) =>
  link.href === 'whatsapp'
    ? <a href={waHref} target="_blank" rel="noreferrer"><T>{link.label}</T></a>
    : <Link to={link.to}><T>{link.label}</T></Link>;

const Navbar = ({ hideLogo }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const solid = scrolled || open || location.pathname !== '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mega menu on navigation
  const [lastKey, setLastKey] = useState(location.key);
  if (lastKey !== location.key) {
    setLastKey(location.key);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isActive = (to) => {
    const [path, q] = to.split('?');
    if (location.pathname !== path) return false;
    return q ? decodeURIComponent(location.search).includes(q) : true;
  };

  return (
    <>
      <header className={`nav ${solid ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" style={{ opacity: hideLogo ? 0 : 1 }} aria-label="Jay Group home">
            <img src={logo} alt="JAY GROUP" />
          </Link>

          <nav className="nav-menu" aria-label="Main">
            {TOP_MENU.map((l) => (
              <Link key={l.label} to={l.to} className={isActive(l.to) ? 'active' : ''}>{l.label}</Link>
            ))}
          </nav>

          <div className="nav-actions">
            <Link to="/projects" className="nav-icon" aria-label="Search projects"><Search size={18} /></Link>
            <a href={telHref} className="nav-icon hide-sm" aria-label="Call"><Phone size={18} /></a>
            <a href={waHref} target="_blank" rel="noreferrer" className="nav-icon hide-sm" aria-label="WhatsApp"><MessageCircle size={18} /></a>
            <Link to="/contact" className="btn btn-gold btn-sm hide-sm">Get in Touch</Link>
            <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <div className={`mega ${open ? 'mega--open' : ''}`}>
          <div className="container mega-grid">
            {MEGA_MENU.map((col) => (
              <div key={col.title} className="mega-col">
                <p className="eyebrow">{col.title}</p>
                <ul>{col.links.map((l) => <li key={l.label}><MenuLink link={l} /></li>)}</ul>
              </div>
            ))}
            <div className="mega-col mega-brand">
              <div className="mega-actions">
                <Link to="/contact" className="btn btn-gold">Get in Touch</Link>
                <a href={telHref} className="btn btn-ghost"><Phone size={16} /> Call</a>
                <a href={waHref} target="_blank" rel="noreferrer" className="btn btn-ghost"><MessageCircle size={16} /> WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile sticky bar */}
      <nav className="mbar" aria-label="Quick actions">
        <Link to="/"><Home size={18} /><span>Home</span></Link>
        <Link to="/projects"><Building2 size={18} /><span>Projects</span></Link>
        <Link to="/contact"><Send size={18} /><span>Enquire</span></Link>
        <a href={telHref}><Phone size={18} /><span>Call</span></a>
        <a href={waHref} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span>WhatsApp</span></a>
      </nav>
    </>
  );
};

export default Navbar;
