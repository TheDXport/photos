"use client";

import Image from "next/image";
import NavBar from "./components/NavBar";
import { useState, useRef } from "react";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Page() {
  const [section, setSection] = useState<string>("portfolio");
  const [fade, setFade] = useState<"in" | "out">("in");
  const [nextSection, setNextSection] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSelect = (newSection: string) => {
    if (newSection === section || fade === "out") return;
    setFade("out");
    setNextSection(newSection);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSection(newSection);
      setFade("in");
      setNextSection(null);
    }, 350);
  };

  let content = null;
  if (section === "portfolio") {
    content = <Portfolio />;
  } else if (section === "about") {
    content = <About />;
  } else if (section === "contact") {
    content = <Contact />;
  }

  return (
    <div className="relative h-full items-center justify-items-center min-h-screen pb-20 ">
      <NavBar onSelect={handleSelect} />
      <div
        className={`transition-opacity duration-350 ${fade === "in" ? "opacity-100" : "opacity-0"}`}
        style={{ minHeight: 60 }}>
        {content}
      </div>
    </div>
  );
}
