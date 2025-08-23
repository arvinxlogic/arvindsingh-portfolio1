import { X } from "lucide-react";

// MobileMenu Component
const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navItems = [
    { label: "Home", href: "#home", number: "01" },
    { label: "About", href: "#about", number: "02" },
    { label: "Skills", href: "#skills", number: "03" },
    { label: "Projects", href: "#projects", number: "04" },
    { label: "Contact", href: "#contact", number: "05" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${
      menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`}>
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity duration-500 ${
          menuOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
      />
      
      {/* Menu Content */}
      <div className={`relative h-full flex flex-col justify-center items-center transition-all duration-700 ${
        menuOpen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 p-3 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <span className="w-8 h-8 flex items-center justify-center">✕</span>
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center space-y-8">
          {navItems.map((item, idx) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`group flex items-center space-x-4 transition-all duration-700 ${
                menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 100 + 200}ms` }}
            >
              <span className="text-sm font-mono text-gray-500 group-hover:text-blue-400 transition-colors duration-300">
                {item.number}
              </span>
              <span className="text-3xl font-light text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                {item.label}
              </span>
              <div className="w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* Decorative elements */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-700 ${
                  menuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 100 + 800}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/5 transition-all duration-1000 ${
            menuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`} style={{ transitionDelay: '300ms' }} />
          <div className={`absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-sky-500/5 transition-all duration-1000 ${
            menuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`} style={{ transitionDelay: '500ms' }} />
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;