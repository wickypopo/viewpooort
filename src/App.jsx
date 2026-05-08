import { useState } from "react";
import Button from "./components/Button";
import Slider from "./components/Slider";
import { motion } from "motion/react";
import Herosection from "./Sections/HeroSection";
import TextSwitch from "./components/TextSwitch";
import DefaultSection from "./Sections/DefaultSection";
import TestimonialSlider from "./components/TestimonialSlider";
function App() {
  return (
    <>
      {" "}
      <main className="flex items-center flex-col">
        <header className="flex justify-center p-6  bg-white z-10">
          <div className="flex justify-between items-center w-[1200px]">
            {" "}
            <h1 className="instrument-serif-regular text-4xl">viewpooort</h1>
            <nav>
              <ul className="flex gap-4 text-sm">
                <li>Projekte</li>
                <li>Leistungen</li>
                <li>Kontakt</li>
              </ul>
            </nav>
          </div>
        </header>
        <Herosection />

        <section className="xs:p-8 p-10 md:p-12 lg:p-48 flex justify-center items-center w-[95vw] overflow-hidden bg-gray-800 rounded-4xl">
          <div className="flex flex-col w-[1200px] gap-4 text-white">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl  tracking-tight">Unsere Projekte</h2>
              <Button
                variant="secondary-white"
                text="Projekte ansehen"
              ></Button>
            </div>
            <div>
              <Slider />
            </div>
          </div>
        </section>
        <section className="xs:p-8 p-10 md:p-12 lg:p-48 flex justify-center items-center w-full overflow-hidden bg-white">
          <div className="flex flex-col w-[1200px] gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl  tracking-tight">
                Different by Default.
              </h2>
              <Button variant="secondary" text="Projekte ansehen"></Button>
            </div>
            <div className="flex items-end">
              <div>
                {" "}
                <p className="text-2xl ">
                  Durchschnitt überlassen wir anderen.
                </p>
                <p className="text-2xl text-gray-500 ">
                  Genau deshalb gestalten wir digitale Erlebnisse, die sich
                  nicht an Standards festklammern, sondern neue Wege gehen. Was
                  wir entwickeln, trägt deine Handschrift. Nicht die eines
                  Baukastens.
                </p>
              </div>
              <img
                src="https://framerusercontent.com/images/ClAOZsPbLm7Jq6KakmQIdVMCc.png?width=4000&height=3000"
                className="size-[60%] object-cover"
              ></img>
            </div>
          </div>
        </section>
        <section className="xs:p-8 p-10 md:p-12 lg:p-48 flex justify-center items-center  w-[95vw] overflow-hidden bg-gray-800 rounded-4xl">
          <div className="flex flex-col w-[1200px] gap-4 text-white">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl  tracking-tight">Unsere Leistungen</h2>
            </div>
            <div className="flex items-end gap-12">
              <img
                src="https://framerusercontent.com/images/ClAOZsPbLm7Jq6KakmQIdVMCc.png?width=4000&height=3000"
                className="size-[60%] object-cover"
              ></img>
              <div className="flex flex-col gap-4 w-full">
                <TextSwitch text="Branding" />
                <TextSwitch text="Webdesign" />
                <TextSwitch text="Marketing" />
                <TextSwitch text="Webdesign" />
              </div>
            </div>
          </div>
        </section>
        <section className="xs:p-8 p-10 md:p-12 lg:p-48 flex justify-center items-center  w-full overflow-hidden bg-white">
          <div className="flex flex-col w-[1200px] gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl  tracking-tight">Referenzen</h2>
              <Button variant="secondary" text="Projekte ansehen"></Button>
            </div>
            <div className="flex items-end">
              <TestimonialSlider />
            </div>
          </div>
        </section>
        <section className="xs:p-8 p-10 md:p-12 lg:p-48 flex justify-center items-start w-[95vw] bg-gray-800 rounded-4xl">
          <div className="block flex flex-col w-[1200px] min-h-[300vh] gap-4 pt-64">
            <span className=" text-8xl font-semibold tracking-tight instrument-serif-italic text-white sticky top-[30vh] text-center">
              Bereit, deine Marke auf das
              <br />
              nächste Level zu heben?
            </span>
          </div>
        </section>
        <section className="xs:p-8 p-10 md:p-12 lg:p-48 flex justify-center items-center  w-full overflow-hidden bg-white">
          <div className="flex flex-col w-[1200px] gap-4">
            <div className="flex justify-center items-center">
              <h2 className="text-9xl  tracking-tight tracking-tight instrument-serif-italic">
                Let's Chat
              </h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default App;
