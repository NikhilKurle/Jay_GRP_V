import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import T from '../components/T';
import Counter from '../components/Counter';
import { SectionHead } from '../components/Section';
import { EnquiryForm } from '../components/Forms';
import siteFilm from '../assets/videos/contracting/Jay_Construction_Film.mp4';
import { CONTRACTING as C, CONTACT, telHref } from '../data/site';

const reduceMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const institutions = C.featured.filter((f) => f.group === 'institutions');
const homes = C.featured.filter((f) => f.group === 'homes');

const Contracting = () => (
  <>
    <section className="hero hero--page">
      {reduceMotion
        ? <img className="hero-media" src={C.featured[0].image} alt="" />
        : <video className="hero-media" src={siteFilm} autoPlay muted loop playsInline aria-hidden="true" />}
      <div className="hero-shade" />
      <div className="container hero-content">
        <h1 className="hero-h hero-h--md mb-lg">{C.headline}</h1>
        <div className="btn-row">
          <a href="#work" className="btn btn-gold">View Projects</a>
          <a href="#talk" className="btn btn-ghost">Talk to Our Team</a>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <SectionHead heading="What We Do" />
        <div className="grid-4">
          {C.services.map((s, i) => (
            <div key={i} className="pillar">
              <span className="v-num">{String(i + 1).padStart(2, '0')}</span>
              <T as="h4">{s.title}</T>
              <T as="p" className="muted">{s.line}</T>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section section--alt" id="work">
      <div className="container">
        <SectionHead heading="Our Work" />

        <div className="work-group">
          <h3 className="h3">Institutions & Infrastructure</h3>
          <p className="muted work-sub">Schools, telecom networks and public-facing works, built to institutional standards.</p>
          <div className="cfeat-list">
            {institutions.map((f, i) => (
              <article key={f.name} className={`cfeat ${i % 2 ? 'cfeat--rev' : ''}`}>
                <figure className="cfeat-media">
                  <img src={f.image} alt={f.name} loading="lazy" />
                  {f.impression && <figcaption className="impression">Artist's impression</figcaption>}
                </figure>
                <div className="cfeat-body">
                  <T as="h3" className="h3">{f.name}</T>
                  <p className="cfeat-meta">{f.meta.map((m, j) => <T key={j}>{m}</T>)}</p>
                  <T as="p" className="muted">{f.summary}</T>
                </div>
              </article>
            ))}
          </div>
          <div className="grid-4">
            {C.others.map((o) => (
              <article key={o.name} className="cwork">
                <img src={o.image} alt="" loading="lazy" />
                <h4>{o.name}</h4>
                <p className="cwork-meta">{o.client} · {o.year}</p>
                <p className="muted small">{o.line}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="work-group">
          <h3 className="h3">Homes & Residences</h3>
          <p className="muted work-sub">Family homes and residential buildings across Solapur, built for the people who live in them.</p>
          <div className="homes-grid">
            {homes.map((f) => (
              <article key={f.name} className="home-card">
                <figure className="cfeat-media">
                  <img src={f.image} alt={f.name} loading="lazy" />
                  {f.impression && <figcaption className="impression">Artist's impression</figcaption>}
                </figure>
                <div className="home-body">
                  <h4>{f.name}</h4>
                  <p className="cfeat-meta">{f.meta.map((m, j) => <span key={j}>{m}</span>)}</p>
                  <p className="muted small">{f.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="numbers numbers--3">
          {C.numbers.map((n) => (
            <div key={n.label} className="number">
              <Counter value={n.value} suffix={n.suffix} display={n.display} />
              <span className="number-label">{n.label}</span>
            </div>
          ))}
        </div>
        <p className="eyebrow center-row">Clients</p>
        <div className="logos">
          {C.clients.map((c) => (
            <div key={c.name} className="client-logo"><img src={c.logo} alt={c.name} loading="lazy" /></div>
          ))}
        </div>
      </div>
    </section>

    <section className="section section--alt" id="talk">
      <div className="container contact">
        <div>
          <SectionHead heading={C.contact.heading} subtext={C.contact.subtext} />
          <div className="btn-row">
            <a href={telHref} className="btn btn-ghost"><Phone size={16} /> Call <T>{CONTACT.phoneDisplay}</T></a>
            <Link to="/projects" className="btn-link">Our real estate projects</Link>
          </div>
        </div>
        <EnquiryForm source="contracting" />
      </div>
    </section>
  </>
);

export default Contracting;
