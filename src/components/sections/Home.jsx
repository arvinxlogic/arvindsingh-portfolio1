import { useState, useEffect, useRef } from "react";
import { ChevronDown, Github, Linkedin, Mail, ArrowRight, MousePointer } from "lucide-react";

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const roles = [
    "MERN Stack Developer",
    "React Native Developer", 
    "Full-Stack Developer",
    "Problem Solver"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px',
               animation: 'grid-move 20s linear infinite'
             }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-blue-500 rounded-full animate-bounce opacity-60" 
             style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-sky-500 rounded-full animate-bounce opacity-40" 
             style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 left-3/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce opacity-50" 
             style={{ animationDelay: '2s', animationDuration: '5s' }} />
      </div>

      {/* Main Content */}
      <div className={`text-center z-10 px-6 max-w-5xl mx-auto transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        {/* Greeting */}
        <div className={`transition-all duration-700 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <p className="text-sm md:text-base text-gray-500 mb-4 font-mono tracking-wider">
            Hello World! I'm
          </p>
        </div>

        {/* Name */}
        <div className={`transition-all duration-700 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Arvind
              </span>
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl opacity-50" />
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Singh
            </span>
          </h1>
        </div>
        
        {/* Dynamic Role */}
        <div className={`h-16 md:h-20 mb-8 transition-all duration-700 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h2 className="text-xl md:text-3xl font-light text-gray-300 transition-all duration-500">
            <span className="font-mono text-blue-400">&lt;</span>
            {roles[currentRole]}
            <span className="font-mono text-blue-400">/&gt;</span>
          </h2>
        </div>
        
        {/* Description */}
        <div className={`transition-all duration-700 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            MERN Stack & React Native developer with hands-on experience building real applications. 
            From DevTinder to Financial Literacy apps - I craft digital solutions that matter.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-700 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-medium text-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300 hover:scale-105 hover:bg-blue-400/5"
          >
            <span className="flex items-center justify-center space-x-2">
              <MousePointer className="w-5 h-5" />
              <span>Let's Connect</span>
            </span>
          </button>
          <a
  href="/resume.pdf"  // This will point to public/resume.pdf
  download="Arvind_Singh_Resume.pdf"  // Suggested filename for download
  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
>
  <span>Download Resume</span>
</a>

        </div>

        {/* Social Links */}
        <div className={`flex justify-center space-x-6 transition-all duration-700 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          {[
            { icon: Github, href: "https://github.com/arvinxlogic", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/arvindsingh2213", label: "LinkedIn" },
            { icon: Mail, href: "mailto:arvindsinghxz@gmail.com", label: "Email" },
          ].map((social, idx) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-gray-900/30 backdrop-blur-sm rounded-full border border-gray-800/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
            >
              <social.icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1400 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-500 font-mono">SCROLL</span>
          <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
};

export default Home;