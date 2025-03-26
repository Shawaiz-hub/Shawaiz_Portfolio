
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Shawaiz<span className="text-blue-600"> Mehboob</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-6">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 space-y-4 flex flex-col items-center">
            <Link to="/" className="hover:text-primary transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/projects" className="hover:text-primary transition-colors" onClick={toggleMenu}>
              Projects
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/blog" className="hover:text-primary transition-colors" onClick={toggleMenu}>
              Blog
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors" onClick={toggleMenu}>
              Contact
            </Link>
            
            <div className="flex items-center space-x-6 mt-4 pt-4 border-t border-border w-full justify-center">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
