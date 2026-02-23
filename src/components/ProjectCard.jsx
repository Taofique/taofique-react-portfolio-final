import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  const hasGithub = project.github && project.github.trim() !== "";
  const hasDemo = project.demo && project.demo.trim() !== "";

  return (
    <div className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML += `<div class="text-6xl font-bold text-gray-300 dark:text-gray-500 absolute inset-0 flex items-center justify-center">${project.title.charAt(0)}</div>`;
            }}
          />
        ) : (
          <div className="text-6xl font-bold text-gray-300 dark:text-gray-500 w-full h-full flex items-center justify-center">
            {project.title.charAt(0)}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm flex-grow">
          {project.description}
        </p>

        <div className="flex space-x-4 mt-auto">
          {hasGithub ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm transition-colors"
            >
              <Github className="w-4 h-4 mr-1" /> Code
            </a>
          ) : (
            <span className="flex items-center text-gray-400 dark:text-gray-600 text-sm cursor-not-allowed">
              <Github className="w-4 h-4 mr-1" /> Code
            </span>
          )}

          {hasDemo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-1" /> Demo
            </a>
          ) : (
            <span className="flex items-center text-gray-400 dark:text-gray-600 text-sm cursor-not-allowed">
              <ExternalLink className="w-4 h-4 mr-1" /> Demo
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
