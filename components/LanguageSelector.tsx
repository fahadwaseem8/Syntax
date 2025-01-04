import { Language } from "@/types";

type LanguageSelectorProps = {
  selectedLanguage: Language;
  languages: Language[];
  isDarkMode: boolean;
  onLanguageChange: (language: Language) => void;
};

export const LanguageSelector = ({
  selectedLanguage,
  languages,
  isDarkMode,
  onLanguageChange,
}: LanguageSelectorProps) => (
  <select
    value={selectedLanguage.name}
    onChange={(e) => {
      const lang = languages.find((l) => l.name === e.target.value);
      if (lang) onLanguageChange(lang);
    }}
    className={`rounded-md px-3 py-1 ${
      isDarkMode
        ? "border-gray-600 bg-gray-700 text-white"
        : "border-gray-300 bg-white text-gray-800"
    } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
  >
    {languages.map((lang) => (
      <option key={lang.name} value={lang.name}>
        {lang.name}
      </option>
    ))}
  </select>
);
