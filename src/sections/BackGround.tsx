'use client'
import React from 'react'
import { useEffect,useRef } from 'react';
import gsap from 'gsap';
const BackGround = () => {
  const titleRef = useRef();
  useEffect(()=>{
 gsap.fromTo(
   titleRef.current,
   {
     xPercent: 500,
     scale: 0,
   },
   {
     xPercent: 0,
     duration: 2,
     scale: 1,
   }
 );
  },[])
  return (
    <div
      className="group h-[70dvh] group mt-10 flex justify-center items-center text-center w-full text-[150px]
         max-md:text-[90px] font-mono overflow-hidden relative"
      ref={titleRef}
    >
      <div
        className="bg-[url(/woman.jpg)] bg-fixed  bg-center w-full h-full bg-no-repeat bg-cover bg-scroll filter 
        grayscale-[0.2] hover:grayscale-[0] contrast-50 group-hover:contrast-125  duration-300 ease-in-out"
      ></div>
      <h2 className="absolute filter select-none group-hover:text-white duration-300   backdrop-blur-[2px] rounded-lg w-full group-hover:backdrop-saturate-200 ">
        <span className="text-violet-200 group-hover:text-purple-500">
          Crystal
        </span>{" "}
        Aura
      </h2>
    </div>
  );
}

export default BackGround
