import React from "react";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import Image from "next/image";

const keijesafaris = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] lg:h-[40vh] relative">
        <div style={{zIndex : -1}} className="absolute w-full h-[40vh] lg:h-[40vh]">
          <Image 
            src="https://drive.google.com/uc?export=view&id=1G0iofCPIEfONuDKPmyif6x7FOIDeZS0N"
            alt="keije safaris landing page"
            fill
            style= {{objectFit : "cover", backgroundPosition: "0% 0%", backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            />
        </div>
        <div className="absolute mb-3 ml-3 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Keije Safaris</h2>
          <h3>HTML5 / CSS / Flask / Python</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a website I built whilst doing my intership. It is a Model for a Tourism
            Company. 
          </p>
           {/* <button className="px-8 py-2 mt-4 mr-8">Demo</button> */}
          <Link href="https://github.com/Muhu-Muza/keije-safaris" target="_blank">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Flask
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML5
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default keijesafaris;
