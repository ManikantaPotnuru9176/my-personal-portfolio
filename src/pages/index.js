import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import ProjectDetails from "@/components/ProjectDetails ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <div className="bg-white dark:bg-backgroundPrimary scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
      <Navbar />
      <div className="max-w-8xl mx-auto flex flex-col items-center">
        <Hero />
        <Skills />
        <Experience />
        <Projects openModal={openModal} setOpenModal={setOpenModal} />{" "}
        <Education />
        <Contact />
        <Footer />
        {openModal.state && (
          <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
        )}
      </div>
    </div>
  );
}
