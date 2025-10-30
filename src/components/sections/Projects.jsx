import { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Code, Database, Globe, Smartphone, Chrome, Award, Zap } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);

  const projects = [
  // 1. BEST - DevConnect (Fully hosted and working)
  {
    id: 5,
    title: "DevConnect",
    description: "Professional networking platform for developers with JWT auth, profile matching, and real-time messaging.",
    longDescription: "Full-stack MERN application with sophisticated match algorithms, WebSocket-based real-time chat, and comprehensive profile system. Features include protected routes, skill-based discovery, connection workflows, and responsive Tailwind UI with dark mode support.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind"],
    image: "/devconnect.png",
    platforms: ["Web"],
    status: "Completed",
    githubUrl: "https://github.com/arvinxlogic/DevCollabify",
    liveUrl: "https://connectdev.online",
    featured: true
  },
  
  // 2. Dev Workflow & Collaboration (AWS + n8n - Complex)
  {
    id: 1,
    title: "Dev Collaboration and Workflow Automation",
    description: "Enterprise automation platform with AWS services (EC2, S3, Lambda, RDS) and n8n workflow engine for scalable project management.",
    longDescription: "Production-grade MERN stack platform integrated with AWS cloud infrastructure. Implements microservices architecture with n8n automation, Cognito authentication, S3 object storage, Lambda serverless functions, and PostgreSQL RDS. Features include CI/CD pipelines, real-time monitoring, and enterprise-level security protocols.",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "n8n", "PostgreSQL", "Cognito", "Lambda", "Amplify"],
    image: "/projects/cloudflow.png",
    platforms: ["Web"],
    status: "In Development",
    githubUrl: "https://github.com/arvinxlogic/Dev_Workflow_and_collaboration_platform",
    liveUrl: "https://main.dbfnxdceymc08.amplifyapp.com/",
    featured: true
  },
  
  // 3. Spotify Clone (Full-stack with Admin Panel)
  {
    id: 11,
    title: "Spotify Clone",
    description: "Full-stack music streaming platform with admin panel, Cloudinary integration for media management, and complete CRUD operations.",
    longDescription: "Professional music streaming application featuring admin dashboard for uploading albums and songs via Cloudinary, user authentication, playlist management, music player with controls, search functionality, and responsive design. Built with MERN stack showcasing full-stack capabilities from backend API to frontend UI.",
    technologies: ["React", "Node.js", "MongoDB", "Cloudinary", "Express", "Tailwind CSS"],
    image: "/projects/spotify.png",
    platforms: ["Web"],
    status: "Completed",
    githubUrl: "https://github.com/arvinxlogic/Spotify-FullStack",
    liveUrl: "https://music-on-wisemen.vercel.app/admin",
    featured: true
  },
  
  // 4. WiseMate (AI Assistant - Impressive)
  {
    id: 10,
    title: "WiseMate - AI Learning Assistant",
    description: "AI learning assistant with study planning, visual roadmaps using Mermaid.js, and intelligent code help.",
    longDescription: "Hackathon-winning educational platform featuring AI-powered personalized study schedules, interactive learning roadmaps with Mermaid.js visualizations, context-aware code assistance, and intelligent chatbot for academic queries. Emphasizes UX design and accessibility.",
    technologies: ["React", "Node.js", "AI APIs", "Mermaid.js", "MongoDB"],
    image: "/projects/pathwiser.png",
    platforms: ["Web"],
    status: "Hackathon Project",
    githubUrl: "https://github.com/arvinxlogic/AI_STUDENT_ASSISTANT",
    liveUrl: "",
    featured: true
  },
  
  // 5. PSB Financial Hub (Mobile - Real client project)
  {
    id: 3,
    title: "PSB Financial Hub",
    description: "Financial literacy mobile app for PSB Hackathon - interactive lessons, quizzes, and fraud awareness for banking customers.",
    longDescription: "Educational mobile platform built for public sector banks. Features multi-screen navigation, progress tracking with AsyncStorage, offline-first architecture, and gamified learning modules. Includes real-world fraud prevention scenarios and personalized financial planning tools.",
    technologies: ["React Native", "CLI", "AsyncStorage", "JavaScript", "Node.js", "MongoDB"],
    image: "/projects/psb-financial.png",
    platforms: ["Mobile"],
    status: "Hackathon Project",
    githubUrl: "https://github.com/singhwarvind/SeCure",
    liveUrl: "",
    featured: true
  },
  
  // 6. PrepLock (Multi-platform Hackathon Winner)
  {
    id: 2,
    title: "PrepLock",
    description: "Cross-platform study productivity suite with AI-powered flashcards and task management. Winner at BuildFest Hackathon.",
    longDescription: "Award-winning multi-platform solution (web, mobile, Chrome extension) featuring Gemini AI for intelligent flashcard generation from PDF syllabi. Includes personalized learning roadmaps, Pomodoro-based task blocking, and AI mentor chatbot. Real-time sync across all platforms with offline support.",
    technologies: ["React", "React Native", "Node.js", "Gemini AI", "Firebase"],
    image: "/projects/preplock.png",
    platforms: ["Web", "Mobile", "Chrome Extension"],
    status: "Hackathon Top 15",
    githubUrl: "https://github.com/arvinxlogic/ProductivityWithNoDistraction",
    liveUrl: "",
    featured: true,
    achievement: "Top 15 / 115 Teams"
  },
  
  // 7. Real-Time Chat (WebSocket showcase)
  {
    id: 6,
    title: "Real-Time Chat",
    description: "Cross-platform messaging app with Socket.io, Firebase auth, and seamless web-mobile synchronization.",
    longDescription: "Dual-platform real-time communication system using WebSocket protocol. Features include online presence indicators, typing feedback, message read receipts, emoji support, and encrypted message storage in MongoDB with automatic sync between platforms.",
    technologies: ["React", "React Native", "Socket.io", "MongoDB", "Firebase"],
    image: "/projects/chat-app.png",
    platforms: ["Web", "Mobile"],
    status: "In Development",
    githubUrl: "https://github.com/arvinxlogic/Chat-App",
    liveUrl: ""
  },
  
  // 8. TaskMaster (Mobile with Firebase)
  {
    id: 4,
    title: "TaskMaster",
    description: "Offline-first expense tracker with Google OAuth, analytics, and budget management built with Firebase.",
    longDescription: "Feature-rich React Native app with AsyncStorage for local persistence, Firebase Auth integration, and interactive charts for daily analytics. Implements Material Design with custom theming, category-based expense tracking, and smart budget recommendations.",
    technologies: ["React Native", "Firebase", "AsyncStorage", "Charts"],
    image: "/projects/taskmaster.png",
    platforms: ["Mobile"],
    status: "Completed",
    githubUrl: "https://github.com/arvinxlogic/offline-productivity-app1",
    liveUrl: ""
  },
  
  // 9. FoodApp (Frontend with performance optimization)
  {
    id: 7,
    title: "FoodApp",
    description: "Restaurant discovery platform with lazy loading, shimmer UI, and advanced search filters.",
    longDescription: "Performance-optimized React application implementing code splitting, React Router nested routes, and error boundaries. Features include restaurant API integration, dynamic search with debouncing, filter combinations, and responsive card-based layouts.",
    technologies: ["React", "React Router", "JavaScript", "CSS3"],
    image: "/projects/foodhub.png",
    platforms: ["Web"],
    status: "Completed",
    githubUrl: "https://github.com/arvinxlogic/food-app",
    liveUrl: ""
  },
  
  // 10. StreamYT (YouTube API integration)
  {
    id: 8,
    title: "StreamYT",
    description: "YouTube-inspired video platform with intelligent search, debounced suggestions, and pagination.",
    longDescription: "Video streaming interface leveraging YouTube Data API with optimized search using request debouncing. Implements infinite scroll pagination, state management for watch history, responsive video grids, and caching strategies for improved performance.",
    technologies: ["React", "YouTube API", "JavaScript", "CSS3"],
    image: "/projects/streamvid.png",
    platforms: ["Web"],
    status: "Completed",
    githubUrl: "https://github.com/arvinxlogic/Youtube-clone",
    liveUrl: ""
  },
  
  // 11. NetflixGPT (Frontend with AI)
  {
    id: 9,
    title: "NetflixGPT",
    description: "Streaming UI with Firebase authentication, TMDB API integration, and AI-powered recommendations.",
    longDescription: "Netflix-inspired React application with Firebase authentication system, movie browsing with TMDB API, watchlist management, and AI-assisted content discovery. Features route guards, modal overlays, and smooth transitions.",
    technologies: ["React", "Firebase", "TMDB API", "AI Integration"],
    image: "/projects/netflixgpt.png",
    platforms: ["Web"],
    status: "Completed",
    githubUrl: "https://github.com/arvinxlogic/Netflix-GPT.",
    liveUrl: ""
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

  const getStatusConfig = (status) => {
    const configs = {
      'Completed': {
        color: 'from-emerald-500/20 to-green-500/20',
        text: 'text-emerald-400',
        border: 'border-emerald-500/40',
        icon: Zap
      },
      'In Development': {
        color: 'from-orange-500/20 to-amber-500/20',
        text: 'text-orange-400',
        border: 'border-orange-500/40',
        icon: Code
      },
      'Hackathon Winner': {
        color: 'from-yellow-500/20 to-amber-500/20',
        text: 'text-yellow-400',
        border: 'border-yellow-500/40',
        icon: Award
      },
      'Hackathon Project': {
        color: 'from-blue-500/20 to-cyan-500/20',
        text: 'text-blue-400',
        border: 'border-blue-500/40',
        icon: Code
      }
    };
    return configs[status] || configs['Completed'];
  };

  const getPlatformConfig = (platform) => {
    const configs = {
      'Web': { icon: Globe, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
      'Mobile': { icon: Smartphone, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30' },
      'Chrome Extension': { icon: Chrome, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' }
    };
    return configs[platform] || configs['Web'];
  };

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="text-xs font-medium text-blue-400 tracking-wider uppercase">Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Selected
            </span>
            {' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real-world applications demonstrating full-stack development, 
            cloud architecture, and mobile engineering expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-20">
          {projects.map((project, idx) => {
            const statusConfig = getStatusConfig(project.status);
            const StatusIcon = statusConfig.icon;
            
            return (
              <div
                key={project.id}
                className={`group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800/60 overflow-hidden hover:border-gray-700/60 transition-all duration-500 h-full flex flex-col">
                  {/* Image Area */}
                  <div className="relative h-56 bg-gradient-to-br from-gray-800/50 to-gray-900/50 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),transparent_50%)]"></div>
                    
                    {/* Platform Badges - Clean minimal style */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.platforms.map((platform) => {
                        const config = getPlatformConfig(platform);
                        const PlatformIcon = config.icon;
                        return (
                          <div 
                            key={platform}
                            className={`${config.bg} ${config.border} border backdrop-blur-md rounded-lg px-2.5 py-1.5 flex items-center gap-1.5`}
                          >
                            <PlatformIcon className={`w-3.5 h-3.5 ${config.color}`} />
                            <span className={`text-xs font-medium ${config.color}`}>{platform}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`bg-gradient-to-r ${statusConfig.color} backdrop-blur-md rounded-lg px-3 py-1.5 border ${statusConfig.border} flex items-center gap-1.5`}>
                        <StatusIcon className={`w-3.5 h-3.5 ${statusConfig.text}`} />
                        <span className={`text-xs font-semibold ${statusConfig.text}`}>{project.status}</span>
                      </div>
                    </div>

                    {/* Achievement Badge */}
                    {project.achievement && (
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 backdrop-blur-md rounded-lg px-3 py-1.5 border border-yellow-500/40">
                          <span className="text-xs font-bold text-yellow-400">{project.achievement}</span>
                        </div>
                      </div>
                    )}

                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-gray-600 text-sm">Project Screenshot</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                      {hoveredProject === project.id ? project.longDescription : project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium bg-gray-800/60 text-gray-300 rounded-md border border-gray-700/50 hover:border-blue-500/40 hover:text-blue-400 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 hover:text-white rounded-lg transition-all border border-gray-700/50 hover:border-gray-600/50 group/btn"
                      >
                        <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        <span className="text-sm font-medium">View Code</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-lg transition-all group/btn"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-gray-400 mb-6">
            Explore more projects and contributions on GitHub
          </p>
          <a
            href="https://github.com/arvinxlogic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 hover:text-white rounded-lg transition-all border border-gray-700/50 hover:border-gray-600/50"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">View All Repositories</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
