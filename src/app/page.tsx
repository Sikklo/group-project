import Products from "@/sections/Products";
import "./globals.css";
import About from "@/sections/About";
import TestRowScroll from "@/sections/TestRowScroll";
import BackGround from "@/sections/BackGround";
import HorizontalScroll from "@/sections/HorizontalScroll";


export default function Home() {
  return (
   <div>
    <section className="overflow-hidden">
      <BackGround/>
    </section>
    <section>
      <Products/>
    </section>
    <section>
      <TestRowScroll/>
    </section>
    <section>
      <HorizontalScroll/>
    </section>
    <section>
     <About/>
    </section>

   </div>
    
  );
}
