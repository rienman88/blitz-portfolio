"use client";

import { useState } from "react";

export default function MobileMenu() {

  const [open, setOpen] = useState(false);

  return (
    <>

      <button
        onClick={() => setOpen(!open)}
        className="
          text-white

          text-2xl

          md:hidden
        "
      >
        ☰
      </button>

      {open && (

        <div
          className="
            absolute

            top-full
            left-0

            w-full

            border-t
            border-cyan-500/10

            bg-[#030712]/95

            backdrop-blur-xl
          "
        >

          <div
            className="
              flex
              flex-col

              gap-6

              p-8

              text-white
            "
          >

            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#skills">Skills</a>

            <a href="#projects">Projects</a>

            <a href="#hackathons">Hackathons</a>

            <a href="#certifications">
              Certifications
            </a>

            <a href="#contact">
              Contact
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4

                rounded-xl

                border
                border-cyan-500/30

                bg-cyan-500/10

                px-5
                py-3

                text-center

                font-semibold

                text-cyan-400

                transition

                hover:bg-cyan-500

                hover:text-white
              "
            >
              Download Resume
            </a>

          </div>

        </div>

      )}

    </>
  );
}
