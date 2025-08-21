import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-black/80 via-blue-950/60 to-blue-900/40"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center drop-shadow">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card Example */}
            {[
              {
                title: "Cloud Platform",
                desc: "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
                tech: ["React", "Node.js", "AWS", "Docker"],
              },
              {
                title: "AI Analytics Dashboard",
                desc: "ML-powered data visualization platform with predictive analytics and interactive reports.",
                tech: ["Python", "TensorFlow", "D3.js", "Flask"],
              },
              {
                title: "E-Commerce Web App",
                desc: "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
                tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
              },
              {
                title: "Real-Time Chat App",
                desc: "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
                tech: ["Socket.IO", "Express", "React", "Redis"],
              },
            ].map((proj, idx) => (
              <div
                key={proj.title}
                className="glass p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-all"
              >
                <h3 className="text-xl font-bold mb-2 text-blue-400">{proj.title}</h3>
                <p className="text-gray-300 mb-4">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-blue-400 hover:text-cyan-400 transition-colors my-4 font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};