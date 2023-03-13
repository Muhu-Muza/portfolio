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
            backgroundImg="/../public/assets/projects/FanyaJobs.png"
            projectUrl="/fanyajobs"
            framework="Django"
          />
          <ProjectItem
            title="Keije Safaris"
            backgroundImg="/../public/assets/projects/keije.png"
            projectUrl="/keijesafaris"
            framework="Flask"
          />
          <ProjectItem
            title="Yum Recipes API"
            backgroundImg="/../public/assets/projects/yum.png"
            projectUrl="/yumrecipes"
            framework="Flask Rest API"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
