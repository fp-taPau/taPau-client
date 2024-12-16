import React from "react";
import Link from "next/link";

const Header = ({
  logoUrl = "/assets/image/header-logo.png", // Default logo path in public folder
  links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}) => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-2">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2 w-35">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt="Logo"
              className="bg-slate-400 object-contain"
            />
          ) : (
            <h1>Missing Image</h1>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button (Optional) */}
        <div className="md:hidden">
          <button
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
