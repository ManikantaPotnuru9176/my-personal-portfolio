import React from "react";
import Typewriter from "typewriter-effect";
import { Bio } from "../../constants";
import HeroBgAnimation from "./HeroBgAnimation";
import Resume from "@/pdf/Resume.pdf"

const Hero = () => {
  const { name, roles, description } = Bio;

  return (
    <div id="about" className="flex flex-col md:flex-row min-h-screen relative max-w-8xl mx-auto px-4 pt-20 items-center overflow-hidden">
      <div className="flex flex-col md:flex-row justify-center relative max-w-7xl mx-auto px-4 flex-grow">
        <div className="w-full md:w-1/2 relative z-10 mb-8 md:mb-0 md:text-left flex flex-col justify-center">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-textPrimary dark:text-white mb-2 md:mb-4 lg:mb-6">
            Hi, I am <br />
            <span className="text-primary">{name}</span>
          </h1>
          <div className="flex flex-row font-semibold text-lg md:text-xl lg:text-2xl text-textPrimary dark:text-white mb-2 md:mb-4 lg:mb-6">
            I am a&nbsp;
            <span className="text-primary cursor-pointer">
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
            href={Resume}
            target="_blank"
            rel="noreferrer"
            className="md:py-4 px-4 md:px-8 transition duration-300 inline-block appearance-none w-[95%] max-w-[300px] text-center py-4 text-white bg-gradient-to-br from-[#dc00ff] to-[#854ce6] rounded-lg cursor-pointer font-semibold text-lg transition-transform transition-shadow hover:scale-105 hover:shadow-xl hover:brightness-100 hover:shadow-xl hover:scale-105 focus:outline-none"
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