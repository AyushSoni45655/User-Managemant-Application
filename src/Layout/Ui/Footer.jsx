import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-300 py-6 mt-10" style={{boxShadow:"var(--footer-shadow)"}}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white">My Website</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
