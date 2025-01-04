"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

type HeaderProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const Header = ({ isDarkMode, toggleTheme }: HeaderProps) => {
  const pathname = usePathname();

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`px-4 py-2 rounded-lg transition-colors ${
          isDarkMode
            ? `${
                isActive
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`
            : `${
                isActive
                  ? "bg-gray-200 text-gray-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <header
      className={`border-b ${
        isDarkMode ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <Logo
                className={`w-8 h-8 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              />
              <span
                className={`text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Syntaxio
              </span>
            </Link>
            <nav className="hidden md:flex space-x-2">
              <NavLink href="/">Editor</NavLink>
              <NavLink href="/about">About</NavLink>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                isDarkMode
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {isDarkMode ? "🌞" : "🌙"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex space-x-2 mt-4">
          <NavLink href="/">Editor</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
