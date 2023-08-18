import { useTheme } from "next-themes";
import { Bio } from "../../constants";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const navigationLinks = [
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Education", href: "#education" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-backgroundNavbar px-6 py-8 ring-1 ring-slate-900/5 shadow-xl h-16 flex items-center justify-center font-semibold sticky top-0 z-10 transition duration-300 ease-in-out">
      <div className="max-w-6xl mx-auto flex justify-between items-center w-full px-4">
        <Link href="/">
          <span className="w-12 h-12 flex items-center justify-center border-2 border-primary rounded-full text-black dark:text-white transition duration-200">
            MP
          </span>
        </Link>

        <ul className="hidden md:flex gap-8">
          {navigationLinks.map((link) => (
            <li key={link.text}>
              <Link href={link.href}>
                <span
                  className={`text-black dark:text-white cursor-pointer transition duration-200 hover:text-primary dark:hover:text-primary`}
                >
                  {link.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* GitHub profile link */}
        <a
          href={Bio.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`border-2 border-primary hidden md:flex items-center h-10 rounded-full px-4 hover:bg-primary hover:text-white transition duration-1000 font-semibold text-while dark:text-primary dark:hover:text-white`}
        >
          GitHub Profile
        </a>

        <button
          className={`ml-4 md:hidden border-2 border-primary rounded-full p-2 focus:outline-none`}
          onClick={toggleMobileMenu}
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
            {navigationLinks.map((link) => (
              <li key={link.text}>
                <Link href={link.href}>
                  <span
                    className={`text-black dark:text-white cursor-pointer transition duration-200 hover:text-primary dark:hover:text-primary`}
                    onClick={toggleMobileMenu}
                  >
                    {link.text}
                  </span>
                </Link>
              </li>
            ))}
            <a
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-2 border-primary flex items-center h-10 rounded-full px-4 hover:bg-primary hover:text-white transition duration-1000 font-semibold text-while dark:text-primary dark:hover:text-white`}
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
