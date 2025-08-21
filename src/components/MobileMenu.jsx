import { useEffect, useRef } from "react";

const MENU_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const menuRef = useRef(null);

  // Trap focus when menu is open
  useEffect(() => {
    if (menuOpen && menuRef.current) {
      menuRef.current.focus();
    }
  }, [menuOpen]);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, setMenuOpen]);

  return (
    <div
      tabIndex={-1}
      ref={menuRef}
      aria-modal="true"
      role="dialog"
      className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.95)] z-50 flex flex-col items-center justify-center
        transition-all duration-500 ease-in-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      style={{ backdropFilter: "blur(8px)" }}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl focus:outline-none focus:ring-2 focus:ring-blue-400 rounded cursor-pointer transition hover:scale-110"
        aria-label="Close Menu"
        tabIndex={menuOpen ? 0 : -1}
      >
        &times;
      </button>
      <nav className="flex flex-col items-center gap-2 mt-8">
        {MENU_ITEMS.map((item, idx) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 px-6 py-2 rounded transition-all duration-300
              ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
              hover:bg-blue-500/20 focus:bg-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400
            `}
            tabIndex={menuOpen ? 0 : -1}
            style={{ transitionDelay: `${idx * 60}ms` }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};