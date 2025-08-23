import { useState, useEffect, useRef } from "react";
import { Code, Palette, Zap, Users, Award, Star } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, experience: 0, satisfaction: 0 });
  const sectionRef = useRef(null);

  const stats = [
    { key: 'projects', number: 8, label: "Projects Built", suffix: "+" },
    { key: 'experience', number: 2, label: "Years Learning", suffix: "+" },
    { key: 'satisfaction', number: 100, label: "Code Quality", suffix: "%" },
  ];

  const highlights = [
    {
      icon: Code,
      title: "MERN Stack Expertise",
      description: "Full-stack development with MongoDB, Express, React, and Node.js",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Palette,
      title: "React Native Mobile",
      description: "Cross-platform mobile app development with native performance",
      color: "from-sky-400 to-blue-500"
    },
    {
      icon: Zap,
      title: "Modern JavaScript",
      description: "ES6+, TypeScript, Redux Toolkit, and component-driven architecture",
      color: "from-cyan-400 to-teal-500"
    },
    {
      icon: Users,
      title: "Problem Solver",
      description: "Hackathon finalist with experience in team collaboration and innovation",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate counters
          stats.forEach(stat => {
            let current = 0;
            const increment = stat.number / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                setCounters(prev => ({ ...prev, [stat.key]: stat.number }));
                clearInterval(timer);
              } else {
                setCounters(prev => ({ ...prev, [stat.key]: Math.floor(current) }));
              }
            }, 30);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-mono text-gray-500 tracking-wider">ABOUT ME</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-2" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              MERN Stack Developer
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              & Tech Enthusiast
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <div className="space-y-8">
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Hi there! I'm Arvind Singh, a passionate MERN Stack and React Native developer 
                  currently pursuing B.Tech in Computer Science from CT Institute of Technology, 
                  Jalandhar. With hands-on experience building real applications, I've developed 
                  a strong foundation in modern web and mobile technologies.
                </p>
                <p>
                  From building DevTinder (a developer matchmaking platform) to creating a 
                  Financial Literacy app for PSB's Hackathon Series 2025, I love transforming 
                  ideas into functional, user-friendly applications. My journey includes training 
                  under Akshay Saini's curriculum and practical experience at ThinkNEXT Technologies.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new tech stacks, participating 
                  in hackathons, or contributing to open-source projects. I believe in continuous 
                  learning and staying updated with the latest industry trends.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, idx) => (
                  <div key={stat.key} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {counters[stat.key]}{stat.suffix}
                    </div>
                    <div className="text-sm text-gray-500 leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">What Sets Me Apart</h3>
              
              {highlights.map((highlight, idx) => (
                <div
                  key={highlight.title}
                  className={`group p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:scale-[1.02] ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + idx * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${highlight.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <highlight.icon className={`w-6 h-6 bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Achievement Section */}
        <div className={`mt-20 transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="p-8 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                <Award className="w-6 h-6 text-blue-400" />
                <span>Education</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400">B.Tech Computer Science & Engineering</h4>
                  <p className="text-gray-300">CT Institute of Technology & Research, Jalandhar</p>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>2022 - 2026</span>
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full">GPA: 8.0/10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="p-8 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                <Star className="w-6 h-6 text-cyan-400" />
                <span>Achievements</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">Top 10 Finalist - Next Quantum 2.0 Hackathon</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">Web Mania 2025 - Appreciation Award</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">PSBs Hackathon Series 2025 Participant</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">Frontend Developer Trainee - ThinkNEXT Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl text-blue-500/20 mb-4">"</div>
            <blockquote className="text-xl md:text-2xl font-light text-gray-300 mb-6 italic leading-relaxed">
              Every line of code I write is a step towards building solutions that make a 
              real difference in people's lives.
            </blockquote>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;