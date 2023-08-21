import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Bio } from "../../constants";

const Footer = () => {
  const socialLinks = [
    { icon: <FacebookIcon />, link: Bio.facebook },
    { icon: <TwitterIcon />, link: Bio.twitter },
    { icon: <LinkedInIcon />, link: Bio.linkedin },
    { icon: <InstagramIcon />, link: Bio.insta },
  ];

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
  ];

  return (
    <div className="w-full bg-[#15151e] py-8 flex justify-center">
      <div className="max-w-7xl flex flex-col items-center text-white px-4">
        <h1 className="font-semibold text-xl md:text-2xl mb-2">
          Manikanta Potnuru
        </h1>
        <nav className="max-w-md w-full flex flex-wrap justify-center gap-4 text-lg md:text-xl mb-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex space-x-4 text-2xl md:text-3xl mb-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-sm md:text-base text-gray-300 text-center">
          &copy; 2023 Manikanta Potnuru. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
