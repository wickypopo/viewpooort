import {
  motion,
  useMotionValue,
  animate,
  useSpring,
  useMotionValueEvent,
} from "motion/react";
import { useState, useRef } from "react";
import Button from "./Button";
import useIsMobile from "../utils/useIsMobile";

const initialSlides = [
  {
    src: "https://framerusercontent.com/images/ClAOZsPbLm7Jq6KakmQIdVMCc.png?width=4000&height=3000",
    title: "Your Music",
    description: "Lorem Ipsum dolor site amet.",
    "button-title": "zum Projekt",
    alt: "",
    link: "",
    id: "1",
  },
  {
    src: "https://framerusercontent.com/images/m9gq1zxdhr4gqkXf9NvghyBrWI.png?width=4000&height=3000",
    title: "Liventa",
    description: "Lorem Ipsum dolor site amet.",
    "button-title": "zum Projekt",
    alt: "",
    link: "",
    id: "2",
  },
  {
    src: "https://framerusercontent.com/images/fxn3p4sacEhfgwjtFvMRD3IYTU.png?width=4000&height=3000",
    title: "Heimatwurzeln",
    description: "Lorem Ipsum dolor site amet.",
    "button-title": "zum Projekt",
    alt: "",
    link: "",
    id: "3",
  },
  {
    src: "https://framerusercontent.com/images/MCTGguC9sX4Ila2ixDnYKndPyzM.png?width=3000&height=2250",
    title: "Ergebnisagentur",
    description: "Lorem Ipsum dolor site amet.",
    "button-title": "zum Projekt",
    alt: "",
    link: "",
    id: "4",
  },
];

export default function Slider() {
  const isMobile = useIsMobile();
  const slideWidth = isMobile ? 400 : 600;
  const gap = 8;
  const slideDistance = slideWidth + gap;
  const threshold = 120;

  const x = useMotionValue(-slideDistance);
  const distortion = useMotionValue(0);
  const displacementRef = useRef(null);

  const smoothDistortion = useSpring(distortion, {
    stiffness: 120,
    damping: 2,
  });

  useMotionValueEvent(smoothDistortion, "change", (latest) => {
    displacementRef.current?.setAttribute("scale", latest);
  });

  const [slides, setSlides] = useState(initialSlides);

  const displaySlides = [slides[slides.length - 1], ...slides, slides[0]];

  function moveFirstToEnd() {
    setSlides((prev) => {
      const copy = [...prev];
      const first = copy.shift();
      return [...copy, first];
    });
  }

  function moveLastToStart() {
    setSlides((prev) => {
      const copy = [...prev];
      const last = copy.pop();
      return [last, ...copy];
    });
  }

  function handleDragEnd() {
    const currentX = x.get();

    if (currentX < -slideDistance - threshold) {
      animate(x, -slideDistance * 2, {
        type: "spring",
        stiffness: 700,
        damping: 50,
      }).then(() => {
        moveFirstToEnd();
        x.set(-slideDistance);
      });

      return;
    }

    if (currentX > -slideDistance + threshold) {
      animate(x, 0, {
        type: "spring",
        stiffness: 700,
        damping: 50,
      }).then(() => {
        moveLastToStart();
        x.set(-slideDistance);
      });

      return;
    }

    animate(x, -slideDistance, {
      type: "spring",
      stiffness: 700,
      damping: 50,
    });
  }

  return (
    <div className="h-180 cursor-grab ">
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="wave" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.004 0.012"
              numOctaves="2"
              result="noise"
            />

            <feGaussianBlur in="noise" stdDeviation="6" result="softNoise" />

            <feDisplacementMap
              ref={displacementRef}
              in="SourceGraphic"
              in2="softNoise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <motion.div
        drag="x"
        style={{ x }}
        onDrag={() => {
          const speed = Math.abs(x.getVelocity());
          const scale = Math.min(speed / 100, 24);
          distortion.set(scale);
        }}
        onDragEnd={() => {
          distortion.set(0);
          handleDragEnd();
        }}
        className="flex gap-2 h-full"
      >
        {displaySlides.map((slide, index) => (
          <div
            key={`${slide.id}-${index}`}
            className="min-w-[400px] lg:min-w-[600px] h-full relative"
          >
            <img
              style={{ filter: "url(#wave)" }}
              src={slide.src}
              alt={slide.alt}
              draggable="false"
              className="w-full h-4/5 bg-white object-cover shadow-xl"
            />

            <div className="pt-4 flex flex-col items-start gap-2">
              <p className="text-slate-950  text-4xl font-regular">
                {slide.title}
              </p>

              <p className="text-slate-700 font-light">{slide.description}</p>

              {isMobile ? (
                <Button text={slide["button-title"]} variant="secondary-np" />
              ) : (
                <Button text={slide["button-title"]} variant="secondary-np" />
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
