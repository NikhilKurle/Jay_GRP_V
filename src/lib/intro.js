// The logo intro plays every time the visitor lands on the home page
// (first load, or clicking Home / the logo), except with reduced motion on.
export function introAllowed() {
  try {
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

