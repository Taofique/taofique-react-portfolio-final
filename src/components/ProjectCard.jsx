import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
        <div className="text-6xl font-bold text-gray-300 dark:text-gray-500">
          {project.title.charAt(0)}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
          {project.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm flex-grow">
          {project.description}
        </p>

        <div className="flex space-x-4 mt-auto">
          <a
            href={project.github}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm"
          >
            <Github className="w-4 h-4 mr-1" /> Code
          </a>

          <a
            href={project.demo}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm"
          >
            <ExternalLink className="w-4 h-4 mr-1" /> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
