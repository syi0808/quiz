'use client';

import { motion } from 'framer-motion';
import * as sx from '@stylexjs/stylex';
import { text } from '@/shared/styles/tokens.stylex';
import { containerStyle } from './styles';
import PlayButton from './PlayButton';

export default function Intro() {
  return (
    <motion.div {...containerStyle}>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        {...sx.props(text.h1)}
      >
        Experience the thrill of quizzes now!
      </motion.p>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        {...sx.props(text.h1)}
      >
        Dive into various topics and difficulty levels for a great time.
      </motion.p>
      <PlayButton />
    </motion.div>
  );
}
