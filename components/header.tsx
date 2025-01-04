"use client";

import Link from "next/link";
import Logo from "./Logo";

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header = ({ isDarkMode, toggleTheme }: HeaderProps) => {
  return (
    <header
      className={`w-full ${
        isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      } border-b`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className={`flex items-center space-x-2 text-xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              <Logo className={isDarkMode ? "text-white" : "text-gray-800"} />
              <span>Syntaxio</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link
                href="/code"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                Editor
              </Link>
              <Link
                href="/templates"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                Templates
              </Link>
              <Link
                href="/about"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors`}
              >
                About
              </Link>
            </nav>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
