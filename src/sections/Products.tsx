"use client"
import React, { useEffect, useRef } from "react";
import { C_Products } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Products = () => {
  const homeImgRef = useRef([]);
  const homeTextRef = useRef([]);
  const titleRef = useRef(null);
  const setImgRef = (element:any) => {
      if (element && !homeImgRef.current.includes(element)) {
        homeImgRef.current.push(element);
      }
    };
  const setTextRef = (element:any) => {
      if (element && !homeTextRef.current.includes(element)) {
        homeTextRef.current.push(element);
      }
    };
  useEffect(() => {
  gsap.fromTo(titleRef.current,{
    xPercent:500,
    scale:0,
  },{
    xPercent:0,
    duration:2,
    scale:1,
  });
  gsap.set(homeImgRef.current,{
    xPercent:-200,
    opacity:0,
  });
  gsap.set(homeTextRef.current, {
    xPercent: 200,
    opacity: 0,
  });
//先拿到我需要的DOM 

  homeImgRef.current.forEach((img)=>{
    gsap.to(img, {
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "bottom center",
        scrub:true,
      },
      xPercent: 0,
      opacity: 1,
      duration: 0.6,
    });
  })

  homeTextRef.current.forEach((text)=>{
      gsap.to(text, {
        scrollTrigger: {
          trigger: text,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
        xPercent: 0,
        opacity: 1,
        duration: 1,
      });
  })

  }, [])
  
  return (
    <section className="overflow-hidden">
      {/* <div
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
      </div> */}
      {C_Products.map((product) => (
        <div
          key={product.name}
          className="h-[80dvh] flex flex-1 justify-evenly items-center
          max-md:flex-col max-md:h-[60dvh] mb-20 max-lg:h-[50dvh] 
          "
        >
          <Image
            src={product.imgUrl}
            alt={product.alt}
            width={600}
            height={600}
            className="customPageImg"
            ref={setImgRef}
          ></Image>
          <div className=" max-w-xl max-md:text-center" ref={setTextRef}>
            <h2 className="text-[3rem] font-bold mb-3 max-md:text-[2.5rem] max-w-2xl text-violet-400">
              <p>
                <span className="text-blue-300">{product.styleWord} </span>
                {product.name}
                <Image
                  src="/gem.svg"
                  width={20}
                  height={20}
                  alt="icon"
                  className="animate-bounce"
                ></Image>
              </p>
            </h2>

            <p className="mb-3 tracking-wider  max-md:text-sm ">
              {product.subtitle}
            </p>
            <button className="customBtn">
              <Link href="/item-guide">Go Check</Link>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;
