import React from "react";

const EducationCard = ({ education }) => {
  return (
    <div className="w-full rounded-lg shadow-md p-2 md:p-8 gap-12 transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-5 border border-[#306ee8]">
      <div className="flex flex-col">
        <div className="flex items-center gap-3">
          <div className="h-12 w-[50px] md:w-12 bg-black rounded-lg">
            <img
              src={education.img}
              alt="Education"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-18 font-semibold text-[#ffffff99]">
              {education.school}
            </div>
            <div className="text-14 font-medium text-[#AEB3C099]">
              {education.degree}
            </div>
            <div className="text-12 font-normal text-[#AEB3C080]">
              {education.date}
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="text-15 font-normal text-[#ffffff99] mt-4">
            {education.desc}
          </div>
          <div className="mt-4">
            <b className="text-[#ffffff99]">Grade:</b>
            <div className="text-15 font-normal text-[#ffffff99]">
              {education.grade}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
