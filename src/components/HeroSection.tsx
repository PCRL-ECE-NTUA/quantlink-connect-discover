import { Link } from "react-router-dom";
import { PLATFORM_URL } from "@/lib/constants";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import qrbitlinkLogo from "@/assets/qrbitlink-light.png";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-foreground/70" />
      <motion.div
        className="relative z-10 max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-mono text-sm text-primary mb-8 tracking-wider">
          // satellite_qkd.mission_planning
        </p>
        <h1 className="mb-6">
          <img
            src={qrbitlinkLogo}
            alt="QRBITLink"
            className="h-14 md:h-20 lg:h-24 w-auto max-w-full"
          />
        </h1>
        <p className="font-mono text-lg md:text-xl text-background/80 mb-4 max-w-2xl leading-relaxed">
          Satellite QKD mission planning software tool.
        </p>
        <p className="font-sans text-base md:text-lg text-background/60 max-w-2xl leading-relaxed mb-12">
          Evaluate and forecast the performance of satellite-based Quantum Key Distribution downlinks. 
          Model the end-to-end quantum communication chain. Customize satellite orbits, OGS, payload 
          characteristics, and QKD protocols.
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
      </motion.div>
    </section>
  );
};

export default HeroSection;
