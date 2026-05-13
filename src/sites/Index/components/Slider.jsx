import Button from "../../../components/Button";
import sliderProjects from "../../../data/sliderProjects";
import { useState } from "react";
import { motion, useTransform } from "motion/react";
import CustomCursor from "../../../utils/customCursor";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useIsMobile from "../../../utils/useIsMobile";

export default function Slider() {
  const [inBounds, setInBounds] = useState(false);
  const [slideData, setSlideData] = useState(sliderProjects);
  const [slide, setSlide] = useState(0);
  const isMobile = useIsMobile();

  console.log(isMobile);

  const totalslidewidth = 100 * slideData.length + "vw";

  const slidewidth = isMobile ? 360 : 500;
  const gap = 16;
  const displaySlides = [
    slideData[slideData.length - 1],
    ...slideData,
    slideData[0],
  ];

  const variants = {
    initial: {},
    slide: { x: slide },
  };

  function getNextSlide() {
    setSlide((num) => num - (slidewidth + gap));

    setSlideData((prev) => {
      const copy = [...prev];
      const first = copy.shift();
      console.log(first);
      return [...copy, first];
    });
  }
  function getPreviousSlide() {
    setSlide((num) => num + (slidewidth + gap));
  }

  return (
    <section className="border-b border-blue-300 w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20">
      {isMobile ? null : <CustomCursor inBounds={inBounds} text="click me" />}
      <div className="flex flex-col gap-4 max-w-[1200px] mx-auto">
        <div className="flex w-full justify-between items-end">
          <h2 className="leading-none tracking-tight">Unsere Projekte</h2>
          <Button variant="secondary" text="Projekte ansehen" />
        </div>
        <div className="flex gap-4 overflow-hidden">
          <motion.div
            variants={variants}
            initial="initial"
            animate="slide"
            className="flex gap-4"
            style={{ width: totalslidewidth }}
            onMouseEnter={() => setInBounds(true)}
            onMouseLeave={() => setInBounds(false)}
          >
            {displaySlides.map((slide) => (
              <div className="w-[360px] md:w-[500px]">
                <img
                  src={slide.image.src}
                  alt={slide.image.alt}
                  className="w-full h-[550px] object-cover pointer-events-none rounded-lg"
                ></img>
                <div className="flex flex-col gap-2 items-start pt-8">
                  <h3 className="instrument-serif-regular text-6xl leading-none tracking-tight">
                    {slide.title}
                  </h3>
                  <p className="text-slate-700 tracking-tight mb-4">
                    {" "}
                    {slide.description}
                  </p>
                  {/* <Button variant="primary" text="Projekt ansehen" /> */}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => getPreviousSlide()}
            className="text-white rounded-full size-10 bg-blue-700 flex justify-center items-center"
          >
            <ArrowLeft size="20" />
          </button>
          <button
            onClick={() => getNextSlide()}
            className="text-white rounded-full size-10 bg-blue-700 flex justify-center items-center"
          >
            <ArrowRight size="20" />
          </button>
        </div>
      </div>
    </section>
  );
}
