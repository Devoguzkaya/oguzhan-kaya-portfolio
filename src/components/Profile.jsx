import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { data } from "../data/data";

const Profile = () => {
  const { language } = useContext(LanguageContext);
  const profileData = data[language]?.profile || data.en?.profile;

  if (!profileData) {
    console.error("❌ Profile data not found for language:", language);
    return (
      <div className="text-center text-red-500 py-20">
        Profile data could not be loaded.
      </div>
    );
  }

  return (
    <section
      id="profile"
      className="w-full py-12 transition-colors duration-300"
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          {profileData.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-[#3730A3] mb-6">
              {profileData.title}
            </h3>

            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              {[
                [profileData.birthDate, profileData.birthDateValue],
                [profileData.city, profileData.cityValue],
                [profileData.education, profileData.educationValue],
                [profileData.role, profileData.roleValue],
              ].map(([label, value], i) => (
                <div key={i} className="grid grid-cols-[160px_1fr] gap-2">
                  <p className="font-semibold">{label}</p>
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#3730A3] mb-6">
              {profileData.aboutMe}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {profileData.aboutMeText1}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {profileData.aboutMeText2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
