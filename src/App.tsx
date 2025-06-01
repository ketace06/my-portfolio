import React, { useEffect, useState } from 'react';
import IntroAnimation from './components/LogoAnimation';
import Navbar from './components/NavBar';
import DayNightToggle from './components/DayNightToggle';
import Content from './components/Content';
import Intro from './components/Intro';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'My portfolio';
  }, []);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedValue = localStorage.getItem('darkMode');
    if (storedValue !== null) {
      return storedValue === 'true';
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('isDarkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <>
      <Navbar />
      <IntroAnimation />
      <Intro />
      <Content />
      <DayNightToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
};

export default App;
