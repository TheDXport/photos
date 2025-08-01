"use client"

import Image from "next/image";
import NavBar from "./components/NavBar";
import { useState, useRef } from "react";

export default function Page() {
  const [section, setSection] = useState<string>("portfolio");
  const [fade, setFade] = useState<'in' | 'out'>('in');
  const [nextSection, setNextSection] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSelect = (newSection: string) => {
    if (newSection === section || fade === 'out') return;
    setFade('out');
    setNextSection(newSection);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSection(newSection);
      setFade('in');
      setNextSection(null);
    }, 350);
  };

  let content = null;
  if (section === "portfolio") {
    content = <div className="mt-10 text-2xl">portfolio</div>;
  } else if (section === "about") {
    content = <div className="mt-10 text-2xl">about</div>;
  } else if (section === "contact") {
    content = <div className="mt-10 text-2xl">contact</div>;
  }

  return (
    <div className="relative h-[1500px] font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <NavBar onSelect={handleSelect} />
      <div
        className={`transition-opacity duration-350 ${fade === 'in' ? 'opacity-100' : 'opacity-0'}`}
        style={{ minHeight: 60 }}
      >
        {content}
      </div>
    </div>
  );
}
