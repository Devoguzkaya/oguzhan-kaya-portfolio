import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { data } from "../data/data";

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const skillsData = data[language].skills;

  return (
    <section id="skills" className="w-full py-12 bg-white dark:bg-gray-900">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-16">
          {skillsData.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {skillsData.skillsList.map((skill, index) => (
            <div key={index} className="space-y-3 text-left">
              <h3 className="text-2xl font-semibold text-[#3730A3] hover:text-[#2d2987] transition-colors">
                {skill.name}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-sm max-w-[300px] leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
