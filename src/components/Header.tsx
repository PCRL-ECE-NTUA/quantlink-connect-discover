import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 h-16">
        <Link to="/" className="font-mono text-lg font-bold text-foreground tracking-tight">
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
