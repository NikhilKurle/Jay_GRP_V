import { useState } from 'react';
import { InstagramIcon, FacebookIcon, LinkedInIcon } from './SocialIcons';
import { MenuLink } from './Navbar';
import logo from '../assets/logo/jayGRPLogo.svg';
import mediahausLogo from '../assets/logo/mediahaus.png';
import { MEGA_MENU, FOOTER, CONTACT } from '../data/site';
import { submitLead } from '../lib/leads';
import { SendError } from './Forms';

const Footer = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    setError(false);
    try {
      await submitLead('newsletter', { email: f.get('email'), botcheck: f.get('botcheck') });
      setSent(true);
    } catch {
      setError(true);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="JAY GROUP" className="footer-logo" />
          </div>
          <form className="footer-news" onSubmit={subscribe}>
            <p className="footer-news-h">{FOOTER.newsletterHeading}</p>
            <p className="muted">{FOOTER.newsletterText}</p>
            {sent ? (
              <p className="form-thanks">Thank you. You are on the list.</p>
            ) : (
              <div className="news-row">
                <input type="email" name="email" required placeholder="Email address" aria-label="Email address" />
                <input type="checkbox" name="botcheck" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <button className="btn btn-gold" type="submit">Subscribe</button>
              </div>
            )}
            {error && <SendError />}
          </form>
        </div>

        <div className="footer-cols">
          {MEGA_MENU.map((col) => (
            <div key={col.title}>
              <p className="eyebrow">{col.title}</p>
              <ul>{col.links.map((l) => <li key={l.label}><MenuLink link={l} /></li>)}</ul>
            </div>
          ))}
          <div>
            <p className="eyebrow">Social</p>
            <div className="social">
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon /></a>
              <a href={CONTACT.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FacebookIcon /></a>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{FOOTER.copyright}</p>
          <div className="footer-legal">
            {FOOTER.legal.map((l) => <a key={l} href="#">{l}</a>)}
            <span className="footer-credit">
              Designed &amp; developed by <img src={mediahausLogo} alt="Mediahaus" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
