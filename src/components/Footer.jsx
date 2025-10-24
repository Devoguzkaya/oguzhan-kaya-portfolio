import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { data } from "../data/data";

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const footerData = data[language]?.footer;

  if (!footerData) {
    console.error("Footer data not found for language:", language);
    return null;
  }

  return (
    <footer className="w-full py-12 bg-[#F9F9F9] dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col gap-10">
        <div className="text-left max-w-sm">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {footerData.title}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm">
          <a
            href={`mailto:${footerData.email}`}
            className="text-[#AF0C48] font-medium text-lg underline decoration-2 hover:text-[#b91c1c] transition-colors flex items-center gap-2 mb-4 md:mb-0"
          >
            👉 {footerData.email}
          </a>
          <div className="flex gap-4">
            <a
              href={footerData.socialLinks.blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A0A14] hover:text-accent transition-colors"
            >
              {footerData.socialLinks.blog.text}
            </a>
            <a
              href={footerData.socialLinks.github.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              {footerData.socialLinks.github.text}
            </a>

            <a
              href={footerData.socialLinks.linkedin.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {footerData.socialLinks.linkedin.text}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
