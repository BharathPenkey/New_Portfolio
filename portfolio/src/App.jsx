import React from 'react';
import './index.css'
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Stats from './components/Stats';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />



      {/* <>
  <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Experience />
  <Stats />
  <Contact />
</> */}
    </>
    
  )
}

export default App
