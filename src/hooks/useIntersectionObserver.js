import { useState, useEffect } from "react";

export const useIntersectionObserver = () => {
  const [hasAnimated, setHasAnimated] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          //Animate if the entry hasn't been animated
          if (entry.isIntersecting && !hasAnimated[entry.target.id]) {
            setHasAnimated((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return hasAnimated;
};
