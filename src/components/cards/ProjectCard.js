import React from "react";

const ProjectCard = ({ project, setOpenModal }) => {
  return (
    <div
      className="w-80 h-auto dark:bg-[#171721] cursor-pointer rounded-lg shadow-lg overflow-hidden p-4 flex flex-col gap-2 transition-transform duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:brightness-110"
      onClick={() => setOpenModal({ state: true, project: project })}
    >
      <img
        src={project.image}
        alt="Project"
        className="w-full h-44 object-cover bg-white rounded-lg shadow-md"
      />
      <div className="w-full flex items-center flex-wrap gap-2 mt-1">
        {project.tags?.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-normal text-primary bg-[#201b31] bg-opacity-15 py-1 px-2 rounded-lg"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-col gap-0">
        <div className="text-lg font-semibold text-text_secondary overflow-hidden line-clamp-2">
          {project.title}
        </div>
        <div className="text-xs font-normal text-text_secondary_80 mt-1">
          {project.date}
        </div>
        <div className="text-sm font-normal text-text_secondary_99 overflow-hidden line-clamp-3 mt-1">
          {project.description}
        </div>
      </div>
      <div className="flex items-center pl-2 mt-1">
        {project.member?.map((member, index) => (
          <img
            key={index}
            src={member.img}
            alt="Member"
            className="w-10 h-10 rounded-full bg-white shadow-md border-3 border-card ml-[-10px]"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
