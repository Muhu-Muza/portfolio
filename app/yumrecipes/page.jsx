import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

const yumrecipes = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          style={{ objectFit: "cover" }}
          src="https://drive.google.com/uc?export=view&id=1685w1ltF8-ZE2vaUrG0S2UEZX6f7FwMl"
          alt="/"
          fill
        />
        <div className="absolute mb-3 ml-3 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Yum Recipes API</h2>
          <h3>Flask Rest / Python / Swagger</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Yum Recipes API is a Flask Rest API for the Yum-Recipes that handles
            User authentication, Creating, Reading, Updating and Deleting of
            Categories, Creating, Reading, Updating and Deleting of recipes.
          </p>
          {/* <button className="px-8 py-2 mt-4 mr-8">Demo</button> */}
          <Link href="https://github.com/Muhu-Muza/FLASK-API" target="_blank">
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Flask Rest
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Swagger
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

export default yumrecipes;
