"use client"
import { useEffect,useRef } from "react"
import gsap from "gsap"
import{ScrollTrigger } from "gsap/ScrollTrigger"
import { Horizontal_Section } from "@/constants"
import Image from "next/image"
const HorizontalScroll = () => {
  const trigger = useRef(null);
  const section = useRef(null);
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    let sectionWidth = section.current.offsetWidth;
    let scrollToEnd = sectionWidth - window.innerWidth;
    let tl;
    const horizontal = ()=>{
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger.current,
          start: "top top",
          end:()=>`+=${scrollToEnd}` ,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
        tl.to(section.current,{
          x:-scrollToEnd,
          ease:'none',
        })
    }
    horizontal();
return () => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
};







},[])
  return (
    <section className="overflow-hidden">
      <div ref={trigger}>
        <div
          ref={section}
          className="flex justify-center items-center w-[300vw] h-[100dvh]"
        >
          {Horizontal_Section.map((info) => (
            <div
              key={info.title}
              className={`group h-[100%] flex flex-col items-center justify-center w-[100vw] object-cover`}
            >
              <Image
                src={info.BGImage}
                width={1000}
                height={500}
                alt="pic"
                className="relative w-8/12 rounded-xl filter blur-[1px] hover:blur-none duration-500"
              ></Image>
              <div className="absolute bg-gradient-to-r flex flex-col justify-center items-center from-black duration-500 px-10 py-10 rounded-md  group-hover:backdrop-brightness-50">
                <h2 className="font-bold font-mono text-[9rem] text-green-200 leading-[9rem]">
                  {info.title}
                </h2>
                <p className="max-w-2xl text-white group-hover:max-w-4xl group-hover:text-yellow-300 group-hover:font-bold duration-500 leading-10">
                  {info.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HorizontalScroll
