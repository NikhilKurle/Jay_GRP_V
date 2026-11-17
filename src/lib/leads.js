import { FORMS } from '../data/site';

const SUBJECTS = {
  enquiry: (d) => `New enquiry: ${d.type || 'General'} · ${d.name}`,
  project: (d) => `Project enquiry: ${d.project || ''} · ${d.name}`,
  contracting: (d) => `Contracting enquiry · ${d.name}`,
  brochure: (d) => `Brochure download: ${d.project || ''} · ${d.name}`,
  newsletter: (d) => `Newsletter signup · ${d.email}`,
};

const LABELS = {
  name: 'Name', phone: 'Phone', email: 'Email', type: 'Enquiry type',
  project: 'Project', message: 'Message', page: 'Sent from page',
};

// Every form on the site sends its data here. Returns when the lead is delivered,
// throws if it could not be sent (the form then shows a "please call us" message).
export async function submitLead(source, data) {
  // Hidden field only bots fill in: quietly accept and drop.
  if (data.botcheck) return { ok: true };

  const clean = Object.fromEntries(
    Object.entries({ ...data, page: window.location.pathname }).filter(([k, v]) => k !== 'botcheck' && v),
  );
  const subject = (SUBJECTS[source] || SUBJECTS.enquiry)(clean);

  if (!FORMS.web3formsKey) {
    // Fallback until the Web3Forms key is added: open the visitor's email app.
    const body = Object.entries(clean).map(([k, v]) => `${LABELS[k] || k}: ${v}`).join('\n');
    window.location.href = `mailto:${FORMS.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return { ok: true, fallback: true };
  }

  const payload = { access_key: FORMS.web3formsKey, subject, from_name: 'Jay Group website' };
  Object.entries(clean).forEach(([k, v]) => { payload[LABELS[k] || k] = v; });
  if (clean.email) payload.replyto = clean.email;

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.success) throw new Error(json.message || 'Could not send');
  return { ok: true };
}
