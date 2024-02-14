'use client';

import { motion, stagger } from 'framer-motion';
import Link from 'next/link';

const staggerDelay = stagger(0.6);

export default function Intro() {
  return (
    <div>
      <motion.p initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
        Take quizzes in various categories and build knowledge.
      </motion.p>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        Take quizzes in various categories and build knowledge.
      </motion.p>
      <PlayButton />
    </div>
  );
}

function PlayButton() {
  return (
    <Link href="/wizard" passHref>
      <button>Play now</button>
    </Link>
  );
}
