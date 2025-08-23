import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Code, Database, Globe, Smartphone } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "PSB Financial Awareness App",
      description: "Interactive Financial Literacy & Fraud Awareness mobile app for PSBs Hackathon Series 2025.",
      longDescription: "Mobile app delivering short lessons, quizzes, and fraud-prevention tips for holistic personal finance education. Features multi-screen navigation, persistent progress tracking, and API-driven content modules with offline-friendly capabilities.",
      technologies: ["React Native", "Expo", "AsyncStorage", "Navigation", "JavaScript"],
      image: "/api/placeholder/600/400",
      category: "Mobile App",
      status: "Hackathon Project",
      githubUrl: "https://github.com/arvindsingh2213",
      liveUrl: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "DevTinder",
      description: "Dev-focused matchmaking app with authentication, profiles, and connection flows.",
      longDescription: "MERN stack application for developer networking. Built REST APIs with Express & MongoDB, implemented JWT authentication, protected routes, profile creation and discovery, match/connection flows, and componentized UI with Tailwind CSS.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
      category: "Full Stack",
      status: "Completed",
      githubUrl: "https://github.com/arvindsingh2213",
      liveUrl: "#",
      color: "from-slate-600 to-blue-700"
    },
    {
      id: 3,
      title: "Food Ordering App",
      description: "Restaurant & menu listing app with search, filters, and performance optimizations.",
      longDescription: "React-based food delivery interface with restaurant listings, menu browsing, search/filter functionality, lazy loading with code splitting, shimmer screens, client-side routing with nested routes, and error boundaries for resilient UX.",
      technologies: ["React", "React Router", "JavaScript", "CSS3", "REST APIs"],
      image: "/api/placeholder/600/400",
      category: "Frontend",
      status: "Completed",
      githubUrl: "https://github.com/arvindsingh2213",
      liveUrl: "#",
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 4,
      title: "YouTube Clone (Basic)",
      description: "Video listing and search platform with debounced suggestions and watch functionality.",
      longDescription: "YouTube-inspired interface featuring video listing, search with debounced suggestions, watch page with layout state management, reusable video cards, pagination patterns, and seamless API integration for video content.",
      technologies: ["React", "YouTube API", "JavaScript", "CSS3", "Debouncing"],
      image: "/api/placeholder/600/400",
      category: "Frontend",
      status: "Completed",
      githubUrl: "https://github.com/arvindsingh2213",
      liveUrl: "#",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 5,
      title: "NetflixGPT",
      description: "Streaming-style UI with authentication, browse/search, and AI recommendations.",
      longDescription: "Netflix-inspired streaming platform with user authentication, movie browsing and search functionality, watchlist/favorites management, external movie DB API integration, modular components, guarded routes, and optional AI-assisted recommendations.",
      technologies: ["React", "Firebase Auth", "TMDB API", "JavaScript", "CSS3"],
      image: "/api/placeholder/600/400",
      category: "Frontend",
      status: "Completed",
      githubUrl: "https://github.com/arvindsingh2213",
      liveUrl: "#",
      color: "from-red-600 to-red-800"
    },
    {
      id: 6,
      title: "PathWiser - AI Learning Assistant",
      description: "AI-powered learning platform with study planner, roadmaps, and code helper.",
      longDescription: "Full-stack hackathon project featuring AI-powered study planning, personalized learning roadmaps, code assistance, interactive chatbot, and visual learning aids using Mermaid.js. Emphasis on modular design and user experience.",
      technologies: ["React", "Node.js", "AI APIs", "Mermaid.js", "Express"],
      image: "/api/placeholder/600/400",
      category: "AI/Full Stack",
      status: "Hackathon Project",
      githubUrl: "https://github.com/arvindsingh2213",
      liveUrl: "#",
      color: "from-green-500 to-teal-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border border-green-500/30';
      case 'Hackathon Project':
        return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-mono text-gray-500 tracking-wider">MY WORK</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-2" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Real applications built with MERN stack and React Native. From hackathon winners 
            to production-ready apps - each project showcases different aspects of modern development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-800/50 overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Project Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-10`} />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${project.color} bg-opacity-20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {project.category === 'Mobile App' ? (
                        <Smartphone className={`w-10 h-10 bg-gradient-to-r ${project.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text' }} />
                      ) : project.category === 'Full Stack' ? (
                        <Database className={`w-10 h-10 bg-gradient-to-r ${project.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text' }} />
                      ) : (
                        <Code className={`w-10 h-10 bg-gradient-to-r ${project.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text' }} />
                      )}
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  {/* Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-mono text-blue-400">{project.category}</span>
                    <div className="flex space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors group/link"
                      >
                        <Github className="w-4 h-4 text-gray-400 group-hover/link:text-blue-400 transition-colors" />
                      </a>
                      {project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors group/link"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover/link:text-blue-400 transition-colors" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {hoveredProject === project.id ? project.longDescription : project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Highlight */}
        <div className={`mb-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl border border-blue-500/20 p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Technologies I Work With</h3>
              <p className="text-gray-400">Real-world experience across the full development stack</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Frontend</h4>
                <p className="text-sm text-gray-400">React, JavaScript ES6+, HTML5, CSS3, Tailwind CSS</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-600 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Database className="w-6 h-6 text-slate-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Backend</h4>
                <p className="text-sm text-gray-400">Node.js, Express.js, MongoDB, REST APIs, JWT</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6 text-sky-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Mobile</h4>
                <p className="text-sm text-gray-400">React Native, Expo, AsyncStorage, Navigation</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Code className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">Tools</h4>
                <p className="text-sm text-gray-400">Git, VS Code, Postman, npm/yarn, Vite</p>
              </div>
            </div>
          </div>
        </div>

        {/* More Projects CTA */}
        <div className={`text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-gray-400 mb-8 text-lg">
            Interested in seeing more of my work or collaborating?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/arvindsingh2213"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            
            <a
              href="mailto:arvindsingh05@gmail.com"
              className="inline-flex items-center space-x-3 px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500/10 hover:scale-105 transition-all duration-300"
            >
              <span>Let's Collaborate</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;