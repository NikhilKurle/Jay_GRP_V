import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to top on page change, or to #hash when present.
const ScrollManager = () => {
  const { pathname, hash, search } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash, search]);
  return null;
};

export default ScrollManager;
