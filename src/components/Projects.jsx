import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { data } from "../data/data";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const projectsData = data[language].projects;

  return (
    <section id="projects" className="w-full py-12 transition-colors duration-600">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-left">
          {projectsData.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projectsList.map((project, index) => (
            <div
              key={index}
              className="py-6 rounded-lg bg-white dark:bg-gray-800 transition-shadow duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-[#E0E0FF] text-[#3730A3] text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-auto">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3730A3] hover:text-[#2d2987] font-medium"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3730A3] hover:text-[#2d2987] font-medium"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
