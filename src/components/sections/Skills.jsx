import { useState, useEffect, useRef } from "react";
import { Code, Database, Globe, Smartphone, Server, Shield, Brain, Zap } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      id: 0,
      title: "Frontend",
      icon: Globe,
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "React", proficiency: "Advanced", experience: "2+ years", description: "Component architecture, hooks, Context API, Router, performance optimization" },
        { name: "JavaScript ES6+", proficiency: "Advanced", experience: "2+ years", description: "Modern JS features, async patterns, functional programming, best practices" },
        { name: "HTML5/CSS3", proficiency: "Advanced", experience: "2+ years", description: "Semantic markup, responsive design, animations, modern CSS features" },
        { name: "Tailwind CSS", proficiency: "Advanced", experience: "1+ years", description: "Utility-first styling, responsive design, custom components" },
        { name: "Bootstrap", proficiency: "Proficient", experience: "1+ years", description: "Grid system, components, responsive utilities, customization" },
        { name: "TypeScript", proficiency: "Beginner", experience: "6 months", description: "Type safety, interfaces, basic type definitions and usage" },
      ]
    },
    {
      id: 1,
      title: "Backend",
      icon: Server,
      color: "from-slate-400 to-blue-500",
      skills: [
        { name: "Node.js", proficiency: "Advanced", experience: "2+ years", description: "Server-side JavaScript, NPM ecosystem, asynchronous programming" },
        { name: "Express.js", proficiency: "Advanced", experience: "2+ years", description: "RESTful APIs, middleware, routing, authentication systems" },
        { name: "MongoDB", proficiency: "Advanced", experience: "2+ years", description: "Document modeling, Mongoose ODM, aggregation pipelines, indexing" },
        { name: "REST APIs", proficiency: "Advanced", experience: "2+ years", description: "API design, CRUD operations, status codes, authentication" },
        { name: "JWT Authentication", proficiency: "Intermediate", experience: "1+ years", description: "Token-based auth, middleware implementation, security best practices" },
        { name: "MySQL", proficiency: "Beginner", experience: "6 months", description: "Basic SQL queries, relational database concepts, joins" },
      ]
    },
    {
      id: 2,
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-sky-400 to-blue-600",
      skills: [
        { name: "React Native", proficiency: "Advanced", experience: "1+ years", description: "Cross-platform mobile apps, native components, platform-specific code" },
        { name: "Expo", proficiency: "Advanced", experience: "1+ years", description: "Rapid development workflow, managed services, deployment" },
        { name: "AsyncStorage", proficiency: "Proficient", experience: "1+ years", description: "Local data persistence, state management, offline functionality" },
        { name: "Navigation", proficiency: "Proficient", experience: "1+ years", description: "React Navigation, stack/tab navigators, deep linking" },
        { name: "API Integration", proficiency: "Advanced", experience: "1+ years", description: "Fetch API, axios, handling responses, error management" },
        { name: "Mobile UI/UX", proficiency: "Proficient", experience: "1+ years", description: "Native design patterns, responsive layouts, touch interactions" },
      ]
    },
    {
      id: 3,
      title: "Tools & Others",
      icon: Shield,
      color: "from-gray-500 to-slate-600",
      skills: [
        { name: "Git & GitHub", proficiency: "Advanced", experience: "2+ years", description: "Version control, branching strategies, collaboration workflows" },
        { name: "VS Code", proficiency: "Expert", experience: "2+ years", description: "Advanced usage, extensions, debugging, productivity features" },
        { name: "Postman", proficiency: "Advanced", experience: "2+ years", description: "API testing, collections, environment variables, automation" },
        { name: "npm/yarn", proficiency: "Advanced", experience: "2+ years", description: "Package management, scripts, dependency resolution" },
        { name: "Vite", proficiency: "Proficient", experience: "1+ years", description: "Fast build tool, hot reload, optimization, modern bundling" },
        { name: "Jest & Testing Library", proficiency: "Beginner", experience: "6 months", description: "Unit testing, component testing, test-driven development basics" },
      ]
    },
    {
      id: 4,
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-indigo-500",
      skills: [
        { name: "JavaScript", proficiency: "Advanced", experience: "2+ years", description: "Core language, DOM manipulation, async programming, ES6+ features" },
        { name: "C++", proficiency: "Proficient", experience: "2+ years", description: "Object-oriented programming, data structures, algorithms, competitive programming" },
        { name: "Python", proficiency: "Intermediate", experience: "1+ years", description: "Scripting, basic automation, data processing, syntax fundamentals" },
        { name: "TypeScript", proficiency: "Beginner", experience: "6 months", description: "Type safety, interfaces, basic type definitions in React projects" },
        { name: "HTML5", proficiency: "Expert", experience: "2+ years", description: "Semantic markup, accessibility, modern HTML features, best practices" },
        { name: "CSS3", proficiency: "Advanced", experience: "2+ years", description: "Modern CSS, Flexbox, Grid, animations, responsive design" },
      ]
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

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-mono text-gray-500 tracking-wider">TECHNICAL EXPERTISE</span>
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-2" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Skills &
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Hands-on experience with modern web and mobile technologies, gained through real projects 
            and continuous learning. From MERN stack to React Native development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Navigation */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <div className="space-y-4 sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-6">Skill Categories</h3>
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full p-6 rounded-2xl border transition-all duration-300 text-left group ${
                    selectedCategory === category.id
                      ? 'bg-blue-500/10 border-blue-500/30 shadow-lg shadow-blue-500/10'
                      : 'bg-gray-900/30 border-gray-800/50 hover:border-gray-700/50 hover:bg-gray-900/50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className={`w-6 h-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${
                        selectedCategory === category.id ? 'text-blue-400' : 'text-white'
                      }`}>
                        {category.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {category.skills.length} technologies
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            {(() => {
              const IconComponent = skillCategories[selectedCategory].icon;
              return (
                <div className="bg-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-800/50 p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${skillCategories[selectedCategory].color} bg-opacity-10`}>
                      <IconComponent className={`w-8 h-8 bg-gradient-to-r ${skillCategories[selectedCategory].color} bg-clip-text text-transparent`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {skillCategories[selectedCategory].title}
                      </h3>
                      <p className="text-gray-400">
                        {skillCategories[selectedCategory].skills.length} core technologies
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {skillCategories[selectedCategory].skills.map((skill, idx) => (
                      <div
                        key={skill.name}
                        className={`p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/30 hover:bg-gray-800/50 transition-all duration-500 group ${
                          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${600 + idx * 100}ms` }}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                                {skill.name}
                              </h4>
                              <span className="text-xs text-gray-500 font-mono bg-gray-800/50 px-2 py-1 rounded">
                                {skill.experience}
                              </span>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* Learning Path */}
            <div className={`mt-8 transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-6">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">My Learning Journey</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4">
                    <Brain className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <h5 className="font-semibold text-white mb-1">Akshay Saini's Curriculum</h5>
                    <p className="text-xs text-gray-400">Namaste React & Node.js</p>
                  </div>
                  <div className="text-center p-4">
                    <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <h5 className="font-semibold text-white mb-1">Hands-on Projects</h5>
                    <p className="text-xs text-gray-400">Real applications & hackathons</p>
                  </div>
                  <div className="text-center p-4">
                    <Code className="w-8 h-8 text-sky-400 mx-auto mb-2" />
                    <h5 className="font-semibold text-white mb-1">Industry Experience</h5>
                    <p className="text-xs text-gray-400">ThinkNEXT Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
