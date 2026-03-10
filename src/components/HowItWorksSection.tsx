import { motion } from "framer-motion";
import howitworksBg from "@/assets/howitworks-bg.jpg";

const HowItWorksSection = () => {
  return (
    <section
      className="py-32 px-6 md:px-16 lg:px-24 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${howitworksBg})` }}
    >
      <div className="absolute inset-0 bg-foreground/75" />
      <div className="relative z-10 max-w-5xl">
        <p className="font-mono text-sm text-primary mb-4 tracking-wider">
          // process
        </p>
        <h2 className="font-mono text-3xl md:text-4xl font-bold text-background mb-20">
          How It Works
        </h2>

        {/* Animated workflow pipeline */}
        <div className="relative max-w-3xl">
          {[
            { step: "01", title: "Select Any Active Satellite", desc: "Choose from all active satellites across LEO, MEO, and GEO orbits." },
            { step: "02", title: "Forecast Satellite's Orbit", desc: "Predict orbital trajectory up to 5 days ahead with high precision." },
            { step: "03", title: "Schedule OGS Overpasses", desc: "Identify and schedule optimal overpass windows for your ground station." },
            { step: "04", title: "Forecast Cloud Coverage", desc: "Assess atmospheric conditions and cloud-free line of sight probability." },
            { step: "05", title: "Extract QKD KPIs", desc: "Compute secret key rate, QBER, and other critical performance metrics." },
            { step: "06", title: "Plan Your Overpasses", desc: "Optimize overpass scheduling based on link budget and atmospheric forecasts." },
            { step: "07", title: "Prepare Your Next Mission", desc: "Consolidate analysis results to plan and validate upcoming QKD missions." },
          ].map((item, i, arr) => (
            <div key={item.step} className="relative flex items-start gap-6 md:gap-10">
              {/* Vertical line + dot */}
              <div className="flex flex-col items-center">
                {/* Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: i * 0.12 }}
                  className="relative z-10 w-10 h-10 rounded-full border-2 border-primary bg-foreground/90 flex items-center justify-center"
                >
                  <span className="font-mono text-xs font-bold text-primary">{item.step}</span>
                </motion.div>
                {/* Connector line */}
                {i < arr.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.12 + 0.15 }}
                    className="w-px h-16 bg-primary/40 origin-top"
                  >
                    {/* Traveling dot */}
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-primary mx-auto"
                      initial={{ y: 0, opacity: 0 }}
                      whileInView={{ y: [0, 64], opacity: [1, 0] }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 1,
                        delay: i * 0.12 + 0.4,
                        ease: "linear",
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    />
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.12 + 0.1 }}
                className="pb-12"
              >
                <h3 className="font-mono text-base font-semibold text-background mb-1">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-background/50 leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
