import { useTheme } from "next-themes";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import { useEffect, useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <div className={`bg-${theme === "dark" ? "gray-900" : "white"}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <div className={`bg-${theme === "dark" ? "gray-900" : "white"}`}>
        <Skills />
        <Experience />
      </div>
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      <div className={`bg-${theme === "dark" ? "gray-900" : "white"}`}>
        <Education />
      </div>
    </div>
  );
}
