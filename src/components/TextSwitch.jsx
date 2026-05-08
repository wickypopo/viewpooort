import { motion } from "motion/react";

export default function TextSwitch(props) {
  const container = {
    hidden: {},
    hover: {},
  };
  const text = {
    hidden: { y: 0 },
    hover: { y: -110 },
  };
  const text2 = {
    hidden: { y: 110 },
    hover: { y: 0 },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileHover="hover"
      className="flex flex-col instrument-serif-regular text-8xl text-white pb-3 cursor-pointer h-26 w-full relative overflow-hidden"
    >
      <motion.span className="absolute left-0 top-0" variants={text}>
        {props.text}
      </motion.span>
      <motion.span className="absolute left-0 top-0" variants={text2}>
        {props.text}
      </motion.span>
    </motion.div>
  );
}
