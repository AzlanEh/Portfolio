// import { Link } from "@tanstack/react-router";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";

export default function Header() {
  // const links = [{ to: "/", label: "Home" }] as const;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold text-black hover:text-gray-700 transition-colors"
            >
              Portfolio
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="nav-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="nav-link"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="nav-link"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-50 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
        {/* <div className="flex items-center gap-2">
          <ModeToggle />
        </div> */}
      </nav>
    </header>
    // <div>
    // 	<div className="flex flex-row items-center justify-between px-2 py-1">
    // 		<nav className="flex gap-4 text-lg">
    // 			{links.map(({ to, label }) => {
    // 				return (
    // 					<Link key={to} to={to}>
    // 						{label}
    // 					</Link>
    // 				);
    // 			})}
    // 		</nav>
    //
    // 	</div>
    // 	<hr />
    // </div>
  );
}
