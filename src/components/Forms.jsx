import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import T from './T';
import { submitLead } from '../lib/leads';
import { CONTACT_SECTION, CONTACT, telHref } from '../data/site';

// Invisible to people; bots that fill every field get filtered out.
const Honeypot = () => (
  <input type="checkbox" name="botcheck" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
);

export const SendError = () => (
  <p className="form-error" role="alert">
    Sorry, that didn't go through. Please call us on <a href={telHref}>{CONTACT.phoneDisplay}</a> or try again.
  </p>
);

// Main enquiry form: Name · Phone · Email · Enquiry Type · Message
export const EnquiryForm = ({ defaultType = '', source = 'enquiry', project }) => {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const [type, setType] = useState(defaultType);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    setBusy(true); setError(false);
    try {
      await submitLead(source, { ...data, project });
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  };

  if (sent) {
    return <div className="form-thanks big">Thank you. Our team will call you shortly.</div>;
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="chips" role="radiogroup" aria-label="Enquiry type">
        {CONTACT_SECTION.enquiryTypes.map((t) => (
          <button type="button" key={t} role="radio" aria-checked={type === t}
            className={`chip ${type === t ? 'chip--on' : ''}`} onClick={() => setType(t)}>{t}</button>
        ))}
      </div>
      <div className="form-row">
        <label><span>Name</span><input name="name" required autoComplete="name" /></label>
        <label><span>Phone</span><input name="phone" type="tel" required autoComplete="tel" pattern="[0-9+\s-]{10,15}" /></label>
      </div>
      <div className="form-row">
        <label><span>Email</span><input name="email" type="email" autoComplete="email" /></label>
        <label><span>Enquiry Type</span>
          <select name="type" value={type} onChange={(e) => setType(e.target.value)} required>
            <option value="" disabled>Select</option>
            {CONTACT_SECTION.enquiryTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
        </label>
      </div>
      <label><span>Message</span><textarea name="message" rows={4} /></label>
      <Honeypot />
      {error && <SendError />}
      <button className="btn btn-gold" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Send Enquiry'}</button>
    </form>
  );
};

// Brochure gate: Name · Phone, then the PDF downloads. Every download is a lead.
export const BrochureModal = ({ project, onClose }) => {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    setBusy(true);
    // The brochure downloads even if the email fails, so the visitor is never stuck.
    try { await submitLead('brochure', { ...data, project: project.name }); } catch { /* still download */ }
    setBusy(false);
    if (project.brochure) {
      const a = document.createElement('a');
      a.href = project.brochure;
      a.download = '';
      a.click();
    }
    setSent(true);
  };

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={`${project.name} brochure`} onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose} aria-label="Close"><X size={20} /></button>
        {sent ? (
          <>
            <h3 className="h3">Thank you.</h3>
            <p className="muted">Our team will call you shortly.</p>
            {!project.brochure && <p className="muted small"><T>[Brochure PDF to be added]</T></p>}
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {project.logo && <img src={project.logo} alt="" className="pname-logo pname-logo--modal" />}
            <h3 className="h3">Get the {project.name} Brochure.</h3>
            <label><span>Name</span><input name="name" required autoComplete="name" autoFocus /></label>
            <label><span>Phone</span><input name="phone" type="tel" required autoComplete="tel" pattern="[0-9+\s-]{10,15}" /></label>
            <Honeypot />
            <button className="btn btn-gold" type="submit" disabled={busy}>{busy ? 'Please wait…' : 'Download Now'}</button>
          </form>
        )}
      </div>
    </div>
  );
};
