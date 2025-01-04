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
      className={`flex min-h-screen flex-col ${
        isDarkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      <main className="container mx-auto flex-grow px-4 py-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex justify-center">
            <Logo
              className={`h-16 w-16 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            />
          </div>
          <h1
            className={`mb-4 text-4xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            About Our Online Code Editor
          </h1>
          <p
            className={`text-xl ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } mx-auto max-w-2xl`}
          >
            A powerful, cloud-based code editor that lets you write, compile,
            and run code in your browser.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-lg border p-6 ${
                isDarkMode
                  ? "hover:bg-gray-750 border-gray-700 bg-gray-800"
                  : "border-gray-200 bg-white hover:bg-gray-50"
              } transition-all duration-300 ease-in-out`}
            >
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3
                className={`mb-2 text-xl font-semibold ${
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
            className={`mb-6 text-2xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Built With Modern Technology
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { name: "Next.js", description: "React Framework" },
              { name: "TypeScript", description: "Type-Safe JavaScript" },
              { name: "CodeMirror", description: "Code Editor Component" },
              { name: "Tailwind CSS", description: "Utility-First CSS" },
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <h3
                  className={`mb-1 font-semibold ${
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
