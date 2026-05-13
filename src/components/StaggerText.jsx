import { motion } from "motion/react";
export default function StaggerText(props) {
  const data = props.text.toString();
  const text = data.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: props.delay,
        staggerChildren: 0.04,
      },
    },
  };

  const letterAnim = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
      },
    },
  };

  const textMap = text.map((text) => {
    const word = text.split("");
    return (
      <div className="flex flex-wrap mr-2 lg:mr-4">
        {word.map((letters, letterIndex) => {
          const letter = letters.split("");
          return (
            <motion.span
              key={letterIndex}
              variants={letterAnim}
              className={props.textClass}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
    );
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className={props.containerClass}
    >
      {textMap}
    </motion.div>
  );
}
