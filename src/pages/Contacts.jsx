import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Header from '../components/Header';
import ContactsStyled from '../StyledComponents/Contacts';

export default function Contacts() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header contacts />
      <ContactsStyled>
        <h1>E-mail:</h1>
        <p>arthurmoreiradev@gmail.com</p>
        <h1>Telefone:</h1>
        <p>55 27 992879229</p>
        <div>
          <a href="https://www.linkedin.com/in/arthurmoreiracostasousa/" target="_blank" rel="noreferrer">
            <AiFillLinkedin />
            <p>linkedin</p>
          </a>
          <a href="https://github.com/ArthurMCS" target="_blank" rel="noreferrer">
            <AiFillGithub />
            <p>github</p>
          </a>
        </div>
      </ContactsStyled>
    </motion.div>
  );
}
