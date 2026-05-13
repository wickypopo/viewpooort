import { motion, useMotionValue, useMotionValueEvent } from "motion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

import CustomCursor from "../utils/customCursor";

export default function Projekte() {
  //
  const [inBounds, setInBounds] = useState(false);

  const animation = {
    hover: { borderRadius: "30px", scale: 1.1, rotate: -3 },
    tap: { scale: 0.9, rotate: -1 },
  };

  const getMousePosition = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <main className="z-10 h-[calc(100vh-88px)] bg-white flex justify-center items-center overflow-hidden">
      <CustomCursor inBounds={inBounds} text="zum Projekt" />
      <motion.div
        drag
        dragTransition={{
          bounceStiffness: 1600,
          bounceDamping: 100,
        }}
        dragConstraints={{
          top: -1000,
          left: -1000,
          right: 1000,
          bottom: 1000,
        }}
        className="relative min-w-[4000px] h-[4000px] bg-white bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] bg-[size:40px_40px]"
      >
        <Link to="/projekte/elephant-marketing">
          <motion.div
            whileTap="tap"
            whileHover="hover"
            variants={animation}
            onMouseEnter={() => setInBounds(true)}
            onMouseLeave={() => setInBounds(false)}
            className="absolute top-[50%] left-[50%] w-80 h-60 bg-blue-500 overflow-hidden"
          >
            <img
              src="https://framerusercontent.com/images/MCTGguC9sX4Ila2ixDnYKndPyzM.png?width=3000&height=2250"
              alt=""
            />
          </motion.div>
        </Link>
      </motion.div>
    </main>
  );
}
