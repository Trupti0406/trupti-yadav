import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaGithub,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to check if the user has scrolled to the bottom
  const checkScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Show footer if the user is within 100px of the bottom
    if (documentHeight - (scrollTop + windowHeight) < 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 bg-[#050816] py-4 px-8 flex justify-between items-center  ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}>
      {/* Left Text */}
      <p className="text-white text-sm font-medium">
        Made with ❤️ by{" "}
        <a
          href="https://www.linkedin.com/in/trupti-yadav/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline">
          Trupti
        </a>
      </p>

      {/* Icons */}
      <div className="flex space-x-6">
        <a
          href="https://x.com/trupti__yadav"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#915EFF] transition-colors duration-300">
          <BsTwitterX size={20} />
        </a>
    
        <a
          href="https://www.linkedin.com/in/trupti-yadav/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#915EFF] transition-colors duration-300">
          <FaLinkedin size={20} />
        </a>
        <a
          href="mailto:truptivijayyadav27@gmail.com"
          className="text-white hover:text-[#915EFF] transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer">
          <FaEnvelope size={20} />
        </a>
        <a
          href="https://github.com/Trupti0406"
          className="text-white hover:text-[#915EFF] transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub size={20} />
        </a>
        <a
          href="tel:+91 9326969164"
          className="text-white hover:text-[#915EFF] transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer">
          <FaPhone size={20} />
        </a>
        
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "footer");
