import { motion } from "motion/react";
export default function StaggerText(props) {
  const data = props.text.toString();

  const letters = data.split("");

  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: props.delay,
        staggerChildren: 0.02,
      },
    },
  };

  const letterAnim = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const text = letters.map((letter, letterIndex) =>
    letter === " " ? (
      <span key={letterIndex} className="mx-2"></span>
    ) : (
      <motion.span
        key={letterIndex}
        variants={letterAnim}
        className={props.textClass}
      >
        {letter}
      </motion.span>
    ),
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className={props.containerClass}
    >
      {text}
    </motion.div>
  );
}
