import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { data } from "../data/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { handleHireRequest } from "../utils/api";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const heroData = data[language].hero;

  return (
    <section className="mt-24 max-w-[1440px] mx-auto px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between transition-colors duration-300">
      <div className="md:w-1/2 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-[1px] bg-[#3730A3]" />
          <p className="text-[#3730A3] font-semibold uppercase text-sm tracking-wide">
            {heroData.name}
          </p>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          {heroData.title}, {heroData.subtitle}
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-md">
          {heroData.description}
        </p>

        {/* Butonlar */}
        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={() =>
              handleHireRequest(heroData.name, data[language].footer.email)
            }
            className="bg-[#3730A3] text-white font-medium px-8 py-3 rounded-md hover:bg-[#2d2987] transition-colors duration-300"
          >
            {heroData.buttonHire}
          </button>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#3730A3] text-[#3730A3] font-medium px-7 py-3 rounded-md hover:bg-[#3730A3] hover:text-white transition-colors duration-300"
          >
            <FaGithub className="text-2xl" />
            Github
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#3730A3] text-[#3730A3] font-medium px-7 py-3 rounded-md hover:bg-[#3730A3] hover:text-white transition-colors duration-300"
          >
            <FaLinkedin className="text-2xl" />
            Linkedin
          </a>
        </div>
      </div>

      {/* Sağ taraf */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0">
        <img
          src="/images/Oguzhan.png"
          alt="Oğuzhan Kaya"
          className="w-[476px] h-[375px] rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg object-cover object-top"
        />
      </div>
    </section>
  );
};

export default Hero;
