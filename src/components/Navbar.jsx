import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,20,0.85)] backdrop-blur-lg border-b border-white/10 shadow-lg transition-all">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
            pedro<span className="text-blue-500">.tech</span>
          </a>
          {/* Hamburger */}
          <button
            className="w-9 h-9 flex flex-col justify-center items-center md:hidden group relative z-50"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block h-0.5 w-7 bg-white rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-white rounded transition-all duration-300 my-1 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-7 bg-white rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-200 hover:text-blue-400 transition-colors font-medium px-2 py-1"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-200 hover:text-blue-400 transition-colors font-medium px-2 py-1"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-200 hover:text-blue-400 transition-colors font-medium px-2 py-1"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-200 hover:text-blue-400 transition-colors font-medium px-2 py-1"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};