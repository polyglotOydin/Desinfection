import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Language() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  // Function to toggle language selection menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Setting initial language based on localStorage or defaulting to "en"
  const initialLanguage =
    typeof window !== "undefined"
      ? localStorage.getItem("i18nextLngOne") || "eng"
      : "uz";

  // State to hold the selected language
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  // Effect to update i18n language and localStorage when selected language changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      i18n.changeLanguage(selectedLanguage);
      localStorage.setItem("i18nextLngOne", selectedLanguage);
    }
  }, [selectedLanguage, i18n]);

  // Function to handle language change
  const onChangeLanguage = (value) => {
    setSelectedLanguage(value);
  };

  return (
    <div className="custom-dropdown" onClick={toggleMenu}>
      {/* Language selection dropdown */}
      <select className="lang_option" onChange={(e) => onChangeLanguage(e.target.value)} value={selectedLanguage}>
        <option className="lang_option" value="eng">English</option>
        <option className="lang_option" value="ru">Русский</option>
        <option className="lang_option" value="uz">Ўзбекча</option>
      </select>
    </div>
  );
}

export default Language;
