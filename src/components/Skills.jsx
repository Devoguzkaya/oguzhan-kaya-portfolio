import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { data } from "../data/data";

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const skillsData = data[language]?.skills || data.en.skills;

  return (
    <section
      id="skills"
      className="w-full py-20 transition-colors duration-300"
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          {skillsData.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.skillsList.map((skill, i) => (
            <div
              key={i}
              className="p-2 rounded-md transition-all duration-300 hover:bg-gray-50 hover:dark:bg-gray-800"
            >
              <h3 className="text-lg font-semibold text-[#3730A3] mb-1">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
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
