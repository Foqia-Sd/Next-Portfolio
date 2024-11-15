"use client"

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Header/>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
