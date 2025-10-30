import { useState, useEffect, useRef } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Phone, Calendar, ArrowRight, Heart, CheckCircle } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const sectionRef = useRef(null);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      info: "arvindsinghxz@gmail.com",
      subtitle: "Best way to reach me",
      action: "mailto:arvindsinghxz@gmail.com",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Github,
      title: "GitHub",
      info: "@arvinxlogic",
      subtitle: "Check out my repositories",
      action: "https://github.com/arvinxlogic",
      color: "from-gray-400 to-slate-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      info: "arvindsingh2213",
      subtitle: "Let's connect professionally",
      action: "https://linkedin.com/in/arvindsingh2213",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+91 9417763706",
      subtitle: "Available for calls",
      action: "tel:+919417763706",
      color: "from-sky-400 to-cyan-500"
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Portfolio Contact");
    const body = encodeURIComponent(`Hi Arvind,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`);
    
    const mailtoUrl = `mailto:arvindsinghxz@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoUrl;
    
    // Simulate sending process
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1000);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
        
        {/* Geometric patterns */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-500/10 rotate-45" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border border-sky-500/10 rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-block mb-6">
            <span className="text-sm font-mono text-gray-500 tracking-wider">GET IN TOUCH</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-2" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Create
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Have an exciting project in mind? Looking for a MERN stack developer or React Native expert? 
            I'd love to hear about your ideas and help bring them to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl" />
              <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50">
                <h3 className="text-2xl font-bold text-white mb-8">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800 transition-all duration-300"
                        placeholder="Your Name"
                        disabled={sending}
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800 transition-all duration-300"
                        placeholder="Your Email"
                        disabled={sending}
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800 transition-all duration-300"
                      placeholder="Project Subject"
                      disabled={sending}
                    />
                  </div>
                  
                  <div className="relative">
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, requirements, and timeline..."
                      disabled={sending}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={sending || sent}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                      sent
                        ? 'bg-green-500 text-white cursor-default'
                        : sending
                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02]'
                    }`}
                  >
                    {sent ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Opening Email Client...</span>
                      </>
                    ) : sending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
                        <span>Preparing Email...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">Other ways to connect</h3>
              
              {contactMethods.map((method, idx) => (
                <a
                  key={method.title}
                  href={method.action}
                  target={method.action.startsWith('http') ? '_blank' : '_self'}
                  rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`group flex items-center space-x-6 p-6 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:scale-[1.02] ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + idx * 100}ms` }}
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${method.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className={`w-6 h-6 bg-gradient-to-r ${method.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text' }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {method.title}
                    </h4>
                    <p className="text-gray-300 font-medium">{method.info}</p>
                    <p className="text-gray-500 text-sm">{method.subtitle}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className={`grid grid-cols-1 gap-6 transition-all duration-1000 delay-800 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              {/* Availability Status */}
              <div className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                  </div>
                  <span className="text-green-400 font-semibold">Available for new opportunities</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Currently seeking full-time roles, internships, and freelance projects. 
                  Typical response time: Within 24 hours.
                </p>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800/50 text-center">
                  <MapPin className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400 text-sm">Jalandhar, Punjab, IN</p>
                </div>
                <div className="p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800/50 text-center">
                  <Calendar className="w-5 h-5 text-sky-400 mx-auto mb-2" />
                  <p className="text-white font-medium">Timezone</p>
                  <p className="text-gray-400 text-sm">UTC+5:30 (IST)</p>
                </div>
              </div>
            </div>

            {/* Experience Highlight */}
            <div className={`mt-12 transition-all duration-1000 delay-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <div className="relative p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl border border-blue-500/20">
                <div className="text-4xl text-blue-500/30 mb-4">"</div>
                <blockquote className="text-lg text-gray-300 italic leading-relaxed mb-4">
                  From hackathon finalist to building real-world applications with MERN stack and 
                  React Native. I'm passionate about creating solutions that make a difference.
                </blockquote>
                <div className="text-right">
                  <cite className="text-blue-400 font-medium">- Arvind Singh</cite>
                  <p className="text-gray-500 text-sm">MERN Stack & React Native Developer</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className={`text-center pt-8 transition-all duration-1000 delay-1200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              <p className="text-gray-400 mb-4">Ready to build something amazing together?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
  href="/resume.pdf"  // This will point to public/resume.pdf
  download="Arvind_Singh_Resume.pdf"  // Suggested filename for download
  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
>
  <span>Download Resume</span>
</a>

                <a
                  href="https://github.com/arvinxlogic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500/10 hover:scale-105 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span>View Projects</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
