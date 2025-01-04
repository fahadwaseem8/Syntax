"use client";

import { useState } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import axios from "axios";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CodeEditorSection } from "@/components/CodeEditorSection";
import { InputSection } from "@/components/InputSection";
import { OutputSection } from "@/components/OutputSection";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { Language } from "@/types";
import { config } from "@/config/env";
import Logo from "@/components/Logo";

const Home = () => {
  const [code, setCode] = useState("// Write your code here");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    name: "JavaScript",
    extension: javascript,
  });
  const [loading, setLoading] = useState(false);

  const languages: Language[] = [
    { name: "JavaScript", extension: javascript },
    { name: "Python", extension: python },
    { name: "C++", extension: cpp },
    { name: "Java", extension: java },
  ];

  const executeCode = async () => {
    try {
      setLoading(true);
      setOutput("Connecting to virtual compiler...");

      const response = await axios.post("/api/execute", {
        lang: selectedLanguage.name,
        code,
        input,
      });

      setOutput(response.data.output);
    } catch (error) {
      setOutput(
        `Error: ${
          error instanceof Error ? error.message : "An unknown error occurred"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
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
            <div className="space-y-6">
              <CodeEditorSection
                code={code}
                isDarkMode={isDarkMode}
                selectedLanguage={selectedLanguage}
                languages={languages}
                onChange={setCode}
                onLanguageChange={setSelectedLanguage}
              />
              <InputSection
                input={input}
                isDarkMode={isDarkMode}
                onChange={setInput}
              />
            </div>
            <OutputSection
              isDarkMode={isDarkMode}
              loading={loading}
              output={output}
            />
          </div>

          <div className="mt-6">
            <button
              onClick={executeCode}
              disabled={loading}
              className={`px-6 py-3 ${
                loading ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"
              } text-white rounded-lg font-semibold transition-colors flex items-center gap-2`}
            >
              {loading ? (
                <>
                  <LoadingSpinner />
                  Executing...
                </>
              ) : (
                <>
                  Run Code <Logo className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          </div>
        </div>
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Home;
