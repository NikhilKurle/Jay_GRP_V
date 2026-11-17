import { useCallback, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import Intro from './components/Intro';
import { introAllowed } from './lib/intro';
import { Home, About, Group, Contact } from './pages/Pages';
import ProjectList from './pages/ProjectList';
import ProjectPage from './pages/ProjectPage';
import Contracting from './pages/Contracting';

// Plays the logo intro each time the visitor arrives on the home page.
function Shell() {
  const location = useLocation();
  const [doneKey, setDoneKey] = useState(null);
  const [revealKey, setRevealKey] = useState(null);
  const intro = location.pathname === '/' && doneKey !== location.key && introAllowed();
  const logoHidden = intro && revealKey !== location.key;
  const endIntro = useCallback(() => setDoneKey(location.key), [location.key]);
  const revealLogo = useCallback(() => setRevealKey(location.key), [location.key]);

  return (
    <>
      <ScrollManager />
      {intro && <Intro key={location.key} onReveal={revealLogo} onDone={endIntro} />}
      <Navbar hideLogo={logoHidden} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/contracting" element={<Contracting />} />
          <Route path="/group" element={<Group />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Shell />
    </Router>
  );
}

export default App;


