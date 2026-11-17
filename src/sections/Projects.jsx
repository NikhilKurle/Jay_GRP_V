import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { SectionHead } from '../components/Section';
import { OngoingCard, ProjectTile } from '../components/ProjectCards';
import { BrochureModal } from '../components/Forms';
import {
  PROJECTS, ONGOING_SECTION, FEATURED_ONGOING, DELIVERED_SECTION,
} from '../data/site';

export const OngoingSection = () => {
  const ongoing = PROJECTS.filter((p) => p.status === 'Ongoing');
  const track = useRef(null);
  const [lead, setLead] = useState(null);

  const go = (dir) => {
    const el = track.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: 'smooth' });
  };

  return (
    <section className="section" id="ongoing">
      <div className="container">
        <div className="head-row">
          <SectionHead {...ONGOING_SECTION} />
          <div className="arrows">
            <button onClick={() => go(-1)} aria-label="Previous project"><ArrowLeft size={18} /></button>
            <button onClick={() => go(1)} aria-label="Next project"><ArrowRight size={18} /></button>
          </div>
        </div>
        <div className="carousel" ref={track}>
          {ongoing.map((p) => (
            <OngoingCard key={p.slug} p={p} onRegister={setLead} />
          ))}
        </div>
      </div>
      {lead && <BrochureModal project={lead} onClose={() => setLead(null)} />}
    </section>
  );
};

export const FeaturedOngoing = () => {
  const p = PROJECTS.find((x) => x.slug === FEATURED_ONGOING.slug);
  return (
    <section className="feature">
      <img src={p.featureImage || p.image} alt={p.name} className="feature-bg" loading="lazy" />
      <div className="feature-shade" />
      <div className="container feature-body">
        <p className="eyebrow">{FEATURED_ONGOING.eyebrow}</p>
        <h2 className="h1">{FEATURED_ONGOING.heading}</h2>
        <p className="lead">{FEATURED_ONGOING.subtext}</p>
        <ul className="ticks">
          {FEATURED_ONGOING.points.map((pt) => <li key={pt}><Check size={16} /> {pt}</li>)}
        </ul>
        <Link to={`/projects/${p.slug}`} className="btn btn-gold">{FEATURED_ONGOING.cta}</Link>
      </div>
    </section>
  );
};

export const DeliveredSection = () => {
  // Home shows three highlights; the rest are on the Projects page (View All).
  const order = ['jayram-residences', 'prajay-heights', 'jv-square', 'jayendra-arcade'];
  const featured = order.map((slug) => PROJECTS.find((p) => p.slug === slug)).filter(Boolean);

  return (
    <section className="section section--alt" id="delivered">
      <div className="container">
        <SectionHead {...DELIVERED_SECTION} />
        {featured.length > 0 && (
          <div className="grid-4">{featured.map((p) => <ProjectTile key={p.slug} p={p} large />)}</div>
        )}
        <div className="center-row">
          <Link to="/projects?status=Delivered" className="btn btn-ghost">View All Projects</Link>
        </div>
      </div>
    </section>
  );
};

