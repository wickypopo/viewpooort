import getMousePosition from "./getMousePosition";
import { motion } from "motion/react";

export default function CustomCursor({ inBounds, text }) {
  const { x, y } = getMousePosition();
  return (
    <motion.div
      style={{ x: x + 10, y: y + 10 }}
      animate={{ opacity: inBounds ? 1 : 0 }}
      transition={{ type: "tween", ease: "backOut", duration: 0.25 }}
      className="pointer-events-none py-2 px-4 bg-black text-white z-50 fixed top-0 left-0  rounded-full"
    >
      {text}
    </motion.div>
  );
}
