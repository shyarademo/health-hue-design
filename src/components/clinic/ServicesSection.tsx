import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Stethoscope, Baby, FlaskConical, ShieldCheck, Syringe, Heart } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "General Medicine", desc: "Comprehensive primary care for adults including chronic disease management, health screenings, and preventive consultations.", color: "from-primary to-primary/70" },
  { icon: Baby, title: "Pediatrics", desc: "Specialized child healthcare from newborn care through adolescence with developmental screenings and immunizations.", color: "from-emerald-500 to-emerald-400" },
  { icon: FlaskConical, title: "Lab & Diagnostics", desc: "State-of-the-art laboratory with rapid results for blood work, imaging, and advanced diagnostic testing.", color: "from-violet-500 to-violet-400" },
  { icon: ShieldCheck, title: "Preventive Care", desc: "Proactive wellness programs including annual checkups, risk assessments, and lifestyle coaching.", color: "from-amber-500 to-amber-400" },
  { icon: Syringe, title: "Vaccinations", desc: "Complete immunization services for all ages including travel vaccines and seasonal flu shots.", color: "from-rose-500 to-rose-400" },
  { icon: Heart, title: "Women's Health", desc: "Dedicated women's healthcare covering gynecology, prenatal care, and reproductive health services.", color: "from-pink-500 to-pink-400" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-secondary/30" ref={ref}>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Offer</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 font-display">
          Our <span className="text-gradient">Medical</span> Services
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          Comprehensive healthcare solutions tailored to your needs, delivered with expertise and compassion.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="relative group cursor-default"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="glass rounded-2xl p-8 h-full relative overflow-hidden"
              animate={{
                scale: hoveredIndex === i ? 1.02 : hoveredIndex !== null ? 0.98 : 1,
              }}
              transition={{ duration: 0.3 }}
              whileHover={{ boxShadow: "0 20px 50px -15px hsl(199 89% 48% / 0.2)" }}
            >
              {/* Gradient border on hover */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>

              <motion.div
                className="mt-5 flex items-center gap-2 text-primary text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                Learn more →
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
