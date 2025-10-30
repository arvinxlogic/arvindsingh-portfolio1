import { useState, useEffect } from "react";
import profilePhoto from '../assets/Images/arvind-photo.jpg';


// LoadingScreen Component
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("");
  const [dots, setDots] = useState("");
  const fullText = "Initializing Portfolio Experience";


  useEffect(() => {
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onComplete(), 600);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 80);


    // Animate typing text
    let textIndex = 0;
    const textInterval = setInterval(() => {
      setText(fullText.substring(0, textIndex));
      textIndex++;
      if (textIndex > fullText.length) {
        clearInterval(textInterval);
      }
    }, 100);


    // Animate loading dots
    const dotsInterval = setInterval(() => {
      setDots(prev => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);


    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearInterval(dotsInterval);
    };
  }, [onComplete]);


  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-ping" 
             style={{ animationDelay: '0s', animationDuration: '2s' }} />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-sky-500 rounded-full animate-ping" 
             style={{ animationDelay: '0.5s', animationDuration: '2s' }} />
        <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping" 
             style={{ animationDelay: '1s', animationDuration: '2s' }} />
        
        {/* Animated lines */}
        <div className="absolute top-1/3 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
        <div className="absolute bottom-1/3 right-0 w-40 h-0.5 bg-gradient-to-l from-transparent via-sky-500 to-transparent animate-pulse" 
             style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="text-center z-10 max-w-lg mx-auto px-6">
        {/* Logo/Brand - BIGGER PROFESSIONAL PHOTO */}
        <div className="mb-12">
          <div className="w-32 h-32 md:w-36 md:h-36 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl shadow-blue-500/30 animate-pulse border-4 border-blue-500/50">
            <img 
              src={profilePhoto}
              alt="Arvind Singh"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Arvind Singh
            </span>
          </h1>
          
          <div className="font-mono text-gray-400 text-sm md:text-base min-h-[24px] mb-8">
            {text}<span className="animate-pulse">|</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full max-w-xs mx-auto mb-6">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Loading</span>
            <span>{Math.round(progress)}%</span>
          </div>
          
          <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="text-xs text-gray-500 font-mono">
          Please wait{dots}
        </div>
      </div>


      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage: `
               linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
             `,
             backgroundSize: '30px 30px'
           }} />
    </div>
  );
};
export default LoadingScreen;
