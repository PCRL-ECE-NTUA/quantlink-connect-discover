import { motion } from "framer-motion";

const features = [
  {
    title: "Link Budget Calculator",
    description:
      "Compute key performance indicators by modelling the complete satellite-to-ground quantum communication chain with over 40 configurable inputs and 15 output metrics.",
  },
  {
    title: "Mission Planning Assistant",
    description:
      "Support mission analysis and early-stage design trade-offs. Assess link feasibility, optimize system parameters, and compare alternative architectures.",
  },
  {
    title: "System Requirements Analysis",
    description:
      "Determine the system requirements for feasible satellite QKD across LEO, MEO, and GEO orbits with support for BB84 and entanglement-based BBM92 protocols.",
  },
  {
    title: "5-Day Forecasting",
    description:
      "Forecast satellite track, cloud coverage, and solar-lunar noise conditions up to 5 days ahead. Prepare your next mission overpass with confidence.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-5xl">
        <p className="font-mono text-sm text-muted-foreground mb-4 tracking-wider">
          // features
        </p>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-20">
          Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-t border-border pt-6"
            >
              <h3 className="font-mono text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
