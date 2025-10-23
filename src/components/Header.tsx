import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Accueil", href: "#home" },
    { name: "Propriétés", href: "#properties" },
    { name: "Services", href: "#services" },
    { name: "À Propos", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* 🔹 Top Bar */}
      <div className="bg-blue-600 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4 divide-x divide-white/20">
            <span className="flex items-center pr-4">
              <Phone className="h-4 w-4 mr-1" />
              +221 77 430 83 44
            </span>
            <span className="flex items-center pl-4">
              <Mail className="h-4 w-4 mr-1" />
              elhadjisane1990@gmail.com
            </span>
          </div>
          <div className="flex items-center mt-1 md:mt-0">
            <MapPin className="h-4 w-4 mr-1" />
            Keur Massar Cité Firdawsi Nº 2141
          </div>
        </div>
      </div>

      {/* 🔹 Main Header */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                ABS Immo & Services
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-6 py-2 rounded-full hover:shadow-xl transition-transform duration-300 hover:scale-105"
              >
                Contactez-nous
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block mx-3 mt-4 bg-gradient-to-r from-blue-600 to-red-600 text-white px-4 py-2 rounded-full text-center hover:shadow-md transition-transform duration-300 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Contactez-nous
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
