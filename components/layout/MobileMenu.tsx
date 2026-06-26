"use client";

import { useState } from "react";

export default function MobileMenu() {

  const [open, setOpen] = useState(false);

  return (
    <>

      <button
        onClick={() => setOpen(!open)}
        className="text-white md:hidden"
      >
        ☰
      </button>

      {open && (

        <div className="absolute top-20 left-0 w-full bg-slate-950 border-t border-slate-800">

          <div className="flex flex-col gap-6 p-8">

            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#skills">Skills</a>

            <a href="#projects">Projects</a>

            <a href="#certifications">
              Certifications
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

        </div>

      )}

    </>
  );
}
