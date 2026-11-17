import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Download, MessageCircle, Check, MapPin } from 'lucide-react';
import T from '../components/T';
import { ProjectName } from '../components/ProjectCards';
import { BrochureModal, EnquiryForm } from '../components/Forms';
import { PROJECTS, waHref } from '../data/site';

const Block = ({ n, title, children, id }) => (
  <section className="pblock" id={id}>
    <p className="pblock-n">{String(n).padStart(2, '0')}</p>
    <div>
      <h2 className="h3">{title}</h2>
      {children}
    </div>
  </section>
);

const List = ({ items }) => (
  <ul className="ticks">{items.map((t, i) => <li key={i}><Check size={16} /> <T>{t}</T></li>)}</ul>
);

// Same template for every project. Fields not yet supplied show as [to confirm].
const ProjectPage = () => {
  const { slug } = useParams();
  // Pages exist only for ongoing projects (The Eastern One, Jay Vijay Vihar).
  const p = PROJECTS.find((x) => x.slug === slug && x.status === 'Ongoing');
  const [modal, setModal] = useState(false);

  // A delivered project's old link goes to the delivered list instead.
  if (!p && PROJECTS.some((x) => x.slug === slug)) return <Navigate to="/projects?status=Delivered" replace />;

  if (!p) {
    return (
      <section className="section page-head">
        <div className="container">
          <h1 className="h2">Project not found.</h1>
          <Link to="/projects" className="btn btn-gold">View All Projects</Link>
        </div>
      </section>
    );
  }

  const highlights = p.highlights || ['[Highlight]', '[Highlight]', '[Highlight]', '[Highlight]'];
  const plans = p.plans || [{ label: p.type, size: p.size }];
  const amenities = p.amenities || ['[list]'];
  const distances = p.distances || ['[distances to key places]'];
  let n = 0;

  const actions = (
    <>
      <button className="btn btn-gold" onClick={() => setModal(true)}><Download size={16} /> Download Brochure</button>
      <a href="#enquire" className="btn btn-ghost">Register Interest</a>
      <a href={waHref} target="_blank" rel="noreferrer" className="btn btn-ghost"><MessageCircle size={16} /> WhatsApp</a>
    </>
  );

  return (
    <>
      <section className="phero">
        <img src={p.image} alt={p.name} className="hero-media" />
        <div className="hero-shade" />
        <div className="container phero-body">
          <span className="tag">{p.status}</span>
          <h1 className="hero-h"><ProjectName p={p} variant="hero" /></h1>
          <p className="hero-sub">{p.line}</p>
          <div className="btn-row">{actions}</div>
        </div>
      </section>

      <div className="psticky"><div className="container psticky-inner">
        <strong><ProjectName p={p} variant="sticky" /></strong><div className="btn-row">{actions}</div>
      </div></div>

      <div className="container pbody">
        <Block n={++n} title="Overview">
          <T as="p" className="lead">{p.overview || '[2–3 lines about the project]'}</T>
          <dl className="specs">
            <div><dt>Type</dt><T as="dd">{p.type}</T></div>
            <div><dt>Size</dt><T as="dd">{p.size}</T></div>
            {p.starting && <div><dt>Starting</dt><T as="dd">{p.starting}</T></div>}
          </dl>
        </Block>

        <Block n={++n} title="Highlights">
          <div className="hl-grid">{highlights.map((h, i) => <div key={i} className="hl"><Check size={18} /><T>{h}</T></div>)}</div>
        </Block>

        <Block n={++n} title={p.plansTitle || 'Configurations & Floor Plans'}>
          {p.layout && <img className={`layout-img ${p.layoutDark ? 'layout-img--dark' : ''}`} src={p.layout} alt={`${p.name} layout plan`} loading="lazy" />}
          <div className="plans">
            {plans.map((pl, i) => (
              <div key={i} className="plan">
                {!p.layout && <div className="plan-img"><T>[Plan image]</T></div>}
                <T as="h4">{pl.label}</T>
                <T as="p" className="muted">{pl.size}</T>
              </div>
            ))}
          </div>
        </Block>

        <Block n={++n} title="Amenities"><List items={amenities} /></Block>

        <Block n={++n} title="Location & Connectivity">
          {p.mapUrl
            ? <a className="btn btn-ghost mb" href={p.mapUrl} target="_blank" rel="noreferrer"><MapPin size={16} /> Open in Google Maps</a>
            : <div className="map"><MapPin size={20} /> <T>[Map]</T></div>}
          <List items={distances} />
        </Block>

        <Block n={++n} title="Gallery">
          <div className="gallery">
            <img src={p.image} alt={`${p.name} render`} loading="lazy" />
            {p.gallery
              ? p.gallery.map((g) => <img key={g} src={g} alt={`${p.name}`} loading="lazy" />)
              : (
                <>
                  <div className="gallery-ph"><T>[renders / site photos]</T></div>
                  <div className="gallery-ph"><T>[renders / site photos]</T></div>
                </>
              )}
          </div>
        </Block>



        <Block n={n + 1} title="Enquire" id="enquire">
          <div className="btn-row mb">
            <button className="btn btn-gold" onClick={() => setModal(true)}><Download size={16} /> Download Brochure</button>
          </div>
          <p className="muted mb">Book a Site Visit</p>
          <EnquiryForm defaultType={p.category === 'Commercial' ? 'Commercial Space' : 'Buy a Home'} source="project" project={p.name} />
        </Block>
      </div>

      {modal && <BrochureModal project={p} onClose={() => setModal(false)} />}
    </>
  );
};

export default ProjectPage;
