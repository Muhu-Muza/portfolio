import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="FanyaJobs"
            backgroundImg="https://drive.google.com/uc?export=view&id=1i2-ljm4E0GJd-1UdSdoUFd2jTzpwV-q1"
            projectUrl="/fanyajobs"
            framework="Django"
          />
          <ProjectItem
            title="Keije Safaris"
            backgroundImg="https://drive.google.com/uc?export=view&id=1G0iofCPIEfONuDKPmyif6x7FOIDeZS0N"
            projectUrl="/keijesafaris"
            framework="Flask"
          />
          <ProjectItem
            title="Yum Recipes API"
            backgroundImg="https://drive.google.com/uc?export=view&id=1685w1ltF8-ZE2vaUrG0S2UEZX6f7FwMl"
            projectUrl="/yumrecipes"
            framework="Flask Rest API"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
