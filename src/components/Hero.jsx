import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { data } from "../data/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { handleHireRequest } from "../utils/api";

const Hero = () => {
  const { language } = useContext(LanguageContext);
  const heroData = data[language].hero;

  return (
    <section className="mt-24 w-full py-12 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between max-w-[1440px] mx-auto transition-colors duration-600">
      {/* SOL TARAF */}
      <div className="max-w-xl md:w-1/2 text-left space-y-6">
        {/* İsim + Çizgi */}
        <div className="flex items-center gap-3 mb-2">
          <div className="h-[1px] w-12 bg-[#3730A3]"></div>
          <p className="text-[#3730A3] font-semibold tracking-wide uppercase text-sm">
            {heroData.name}
          </p>
        </div>

        {/* Başlık */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          <span className="block">{heroData.title}</span>
          <span className="block">{heroData.subtitle}</span>
        </h1>

        {/* Açıklama */}
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md leading-relaxed">
          {heroData.description}
        </p>

        {/* Butonlar */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          {/* Hire Me */}
          <button
            onClick={() =>
              handleHireRequest(heroData.name, data[language].footer.email)
            }
            className="bg-[#3730A3] text-white font-medium px-8 py-3 rounded-md hover:bg-[#2d2987] transition-all"
          >
            {heroData.buttonHire}
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#3730A3] text-[#3730A3] font-medium px-7 py-3 rounded-md hover:bg-[#3730A3] hover:text-white transition-all"
          >
            <FaGithub className="text-lg" />
            Github
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#3730A3] text-[#3730A3] font-medium px-7 py-3 rounded-md hover:bg-[#3730A3] hover:text-white transition-all"
          >
            <FaLinkedin className="text-lg" />
            Linkedin
          </a>
        </div>
      </div>

      {/* SAĞ TARAF */}
      <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 w-[476px] h-[375px]">
          <img
            src="/images/Oguzhan.png"
            alt="Oğuzhan Kaya"
            className="object-cover object-top w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
