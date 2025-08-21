import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-blue-950/30 to-black/80"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center drop-shadow">
            About Me
          </h2>
          <div className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-8 text-lg">
              Passionate developer with expertise in building scalable web applications and creating innovative solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/10 shadow hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/10 shadow hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur shadow hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-400">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Computer Science</strong> - XYZ University (2016-2020)
                </li>
                <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud Computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur shadow hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-400">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    Software Engineer at ABC Corp (2020 - Present)
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based applications.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Intern at DEF Startups (2019)
                  </h4>
                  <p>
                    Assisted in building front-end components and integrating REST APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};