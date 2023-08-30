import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React, { useState } from "react";

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <div
        className="w-full h-full fixed top-0 left-0 overflow-y-auto backdrop-blur-sm"
        onClick={() => setOpenModal({ state: false, project: null })}
      >
        <div className="flex items-center justify-center min-h-screen">
          <div
            className="dark:bg-[#171721] max-w-2xl w-full mx-6 my-12 bg-card rounded-lg p-4 md:p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <CloseRounded
              className="absolute top-3 right-6 cursor-pointer"
              onClick={() => setOpenModal({ state: false, project: null })}
            />
            <img
              src={project?.image}
              alt="Project"
              className="w-full rounded-lg object-cover mt-8"
            />
            <div className="text-2xl font-semibold mt-4">{project?.title}</div>
            <div className="text-sm font-normal mt-2">{project.date}</div>
            <div className="flex flex-wrap mt-2">
              {project?.tags.map((tag, index) => (
                <div
                  key={index}
                  className="text-sm font-normal text-primary bg-[#251e3a] bg-opacity-20 rounded-md py-1 px-2 m-1"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="text-base font-normal mt-4">
              <div
                className={`${
                  expanded ? "line-clamp-none" : "line-clamp-2 md:line-clamp-3"
                } transition-all`}
              >
                {project?.description}
              </div>
              <button
                className="text-primary text-sm md:text-md md:hover:underline md:focus:outline-none"
                onClick={toggleExpansion}
              >
                {expanded ? "Read less" : "Read more"}
              </button>
            </div>

            {project.members && (
              <>
                <div className="text-2xl font-semibold mt-6">Members</div>
                <div className="flex flex-col gap-2 mt-3">
                  {project?.members.map((member, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <img
                        src={member.img}
                        alt="Member"
                        className="w-12 h-12 rounded-full object-cover shadow-md"
                      />
                      <div className="text-base font-medium pr-6">
                        {member.name}
                      </div>
                      <a
                        href={member.github}
                        target="new"
                        className="text-primary pr-2"
                      >
                        <GitHub />
                      </a>
                      <a
                        href={member.linkedin}
                        target="new"
                        className="text-primary"
                      >
                        <LinkedIn />
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )}
            <div className="flex justify-end mt-6 md:mt-4 space-x-16 md:space-x-4">
              <a
                href={project?.github}
                target="new"
                className="text-text_primary font-semibold rounded-md px-2 md:px-4 py-2 bg-primary md:hover:bg-primary_hover md:transition-all md:duration-500 ease"
              >
                View Code
              </a>
              <a
                href={project?.webapp}
                target="new"
                className="text-text_primary font-semibold rounded-md px-2 md:px-4 py-2 bg-primary md:hover:bg-primary_hover md:transition-all md:duration-500 ease"
              >
                View Live App
              </a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetails;
