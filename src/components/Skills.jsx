import React from "react";
import { skills } from "../data/skills";

const Skills = ({ hasAnimated }) => {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-black dark:text-white">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-black dark:text-white">
                {skillGroup.category}
              </h3>

              <div className="space-y-3">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-black dark:bg-white rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
