import StaggerText from "../components/StaggerText";
import Button from "../components/Button";
import { motion } from "motion/react";
import useIsMobile from "../utils/useIsMobile";

export default function Herosection() {
  const isMobile = useIsMobile();
  return (
    <section className="overflow-hidden xs:p-8 w-[95vw] pb-12 md:p-12 lg:p-48 flex justify-between lg:justify-end items-center flex-col h-[90vh] relative w-full bg-white">
      {/* Video */}
      {isMobile ? (
        <div className="flex min-h-[60vh]">
          <motion.video
            src="https://framerusercontent.com/assets/6xonk83bbntp4ckkfrJBM72Kxo.mp4"
            autoPlay
            muted
            loop
            initial={{
              y: 1000,
              borderRadius: "1000px",
              scale: 0.2,
              rotate: 10,
            }}
            animate={{
              y: [1000, -20, -20, -20],
              borderRadius: ["100px", "100px", "0px", "0px"],
              scale: [0.2, 0.2, 1, 1],
              rotate: [10, 10, 0, 0],
            }}
            transition={{
              ease: "easeInOut",
              duration: 1.2,
              delay: 2.5,
              times: [0, 0.4, 0.7, 1],
            }}
            className="h-[60vh] rounded-b-4xl shadow-xl shadow-slate-500/30 object-cover"
          />
        </div>
      ) : (
        <div className="absolute top-0">
          <motion.video
            src="https://framerusercontent.com/assets/6xonk83bbntp4ckkfrJBM72Kxo.mp4"
            autoPlay
            muted
            loop
            initial={{
              y: 1000,
              borderRadius: "1000px",
              scale: 0.2,
              rotate: 10,
            }}
            animate={{
              y: [1000, 20, 20, 20],
              borderRadius: ["1000px", "1000px", "50px", "50px"],
              scale: [0.2, 0.2, 1, 1],
              rotate: [10, 10, 0, 0],
            }}
            transition={{
              ease: "easeInOut",
              duration: 1.2,
              delay: 2.5,
              times: [0, 0.4, 0.7, 1],
            }}
            className="w-[1320px] h-full rounded-b-4xl shadow-xl shadow-slate-500/30"
          />
        </div>
      )}

      {/* Headlines */}
      <div className="flex flex-col gap-4 lg:gap-8 w-[90vw] lg:w-[1320px]">
        <div className="flex flex-col leading-[1.1] lg:gap-2">
          <StaggerText
            textClass="lg:text-8xl text-5xl font-semibold text-gray-400 tracking-tight instrument-serif-regular"
            containerClass="flex flex-row items-start w-full flex-wrap"
            text="Wir erstellen nicht einfach Websites"
            delay={0}
          />
          <StaggerText
            textClass="lg:text-8xl text-5xl font-semibold text-gray-950 tracking-tight instrument-serif-italic"
            containerClass="flex flex-row items-start w-full flex-wrap"
            text="Wir erstellen Brands."
            delay={0.8}
          />
        </div>
        <div className="flex flex-col w-full gap-8">
          {/* Buttons */}
          <div className="flex gap-2 justify-start">
            <Button
              variant="primary"
              text="Jetzt Projekt starten"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.7, delay: 1.5 }}
            />
            <Button
              variant="secondary"
              text="Unsere Leistungen"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.7, delay: 1.8 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
