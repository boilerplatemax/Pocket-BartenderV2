import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdWineBar as Logo, MdOutlineWineBar as HoverLogo, MdArrowUpward as UpArrow } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

interface NavigationProps {
  resetSearch: () => void;
  scrollToTopHandler: () => void;
}

export default function Navigation({ resetSearch, scrollToTopHandler }: NavigationProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hover, setHover] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { to: '/search', label: 'Drinks', onClick: resetSearch },
    { to: '/favs', label: 'Favorites' },
    { to: '/about', label: 'About' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-onyx hover:text-blue-jeans transition-colors duration-200 group"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <span>Pocket Bartender</span>
            {hover ? (
              <HoverLogo className="text-2xl text-blue-jeans group-hover:rotate-12 transition-transform duration-300" />
            ) : (
              <Logo className="text-2xl text-metallic-seaweed" />
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={link.onClick}
                className={`font-semibold transition-all duration-200 hover:text-blue-jeans relative group ${
                  isActive(link.to) ? 'text-blue-jeans' : 'text-gray-700'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-jeans to-metallic-seaweed transition-all duration-200 ${
                    isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}

            {/* Social Links */}
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-300">
              <a
                href="https://github.com/boilerplatemax"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-gray-900 hover:scale-110 transition-all duration-200"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/max-shapovalov-2a93191b8/?originalSubdomain=ca"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-200"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700 hover:text-blue-jeans transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => {
                  link.onClick?.();
                  setMobileMenuOpen(false);
                }}
                className={`block py-2 px-4 rounded-lg font-semibold transition-colors ${
                  isActive(link.to)
                    ? 'bg-blue-jeans text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Social Links */}
            <div className="flex items-center gap-4 px-4 pt-3 border-t border-gray-200">
              <a
                href="https://github.com/boilerplatemax"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-gray-900"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/max-shapovalov-2a93191b8/?originalSubdomain=ca"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Scroll to Top Button */}
      {scrollPosition > 400 && (
        <button
          onClick={scrollToTopHandler}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-jeans to-metallic-seaweed text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-300 z-50 animate-fadeIn"
          aria-label="Scroll to top"
        >
          <UpArrow className="text-xl" />
        </button>
      )}
    </nav>
  );
}
