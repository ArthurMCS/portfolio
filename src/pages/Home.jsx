import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import { HomePage, Sidebar } from '../StyledComponents/Home';
import Header from '../components/Header';
import Photo from '../components/Photo';
import Article from '../components/Article';
import Footer from '../components/Footer';
import About from '../components/About';
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
        <Sidebar />
        <Photo />
        <Article />
        <About />
        <Skills />
        <Footer />
      </HomePage>
    </motion.div>
  );
}
