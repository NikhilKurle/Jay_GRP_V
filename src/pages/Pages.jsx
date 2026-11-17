import { useSearchParams } from 'react-router-dom';
import Hero from '../sections/Hero';
import { OngoingSection, FeaturedOngoing, DeliveredSection } from '../sections/Projects';
import {
  VerticalsSection, LegacySection, LeadershipSection, ContactSection,
} from '../sections/Group';
import T from '../components/T';

const PageHead = ({ eyebrow, title, sub }) => (
  <section className="page-head">
    <div className="container">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <T as="h1" className="h1">{title}</T>
      {sub && <T as="p" className="lead">{sub}</T>}
    </div>
  </section>
);

export const Home = () => (
  <>
    <Hero />
    <OngoingSection />
    <FeaturedOngoing />
    <DeliveredSection />
    <VerticalsSection />
    <LegacySection />
    <LeadershipSection />
    <ContactSection />
  </>
);

export const About = () => (
  <>
    <PageHead eyebrow="About Jay Group" title="A Legacy, Chapter by Chapter." />
    <LegacySection />
    <LeadershipSection />
  </>
);

export const Group = () => (
  <>
    <PageHead eyebrow="The Group" title="Beyond Real Estate." sub="The same care, in the businesses we run beyond buildings." />
    <VerticalsSection />
    <LegacySection />
  </>
);

export const Contact = () => {
  const [params] = useSearchParams();
  return (
    <>
      <div className="page-spacer" />
      <ContactSection defaultType={params.get('type') || ''} />
    </>
  );
};
