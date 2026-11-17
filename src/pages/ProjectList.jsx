import { useSearchParams } from 'react-router-dom';
import { ProjectTile } from '../components/ProjectCards';
import { PROJECTS, SEARCH_FILTERS } from '../data/site';

const clean = (s) => s.replace(/[[\]]/g, '');

// /projects?status=Ongoing&type=Commercial&config=2 BHK
const ProjectList = () => {
  const [params, setParams] = useSearchParams();
  const status = params.get('status') || '';
  const type = params.get('type') || '';
  const config = params.get('config') || '';

  const set = (k, v) => {
    const next = new URLSearchParams(params);
    if (v) next.set(k, v); else next.delete(k);
    setParams(next, { replace: true });
  };

  const list = PROJECTS.filter((p) => {
    if (status && p.status !== status) return false;
    if (type === 'Plots' && !p.configs.some((c) => clean(c) === 'Plots')) return false;
    if (type && type !== 'Plots') {
      const cat = clean(p.category);
      if (!(cat === type || cat === 'Mixed Use')) return false;
    }
    if (config && !p.configs.includes(config)) return false;
    return true;
  });

  const title = status === 'Ongoing' ? "What We're Building Next."
    : status === 'Delivered' ? 'Built. Delivered. Lived In.'
    : type === 'Commercial' ? 'Commercial Spaces.'
    : 'Every Jay Group Address.';

  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Projects</p>
          <h1 className="h1">{title}</h1>
          <div className="filters">
            <div className="tabs">
              {['', ...SEARCH_FILTERS.status].map((s) => (
                <button key={s || 'all'} className={`tab ${status === s ? 'tab--on' : ''}`} onClick={() => set('status', s)}>
                  {s || 'All'}
                </button>
              ))}
            </div>
            <select value={type} onChange={(e) => set('type', e.target.value)} aria-label="Type">
              <option value="">Any type</option>
              {SEARCH_FILTERS.type.map((t) => <option key={t} value={clean(t)}>{t}</option>)}
            </select>
            <select value={config} onChange={(e) => set('config', e.target.value)} aria-label="Configuration">
              <option value="">Any configuration</option>
              {SEARCH_FILTERS.config.map((c) => <option key={c}>{c}</option>)}
            </select>
            {(status || type || config) && (
              <button className="btn-link" onClick={() => setParams({}, { replace: true })}>Reset All</button>
            )}
          </div>
        </div>
      </section>
      <section className="section pt-0">
        <div className="container">
          {list.length
            ? <div className="grid-3">{list.map((p) => <ProjectTile key={p.slug} p={p} large />)}</div>
            : <p className="muted">No projects match these filters yet.</p>}
        </div>
      </section>
    </>
  );
};

export default ProjectList;
