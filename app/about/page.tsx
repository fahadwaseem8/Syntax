"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Logo from "@/components/Logo";

const AboutPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const features = [
    {
      title: "Multiple Language Support",
      description:
        "Write and execute code in JavaScript, Python, C++, Java, and more programming languages.",
      icon: "💻",
    },
    {
      title: "Real-Time Compilation",
      description:
        "Instantly compile and run your code with our cloud-based compiler.",
      icon: "⚡",
    },
    {
      title: "Dark/Light Mode",
      description:
        "Comfortable coding experience with theme switching capability.",
      icon: "🌓",
    },
    {
      title: "Code Examples",
      description:
        "Built-in 'Hello World' examples for each supported programming language.",
      icon: "📚",
    },
  ];

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

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Logo
              className={`w-16 h-16 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            />
          </div>
          <h1
            className={`text-4xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            About Our Online Code Editor
          </h1>
          <p
            className={`text-xl ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            A powerful, cloud-based code editor that lets you write, compile,
            and run code in your browser.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 hover:bg-gray-750"
                  : "border-gray-200 bg-white hover:bg-gray-50"
              } transition-all duration-300 ease-in-out`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {feature.title}
              </h3>
              <p
                className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div
          className={`rounded-lg p-8 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
        >
          <h2
            className={`text-2xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Built With Modern Technology
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Next.js", description: "React Framework" },
              { name: "TypeScript", description: "Type-Safe JavaScript" },
              { name: "CodeMirror", description: "Code Editor Component" },
              { name: "Tailwind CSS", description: "Utility-First CSS" },
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <h3
                  className={`font-semibold mb-1 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {tech.name}
                </h3>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default AboutPage;
