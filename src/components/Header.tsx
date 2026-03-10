import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-foreground/40 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 h-16">
        <Link
          to="/"
          className={`font-mono text-lg font-bold tracking-tight transition-colors ${
            scrolled ? "text-foreground" : "text-background/90"
          }`}
        >
          QuantLink
        </Link>
        <Link
          to="/login"
          className="font-mono text-sm text-primary font-semibold hover:opacity-80 transition-opacity"
        >
          Log In →
        </Link>
      </div>
    </header>
  );
};

export default Header;
