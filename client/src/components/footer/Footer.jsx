import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => (
  <footer className="w-full mt-auto bg-[#212121] text-white py-8">
    <div className="container flex flex-col items-center mx-auto">
      {/* Logo */}
      {/* <img src={logo} alt="logo" className="w-32 mb-4" /> */}
      <span className="self-center mb-6 text-2xl font-semibold whitespace-nowrap dark:text-white">
        Active Attire
      </span>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-sm">
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Support
        </a>
        <a href="#" className="hover:underline">
          Platform
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex mt-4 space-x-4">
        <a
          href="#"
          className="text-gray-500 transition-colors hover:text-blue-500"
        >
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a
          href="#"
          className="text-gray-500 transition-colors hover:text-blue-500"
        >
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a
          href="#"
          className="text-gray-500 transition-colors hover:text-blue-500"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
      </div>

      {/* Footer Note */}
      <p className="mt-4 text-sm text-gray-400">
        © 2024 Active Attire. All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
