"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter()

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    if (
      router.asPath === '/yumrecipes' ||
      router.asPath === '/fanyajobs' ||
      router.asPath === '/keijesafaris'
      ) {
        setNavBg("transparent")
        setLinkColor("#ecf0f3")
      } else {
        setNavBg("#ecf0f3")
        setLinkColor("#1f2937")
      }
  },[router])

  const handleNav = () => {
    setNav(!nav);
  };

  const setNavOff = () => {
    setNav(false);
  };

  return (
    <div
    style={{backgroundColor: `${navBg}`}}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/" className="mt-4">
          <Image
            src="https://drive.google.com/uc?export=view&id=1ebm2tEGBzS9gC4H5brrcYKfIyWVrRPnq"
            alt="/"
            height={100}
            width={180}
          />
        </Link>

        <div>
          <ul style={{color: `${linkColor}`}} className="hidden md:flex">
            <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={150}
                >
                  <li className="ml-10 text-gray-500 text-sm uppercase hover:text-[#6b1912] transition duration-600">Home</li>
            </ScrollLink>
            {/* <Link href="/">
              <li className="ml-10 text-gray-500 text-sm uppercase hover:text-[#6b1912] transition duration-600">Home</li>
            </Link> */}

            <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={150}
                >
                  <li className="ml-10 text-gray-500 text-sm uppercase hover:text-[#6b1912] transition duration-600">About</li>
            </ScrollLink>
            {/* <Link href="/#about">
              <li className="ml-10 text-gray-500 text-sm uppercase hover:text-[#6b1912] transition duration-600">About</li>
            </Link> */}

            <ScrollLink
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={150}
                >
                  <li className="ml-10 text-gray-500 text-sm uppercase hover:text-[#6b1912] transition duration-600">Skills</li>
            </ScrollLink>

            {/* <Link href="/#skills">
              <li className="ml-10 text-gray-500 text-sm uppercase hover:text-[#6b1912] transition duration-600">Skills</li>
            </Link> */}

            <ScrollLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={150}
                >
                  <li className="ml-10 text-gray-500 text-sm uppercase hover:text-[#6b1912] transition duration-600">
                Projects
              </li>
            </ScrollLink>
            
            {/* <Link href="/#projects">
              <li className="ml-10 text-gray-500 text-sm uppercase hover:text-[#6b1912] transition duration-600">
                Projects
              </li>
            </Link> */}
            
            <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={150}
                >
                  <li className="ml-10 text-gray-500 text-sm uppercase hover:text-[#6b1912] transition duration-600">
                Contact
              </li>
            </ScrollLink>

            {/* <Link href="/#contact">
              <li className="ml-10 text-gray-500 text-sm uppercase hover:text-[#6b1912] transition duration-600">
                Contact
              </li>
            </Link> */}
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  className="h-[1.5] w-[2.5]"
                  src="/../public/assets/navLogo.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <ScrollLink to="home" spy={true} smooth={false} offset={-20}>
                <li onClick={setNavOff} className="py-3 text-sm">
                  Home
                </li>
              </ScrollLink>
              <ScrollLink to="about" spy={true} smooth={false} offset={-20}>
                <li onClick={setNavOff} className="py-3 text-sm">
                  About
                </li>
              </ScrollLink>
              <ScrollLink to="skills" spy={true} smooth={false} offset={-100}>
                <li onClick={setNavOff} className="py-3 text-sm">
                  Skills
                </li>
              </ScrollLink>
              <ScrollLink to="projects" spy={true} smooth={false} offset={-25}>
                <li onClick={setNavOff} className="py-3 text-sm">
                  Projects
                </li>
              </ScrollLink>
              <ScrollLink to="contact" spy={true} smooth={false} offset={-20}>
                <li onClick={setNavOff} className="py-3 text-sm">
                  Contact
                </li>
              </ScrollLink>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
