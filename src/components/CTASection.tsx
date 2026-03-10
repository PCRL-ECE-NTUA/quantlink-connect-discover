import { Link } from "react-router-dom";
import esaBadge from "@/assets/esa-badge.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section
      className="py-32 px-6 md:px-16 lg:px-24 relative bg-cover bg-center"
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
          Access the QuantLink platform to evaluate satellite QKD link performance, 
          forecast conditions, and optimize your system architecture.
        </p>
        <Link
          to="/login"
          className="inline-block bg-primary text-primary-foreground font-mono text-sm font-semibold px-8 py-4 hover:opacity-90 transition-opacity"
        >
          Access Platform →
        </Link>

        <div className="mt-24 pt-8 border-t border-background/20 flex flex-col md:flex-row md:items-center gap-6">
          <img
            src={esaBadge}
            alt="Developed under ESA Business Incubation Centre Greece"
            className="h-8 object-contain brightness-200 invert"
          />
          <p className="font-sans text-sm text-background/60">
            Developed under ESA-BIC Greece by QRBIT
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
