import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import qrbitlinkLogo from "@/assets/qrbitlink-light.png";

const SALES_EMAIL = "sales@qrbit.gr";

const BookDemo = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-foreground/70" />
      <div className="relative z-10 w-full max-w-xl">
        <Link to="/" className="inline-block mb-12 hover:opacity-80 transition-opacity">
          <img src={qrbitlinkLogo} alt="QRBITLink" className="h-14 md:h-16 w-auto max-w-full" />
        </Link>
        <p className="font-mono text-sm text-primary mb-4 tracking-wider">
          // book_demo
        </p>
        <h1 className="font-mono text-3xl md:text-4xl font-bold text-background mb-6">
          Book a Demo
        </h1>
        <p className="font-sans text-base md:text-lg text-background/70 mb-10 leading-relaxed">
          Want to see QRBITLink in action? Contact us at{" "}
          <a
            href={`mailto:${SALES_EMAIL}`}
            className="text-background font-medium underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            {SALES_EMAIL}
          </a>{" "}
          and our team will arrange a demo for you.
        </p>
        <a
          href={`mailto:${SALES_EMAIL}?subject=QRBITLink%20demo%20request`}
          className="inline-block bg-primary text-primary-foreground font-mono text-sm font-semibold px-8 py-4 hover:opacity-90 transition-opacity"
        >
          Email {SALES_EMAIL} →
        </a>

        <Link
          to="/"
          className="font-sans text-sm text-background/60 mt-12 block hover:text-background transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
};

export default BookDemo;
