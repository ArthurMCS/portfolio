/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
