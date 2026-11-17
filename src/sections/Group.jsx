import T from '../components/T';
import Counter from '../components/Counter';
import { SectionHead } from '../components/Section';
import { EnquiryForm } from '../components/Forms';
import {
  VERTICALS_SECTION, VERTICALS, LEGACY, FOUNDER, BOARD,
  CONTACT_SECTION, CONTACT, telHref, waHref,
} from '../data/site';

export const VerticalsSection = () => (
  <section className="section" id="verticals">
    <div className="container">
      <SectionHead heading={VERTICALS_SECTION.heading} subtext={VERTICALS_SECTION.subtext} />
      <div className="verticals verticals--logos">
        {VERTICALS.map((v) => (
          <div key={v.title} className="vertical">
            <div className="v-logo">{v.logo ? <img src={v.logo} alt={v.title} loading="lazy" /> : <T>[Logo]</T>}</div>
            <h3 className="v-title">{v.title}</h3>
            <T as="p" className="v-line">{v.line}</T>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const LegacySection = () => (
  <section className="section section--alt" id="legacy">
    <div className="container">
      <SectionHead heading={LEGACY.heading} subtext={LEGACY.subtext} />

      <ol className="timeline">
        {LEGACY.journey.map((j, i) => (
          <li key={j.title}>
            <span className="tl-dot" />
            <span className="tl-num">{String(i + 1).padStart(2, '0')}</span>
            <h4>{j.title}</h4>
            <p className="muted">{j.line}</p>
          </li>
        ))}
      </ol>

      <div className="numbers numbers--3">
        {LEGACY.numbers.map((n) => (
          <div key={n.label} className="number">
            <Counter value={n.value} suffix={n.suffix} tbc={n.tbc} />
            <span className="number-label">{n.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Portrait = ({ src, name }) => (
  <div className="portrait">
    {src ? <img src={src} alt={name} loading="lazy" /> : <T>[Photo]</T>}
  </div>
);

export const LeadershipSection = () => (
    <section className="section" id="founder">
      <div className="container">
        <div className="founder">
          <Portrait src={FOUNDER.photo} name="Jayant" />
          <div className="founder-body">
            <p className="eyebrow">{FOUNDER.eyebrow}</p>
            <T as="h2" className="h2">{FOUNDER.name}</T>
            <p className="founder-title">{FOUNDER.title}</p>
            <blockquote className="quote">{FOUNDER.quote}</blockquote>
            <p className="muted">{FOUNDER.body}</p>
          </div>
        </div>

        <div id="board" className="board">
          <SectionHead heading={BOARD.heading} subtext={BOARD.subtext} />
          <div className="grid-4">
            {BOARD.directors.map((d) => (
              <div key={d.photo} className="director">
                <Portrait src={d.photo} name={d.name} />
                <T as="h4">{d.name}</T>
                <T as="p" className="director-role">{d.designation}</T>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
);

export const ContactSection = ({ defaultType }) => (
  <section className="section" id="contact">
    <div className="container contact">
      <div>
        <SectionHead heading={CONTACT_SECTION.heading} subtext={CONTACT_SECTION.subtext} />
        <ul className="direct">
          <li><span className="muted">Call</span>
            <span className="direct-stack">
              <a href={telHref}>{CONTACT.phoneDisplay}</a>
              {CONTACT.phone2Display && <a href={`tel:${CONTACT.phone2Display.replace(/\s/g, '')}`}>{CONTACT.phone2Display}</a>}
            </span></li>
          {CONTACT.email && <li><span className="muted">Email</span> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>}
          <li><span className="muted">WhatsApp</span> <a href={waHref} target="_blank" rel="noreferrer">Message us</a></li>
          <li><span className="muted">Visit</span> <a href={CONTACT.mapUrl} target="_blank" rel="noreferrer">{CONTACT.address}</a></li>
        </ul>
      </div>
      <EnquiryForm defaultType={defaultType} />
    </div>
  </section>
);
