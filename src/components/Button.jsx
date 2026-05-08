import { motion } from "motion/react";
//
export default function Button({ variant = "primary", text, ...props }) {
  const variants = {
    primary: "bg-zinc-900 text-white px-4 py-2 tracking-tight cursor-pointer",
    secondary:
      "text-zinc-900 px-4 py-2 underline decoration-1 underline-offset-2 tracking-tight cursor-pointer",
    "secondary-white":
      "text-zinc-50 px-4 py-2 underline decoration-1 underline-offset-2 tracking-tight cursor-pointer",
    "secondary-white-np":
      "text-zinc-50  underline decoration-1 underline-offset-2 tracking-tight cursor-pointer",
  };
  return (
    <motion.button className={`${variants[variant]}`} {...props}>
      {text}
    </motion.button>
  );
}
