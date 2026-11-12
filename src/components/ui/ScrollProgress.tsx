import { m, useScroll, useSpring } from 'framer-motion';

/** Thin accent bar along the top edge showing how far down the page you are. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });
  return <m.div className="scroll-progress" style={{ scaleX }} aria-hidden />;
};

export default ScrollProgress;
