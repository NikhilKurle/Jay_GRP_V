import { useEffect, useRef, useState } from 'react';
import introFilm from '../assets/videos/intro/jay-logo-intro.mp4';
import markSvg from '../assets/logo/jay-mark.svg';
import wordSvg from '../assets/logo/jay-wordmark.svg';

// Where the mark and the words sit inside the film's last frame (film is 374 × 518).
const FILM = { w: 374, h: 518 };
const IN_FILM = {
  mark: { x: 30, y: 20, w: 314, h: 322 },
  word: { x: 30, y: 383, w: 309, h: 113 },
};
// Where they sit inside the top-bar logo (its viewBox is 484.95 × 125.68).
const BAR_W = 484.95;
const IN_BAR = { mark: { x: 0, w: 123 }, word: { x: 143, w: 341.95 } };

const box = (r) => ({ left: r.left, top: r.top, width: r.width, height: r.height });

// Emaar-style opener: the logo animates on black, then the mark and the words
// glide apart into the side-by-side top-bar logo while the site appears behind.
const Intro = ({ onReveal, onDone }) => {
  const film = useRef(null);
  const [phase, setPhase] = useState('play'); // play → split → fly → done
  const [parts, setParts] = useState(null);

  const startFly = () => {
    if (phase !== 'play') return;
    const v = film.current?.getBoundingClientRect();
    const bar = document.querySelector('.nav-logo img')?.getBoundingClientRect();
    if (!v || !bar) { onReveal(); onDone(); return; }
    const k = v.width / FILM.w;
    const from = (p) => ({ left: v.left + p.x * k, top: v.top + p.y * k, width: p.w * k, height: p.h * k });
    const to = (p) => ({ left: bar.left + (p.x / BAR_W) * bar.width, top: bar.top, width: (p.w / BAR_W) * bar.width, height: bar.height });
    setParts({
      mark: { from: from(IN_FILM.mark), to: to(IN_BAR.mark) },
      word: { from: from(IN_FILM.word), to: to(IN_BAR.word) },
    });
    setPhase('split');
  };

  useEffect(() => {
    let t;
    if (phase === 'split') t = requestAnimationFrame(() => requestAnimationFrame(() => setPhase('fly')));
    if (phase === 'fly') t = setTimeout(() => { onReveal(); setPhase('done'); }, 950);
    if (phase === 'done') t = setTimeout(onDone, 120);
    return () => { cancelAnimationFrame(t); clearTimeout(t); };
  }, [phase, onReveal, onDone]);

  // Safety net in case the video can't play on this browser.
  useEffect(() => {
    const t = setTimeout(() => { onReveal(); onDone(); }, 8000);
    return () => clearTimeout(t);
  }, [onReveal, onDone]);

  const skip = () => { onReveal(); onDone(); };
  const at = (p) => box(phase === 'split' ? p.from : p.to);

  return (
    <div className={`intro intro--${phase}`} aria-hidden="true">
      <video ref={film} className="intro-film" src={introFilm} autoPlay muted playsInline
        onEnded={startFly} onError={skip} />
      {parts && (
        <>
          <img className="intro-part" src={markSvg} alt="" style={at(parts.mark)} />
          <img className="intro-part" src={wordSvg} alt="" style={at(parts.word)} />
        </>
      )}
      {phase === 'play' && <button className="intro-skip" onClick={skip} tabIndex={-1}>Skip</button>}
    </div>
  );
};

export default Intro;

