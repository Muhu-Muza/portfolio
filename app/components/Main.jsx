import React from "react";
import Link from "next/link"
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-600">
            &lt; Hi there! I'm <span className="text-[#5651e5]">Muhumuza </span> /&gt;
          </h1>
          <h1 className="py-2 text-gray-500">A Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a full-stack web developer who specializes in building
            exceptional digital experiences and bringing server-side solutions
            to life. Coding is my superpower, and I bring ideas to life with
            code.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <Link href="https://www.linkedin.com/in/muhumuza-ivan" target="_blank"> <FaLinkedinIn /> </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <Link href="https://github.com/Muhu-Muza" target="_blank"> <FaGithub /> </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <a href="mailto:schumannivan@gmail.com" target="_blank"><FaEnvelope /></a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <Link href="https://www.facebook.com/ivan.xaxes.muhumuza" target="_blank"><FaFacebook /></Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
