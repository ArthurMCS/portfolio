import React from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion/dist/framer-motion';

export default function Contacts() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
    <Header contacts/>
    </motion.div>
  )
}
