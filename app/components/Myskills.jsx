import React from "react";

const Myskills = ({imagesrc, skill}) => {
  return (
    <div>

      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <img className="h-[4] w-[4]"
              src={imagesrc}
              alt="/"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>{skill}</h3>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Myskills;
