import React from "react";
import Typewriter from "typewriter-effect";
import { Bio } from "../../constants";
import HeroBgAnimation from "./HeroBgAnimation";

const Hero = () => {
  const { name, roles, description, resume } = Bio;

  return (
    <div
      id="about"
      style={{ background: "var(--card-light)" }}
      className="py-20 md:py-16 lg:py-20"
    >
      <div className="flex justify-center relative max-w-7xl mx-auto px-4 flex-row-reverse md:flex-row">
        <div className="w-full md:w-1/2 mb-8 md:mb-16 md:text-left">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-text_primary mb-4 md:mb-8">
            Hi, I am <br />
            <span className="text-primary">{name}</span>
          </h1>
          <div className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-12">
            I am a{" "}
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
          <p className="text-lg md:text-xl lg:text-2xl text-text_primary md:mb-16">
            {description}
          </p>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="appearance-none text-white font-semibold bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full text-center block transition duration-300 transform hover:scale-105 hover:filter hover:brightness-100"
          >
            Check Resume
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <HeroBgAnimation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
