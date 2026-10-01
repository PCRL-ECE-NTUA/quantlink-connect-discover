import { Link } from "react-router-dom";
import { PLATFORM_URL } from "@/lib/constants";
import qrbitlinkLogo from "@/assets/qrbitlink-dark.png";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 h-16">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img src={qrbitlinkLogo} alt="QRBITLink" className="h-8 w-auto" />
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/demo"
            className="font-mono text-sm text-foreground font-semibold hover:opacity-80 transition-opacity"
          >
            Book a Demo
          </Link>
          <a
            href={PLATFORM_URL}
            className="font-mono text-sm text-primary font-semibold hover:opacity-80 transition-opacity"
          >
            Log In →
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
