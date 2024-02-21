import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './button.module.css';

export default function PlayButton() {
  return (
    <Link href="/wizard" passHref>
      <motion.button
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse', delay: 1.6 }}
        className={styles.glowAnimatedButton}
      >
        Play now
      </motion.button>
    </Link>
  );
}

// Image by <a href="https://www.freepik.com/free-photo/soft-gradient-background_47719633.htm">Freepik</a>
