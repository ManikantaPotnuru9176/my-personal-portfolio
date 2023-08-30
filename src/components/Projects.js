import React, { useState } from "react";
import ProjectCard from "./cards/ProjectCard";
import { projects } from "../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  const toggleButtons = [
    { value: "all", label: "All" },
    { value: "web app", label: "WEB APPS" },
    { value: "machine learning", label: "MACHINE LEARNING" },
  ];

  return (
    <div className="dark:bg-backgroundPrimary from-white via-[#8c3bce0a] to-transparent flex flex-col items-center justify-center relative z-1 py-16">
      <div className="w-full max-w-7xl py-10 px-6 md:py-16 md:px-10">
        <div
          id="projects"
          className="flex flex-col items-center text-center lg:text-left"
        >
          <h1 className="text-4xl font-semibold mt-20 text-primary md:text-5xl">
            Projects
          </h1>
          <p className="text-lg text-secondary text-center max-w-lg mt-6">
            I have worked on a wide range of projects. Here are some of my
            projects.
          </p>
          <div className="flex md:items-center gap-2 mt-6">
            {toggleButtons.map((button) => (
              <button
                key={button.value}
                className={`py-2 px-6 rounded-lg font-semibold text-sm ${
                  toggle === button.value
                    ? "bg-primary text-white"
                    : "bg-[#1c1c27] text-primary border border-primary"
                } hover:bg-primary_hover transition-all duration-500 ease-in-out`}
                onClick={() => setToggle(button.value)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-7xl flex flex-wrap justify-center gap-8">
          {toggle === "all"
            ? projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              ))
            : projects
                .filter((item) => item.category === toggle)
                .map((project, index) => (
                  <ProjectCard
                    key={index}
                    project={project}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  />
                ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
