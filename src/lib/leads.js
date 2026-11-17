// Every form on the site (enquiry, brochure, newsletter) sends its data here.
// TODO: connect to your CRM / email / Google Sheet before going live.
// Right now leads are only logged to the browser console.
export async function submitLead(source, data) {
  const lead = { source, ...data, page: window.location.pathname, at: new Date().toISOString() };
  console.info('[lead]', lead);
  return lead;
}
