import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <div className="bg-white dark:bg-backgroundPrimary">
      <Navbar />
      <div className="max-w-8xl mx-auto px-4 flex flex-col items-center">
        <Hero />
        {/* <About /> */}
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </div>
    </div>
  );
}
