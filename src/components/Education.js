import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education } from "@/data/constants";
import EducationCard from "./cards/EducationCard";
import { timelineItemClasses } from "@mui/lab";

const Education = () => {
  const TimelineEducationItem = ({ education, index }) => (
    <TimelineItem>
      <TimelineContent className="md:py-4 md:px-6">
        <EducationCard education={education} />
      </TimelineContent>
      <TimelineSeparator>
        <TimelineDot
          variant="outlined"
          color="secondary"
          className="text-secondary border-secondary"
        />
        {index !== education.length - 1 && (
          <TimelineConnector className="bg-primary py-36" />
        )}
      </TimelineSeparator>
    </TimelineItem>
  );

  return (
    <div id="education" className="relative">
      <div className="flex flex-col items-center md:text-left">
        <h1 className="text-4xl font-semibold mt-20 text-primary md:text-5xl">
          Education
        </h1>
        <p className="text-lg text-secondary text-center max-w-lg mt-6">
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </p>
        <div className="w-4/5 pt-12">
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {education.map((education, index) => (
              <TimelineEducationItem
                key={index}
                education={education}
                index={index}
              />
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Education;
