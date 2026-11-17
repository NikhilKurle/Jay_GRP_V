# Jay Group website

Real estate and contracting website for Jay Group, Solapur.
Built with React + Vite. Designed & developed by Mediahaus.

---

## Put it live (the quick way)

The ready-to-upload website is the **`dist`** folder (also zipped as **`JayGroup-Website-LIVE.zip`**).
Upload **everything inside `dist`**, not the folder itself.

**Hostinger / GoDaddy / any cPanel hosting**
1. Open File Manager → `public_html`.
2. Upload the contents of `dist` (or upload the zip and extract it there).
3. Make sure the hidden file **`.htaccess`** is uploaded too. It makes links like `/contracting` work when opened directly or refreshed.

**Netlify**: drag the `dist` folder onto app.netlify.com/drop. The `_redirects` file is already included.

**Vercel**: import this whole folder. Build command `npm run build`, output folder `dist`. `vercel.json` is already set up.

Then point the domain (jaygrp.com) to the host from your domain provider's DNS settings.

---

## Making changes

1. Install Node.js (nodejs.org), then in this folder run:
   ```
   npm install
   npm run dev
   ```
   and open http://localhost:5173.
2. **Almost all text lives in one file: `src/data/site.js`**: projects, prices, contact details, directors, contracting work, numbers.
   Anything written in `[square brackets]` shows on the site with a dashed gold underline, meaning "still to confirm".
3. Images go in `src/assets/…`, brochures (PDF) in `public/brochures/`.
4. When done, run `npm run build`. A fresh `dist` folder is created; upload it again.

---

## What's where

| Folder / file | What it holds |
|---|---|
| `src/data/site.js` | All the words and project details |
| `src/pages/` | The pages: Home, Projects, Project page, Contracting, About, Group, Contact |
| `src/sections/` | Big home-page blocks (hero, projects, group, legacy, leadership, contact) |
| `src/components/` | Shared parts: top bar, footer, forms, intro animation, cards |
| `src/assets/` | Logos, project images, videos |
| `public/` | Files copied as-is: brochures, icons, share image, hosting rules |
| `src/lib/leads.js` | Sends form enquiries by email (see below) |

---

## Enquiry forms

All forms (enquiry, project enquiry, contracting, brochure download, newsletter) are emailed to **contact@jaygrp.in** through Web3Forms (free).

One-time setup:
1. Go to **web3forms.com**, enter `contact@jaygrp.in` and click *Create Access Key*.
2. The key arrives at contact@jaygrp.in. Open `src/data/site.js`, find `FORMS`, and paste it: `web3formsKey: 'your-key-here',`
3. Run `npm run build` and upload the new `dist`.

Each email has a clear subject, e.g. *"Brochure download: The Eastern One · Name"*, with name, phone, email, enquiry type, message and the page it came from. Replying to the email replies to the visitor (when they gave an email). A hidden spam trap filters out bots. If sending ever fails, the visitor sees a message asking them to call. Brochures still download either way.

To send enquiries to a different address, change `to` in `FORMS` and create a key for that address.

---

## Before / soon after going live

- [ ] **Add the Web3Forms key** (see "Enquiry forms" above). Until then, forms open the visitor's email app instead of sending directly.
- [ ] **Privacy Policy and Terms & Conditions pages.** The footer links exist but go nowhere yet.
- [ ] **MahaRERA numbers** for The Eastern One and Jay Vijay Vihar were removed on request. Ongoing projects generally must show them; confirm with legal.
- [ ] Jay Plaza: flat types and sizes. Prajay Heights / JV Square / Jayendra Arcade: sizes.
- [ ] Jay Vijay Vihar: Google Maps link.
- [ ] Spelling to confirm: "Jay Vijay Vihar" vs "Jai Vijay Vihar"; Jaylaxmi signage in the renders ("Residanci", "Jayalaxmi").
- [ ] The Eastern One size shows brochure **carpet area** (811–1,206 sq ft); confirm if saleable area should be shown.

---

## Notes

- The logo intro plays every time someone arrives on the home page (and is skipped for visitors who turn off animations).
- Car number plates and house numbers in renders were blurred; homes are listed without owner names.
- Videos were compressed for the web (hero film 14 MB, contracting film 13 MB, intro 0.1 MB).
