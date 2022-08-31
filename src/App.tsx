import React, { useState } from 'react';
import './App.css';
import Navbar from '@components/Navbar/Navbar';
import About from '@components/About/About';
import Experience from '@components/Experience/Experience';
import Contact from '@components/Contact/Contact';
import Header from '@components/Header/Header';
import Portfolio from '@components/Portfolio/Portfolio';
import Footer from '@components/Footer/Footer';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
