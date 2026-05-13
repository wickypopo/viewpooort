import projects from "../../data/projects";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import Button from "../../components/Button";
import { useState, useEffect } from "react";
import useIsMobile from "../../utils/useIsMobile";

export default function Project() {
  const { slug } = useParams();
  const isMobile = useIsMobile();

  const project = projects.find((item) => item.slug === slug);

  console.log(project);
  if (!project) {
    return <NotFound />;
  }

  return (
    <main className="pl-4 pr-4">
      <section className="flex flex-col gap-4 min-h-[70vh] justify-between">
        <img
          src={project.images[0].src}
          alt={project.images[0].alt}
          className="w-full h-140 object-cover"
        />
        <div className="flex flex-col pb-12 gap-4 items-start lg:items-end justify-center">
          <div className="hidden lg:flex flex-row justify-between items-end w-full">
            {" "}
            <h1 className="text-4xl md:text-6xl lg:text-8xl instrument-serif-regular">
              {project.title}
            </h1>
            <Button text="jetzt Projekt Starten" />
          </div>
          <h1 className="lg:hidden text-4xl md:text-6xl lg:text-8xl instrument-serif-regular">
            {project.title}
          </h1>
          <p className="text-sm lg:text-xl">{project.intro}</p>
          <div className="lg:hidden">
            {" "}
            <Button text="jetzt Projekt Starten" />
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <img
          src={project.images[1].src}
          alt={project.images[1].alt}
          className="w-full h-full"
        />
        <div className="flex flex-col gap-2 items-start justify-center mb-12">
          <p className="text-xl">{project.sections[0].text}</p>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <img
          src={project.images[2].src}
          alt={project.images[2].alt}
          className="w-full h-full"
        />
        <div className="flex flex-col gap-2 items-start justify-center mb-12">
          <p className="text-xl mb-4">{project.sections[1].text}</p>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <img
          src={project.images[2].src}
          alt={project.images[2].alt}
          className="w-full h-full"
        />
        <div className="flex flex-col gap-2 items-start justify-center mb-12">
          <p className="text-xl mb-4">{project.sections[1].text}</p>
          <Button text="jetzt Projekt Starten" />
        </div>
      </section>
    </main>
  );
}
