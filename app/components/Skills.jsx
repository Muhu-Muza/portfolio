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
            imagesrc={"https://drive.google.com/uc?export=view&id=1-H5mq2tgyz0gooSfNw_q9APxxaAwrs68"}
            skill={"HTML"}
          />
          <Myskills
            imagesrc={"https://drive.google.com/uc?export=view&id=1rrXQJfinIScJsCdt3gbEtElj50rPwNMq"}
            skill={"CSS"}
          />
          <Myskills
            imagesrc={"https://drive.google.com/uc?export=view&id=181ALR5kFoQWxq8VrK4nYx19iibVSeSWB"}
            skill={"JavaScript"}
          />
          <Myskills
            imagesrc={"https://drive.google.com/uc?export=view&id=1ztOaXp7Fi0RrBq23OxV-Axn4m8hAwAgZ"}
            skill={"React JS"}
          />
          <Myskills
            imagesrc={"https://drive.google.com/uc?export=view&id=1iJOqk-93AaMEFJmFMTxICbDlXhfIBvGM"}
            skill={"NEXT JS"}
          />
          <Myskills
            imagesrc={"https://drive.google.com/uc?export=view&id=1kWtWe5ja_b7u3ynkPsJroYJzobcsoLJg"}
            skill={"Tailwind"}
          />
          <Myskills
            imagesrc={"https://drive.google.com/uc?export=view&id=1YHRC_E5i2SEHZQvUUQVKkqABcYfSe6pF"}
            skill={"Git"}
          />
          <Myskills
            imagesrc={"https://drive.google.com/uc?export=view&id=1GhnmjwO0iU8KNr3uTHiJviFDNz7d-Ja6"}
            skill={"MySQL"}
          />
          <Myskills
            imagesrc={"https://drive.google.com/uc?export=view&id=1XblFWlIuGEQZyi8EQ3dBZELDGtWeNroW"}
            skill={"postgreSQL"}
          />
          <Myskills
            imagesrc={"https://drive.google.com/uc?export=view&id=1wNe7lfT-MKowmx7EK8wUX3Bcj-HB0G3t"}
            skill={"Python"}
          />
          <Myskills
            imagesrc={"https://drive.google.com/uc?export=view&id=1e45oZlxe8trhQllXKxRGJmzCmvsN3oVE"}
            skill={"Django"}
          />
          <Myskills
            imagesrc={"https://drive.google.com/uc?export=view&id=10G56tR9FJnM0qSNXcOULUETZAGZRj5mE"}
            skill={"Flask"}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
