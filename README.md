import { useState, useEffect, useRef } from "react";
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Users, Award, Star, ArrowRight, Menu, X, MousePointer, Heart } from "lucide-react";

// Enhanced Loading Screen Component
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("");
  const fullText = "console.log('Welcome to Arvind\\'s Portfolio');";

  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Animate typing text
    let textIndex = 0;
    const textInterval = setInterval(() => {
      setText(fullText.substring(0, textIndex));
      textIndex++;
      if (textIndex > fullText.length) {
        clearInterval(textInterval);
      }
    }, 60);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animation: 'float 4s ease-in-out infinite'
            }}
          />
        ))}
      </div>
      
      <div className="text-center z-10">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Arvind
          </h1>
          <div className="font-mono text-green-400 text-lg md:text-xl h-8">
            {text}<span className="animate-pulse">|</span>
          </div>
        </div>
        
        <div className="w-80 h-2 bg-slate-700 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="text-slate-400 mt-4 font-mono text-sm">
          Loading {progress}%
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

// Enhanced Navbar Component
const Navbar = ({ menuOpen, setMenuOpen, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-slate-700' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="group flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Arvind.dev
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-blue-400 ${
                  activeSection === item.href.slice(1) ? 'text-blue-400' : 'text-slate-300'
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-blue-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

// Enhanced Mobile Menu Component
const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
      menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-lg" />
      <div className="relative flex flex-col items-center justify-center h-full space-y-8">
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-slate-300 hover:text-blue-400"
        >
          <X className="w-8 h-8" />
        </button>
        
        {navItems.map((item, idx) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-slate-200 hover:text-blue-400 transition-all duration-300 ${
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

// Enhanced Reveal Animation Component
const RevealOnScroll = ({ children, direction = "up", delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.style.transitionDelay = `${delay}ms`;
          ref.current.classList.add("visible");
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    switch (direction) {
      case "up": return "translateY(60px)";
      case "down": return "translateY(-60px)";
      case "left": return "translateX(60px)";
      case "right": return "translateX(-60px)";
      default: return "translateY(60px)";
    }
  };

  return (
    <div
      ref={ref}
      className="reveal transition-all duration-700 ease-out opacity-0"
      style={{ transform: getTransform() }}
    >
      {children}
      <style jsx>{`
        .reveal.visible {
          opacity: 1;
          transform: translate(0);
        }
      `}</style>
    </div>
  );
};

// Enhanced Home Section
const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Tech Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 px-6 max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Arvind
            </h1>
            <div className="h-16 md:h-20">
              <h2 className="text-2xl md:text-4xl font-semibold text-slate-200 transition-all duration-500">
                {roles[currentRole]}
              </h2>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with passion, precision, and a touch of magic. 
            Let's build something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 group">
              <Github className="w-6 h-6 text-slate-300 group-hover:text-white" />
            </a>
            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 group">
              <Linkedin className="w-6 h-6 text-slate-300 group-hover:text-white" />
            </a>
            <a href="mailto:arvind@example.com" className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110 group">
              <Mail className="w-6 h-6 text-slate-300 group-hover:text-white" />
            </a>
          </div>
        </div>
      </RevealOnScroll>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-slate-400" />
      </div>
    </section>
  );
};

// Enhanced About Section
const About = () => {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Problem Solving" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll direction="left">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-6">
                Passionate Developer & Creative Problem Solver
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Hi there! I'm Arvind, a passionate full-stack developer with a love for creating 
                beautiful, functional, and user-centered digital experiences. With over 3 years 
                of experience in the field, I've had the pleasure of working on diverse projects 
                that challenge me to grow and innovate.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My journey in tech started with curiosity and has evolved into a career driven 
                by the desire to solve complex problems through elegant code. I believe in the 
                power of technology to make a positive impact on people's lives.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20" />
              <div className="relative bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700">
                <h4 className="text-2xl font-bold text-white mb-6">What I Do</h4>
                <div className="space-y-4">
                  {[
                    { icon: Code, title: "Full-Stack Development", desc: "Building robust applications from concept to deployment" },
                    { icon: Palette, title: "UI/UX Design", desc: "Creating intuitive and beautiful user experiences" },
                    { icon: Zap, title: "Performance Optimization", desc: "Ensuring fast, efficient, and scalable solutions" },
                    { icon: Users, title: "Team Collaboration", desc: "Working effectively in agile, cross-functional teams" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-700/50 transition-colors">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-white">{item.title}</h5>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

// Enhanced Skills Section
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Palette,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 85 }
      ]
    },
    {
      title: "Backend",
      icon: Code,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 88 },
        { name: "Express.js", level: 92 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 82 }
      ]
    },
    {
      title: "Tools & Others",
      icon: Zap,
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 78 },
        { name: "GraphQL", level: 85 },
        { name: "Jest", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <RevealOnScroll key={category.title} delay={idx * 200}>
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%`, transitionDelay: `${skillIdx * 100}ms` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Projects Section
const Projects = () => {
  const projects = [
    {
      title: "EcoTrack - Sustainability Platform",
      description: "A comprehensive platform for tracking carbon footprint with AI-powered insights and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "AI/ML"],
      category: "Full Stack",
      link: "#",
      github: "#"
    },
    {
      title: "FinanceFlow - Investment Dashboard",
      description: "Real-time investment tracking dashboard with advanced analytics, portfolio management, and risk assessment tools.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Python", "PostgreSQL", "Chart.js"],
      category: "Dashboard",
      link: "#",
      github: "#"
    },
    {
      title: "HealthHub - Telemedicine App",
      description: "Secure telemedicine platform connecting patients with healthcare providers through video consultations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tech: ["React Native", "Express", "Socket.IO", "AWS"],
      category: "Mobile",
      link: "#",
      github: "#"
    },
    {
      title: "CreativeSpace - Design Collaboration",
      description: "Real-time collaborative design tool for teams with version control and automated feedback systems.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop",
      tech: ["Next.js", "GraphQL", "Redis", "WebRTC"],
      category: "SaaS",
      link: "#",
      github: "#"
    }
  ];

  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
              A collection of projects that showcase my passion for creating innovative solutions
            </p>
          </div>
        </RevealOnScroll>

        {/* Filter Buttons */}
        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <RevealOnScroll key={project.title} delay={idx * 200}>
              <div className="group bg-slate-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02]">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-500/90 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 text-blue-400 text-sm rounded-full border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href={project.github}
                      className="p-2 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enhanced Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      info: "arvind.dev@gmail.com",
      action: "mailto:arvind.dev@gmail.com"
    },
    {
      icon: Github,
      title: "GitHub",
      info: "@arvind-dev",
      action: "https://github.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      info: "Arvind Kumar",
      action: "https://linkedin.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-lg">
              Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can create something amazing together.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <RevealOnScroll direction="left">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-700 transition-all"
                      placeholder="Your Name"
                      disabled={sending}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-700 transition-all"
                      placeholder="Your Email"
                      disabled={sending}
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-700 transition-all"
                    placeholder="Subject"
                    disabled={sending}
                  />
                </div>
                
                <div>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-700 transition-all resize-none"
                    placeholder="Tell me about your project..."
                    disabled={sending}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={sending}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    sent
                      ? 'bg-green-500 text-white'
                      : sending
                      ? 'bg-slate-600 text-slate-300 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]'
                  }`}
                >
                  {sent ? (
                    <>
                      <span>Message Sent!</span>
                      <Heart className="w-5 h-5" />
                    </>
                  ) : sending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-300 border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </RevealOnScroll>

          {/* Contact Information */}
          <RevealOnScroll direction="right">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  I'm always excited to work on new projects and collaborate with amazing people. 
                  Whether you have a specific project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, idx) => (
                  <a
                    key={idx}
                    href={method.action}
                    className="flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur-lg rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-slate-400">{method.info}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 ml-auto group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 font-semibold">Available for new projects</span>
                </div>
                <p className="text-slate-300 text-sm">
                  Currently accepting new freelance projects and collaboration opportunities. 
                  Let's create something amazing together!
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

// Main App Component
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeSection={activeSection} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <footer className="bg-slate-900 border-t border-slate-800 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Arvind.dev
                </span>
              </div>
              
              <div className="text-slate-400 text-center md:text-right">
                <p>&copy; {new Date().getFullYear()} Arvind Kumar. All rights reserved.</p>
                <p className="text-sm mt-1">Built with passion and lots of ☕</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;