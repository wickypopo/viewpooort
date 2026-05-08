import StaggerText from "../components/StaggerText";
import Button from "../components/Button";
import { motion } from "motion/react";

export default function Herosection() {
  return (
    <section className="overflow-hidden xs:p-8 p-10 md:p-12 lg:p-48 flex justify-end items-center flex-col min-h-[90vh] relative w-full bg-white border-gray-300 border-t-1">
      {/* Video */}
      <div className="absolute top-0">
        <motion.div
          initial={{ y: 1000, borderRadius: "1000px", scale: 0.2, rotate: 180 }}
          animate={{ y: 20, borderRadius: "50px", scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8, delay: 2.5 }}
          className="w-[1200px] h-[59vh] rounded-b-4xl backgroundimage shadow-xl shadow-slate-500/30"
        />
      </div>
      {/* Headlines */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <StaggerText
            textClass="text-8xl font-semibold text-gray-400 tracking-tight instrument-serif-italic"
            containerClass="flex flex-row items-start w-full"
            text="Wir erstellen nicht einfach Websites"
            delay={0}
          />
          <StaggerText
            textClass="text-8xl font-semibold text-gray-950 tracking-tight instrument-serif-italic"
            containerClass="flex flex-row items-start w-full"
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
