import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  Smartphone,
  ExternalLink,
} from "lucide-react";

const About = ({ hasAnimated }) => {
  const features = [
    {
      icon: <Code className="w-8 h-8 mb-4 text-black dark:text-white" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code following best practices",
    },
    {
      icon: <Palette className="w-8 h-8 mb-4 text-black dark:text-white" />,
      title: "UI/UX Design",
      description: "Creating intuitive interfaces with attention to detail",
    },
    {
      icon: <Smartphone className="w-8 h-8 mb-4 text-black dark:text-white" />,
      title: "Responsive",
      description:
        "Mobile-first approach ensuring great experience on all devices",
    },
    {
      icon: (
        <ExternalLink className="w-8 h-8 mb-4 text-black dark:text-white" />
      ),
      title: "Performance",
      description: "Optimizing for fast load times and smooth interactions",
    },
  ];

  return (
    <section id="about" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-200 ${
            hasAnimated.about
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-black dark:text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                I'm a passionate frontend developer with 1+ years of experience
                creating exceptional digital experiences. I specialize in React,
                TypeScript, and modern CSS frameworks to build scalable,
                performant applications.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                My journey started with a curiosity for how websites work, and
                it has evolved into a love for crafting pixel-perfect interfaces
                that users enjoy interacting with.
              </p>
              <div className="flex space-x-4">
                <Github className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
                <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  {feature.icon}
                  <h3 className="font-semibold mb-2 text-black dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
