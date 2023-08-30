import React from "react";

const ExperienceCard = ({ experience }) => {
  const { role, company, date, desc, skills } = experience;

  return (
    <div className="w-650 rounded-lg shadow-md p-4 md:p-8 gap-12 transition duration-300 ease-in-out md:transform md:hover:shadow-xl md:hover:-translate-y-5 border border-[#306ee8]">
      <div className="flex flex-col">
        <div className="text-18 font-semibold text-[#ffffff99]">{role}</div>
        <div className="text-14 font-medium text-[#AEB3C099]">{company}</div>
        <div className="text-12 font-normal text-[#AEB3C080]">{date}</div>
      </div>
      <div className="w-full">
        {desc && (
          <div className="text-15 font-normal text-[#ffffff99] mt-4">
            {desc}
          </div>
        )}
        {skills && skills.length > 0 && (
          <div className="mt-4">
            <b className="text-[#ffffff99]">Skills:</b>
            <ul className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="text-15 font-normal text-[#ffffff99]"
                >
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
