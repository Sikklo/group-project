"use client";
import { ProductInfo } from "@/constants";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ItemGuide = () => {
const itemRefs = useRef([]);
const titleRef = useRef();
const setRef =(element)=>{
    if(element && !itemRefs.current.includes(element)){
      itemRefs.current.push(element);
    }
}
useEffect(()=>{
  
  gsap.fromTo(titleRef.current,{
    xPercent:200,
    opacity:0,
    scale:0,
  },{
    xPercent:0,
    opacity:1,
    scale:1,
    duration:2,
  })
  itemRefs.current.forEach((element)=>{
    gsap.set(element, {
      xPercent: -200,
      opacity: 0,
    });
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom 80%",
        scrub:true,
      },
      xPercent: 0,
      opacity:1,
      duration:1.5,
    });
  })
  
},[])
  return (
    <section className="flex  flex-wrap gap-5 justify-center mt-10 mb-10 overflow-hidden">
      <div
        className="h-[100dvh] flex justify-center items-center text-center w-full text-[150px] max-md:text-[90px]"
        ref={titleRef}
      >
        <h2>All Item List</h2>
        
      </div>
      {ProductInfo.map((item) => (
        <div className="flex-col-center" key={item.name} ref={setRef}>
          <div className="max-w-[550px]  flex justify-center items-center">
            <Image
              src={item.pic}
              height={1000}
              width={1000}
              alt={item.name}
              className="customItemImg"
            ></Image>
          </div>
          <h2 className="mt-5 font-bold text-2xl text-violet-800">
            品名：{item.name}
          </h2>
          <p className="mt-5 font-bold">價格：{item.price}</p>
          <button className="customBtn">加入購物車</button>
        </div>
      ))}
    </section>
  );
};

export default ItemGuide;
