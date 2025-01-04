import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { githubLight } from "@uiw/codemirror-theme-github";
import { Language } from "@/types";
import { LanguageSelector } from "./LanguageSelector";

type CodeEditorSectionProps = {
  code: string;
  isDarkMode: boolean;
  selectedLanguage: Language;
  languages: Language[];
  onChange: (value: string) => void;
  onLanguageChange: (language: Language) => void;
};

export const CodeEditorSection = ({
  code,
  isDarkMode,
  selectedLanguage,
  languages,
  onChange,
  onLanguageChange,
}: CodeEditorSectionProps) => (
  <div
    className={`rounded-lg overflow-hidden border ${
      isDarkMode ? "border-gray-700" : "border-gray-200"
    }`}
  >
    <div
      className={`p-3 ${
        isDarkMode ? "bg-gray-800" : "bg-gray-100"
      } flex justify-between items-center`}
    >
      <h2
        className={`font-semibold ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Code Editor
      </h2>
      <LanguageSelector
        selectedLanguage={selectedLanguage}
        languages={languages}
        isDarkMode={isDarkMode}
        onLanguageChange={onLanguageChange}
      />
    </div>
    <CodeMirror
      value={code}
      height="400px"
      theme={isDarkMode ? dracula : githubLight}
      extensions={[selectedLanguage.extension()]}
      onChange={onChange}
    />
  </div>
);
