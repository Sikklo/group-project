"use client"
import { ReactLenis, useLenis } from "lenis/react";
import { ReactNode } from "react";

function SmoothScroll({ children }: { children: ReactNode }) {
  

  return <ReactLenis root options={{
    lerp:0.1,
    duration:1.5,
  }}>{children}</ReactLenis>;
}
export default SmoothScroll
