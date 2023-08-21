import React from "react";
import { skills } from "../../constants";

const Skills = () => {
  return (
    <div
      className="flex flex-col justify-center relative z-10 items-center"
      id="skills"
    >
      <div className="relative flex justify-between items-center flex-col w-full max-w-1100 gap-12">
        <h1 className="text-4xl font-semibold mt-20 text-primary md:text-5xl">
          Skills
        </h1>
        <p className="text-lg text-secondary text-center max-w-lg">
          Here are some of my skills on which I have been working for the past 2
          years.
        </p>
        <div className="w-full flex flex-wrap mt-4 justify-center gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-full max-w-md bg-card border border-purple-600 shadow-md rounded-lg p-6 md:p-8"
            >
              <h2 className="text-2xl font-semibold text-secondary text-center mb-4">
                {skill.title}
              </h2>
              <div className="flex justify-center flex-wrap gap-3 mb-4">
                {skill.skills.map((item, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex items-center border rounded-lg py-2 px-4 text-primary-80 border-primary-80"
                  >
                    <img src={item.image} alt={item.name} className="w-6 h-6" />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
