'use client';

import { motion, useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import { logoWrapperStyle } from './styles';

const spanStyle = { y: 50, opacity: 0, display: 'inline-block' };

export default function Logo() {
  const [q, u, i, z, up] = useLogoAnimate();

  return (
    <div {...logoWrapperStyle}>
      <motion.span style={spanStyle} ref={q}>
        Q
      </motion.span>
      <motion.span style={spanStyle} ref={u}>
        u
      </motion.span>
      <motion.span style={spanStyle} ref={i}>
        i
      </motion.span>
      <motion.span style={spanStyle} ref={z}>
        z
      </motion.span>
      <motion.span style={{ y: -100, display: 'inline-block' }} ref={up}>
        UP
      </motion.span>
    </div>
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

      await animateQ(scopeQ.current, quizNextStyle, { duration: 0.4 });
      await animateU(scopeU.current, quizNextStyle, { duration: 0.4 });
      await animateI(scopeI.current, quizNextStyle, { duration: 0.4 });
      await animateZ(scopeZ.current, quizNextStyle, { duration: 0.4 });
      await animateUP(
        scopeUP.current,
        { y: 0 },
        { type: 'spring', duration: 1, bounce: 0.7, stiffness: 400, damping: 7, delay: 0.3 }
      );
    })();
  }, []);

  return [scopeQ, scopeU, scopeI, scopeZ, scopeUP];
};
