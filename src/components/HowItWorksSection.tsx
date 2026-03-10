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

        {/* Animated diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-0 py-12">
          {/* Data Input */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="border border-background/30 px-8 py-5 font-mono text-sm text-background"
          >
            Data Input
          </motion.div>

          {/* Line 1 */}
          <div className="relative w-px h-12 md:w-24 md:h-px bg-border">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary"
            />
            <motion.div
              className="absolute w-2.5 h-2.5 rounded-full bg-primary"
              initial={{ top: "0%", left: "50%", x: "-50%", y: "-50%" }}
              whileInView={{
                top: ["0%", "100%"],
                left: ["50%", "50%"],
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: 0.8,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 2,
              }}
              style={{ display: "block" }}
              // On md screens the line is horizontal, so animate left instead
            />
          </div>

          {/* QuantLink Core */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="border-2 border-foreground px-8 py-5 font-mono text-sm font-semibold text-foreground"
          >
            QuantLink Core
          </motion.div>

          {/* Line 2 */}
          <div className="relative w-px h-12 md:w-24 md:h-px bg-border">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary"
            />
          </div>

          {/* Result Output */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="border border-border px-8 py-5 font-mono text-sm text-foreground"
          >
            Result Output
          </motion.div>
        </div>

        {/* Steps description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {[
            {
              step: "01",
              title: "Configure",
              desc: "Select any active satellite, define your OGS location, and set payload and protocol parameters.",
            },
            {
              step: "02",
              title: "Analyze",
              desc: "QuantLink models the full quantum communication chain — orbit, atmosphere, ground segment, and QKD channel.",
            },
            {
              step: "03",
              title: "Extract",
              desc: "Retrieve QKD KPIs, schedule overpasses, forecast conditions, and plan your next mission.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <span className="font-mono text-3xl font-bold text-primary">
                {item.step}
              </span>
              <h3 className="font-mono text-lg font-semibold text-foreground mt-3 mb-2">
                {item.title}
              </h3>
              <p className="font-sans text-base text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
