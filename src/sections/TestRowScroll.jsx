"use client"
import React, { useRef,useEffect } from 'react'
import { ProductInfo } from '@/constants'
import Image from 'next/image'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const TestRowScroll = () => {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);
 
 useEffect(() => {
   let sectionWidth = sectionRef.current.offsetWidth;
   let scrollToEnd = sectionWidth - window.innerWidth;
 gsap.fromTo(
   sectionRef.current,
   {
     x: 0,
   },
   {
     x: -scrollToEnd,
     duration: 1,
     ease: "none",
     scrollTrigger: {
       trigger: triggerRef.current,
       start: "top 20%",
       end: "30% top",
       scrub: true,
      
     },
   }
 );
  return ()=>{
    ScrollTrigger.getAll().pop();
  }
 }, []);
  return (
    <section className="overflow-x-hidden h-[100dvh]">
      <div ref={triggerRef} className="h-full">
        <div
          ref={sectionRef}
          className="flex flex-row w-[300dvh] items-center gap-5 h-full max-md:w-[200dvh]"
        >
          {ProductInfo.map((item) => (
            <div className="text-center" key={item.id}>
              <Image
                src={item.pic}
                width={1000}
                height={1000}
                alt="pic"
                className="w-full h-auto"
              ></Image>
              <p className="font-mono font-bold pt-5">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestRowScroll
