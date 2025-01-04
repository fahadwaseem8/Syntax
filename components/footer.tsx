"use client";

import Logo from "./Logo";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer = ({ isDarkMode }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`w-full ${
        isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"
      } border-t`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-2">
            <Logo className={isDarkMode ? "text-white" : "text-gray-800"} />
            <span
              className={`font-semibold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Syntaxio
            </span>
            <span
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              © {currentYear}
            </span>
          </div>

          {/* Links */}
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a
              href="https://github.com/fahadwaseem8/Syntaxio"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              } hover:underline`}
            >
              GitHub
            </a>
            <a
              href="/about"
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              } hover:underline`}
            >
              About
            </a>
            <a
              href="/privacypolicy"
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              } hover:underline`}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
