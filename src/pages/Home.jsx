import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import HomePage from '../StyledComponents/Home';
import Header from '../components/Header';
import Article from '../components/MainArticle/Article';
import About from '../components/About/About';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header home />
      <HomePage>
        <Article />
        <About />
        <Skills />
      </HomePage>
    </motion.div>
  );
}
