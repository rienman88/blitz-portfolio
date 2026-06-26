import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header
      className="
      sticky
      top-0
      z-50

      border-b
      border-cyan-500/10

      bg-black/80
      backdrop-blur
      "
    >
      <div
        className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between

        px-6
        py-4
        "
      >
        {/* Logo */}

        <a
          href="#home"
          className="
          text-3xl
          font-bold
          text-white

          transition
          hover:text-cyan-400
          "
        >
          Blitz
        </a>

        {/* Desktop Menu */}

        <nav
          className="
          hidden
          items-center
          gap-8

          md:flex
          "
        >
          <a
            href="#home"
            className="text-white transition hover:text-cyan-400"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-white transition hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-white transition hover:text-cyan-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-white transition hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="#hackathons"
            className="text-white transition hover:text-cyan-400"
          >
            Hackathons
          </a>

          <a
            href="#certifications"
            className="text-white transition hover:text-cyan-400"
          >
            Certifications
          </a>

          <a
            href="#contact"
            className="text-white transition hover:text-cyan-400"
          >
            Contact
          </a>
        </nav>

        {/* Resume Button */}

        <a
          href="/Rienart-Ryan-Ilagan-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
          hidden

          rounded-xl

          border
          border-cyan-500/20

          px-5
          py-2

          text-white

          transition

          hover:border-cyan-400
          hover:bg-cyan-500/10

          md:block
          "
        >
          Resume
        </a>

        {/* Mobile Menu */}

        <MobileMenu />
      </div>
    </header>
  );
}
