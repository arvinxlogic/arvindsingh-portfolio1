import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 900);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-black via-gray-900 to-blue-950 text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-6 text-4xl md:text-5xl font-mono font-bold tracking-tight flex items-center">
        <span className="text-blue-400">{text}</span>
        <span className="animate-blink ml-1 text-blue-400">|</span>
      </div>
      <div className="w-[220px] h-[3px] bg-gray-800 rounded relative overflow-hidden shadow-inner">
        <div className="w-[40%] h-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
      <div className="mt-8 text-gray-400 text-sm tracking-wide font-mono">
        Loading portfolio...
      </div>
    </div>
  );
};