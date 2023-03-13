import React from "react";
import Myskills from "./Myskills";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 my-6">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <Myskills
            imagesrc={"/../public/assets/skills/html.png"}
            skill={"HTML"}
          />
          <Myskills
            imagesrc={"/../public/assets/skills/css.png"}
            skill={"CSS"}
          />
          <Myskills
            imagesrc={"/../public/assets/skills/javascript.png"}
            skill={"JavaScript"}
          />
          <Myskills
            imagesrc={"/../public/assets/skills/react.png"}
            skill={"React JS"}
          />
          <Myskills
            imagesrc={"/../public/assets/skills/nextjs.png"}
            skill={"NEXT JS"}
          />

          <Myskills
            imagesrc={"/../public/assets/skills/tailwind.png"}
            skill={"Tailwind"}
          />

          <Myskills
            imagesrc={"/../public/assets/skills/git.png"}
            skill={"Git"}
          />

          <Myskills
            imagesrc={"/../public/assets/skills/mysql.png"}
            skill={"MySQL"}
          />

          <Myskills
            imagesrc={"/../public/assets/skills/postgres.png"}
            skill={"postgreSQL"}
          />
          <Myskills
            imagesrc={"/../public/assets/skills/python.png"}
            skill={"Python"}
          />
          <Myskills
            imagesrc={"/../public/assets/skills/django.png"}
            skill={"Django"}
          />
          <Myskills
            imagesrc={"/../public/assets/skills/flask.png"}
            skill={"Flask"}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
