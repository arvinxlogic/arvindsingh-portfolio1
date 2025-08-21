import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-gradient-to-br from-black via-gray-900 to-blue-950 text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main className="pt-20 max-w-5xl mx-auto px-4">
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        <footer className="text-center py-8 text-gray-500 text-sm border-t border-white/10 mt-12">
          &copy; {new Date().getFullYear()} pedro<span className="text-blue-500">.tech</span> &mdash; All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;