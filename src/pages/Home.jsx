import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion/dist/framer-motion';
import Header from '../components/Header';
import Photo from '../components/Photo';
import Article from '../components/Article';
import Footer from '../components/Footer';

const HomePage = styled.div`
     @media (max-width:1200px){
      display: flex;
      align-items: center;
      flex-direction: column;
        
      .activeMenu {
          display: none;
      }
     }
`;

const Sidebar = styled.div`
  width: 20%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color:#3cff00;

  @media (max-width: 1200px) {
      display: none;
  }

`;

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
        <Footer />
      </HomePage>
    </motion.div>
  );
}
