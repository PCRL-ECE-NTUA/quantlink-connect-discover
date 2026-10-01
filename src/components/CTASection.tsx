import { Link } from "react-router-dom";
import { PLATFORM_URL } from "@/lib/constants";
import esaBadge from "@/assets/esa-bic-greece.png";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section
      className="pt-32 pb-8 px-6 md:px-16 lg:px-24 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      <div className="absolute inset-0 bg-foreground/75" />
      <div className="relative z-10 max-w-5xl">
        <p className="font-mono text-sm text-primary mb-4 tracking-wider">
          // get_started
        </p>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-background mb-6">
          Ready to plan your mission?
        </h2>
        <p className="font-sans text-lg text-background/60 max-w-xl mb-12 leading-relaxed">
          Access the QRBITLink platform to evaluate satellite QKD link performance, 
          forecast conditions, and optimize your system architecture.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={PLATFORM_URL}
            className="bg-primary text-primary-foreground font-mono text-sm font-semibold px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Access Platform →
          </a>
          <Link
            to="/demo"
            className="border border-background/40 text-background font-mono text-sm font-semibold px-8 py-4 hover:bg-background/10 transition-colors"
          >
            Book a Demo
          </Link>
        </div>

        <div className="mt-24 pt-8 border-t border-background/20 flex flex-col md:flex-row md:items-center gap-6">
          <img
            src={esaBadge}
            alt="Developed under ESA Business Incubation Centre Greece"
            className="h-24 md:h-28 w-auto max-w-full object-contain"
          />
          <p className="font-sans text-base md:text-lg text-background/70">
            Developed under ESA BIC Greece by{" "}
            <a href="https://qrbit.gr" target="_blank" rel="noopener noreferrer" className="text-background underline underline-offset-4 hover:opacity-80 transition-opacity">QRBIT</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
