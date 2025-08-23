import { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";

const Navbar = ({ menuOpen, setMenuOpen, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      
      setScrolled(scrollTop > 50);
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className={`fixed top-1 w-full z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('#home')}
              className="group flex items-center space-x-3 z-10"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/20">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-300" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
                Arvind
              </span>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-1 bg-gray-900/30 backdrop-blur-lg rounded-full p-1 border border-gray-800/50">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? 'text-white bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/25'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative p-2 text-gray-300 hover:text-white transition-colors z-10"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute inset-0 transform transition-all duration-300 ${
                  menuOpen ? 'rotate-45 scale-0' : 'rotate-0 scale-100'
                }`}>
                  <Menu className="w-6 h-6" />
                </span>
                <span className={`absolute inset-0 transform transition-all duration-300 ${
                  menuOpen ? 'rotate-0 scale-100' : '-rotate-45 scale-0'
                }`}>
                  <X className="w-6 h-6" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;