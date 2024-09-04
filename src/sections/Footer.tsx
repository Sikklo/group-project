import React from "react";
import { C_Footer, Media_icon } from "@/constants";
import Image from "next/image";
const Footer = () => {
  return (
    <section
      id="contact"
      className="h-[30dvh] flex  justify-center items-center gap-[10rem] bg-gradient-to-r from-transparent to-violet-500
    max-md:flex-col max-md:gap-0 max-md:h-[50dvh] max-md:p-5
    "
    >
      <div>
        <Image
          src="/logo1.png"
          width={200}
          height={200}
          alt="logo"
          className="rounded-xl"
        ></Image>
      </div>
      <div className="flex  gap-5 items-center justify-center">
        {C_Footer.map((item) => (
          <div key={item.title}>
            <h2 className="font-bold text-2xl">{item.title}</h2>
            <p>連絡電話：{item.phone}</p>
            <p>電子郵件：{item.Email}</p>
          </div>
        ))}
        <div className="flex gap-5">
          {Media_icon.map((icon) => (
            <div key={icon.alt}>
              <Image
                src={icon.src}
                alt={icon.alt}
                width={30}
                height={30}
                className=" hover:scale-110 duration-300 cursor-pointer"
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
