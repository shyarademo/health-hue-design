import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Shield, Users, Clock, Award, Star, CheckCircle, Target } from "lucide-react";
import Layout from "@/components/clinic/Layout";

const milestones = [
  { year: "2002", title: "Founded in Bengaluru", desc: "MediCare Clinic opened its doors in Koramangala with 3 doctors and a vision to provide accessible, quality healthcare." },
  { year: "2008", title: "5 Departments, 15 Specialists", desc: "Expanded to include Pediatrics, Gynecology, Diagnostics, Preventive Care, and Internal Medicine under one roof." },
  { year: "2014", title: "NABH Accreditation", desc: "Achieved National Accreditation Board for Hospitals accreditation and transitioned to fully digital health records." },
  { year: "2019", title: "Best Clinic Award", desc: "Recognised by the Karnataka Health Board as the Best Multi-Specialty Clinic in Bengaluru." },
  { year: "2025", title: "20,000+ Patients Annually", desc: "Serving over 20,000 patients every year with a team of 25+ specialists across 8 departments." },
];

const values = [
  { icon: Heart, title: "Compassionate Care", desc: "Every patient is treated with empathy, dignity, and respect — like family." },
  { icon: Shield, title: "Clinical Excellence", desc: "Evidence-based treatments with the latest medical protocols and NABH standards." },
  { icon: Users, title: "Patient First", desc: "Your comfort and well-being drive every decision we make, from scheduling to treatment." },
  { icon: Clock, title: "Always Accessible", desc: "Extended hours, emergency services, and same-day appointments when you need us most." },
];

const features = [
  { icon: Award, title: "NABH Accredited", desc: "Meeting national standards for quality and patient safety.", progress: 98 },
  { icon: Star, title: "Patient Satisfaction", desc: "Rated 4.8/5 by over 15,000 verified patient reviews.", progress: 96 },
  { icon: CheckCircle, title: "First-Visit Resolution", desc: "90% of cases resolved or clearly diagnosed on the first visit.", progress: 90 },
  { icon: Target, title: "Preventive Screenings", desc: "Comprehensive health check-ups tailored for Indian lifestyles.", progress: 94 },
];

const ProgressRing = ({ progress, inView }: { progress: number; inView: boolean }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  return (
    <svg width="88" height="88" className="transform -rotate-90">
      <circle cx="44" cy="44" r={radius} fill="none" stroke="hsl(var(--secondary))" strokeWidth="6" />
      <motion.circle
        cx="44" cy="44" r={radius} fill="none" stroke="hsl(var(--primary))" strokeWidth="6" strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={inView ? { strokeDashoffset: circumference - (progress / 100) * circumference } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </svg>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      <div className="pt-28" ref={ref}>
        {/* Hero */}
        <section className="section-padding">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 font-display">
              Two Decades of <span className="text-gradient">Trusted</span> Healthcare
            </h1>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-lg">
              Founded in 2002, MediCare Clinic has grown from a small family practice in Koramangala to one of Bengaluru's most trusted multi-specialty clinics — serving over 20,000 patients every year with compassion, expertise, and cutting-edge diagnostics.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  className={`flex flex-col md:flex-row items-center gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15 }}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="glass rounded-2xl p-6">
                      <span className="text-primary font-bold text-2xl">{m.year}</span>
                      <h3 className="text-foreground font-semibold text-lg mt-1">{m.title}</h3>
                      <p className="text-muted-foreground mt-2">{m.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full gradient-teal flex-shrink-0 ring-4 ring-primary/20 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Values */}
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">Our Core <span className="text-gradient">Values</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="glass rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-14 h-14 rounded-xl gradient-teal flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-foreground font-semibold text-lg">{v.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding" ref={whyRef}>
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={whyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-display">
              Why Families <span className="text-gradient">Choose</span> MediCare
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="glass rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative w-[88px] h-[88px] mx-auto mb-4">
                  <ProgressRing progress={f.progress} inView={whyInView} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-foreground font-bold text-sm">{f.progress}%</span>
                  </div>
                </div>
                <h3 className="text-foreground font-semibold">{f.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
