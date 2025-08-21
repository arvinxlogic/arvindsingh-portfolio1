import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black/80 via-blue-950/70 to-blue-900/60"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-300 bg-clip-text text-transparent leading-tight drop-shadow-lg">
            Hi, I'm Pedro Tech
          </h1>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            I’m a full-stack developer passionate about building clean, scalable web applications. My goal is to deliver solutions that combine exceptional performance with delightful user experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-7 rounded-lg font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-400 text-blue-400 py-3 px-7 rounded-lg font-semibold transition-all duration-200 hover:bg-blue-500/10 hover:scale-105 hover:shadow-blue-400/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};