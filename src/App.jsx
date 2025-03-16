import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollegeFinder from './components/College';
import News from './components/News';
import KeyDates from './components/KeyDates';
import Scholarships from './components/Scholarships';
import AdmissionSteps from './components/AdmissionSteps';
import RankPredictor from './components/RankPredictor';
import Community from './components/Community';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import Cutoff from './components/Finder';
import Cyberspace from './components/Cyberspace';
import University from './components/University';
import ImportantWebsites from './components/ImportantWebsites';
import GoogleTranslate from './Language';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* GoogleTranslate Component */}
        <div className="fixed top-16 right-4 z-50">
          <GoogleTranslate />
        </div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero />} />
            <Route path="/finder" element={<Cutoff />} />
            <Route path="/college-finder" element={<CollegeFinder />} />
            <Route path="/university" element={<University />} />
            <Route path="/news" element={<News />} />
            <Route path="/dates" element={<KeyDates />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/admission" element={<AdmissionSteps />} />
            <Route path="/rank-predictor" element={<RankPredictor />} />
            <Route path="/community" element={<Community />} />
            <Route path="/cyberspace" element={<Cyberspace />} />
            <Route path="/iws" element={<ImportantWebsites />} />
          </Routes>
        </AnimatePresence>

        {/* Chatbot and Footer */}
        <Chatbot />
        <Footer />
      </div>
    </div>
  );
}

export default App;