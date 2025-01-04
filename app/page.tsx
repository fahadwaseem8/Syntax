"use client";

import { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { githubLight } from "@uiw/codemirror-theme-github";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";

type Language = {
  name: string;
  extension: any;
};

const Home = () => {
  const [code, setCode] = useState("// Write your code here");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    name: "JavaScript",
    extension: javascript,
  });

  const languages: Language[] = [
    { name: "JavaScript", extension: javascript },
    { name: "Python", extension: python },
    { name: "C++", extension: cpp },
    { name: "Java", extension: java },
  ];

  const onChange = (value: string) => {
    setCode(value);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Online Code Editor
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Code Editor */}
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
                  <select
                    value={selectedLanguage.name}
                    onChange={(e) => {
                      const lang = languages.find(
                        (l) => l.name === e.target.value
                      );
                      if (lang) setSelectedLanguage(lang);
                    }}
                    className={`px-3 py-1 rounded-md ${
                      isDarkMode
                        ? "bg-gray-700 text-white border-gray-600"
                        : "bg-white text-gray-800 border-gray-300"
                    } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    {languages.map((lang) => (
                      <option key={lang.name} value={lang.name}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
                <CodeMirror
                  value={code}
                  height="400px"
                  theme={isDarkMode ? dracula : githubLight}
                  extensions={[selectedLanguage.extension()]}
                  onChange={onChange}
                />
              </div>

              {/* Input Box */}
              <div
                className={`rounded-lg overflow-hidden border ${
                  isDarkMode ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <div
                  className={`p-3 ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <h2
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Input
                  </h2>
                </div>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className={`w-full h-32 p-4 resize-none focus:outline-none ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-100"
                      : "bg-white text-gray-800"
                  }`}
                  placeholder="Enter input here..."
                />
              </div>
            </div>

            {/* Right Column - Output */}
            <div
              className={`rounded-lg overflow-hidden border ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div
                className={`p-3 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
              >
                <h2
                  className={`font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  Output
                </h2>
              </div>
              <div
                className={`h-[calc(100%-48px)] p-4 ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-100"
                    : "bg-white text-gray-800"
                }`}
              >
                {output || "Output will appear here..."}
              </div>
            </div>
          </div>

          {/* Run Button */}
          <div className="mt-6">
            <button
              onClick={() => {
                // Add your code execution logic here
                setOutput("Code execution result will appear here");
              }}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
            >
              Run Code ▶️
            </button>
          </div>
        </div>
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;
