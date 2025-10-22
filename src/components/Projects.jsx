import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { data } from "../data/data";

const Projects = () => {
  const { language } = useContext(LanguageContext);
  const projectsData = data[language]?.projects || data.en.projects;

  return (
    <section
      id="projects"
      className="w-full py-20 transition-colors duration-300"
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          {projectsData.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.projectsList.map((project, i) => (
            <div
              key={i}
              className="p-4 rounded-lg border border-transparent hover:border-[#3730A3]/30 hover:shadow-md transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#3730A3] dark:text-white mb-3">
                {project.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, j) => (
                  <span
                    key={j}
                    className="text-[#3730A3] text-xs font-medium border border-[#3730A3]/40 px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center text-sm font-medium">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3730A3] hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3730A3] hover:underline"
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
