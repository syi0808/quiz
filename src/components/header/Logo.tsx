'use client';

import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import { logoWrapperStyle } from './styles';
import Link from 'next/link';

const spanStyle = { y: 30, opacity: 0, display: 'inline-block' };

export default function Logo() {
  const [q, u, i, z, up] = useLogoAnimate();

  return (
    <Link href="/" {...logoWrapperStyle}>
      <motion.span initial={spanStyle} ref={q}>
        Q
      </motion.span>
      <motion.span initial={spanStyle} ref={u}>
        u
      </motion.span>
      <motion.span initial={spanStyle} ref={i}>
        i
      </motion.span>
      <motion.span initial={spanStyle} ref={z}>
        z
      </motion.span>
      <motion.span initial={{ y: -70, display: 'inline-block' }} ref={up}>
        UP
      </motion.span>
    </Link>
  );
}

const useLogoAnimate = () => {
  const [scopeQ, animateQ] = useAnimate();
  const [scopeU, animateU] = useAnimate();
  const [scopeI, animateI] = useAnimate();
  const [scopeZ, animateZ] = useAnimate();
  const [scopeUP, animateUP] = useAnimate();

  useEffect(() => {
    (async () => {
      const quizNextStyle = { y: 0, opacity: 1 };

      await animateQ(scopeQ.current, quizNextStyle, { duration: 0.15 });
      await animateU(scopeU.current, quizNextStyle, { duration: 0.15 });
      await animateI(scopeI.current, quizNextStyle, { duration: 0.15 });
      await animateZ(scopeZ.current, quizNextStyle, { duration: 0.15 });
      await animateUP(
        scopeUP.current,
        { y: 0 },
        { type: 'spring', duration: 1, bounce: 0.7, stiffness: 400, damping: 7, delay: 0.2 }
      );
    })();
  }, []);

  return [scopeQ, scopeU, scopeI, scopeZ, scopeUP];
};
