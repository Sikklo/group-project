"use client";
import { navLink } from "../constants";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="nav-header">

      <nav className="flex justify-between ms-4 items-center w-full">
        <Link href="/">
          <Image
            src="/logo1.png"
            width={70}
            height={70}
            alt="Logo"
            className="rounded-lg md:ml-32"
          ></Image>
        </Link>
        <section>
          <button
            className="md:hidden relative"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Image
              src="/barIcon.svg"
              alt="barIcon"
              width={30}
              height={30}
              className="mr-5 cursor-pointer"
            ></Image>
          </button>
          <ul className="flex gap-5 mr-32 text-xl max-md:hidden">
            {navLink.map((link) => (
              <li
                key={link.name}
                className="hover:text-slate-600 cursor-pointer hover:underline duration-300 "
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <ul
            className={`absolute md:hidden top-20 w-full bg-violet-200 left-0 flex flex-col
              mt-4
        justify-center items-center text-xl gap-5 z-30 duration-300 ${
          isMenuOpen ? "h-56 visible opacity-100" : "h-0 invisible opacity-0"
        }
        `}
          >
            {navLink.map((link) => (
              <li
                key={link.name}
                className="hover:text-slate-600 cursor-pointer"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Nav;
