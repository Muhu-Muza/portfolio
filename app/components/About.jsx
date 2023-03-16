import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <div className="w-full h-full mx-auto">
            <div className="py-2">
              <h2 className="pb-2 text-[#6b361e] text-sm">
                Hi, Nice to meet you 😊
              </h2>
              <p className="text-gray-600">
                I'm Muhumuza and I enjoy{" "}
                <span className="text-gray-600">
                  <b>creating</b>
                </span>{" "}
                things that live on the internet. My interest in{" "}
                <span className="text-gray-600">
                  <b>web development</b>
                </span>{" "}
                started back in 2019 as I played with some lines of code in one
                of my University classes — turns out hacking together a custom
                reblog button taught me a lot about HTML & CSS!
              </p>
            </div>
            <div className="py-2">
              <p className="text-gray-600">
                I am a{" "}
                <span className="text-gray-600">
                  <b>web developer</b>
                </span>{" "}
                with 2 years of experience, passionate about using{" "}
                <span className="text-gray-600">
                  <b>technology</b>
                </span>{" "}
                to create a positive impact on communities. With a well-rounded
                understanding of the software development life cycle and
                hands-on experience with{" "}
                <span className="text-gray-600">
                  <b>tools</b>
                </span>{" "}
                and{" "}
                <span className="text-gray-600">
                  <b>frameworks</b>
                </span>{" "}
                such as Git, Django, Flask, Javascript, Next.js, React.js
                Databases (Relational and non-relational)
              </p>
            </div>
            <div className="py-2">
              <p className="text-gray-600">
                I'm always eager to learn new{" "}
                <span className="text-gray-600">
                  <b>technologies</b>
                </span>{" "}
                and expand my knowledge, and I thrive in fast-paced, dynamic
                environments where I can apply my{" "}
                <span className="text-gray-600">
                  <b>creativity</b>
                </span>{" "}
                and{" "}
                <span className="text-gray-600">
                  <b>problem-solving</b>
                </span>{" "}
                skills to drive results. I would love to focus on building
                services on the front or back end. My{" "}
                <span className="text-gray-600">
                  <b>passion</b>
                </span>{" "}
                and{" "}
                <span className="text-gray-600">
                  <b>technical</b>
                </span>{" "}
                skills will make valuable contributions to any organization I
                work with.
              </p>
            </div>

          <Link href="https://github.com/Muhu-Muza" target="_blank">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>

          </div>
        </div>

        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl h-[37.7] w-[31.25]"
            src="https://drive.google.com/uc?export=view&id=1EakIvfHYwOqf9goDZZq8orpyF16uxTL6"
            alt="profile image"
            // width="600"
            // height="500"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
