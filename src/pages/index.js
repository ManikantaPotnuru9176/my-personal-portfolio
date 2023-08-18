import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </>
  );
}
