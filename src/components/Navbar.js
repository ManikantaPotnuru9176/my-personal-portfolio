import { Bio } from "../../constants";
import Link from "next/link";
import { useState, useMemo } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigationLinks = useMemo(
    () => [
      { text: "About", href: "#about" },
      { text: "Skills", href: "#skills" },
      { text: "Experience", href: "#experience" },
      { text: "Projects", href: "#projects" },
      { text: "Education", href: "#education" },
    ],
    []
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevIsMobileMenuOpen) => !prevIsMobileMenuOpen);
  };

  const primaryTextStyles = `text-while dark:text-white hover:text-primary hover:text-primary  dark:hover:text-primary`;
  const githubButtonStyles = `hidden md:flex border-2 border-primary flex items-center h-10 rounded-full px-4 hover:bg-primary hover:text-white transition duration-1000 font-semibold text-while dark:text-primary dark:hover:text-white`;

  const renderNavigationLinks = () =>
    navigationLinks.map(({ text, href }) => (
      <li key={text}>
        <Link href={href}>
          <span className={primaryTextStyles} onClick={toggleMobileMenu}>
            {text}
          </span>
        </Link>
      </li>
    ));

  return (
    <nav className="bg-white dark:bg-backgroundNavbar px-6 py-8 ring-1 ring-slate-900/5 shadow-xl h-16 flex items-center justify-center font-semibold sticky top-0 z-10 transition duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto flex justify-between items-center w-full px-6">
        <Link href="/">
          <span className="w-12 h-12 flex items-center justify-center border-2 border-primary rounded-full text-black dark:text-white transition duration-200">
            MP
          </span>
        </Link>

        <ul className="hidden md:flex gap-8">{renderNavigationLinks()}</ul>

        <a
          href={Bio.github}
          target="_blank"
          rel="noopener noreferrer"
          className={githubButtonStyles}
          aria-label="GitHub Profile"
        >
          GitHub Profile
        </a>

        <button
          className={`ml-4 md:hidden border-2 border-primary rounded-full p-2 focus:outline-none`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Mobile Menu"
        >
          <svg
            className={`w-6 h-6 text-primary dark:text-white transition duration-200 hover:text-primary dark:hover:text-primary`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 w-full bg-card_light dark:bg-card_dark border-t-2 border-primary">
          <ul className="flex flex-col items-center gap-4 p-4">
            {renderNavigationLinks()}
            <a
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-2 border-primary flex items-center h-10 rounded-full px-4 ${primaryTextStyles}`}
            >
              GitHub Profile
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
