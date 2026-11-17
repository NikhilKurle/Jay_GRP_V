import T from './T';

export const SectionHead = ({ eyebrow, heading, subtext, align = 'left', children }) => (
  <div className={`section-head ${align === 'center' ? 'center' : ''}`}>
    {eyebrow && <T as="p" className="eyebrow">{eyebrow}</T>}
    <T as="h2" className="h2">{heading}</T>
    {subtext && <T as="p" className="lead">{subtext}</T>}
    {children}
  </div>
);
