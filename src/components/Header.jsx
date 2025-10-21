import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { data } from "../data/data";
import { handleHireRequest } from "../utils/api";

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const headerData = data[language].header;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 flex flex-col items-center transition-colors duration-600">
      {/* 🔹 Üst Satır: Tema ve Dil Değiştirici */}
      <div className="w-full max-w-[1100px] flex justify-end items-center text-xs font-medium text-gray-700 dark:text-gray-300 py-3">
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <div
            onClick={toggleTheme}
            className="flex items-center cursor-pointer select-none"
          >
            {/* Switch */}
            <div
              className={`relative w-10 h-5 rounded-full transition-colors duration-300 
                ${theme === "dark" ? "bg-[#3730A3]" : "bg-gray-300"}`}
            >
              <div
                className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 
                  ${theme === "dark" ? "bg-[#FFE86E] translate-x-5" : "bg-white translate-x-0"}`}
              ></div>
            </div>
            {/* Label */}
            <span className="ml-2 uppercase tracking-wide text-[11px]">
              DARK MODE
            </span>
          </div>

          {/* Divider */}
          <span className="text-gray-300">|</span>

          {/* Language Switch */}
          <button
            onClick={toggleLanguage}
            className="uppercase text-[11px] tracking-wide text-[#3730A3] hover:text-[#3730A3] transition-colors"
          >
            {language === "en" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
          </button>
        </div>
      </div>

      {/* 🔹 Alt Satır: Logo + Navigasyon + Hire Me */}
      <div className="w-full max-w-[1100px]  py-3 px-8 flex justify-between items-center transition-colors duration-300">
        {/* Logo */}
        <div className="w-9 h-9 flex items-center justify-center bg-[#EEEBFF] text-[#7B61FF] font-bold rounded-full text-lg shadow-sm transform rotate-30">
          A
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-10">
          <nav className="flex items-center space-x-10 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
            <a className="hover:text-[#3730A3] dark:hover:text-[#3730A3] transition-colors">
              {headerData.skills}
            </a>
            <a
              href="#projects"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              {headerData.projects}
            </a>
          </nav>

          {/* Hire Me Button */}
          <button
            onClick={() => handleHireRequest(data[language].hero.name, data[language].footer.email)}
            className="text-sm font-medium border border-[#3730A3] text-[#3730A3] 
                             hover:bg-[#3730A3] hover:text-white 
                             px-5 py-1.5 rounded-md transition-colors duration-300 cursor-pointer"
          >
            {headerData.hireMe}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
