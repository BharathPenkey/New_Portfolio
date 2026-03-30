import React from 'react';
import './index.css'
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Stats from './components/Stats';
import About from './components/About';


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />

  

    </>
  )
}

export default App
