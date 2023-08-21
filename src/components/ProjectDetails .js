import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;

  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <div className="w-full h-full fixed top-0 left-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          {/* Scrolling Container */}
          <div className="dark:bg-[#171721] max-w-2xl w-full mx-6 my-12 bg-card rounded-lg p-6 relative">
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
              {project?.description}
            </div>
            {project.member && (
              <>
                <div className="text-2xl font-semibold mt-6">Members</div>
                <div className="flex flex-col gap-2 mt-3">
                  {project?.member.map((member, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img
                        src={member.img}
                        alt="Member"
                        className="w-12 h-12 rounded-full object-cover shadow-md"
                      />
                      <div className="text-base font-medium">{member.name}</div>
                      <a
                        href={member.github}
                        target="new"
                        className="text-primary"
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
            <div className="flex justify-end mt-4 space-x-4">
              <a
                href={project?.github}
                target="new"
                className="text-text_primary font-semibold rounded-md px-4 py-2 bg-primary hover:bg-primary_hover transition-all duration-500 ease"
              >
                View Code
              </a>
              <a
                href={project?.webapp}
                target="new"
                className="text-text_primary font-semibold rounded-md px-4 py-2 bg-primary hover:bg-primary_hover transition-all duration-500 ease"
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
