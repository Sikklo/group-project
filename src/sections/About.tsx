"use client";
import React from "react";
import { C_About } from "@/constants";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
const About = () => {
  const aboutTitle = useRef(null);
  useEffect(() => {
    if (aboutTitle.current) {
      gsap.fromTo(
        aboutTitle.current,
        {
          y: -20,
        },
        {
          y: 0,
          repeat: -1,
          yoyo: true,
          ease: "elastic.inOut",
          duration: 2,
        }
      );
    }
  }, []);
  return (
    <section id="about">
      {C_About.map((about) => (
        <div
          key={about.title}
          className="h-[50dvh] flex justify-center mt-[5rem] p-5 mb-[3rem] items-center"
        >
          <div className="text-center">
            <h2
              className="text-[4rem] font-bold mb-[4rem] max-md:text-[2.3rem]"
              ref={aboutTitle}
            >
              {about.title}
            </h2>
            {/* <p className="max-w-4xl">{about.subtitle}</p> */}
            <p className="bg-cyan-500 shadow-lg shadow-cyan-500/50 p-5 rounded-full">
              Lorem ipsum dolor sit ametconsectetur adipisicing elit. Asperiores
              iure tempora eos natus distinctio esse voluptas, ullam quo,
              incidunt iste aut deserunt autem accusamus consectetur porro
              eligendi itaque officiis sit.
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
export default About;
