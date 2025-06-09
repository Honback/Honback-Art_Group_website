import { useState } from "react";
import { Link } from "wouter";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="./artelogo1.png" alt="artelogo1 로고" className="h-9"/>
            <div className="text-xl font-bold  text-black">
              <span className="mr-1">한국문화예술교육진흥원</span>
              <span className="text-lg font-normal text-black-500"></span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm">
            <Link href="#intro" onClick={closeMenu}>
              <a className="font-medium text-black hover:text-accent transition">
                소개
              </a>
            </Link>
            <Link href="#why" onClick={closeMenu}>
              <a className="font-medium text-black hover:text-accent transition">
                필요성
              </a>
            </Link>
            <Link href="#guide" onClick={closeMenu}>
              <a className="font-medium text-black hover:text-accent transition">
                운영안내
              </a>
            </Link>
            <Link href="#activities" onClick={closeMenu}>
              <a className="font-medium text-black hover:text-accent transition">
                활동분야
              </a>
            </Link>
            <Link href="#process" onClick={closeMenu}>
              <a className="font-medium text-black hover:text-accent transition">
                신청절차
              </a>
            </Link>
            <Link href="#faq" onClick={closeMenu}>
              <a className="font-medium text-black hover:text-accent transition">
                FAQ
              </a>
            </Link>
            <Link href="#contact" onClick={closeMenu}>
              <a className="font-medium text-black hover:text-accent transition">
                문의
              </a>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden font-bold text-gray-600"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i
              className={`ri-${mobileMenuOpen ? "close" : "menu"}-line text-2xl `}
            ></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`${mobileMenuOpen ? "block" : "hidden"} mt-4 pb-2 md:hidden`}
        >
          <div className="flex flex-col space-y-3 text-sm">
            <a
              href="#intro"
              className="font-bold text-black hover:text-purple-600 transition"
              onClick={closeMenu}
            >
              소개
            </a>
            <a
              href="#why"
              className="font-bold text-black hover:text-purple-600 transition"
              onClick={closeMenu}
            >
              필요성
            </a>
            <a
              href="#guide"
              className="font-bold text-black hover:text-purple-600 transition"
              onClick={closeMenu}
            >
              운영안내
            </a>
            <a
              href="#activities"
              className="font-bold text-black hover:text-purple-600 transition"
              onClick={closeMenu}
            >
              활동분야
            </a>
            <a
              href="#process"
              className="font-bold text-black hover:text-purple-600 transition"
              onClick={closeMenu}
            >
              신청절차
            </a>
            <a
              href="#faq"
              className="font-bold text-black hover:text-purple-600 transition"
              onClick={closeMenu}
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="font-bold text-black hover:text-purple-600 transition"
              onClick={closeMenu}
            >
              문의
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
