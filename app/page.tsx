"use client";

import Image from "next/image";
import NavBar from "./components/NavBar";
import { useState, useRef } from "react";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";

export default function Page() {
  const [section, setSection] = useState<string>("portfolio");
  const [fade, setFade] = useState<"in" | "out">("in");
  const [nextSection, setNextSection] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <div className="relative w-full items-center justify-items-center min-h-screen overflow-x-hidden invisible-scrollbar">
      <div className={`duration-350 w-full space-y-32 `}>
        <Header />
        <Portfolio />
      </div>
    </div>
  );
}
