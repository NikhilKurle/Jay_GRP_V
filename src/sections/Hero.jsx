import heroFilm from '../assets/videos/hero_Section/Jay_Building_Interior_Film.mp4';
import { HERO } from '../data/site';

const reduceMotion = typeof window !== 'undefined'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Emaar-style: after the logo intro, the film plays full screen with nothing on top.
const Hero = () => (
  <section className="hero hero--film" id="top" aria-label="Jay Group film">
    {reduceMotion ? (
      <img className="hero-media" src={HERO.poster} alt="" />
    ) : (
      <video className="hero-media" src={heroFilm} poster={HERO.poster}
        autoPlay muted loop playsInline aria-hidden="true" />
    )}
    <div className="hero-shade hero-shade--top" />
  </section>
);

export default Hero;
