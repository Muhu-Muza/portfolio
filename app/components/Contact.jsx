"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFacebook } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { name, number, email, subject, message };
    const response = await fetch("https://formspree.io/f/xzbqgvyg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setStatus("SUCCESS");
      setName("");
      setNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      setStatus("ERROR");
    }
  };


  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/../public/assets/contact.jpg"
                  width="500"
                  height="500"
                />
              </div>

              <div>              
                <p className="pt-3 text-gray-600">Full Stack Developer</p>
                <p className="py-4 text-gray-600">
                  I am available for freelance, full-time or part-time
                  positions. Contact me and Let's build something together.
                </p>          
              </div>

              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
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

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
          
            <div className="p-4">

              <form onSubmit={handleSubmit} action="https://formspree.io/f/xzbqgvyg" method="POST">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="name">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="number">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="phone number" id="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="email">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email address" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="subject">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text" id="subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="message">Message</label>
                  <textarea className="border-2 rounded-lg p-3 border-gray-300" rows="10" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                </div>
                
                {status === "SUCCESS" ? (
                  <p className="w-full p-3 text-black bg-green-400 rounded">Thanks for your message!, We shall reply you soon.</p>
                    ) : (

                  <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
                  )}
              </form>

            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
            <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                    <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
                </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
