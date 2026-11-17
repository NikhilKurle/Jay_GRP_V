import { useEffect, useRef, useState } from 'react';

// Count-up number that starts when scrolled into view.
const Counter = ({ value, suffix = '', tbc = false, display }) => {
  const ref = useRef(null);
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (display) return;
    const el = ref.current;
    if (reduce) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1600;
      const tick = (t) => {
        const p = Math.min(1, (t - start) / dur);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, display, reduce]);

  const text = display ?? `${n.toLocaleString('en-IN')}${suffix}`;
  const unconfirmed = tbc || (display && display.includes('['));
  return (
    <span ref={ref} className={`counter-value ${unconfirmed ? 'tbc' : ''}`} title={unconfirmed ? 'To confirm before going live' : undefined}>
      {text}
    </span>
  );
};

export default Counter;
