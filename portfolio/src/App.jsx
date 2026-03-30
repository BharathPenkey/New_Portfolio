import React from 'react';
import './index.css'
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Stats from './components/Stats';


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      {/*
      <Experience />
      <Skills/> */}

    </>
  )
}

export default App
