import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const hasAnimated = useIntersectionObserver();
  const showScrollTop = useScrollToTop();

  // 🌙 Theme State
  const [darkMode, setDarkMode] = useState(true);

  // 🧠 Detect system theme on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // 💾 Apply theme + save choice
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-950 dark:text-white">
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero hasAnimated={hasAnimated} />
      <About hasAnimated={hasAnimated} />
      <Projects hasAnimated={hasAnimated} />
      <Skills hasAnimated={hasAnimated} />
      <Contact hasAnimated={hasAnimated} />
      <Footer />
      <ScrollToTop showScrollTop={showScrollTop} />
    </div>
  );
};

export default App;
