import React from "react";
import Typewriter from "typewriter-effect";
import { Bio } from "../../constants";
import HeroBgAnimation from "./HeroBgAnimation";

const Hero = () => {
  const { name, roles, description, resume } = Bio;

  return (
    <div
      id="about"
      className="py-8 md:py-16 lg:py-20 dark:bg-backgroundDark min-h-screen relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row justify-center relative max-w-7xl mx-auto px-4">
        <div className="w-full md:w-1/2 relative z-10 mb-8 md:mb-0 md:text-left">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-textPrimary dark:text-white mb-2 md:mb-4 lg:mb-6">
            Hi, I am <br />
            <span className="text-primary">{name}</span>
          </h1>
          <div className="flex flex-row font-semibold text-lg md:text-xl lg:text-2xl text-textPrimary dark:text-white mb-2 md:mb-4 lg:mb-6">
            I am a&nbsp;
            <span className="text-primary">
              <Typewriter
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <p className="text-sm md:text-base lg:text-lg text-textPrimary dark:text-white mb-4 md:mb-6 lg:mb-8">
            {description}
          </p>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full text-center transition duration-300 transform hover:scale-105 hover:filter hover:brightness-100"
          >
            Check Resume
          </a>
        </div>
        <div className="hidden md:block md:w-1/2 absolute top-0 left-0 z-0 md:relative md:z-10">
          <HeroBgAnimation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
