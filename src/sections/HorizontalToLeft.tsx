"use client"
import { useRef,useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { C_HorizontalToLeft } from "@/constants"

const HorizontalToLeft = () => {
  const trigger = useRef(null);
  const section = useRef(null);
  useEffect(()=>{
    let sectionWidth = section.current.offsetWidth;
    let scrollToEnd = sectionWidth - window.innerWidth;
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(section.current, {
        x: -scrollToEnd,
      });
    const horizon = ()=>{
      gsap.to(section.current,{
        x:0,
        ease:'none',
        scrollTrigger:{
          trigger:trigger.current,
          markers:true,
          scrub:1,
          pin:true,
        }
      })

    };
    horizon();
    return () =>{
       ScrollTrigger.getAll().forEach((t) => t.kill());
    }
  },[])
 
  
 
  return (
    <section className="overflow-hidden">
      <div ref={trigger}>
        <div
          ref={section}
          className="flex justify-center items-center gap-5 w-[300vw] h-[100dvh]"
        >
          {C_HorizontalToLeft.map((info) => (
            <div
              key={info.title}
              className="flex flex-col justify-center items-center gap-5 w-[100vw] bg-gradient-to-l from-violet-200 h-[100%]"
            >
              <h2 className="title">{info.title}</h2>
              <p className="subtitle">{info.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HorizontalToLeft
