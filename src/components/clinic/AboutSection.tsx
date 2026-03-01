import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const milestones = [
  { year: "1999", title: "Foundation", desc: "MediCare Clinic established with a vision to provide accessible, quality healthcare." },
  { year: "2005", title: "Expansion", desc: "Opened 3 new departments and welcomed 15 specialist doctors." },
  { year: "2012", title: "Innovation", desc: "Introduced state-of-the-art diagnostic technology and digital records." },
  { year: "2018", title: "Excellence", desc: "Recognized as a top-rated clinic with national healthcare excellence award." },
  { year: "2024", title: "Community", desc: "Serving 15,000+ patients annually with 40+ expert doctors." },
];

const values = [
  { icon: Target, title: "Our Mission", desc: "To deliver compassionate, patient-centered healthcare that empowers every individual." },
  { icon: Users, title: "Our People", desc: "A diverse team of 40+ specialists united by a passion for healing." },
  { icon: Award, title: "Our Standard", desc: "Uncompromising quality with internationally accredited practices." },
  { icon: TrendingUp, title: "Our Growth", desc: "Constantly evolving with the latest medical advancements." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding overflow-hidden scroll-mt-20" ref={ref}>
      {/* Section header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Story</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 font-display">
          A Legacy of <span className="text-gradient">Compassionate</span> Care
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          For over two decades, we've been the trusted partner in our community's health journey.
        </p>
      </motion.div>

      {/* Horizontal timeline */}
      <div className="relative mb-12">
        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex gap-6 min-w-max px-4">
            {milestones.map((item, i) => (
              <motion.div
                key={item.year}
                className="relative w-72 flex-shrink-0"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="glass rounded-2xl p-6 h-full hover:shadow-lg transition-shadow duration-300 group">
                  <div className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors font-display">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mt-2">{item.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{item.desc}</p>
                </div>
                {/* Timeline connector */}
                {i < milestones.length - 1 && (
                  <div className="absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
        {/* Scroll hint */}
        <div className="text-center mt-2 text-sm text-muted-foreground md:hidden">
          ← Scroll to explore →
        </div>
      </div>

      {/* Values cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {values.map((item, i) => (
          <motion.div
            key={item.title}
            className="group glass rounded-2xl p-6 text-center cursor-default"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px -15px hsl(199 89% 48% / 0.15)" }}
          >
            <motion.div
              className="w-14 h-14 rounded-2xl gradient-teal flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <item.icon className="w-6 h-6 text-primary-foreground" />
            </motion.div>
            <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
