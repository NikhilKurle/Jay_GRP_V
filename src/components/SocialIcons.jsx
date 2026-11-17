// Simple brand marks (lucide-react no longer ships brand icons).
const Svg = ({ children, size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">{children}</svg>
);

export const InstagramIcon = (props) => (
  <Svg {...props}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4.3" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.4" cy="6.6" r="1.2" />
  </Svg>
);

export const FacebookIcon = (props) => (
  <Svg {...props}>
    <path d="M13.6 21.5v-8h2.7l.4-3.2h-3.1V8.3c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.4v3.2h2.8v8h3.4z" />
  </Svg>
);

export const LinkedInIcon = (props) => (
  <Svg {...props}>
    <rect x="3" y="9" width="4" height="12" rx="0.5" />
    <circle cx="5" cy="5" r="2.1" />
    <path d="M10 9h3.8v1.7c.6-1 1.9-2 3.9-2 3.4 0 4.3 2.2 4.3 5.2V21h-4v-6.3c0-1.5-.3-2.7-1.9-2.7s-2.1 1.2-2.1 2.7V21h-4V9z" />
  </Svg>
);
