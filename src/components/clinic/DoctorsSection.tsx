import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote } from "lucide-react";

const doctors = [
  { name: "Dr. Sarah Mitchell", role: "Chief Medical Officer", specialty: "Internal Medicine", exp: "20+ years", quote: "Medicine is not just science — it's the art of caring.", avatar: "SM" },
  { name: "Dr. James Chen", role: "Head of Pediatrics", specialty: "Pediatric Care", exp: "15+ years", quote: "Every child deserves a healthy start to life.", avatar: "JC" },
  { name: "Dr. Amara Obi", role: "Lead Diagnostician", specialty: "Diagnostic Medicine", exp: "12+ years", quote: "Accurate diagnosis is the foundation of healing.", avatar: "AO" },
  { name: "Dr. Elena Volkov", role: "Women's Health Lead", specialty: "Gynecology", exp: "18+ years", quote: "Empowering women through comprehensive care.", avatar: "EV" },
  { name: "Dr. David Park", role: "Preventive Care", specialty: "Wellness & Prevention", exp: "10+ years", quote: "Prevention today means a healthier tomorrow.", avatar: "DP" },
];

const DoctorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const activeDoctor = doctors[activeIndex];

  return (
    <section id="doctors" className="section-padding" ref={ref}>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Team</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 font-display">
          Meet Our <span className="text-gradient">Expert</span> Doctors
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          A dedicated team of specialists committed to your health and wellbeing.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Spotlight - active doctor */}
        <motion.div
          className="glass rounded-3xl p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center gap-8"
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-32 h-32 md:w-40 md:h-40 rounded-full gradient-teal flex items-center justify-center text-primary-foreground text-4xl md:text-5xl font-bold flex-shrink-0 ring-4 ring-primary/20"
            layoutId={`avatar-${activeIndex}`}
          >
            {activeDoctor.avatar}
          </motion.div>
          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">{activeDoctor.name}</h3>
            <p className="text-primary font-medium mt-1">{activeDoctor.role}</p>
            <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">{activeDoctor.specialty}</span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">{activeDoctor.exp}</span>
            </div>
            <div className="mt-5 flex items-start gap-3 text-muted-foreground italic">
              <Quote className="w-5 h-5 text-primary/40 flex-shrink-0 mt-0.5" />
              <span>{activeDoctor.quote}</span>
            </div>
          </div>
        </motion.div>

        {/* Other doctors */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {doctors.map((doc, i) => (
            <motion.button
              key={doc.name}
              className={`rounded-2xl p-4 text-center transition-all duration-300 ${
                i === activeIndex
                  ? "glass-strong ring-2 ring-primary shadow-lg"
                  : "glass hover:shadow-md"
              }`}
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-14 h-14 rounded-full mx-auto flex items-center justify-center text-lg font-bold ${
                i === activeIndex
                  ? "gradient-teal text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}>
                {doc.avatar}
              </div>
              <p className="text-sm font-semibold text-foreground mt-2 truncate">{doc.name}</p>
              <p className="text-xs text-muted-foreground truncate">{doc.specialty}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
