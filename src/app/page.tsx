import Products from "@/sections/Products";
import "./globals.css";
import About from "@/sections/About";
import TestRowScroll from "@/sections/TestRowSrcoll";
import BackGround from "@/sections/BackGround";


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
     <About/>
    </section>

   </div>
    
  );
}
