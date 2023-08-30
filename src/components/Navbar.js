import React, { useState } from "react";
import Link from "next/link";
import { Bio } from "@/data/constants";

const Navbar = () => {
  const [mobileViewOpen, setMobileViewOpen] = useState(false);

  const navigationLinks = [
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Education", href: "#education" },
    { text: "Contact Me", href: "#contact" },
  ];

  return (
    <nav className="bg-white dark:bg-backgroundPrimary fixed w-full z-20 top-0 left-0 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <span className="w-14 h-14 flex items-center justify-center border-2 border-primary rounded-full text-black self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MP
          </span>
        </Link>
        <div className="flex md:order-2">
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener"
            aria-label="Github Profile"
            className="border-2 border-primary flex items-center h-10 rounded-full px-4 md:transition duration-500 text-primary md:dark:hover:text-white md:dark:hover:bg-primary"
          >
            Github Profile
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={mobileViewOpen ? "true" : "false"}
            onClick={() => setMobileViewOpen(!mobileViewOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            mobileViewOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-backgroundPrimary rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-backgroundPrimary md:dark:bg-backgroundPrimary dark:border-primary">
            {navigationLinks.map(({ text, href }) => (
              <li key={text}>
                <Link
                  href={href}
                  className="block py-2 pl-3 pr-4 text-black transition duration-300 dark:text-white rounded md:bg-transparent md:text-primary md:p-0 md:hover:text-primary md:hover:dark:text-primary "
                  aria-current="page"
                  onClick={() => setMobileViewOpen(!mobileViewOpen)}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
