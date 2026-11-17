import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import T from './T';

// Project name, or its logo when one is supplied (e.g. The Eastern One).
export const ProjectName = ({ p, variant = 'card' }) => (
  p.logo
    ? <img src={p.logo} alt={p.name} className={`pname-logo pname-logo--${variant}`} />
    : p.name
);

// Large ongoing-project card (carousel)
export const OngoingCard = ({ p, onRegister }) => (
  <article className="ocard">
    <div className="ocard-media"><img src={p.image} alt={p.name} loading="lazy" /></div>
    <div className="ocard-body">
      <h3 className="ocard-name"><ProjectName p={p} /></h3>
      <p className="ocard-line">{p.line}</p>
      <dl className="specs">
        <div><dt>Type</dt><T as="dd">{p.type}</T></div>
        <div><dt>Size</dt><T as="dd">{p.size}</T></div>
        <div><dt>Starting</dt><T as="dd">{p.starting}</T></div>
      </dl>
      <div className="btn-row">
        <Link to={`/projects/${p.slug}`} className="btn btn-gold">Explore</Link>
        <button className="btn btn-ghost" onClick={() => onRegister(p)}>Register Interest</button>
      </div>
    </div>
  </article>
);

// Image card with label overlay (delivered + grid)
export const ProjectTile = ({ p, large }) => {
  // Only ongoing projects have their own page. Delivered ones are a showcase card.
  const hasPage = p.status === 'Ongoing';
  const body = (
    <>
      <img src={p.image} alt={p.name} loading="lazy" />
      <div className="tile-shade" />
      <div className="tile-body">
        {p.label && <p className="eyebrow">{p.label}</p>}
        {!p.label && <T as="p" className="eyebrow">{hasPage ? 'Ongoing' : p.category}</T>}
        <h3 className="tile-name">{p.name} {hasPage && <ArrowUpRight size={20} />}</h3>
        <p className="tile-line">{p.line}</p>
        {large && p.meta && <T as="p" className="tile-meta">{p.meta}</T>}
      </div>
    </>
  );
  const cls = `tile ${large ? 'tile--lg' : ''}`;
  return hasPage
    ? <Link to={`/projects/${p.slug}`} className={cls}>{body}</Link>
    : <div className={`${cls} tile--static`}>{body}</div>;
};
