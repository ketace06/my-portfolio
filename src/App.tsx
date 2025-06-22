import React, { useState, useEffect } from 'react';
import Navbar from './components/NavBar';
import Content from './components/Content';
import FakeLogin from './components/FakeLoginIntro';
import ContactForm from './components/Form';
import NavbarDrawerMobile from './components/navbarDrawerMobile';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    document.title = 'My portfolio';
  }, []);

  return (
    <>
      {!isLoggedIn && <FakeLogin onLogin={() => setIsLoggedIn(true)} />}
      {isLoggedIn && (
        <><div className="app">
          <Navbar />
          <Content />
          <ContactForm />
        </div>
        <>
        <NavbarDrawerMobile />
        </>
        </>

      )}
    </>
  );
};

export default App;
