import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "./cards/ExperienceCard";
import { experiences } from "../../constants";

const Experience = () => {
  const TimelineItemComponent = ({ experience, index }) => (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot className="border-2 border-secondary border-[#6f2380] bg-backgroundPrimary" />
        {index !== experiences.length - 1 && (
          <TimelineConnector className="bg-[#854CE6] h-72" />
        )}
      </TimelineSeparator>
      <TimelineContent className="py-4 px-6">
        <ExperienceCard experience={experience} />
      </TimelineContent>
    </TimelineItem>
  );

  return (
    <div className="relative flex justify-center items-center flex-col w-full max-w-1100 gap-12">
      <h1 className="text-4xl font-semibold mt-20 text-primary md:text-5xl">
        Experience
      </h1>
      <p className="text-lg text-secondary text-center max-w-lg">
        My work experience as a software engineer and working on different
        companies and projects.
      </p>
      <div className="w-full">
        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItemComponent
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default Experience;
