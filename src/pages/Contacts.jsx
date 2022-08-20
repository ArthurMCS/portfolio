import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';

export default function Contacts() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header contacts />
      <ContactForm />
    </motion.div>
  );
}
