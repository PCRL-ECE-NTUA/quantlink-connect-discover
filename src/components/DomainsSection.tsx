import { motion } from "framer-motion";

const domains = [
  {
    title: "Space Domain",
    items: ["Satellite Orbit", "Payload specs", "QKD source"],
  },
  {
    title: "Atmospheric Channel",
    items: ["Cloud Coverage", "Turbulence", "Solar/Lunar noise"],
  },
  {
    title: "Ground Segment",
    items: ["Telescope specs", "OGS Altitude", "Adaptive Optics"],
  },
  {
    title: "QKD Channel",
    items: ["DV/ENT Protocols", "Trusted/Untrusted", "Finite Key Size"],
  },
];

const DomainsSection = () => {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24 border-t border-border">
      <div className="max-w-5xl">
        <p className="font-mono text-sm text-muted-foreground mb-4 tracking-wider">
          // modelling_domains
        </p>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-20">
          End-to-End Modelling
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-background p-8"
            >
              <h3 className="font-mono text-base font-semibold text-foreground mb-6">
                {domain.title}
              </h3>
              <ul className="space-y-2">
                {domain.items.map((item) => (
                  <li
                    key={item}
                    className="font-sans text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
                <li className="font-sans text-sm text-muted-foreground italic">
                  And more…
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
