import { motion } from "framer-motion";

const specs = [
  { label: "Satellite Orbit", value: "LEO / MEO / GEO" },
  { label: "Orbital Tracking", value: "All active satellites available" },
  { label: "OGS Selection", value: "Any OGS globally" },
  { label: "QKD Protocol", value: "Efficient BB84 / Entanglement-based BBM92" },
  { label: "Detectors", value: "SPADs / SNSPDs" },
  { label: "Wavelength", value: "1550 nm / 810 nm" },
  { label: "Forecast Window", value: "Up to 5 days" },
  { label: "Parameters", value: "40+ inputs, 15+ outputs" },
];

const SpecsSection = () => {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-5xl">
        <p className="font-mono text-sm text-muted-foreground mb-4 tracking-wider">
          // specifications
        </p>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-20">
          Technical Specifications
        </h2>
        <div className="space-y-0">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex flex-col md:flex-row md:items-center border-t border-border py-5"
            >
              <span className="font-mono text-sm font-semibold text-foreground w-full md:w-1/3">
                {spec.label}
              </span>
              <span className="font-sans text-base text-muted-foreground">
                {spec.value}
              </span>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
