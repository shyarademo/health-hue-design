import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, UserCheck, Wallet, Clock } from "lucide-react";

const features = [
  { icon: Cpu, title: "Modern Equipment", desc: "Latest medical technology for accurate diagnostics and effective treatments.", progress: 95 },
  { icon: UserCheck, title: "Expert Specialists", desc: "Board-certified doctors with decades of combined experience.", progress: 98 },
  { icon: Wallet, title: "Affordable Care", desc: "Transparent pricing with flexible payment options for every patient.", progress: 90 },
  { icon: Clock, title: "Minimal Wait Time", desc: "Efficient scheduling ensures you're seen on time, every time.", progress: 92 },
];

const ProgressRing = ({ progress, inView }: { progress: number; inView: boolean }) => {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r={radius} fill="none" stroke="hsl(var(--muted))" strokeWidth="4" />
      <motion.circle
        cx="32"
        cy="32"
        r={radius}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={inView ? { strokeDashoffset: offset } : {}}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      />
      <text
        x="32"
        y="32"
        textAnchor="middle"
        dominantBaseline="central"
        className="fill-foreground text-xs font-bold"
        transform="rotate(90, 32, 32)"
      >
        {progress}%
      </text>
    </svg>
  );
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Us</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 font-display">
          Why Choose <span className="text-gradient">MediCare</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          We go beyond treatment — we build lasting health partnerships.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="glass rounded-2xl p-6 text-center group"
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px -15px hsl(199 89% 48% / 0.15)" }}
          >
            <div className="flex justify-center mb-4">
              <ProgressRing progress={f.progress} inView={isInView} />
            </div>
            <motion.div
              className="w-12 h-12 rounded-xl gradient-teal flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: 10 }}
            >
              <f.icon className="w-5 h-5 text-primary-foreground" />
            </motion.div>
            <h3 className="font-bold text-foreground text-lg">{f.title}</h3>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
