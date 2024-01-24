// import Image from "next/image";

import Activities from "./components/Activities";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Activities />
      <About />
      <Features />
      <section className="p-1 md:p-4 my-20 max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center">
        <div className="min-w-min">
          <h3 className="text-4xl font-medium mb-8">
            What does our clients say about us
          </h3>
        </div>
        <div>
          <script
            src="https://static.elfsight.com/platform/platform.js"
            data-use-service-core
            defer
          ></script>
          <div
            class="elfsight-app-5d49eb1b-05b2-4957-80dc-6d4463f4346f"
            data-elfsight-app-lazy
          ></div>
        </div>
      </section>
      <Gallery />
      <Contact />
    </main>
  );
}
