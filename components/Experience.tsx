import React from "react";
import { Timeline } from "./ui/timeline";
import { experienceData } from "@/data/expdata";
const Experience = () => {
  return (
    <div className="w-full">
      <Timeline data={experienceData} />
    </div>
  );     
};

export default Experience;
