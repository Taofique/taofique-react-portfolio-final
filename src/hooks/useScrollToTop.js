import { useState, useEffect } from "react";

export const useScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    //Adding smooth scrolling to HTML element
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      //Clean up smooth scroll on unmount
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return showScrollTop;
};
