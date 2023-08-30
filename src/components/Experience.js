import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "./cards/ExperienceCard";
import { experiences } from "@/data/constants";
import { timelineItemClasses } from "@mui/lab";

const Experience = () => {
  const TimelineExperienceItem = ({ experience, index }) => (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot variant="outlined" color="secondary" />
        {index !== experiences.length && (
          <TimelineConnector
            sx={{ backgroundColor: "#854ce6", height: "300px" }}
          />
        )}
      </TimelineSeparator>
      <TimelineContent className="md:py-4 md:px-6">
        <ExperienceCard experience={experience} />
      </TimelineContent>
    </TimelineItem>
  );

  return (
    <div
      id="experience"
      className="relative flex justify-center items-center flex-col w-full max-w-1100 gap-12"
    >
      <h1 className="text-4xl font-semibold mt-20 text-primary md:text-5xl">
        Experience
      </h1>
      <p className="text-lg text-secondary text-center max-w-lg">
        My work experience as a software engineer and working on different
        companies and projects.
      </p>
      <div className="md:w-3/5">
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
          className="p-2 md:px-16 md:py-6"
        >
          {experiences.map((experience, index) => (
            <TimelineExperienceItem
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
