import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Stethoscope, Shield, HeartPulse, Pill, Syringe } from "lucide-react";

const words = ["Health", "Family", "Future", "Wellbeing"];

const floatingIcons = [
  { Icon: Activity, x: "75%", y: "20%", delay: 0 },
  { Icon: Stethoscope, x: "85%", y: "45%", delay: 0.5 },
  { Icon: Shield, x: "65%", y: "65%", delay: 1 },
  { Icon: HeartPulse, x: "80%", y: "75%", delay: 1.5 },
  { Icon: Pill, x: "70%", y: "35%", delay: 2 },
  { Icon: Syringe, x: "90%", y: "60%", delay: 0.8 },
];

const stats = [
  { value: 15000, suffix: "+", label: "Patients Treated" },
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 40, suffix: "+", label: "Expert Doctors" },
  { value: 98, suffix: "%", label: "Patient Satisfaction" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
      
      {/* Diagonal split accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent" style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }} />

      {/* Floating medical icons */}
      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:flex items-center justify-center w-12 h-12 rounded-2xl glass text-primary/40"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="w-5 h-5" />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-gentle" />
              Trusted Healthcare Since 1999
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] tracking-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We Care for
            <br />
            Your{" "}
            <span className="relative inline-block">
              <motion.span
                key={wordIndex}
                className="text-gradient font-display italic"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                {words[wordIndex]}
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience compassionate healthcare with cutting-edge technology.
            Your wellness journey begins with a team that truly listens.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="group relative px-8 py-4 rounded-full gradient-teal text-primary-foreground font-semibold text-lg shadow-lg shadow-primary/25 overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px hsl(199 89% 48% / 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Explore Our Care</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <motion.button
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-full border-2 border-border text-foreground font-semibold text-lg hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Our Services
            </motion.button>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass rounded-2xl p-5 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.15 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px hsl(199 89% 48% / 0.2)" }}
            >
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
