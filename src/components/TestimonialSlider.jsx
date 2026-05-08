import { motion, useMotionValue, animate } from "motion/react";
import { useState } from "react";
import Button from "./Button";

const initialSlides = [
  {
    src: "https://framerusercontent.com/images/ClAOZsPbLm7Jq6KakmQIdVMCc.png?width=4000&height=3000",
    alt: "",
    title: "Your Music",
    customer: "Lena Hoffmann",
    description:
      "Die Zusammenarbeit war extrem angenehm. Unsere neue Website wirkt deutlich hochwertiger und bringt unsere Marke viel klarer auf den Punkt.",
    id: "1",
  },
  {
    src: "https://framerusercontent.com/images/m9gq1zxdhr4gqkXf9NvghyBrWI.png?width=4000&height=3000",
    alt: "",
    title: "Liventa",
    customer: "Jonas Keller",
    description:
      "Vom ersten Konzept bis zum finalen Design lief alles strukturiert und professionell. Besonders stark war das Gespür für Ästhetik und Nutzerführung.",
    id: "2",
  },
  {
    src: "https://framerusercontent.com/images/fxn3p4sacEhfgwjtFvMRD3IYTU.png?width=4000&height=3000",
    alt: "",
    title: "Heimatwurzeln",
    customer: "Mara Stein",
    description:
      "Unsere Idee wurde nicht einfach nur umgesetzt, sondern wirklich weitergedacht. Das Ergebnis fühlt sich modern, authentisch und sehr passend für unsere Zielgruppe an.",
    id: "3",
  },
  {
    src: "https://framerusercontent.com/images/MCTGguC9sX4Ila2ixDnYKndPyzM.png?width=3000&height=2250",
    alt: "",
    title: "Ergebnisagentur",
    customer: "Tobias Brandt",
    description:
      "Die neue Website macht sofort einen professionellen Eindruck und unterstützt unser Angebot viel besser als vorher. Klare Empfehlung.",
    id: "4",
  },
];

export default function TestimonialSlider() {
  const x = useMotionValue(0);
  const [slides, setSlides] = useState(initialSlides);

  const slideWidth = 1200;
  const gap = 8;
  const slideDistance = slideWidth + gap;
  const threshold = 120;

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

    // Nach links gezogen
    if (currentX < -threshold) {
      animate(x, -slideDistance, {
        type: "spring",
        stiffness: 700,
        damping: 50,
      }).then(() => {
        moveFirstToEnd();
        x.set(0);
      });

      return;
    }

    // Nach rechts gezogen
    if (currentX > threshold) {
      animate(x, slideDistance, {
        type: "spring",
        stiffness: 700,
        damping: 50,
      }).then(() => {
        moveLastToStart();
        x.set(0);
      });

      return;
    }

    // Nicht weit genug gezogen
    animate(x, 0, {
      type: "spring",
      stiffness: 700,
      damping: 50,
    });
  }

  return (
    <div className="overflow-hidden h-180 cursor-grab">
      <motion.div
        drag="x"
        style={{ x }}
        onDragEnd={handleDragEnd}
        className="flex gap-2 h-full"
      >
        {slides.map((slide) => (
          <div key={slide.id} className="flex min-w-full h-full relative">
            <img
              src={slide.src}
              alt={slide.alt}
              draggable="false"
              className="w-1/2 h-full bg-white object-cover"
            />
            <div className="w-1/2 pl-12 flex flex-col justify-center items-start gap-2">
              {" "}
              <p className="text-sm font-light text-white bg-slate-800 p-1">
                {slide.title}
              </p>
              <p className="instrument-serif-regular text-5xl">
                {slide.description}
              </p>
              <p className="font-light">- {slide.customer}</p>
              <Button
                text={slide["button-title"]}
                variant="secondary-white-np"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
