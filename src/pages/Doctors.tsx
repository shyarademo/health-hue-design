import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, GraduationCap, Clock, Award } from "lucide-react";
import Layout from "@/components/clinic/Layout";
import doctorRajesh from "@/assets/doctor-rajesh.jpg";
import doctorPriya from "@/assets/doctor-priya.jpg";
import doctorArun from "@/assets/doctor-arun.jpg";
import doctorSneha from "@/assets/doctor-sneha.jpg";
import doctorVikram from "@/assets/doctor-vikram.jpg";

const doctors = [
  {
    name: "Dr. Rajesh Sharma", role: "Chief Medical Officer", specialty: "Internal Medicine", exp: "20+ years", avatar: "RS", image: doctorRajesh,
    quote: "Medicine is not just science — it's the art of listening to your patient.",
    education: "MBBS, MD (Internal Medicine) — AIIMS Delhi",
    languages: "Hindi, English, Kannada",
    bio: "With over two decades of clinical experience, Dr. Sharma leads MediCare's team with a patient-first philosophy. He specialises in managing complex chronic conditions including diabetes, hypertension, and metabolic disorders."
  },
  {
    name: "Dr. Priya Nair", role: "Head of Pediatrics", specialty: "Pediatric Care", exp: "15+ years", avatar: "PN", image: doctorPriya,
    quote: "Every child deserves a healthy, happy start to life.",
    education: "MBBS, DCH — CMC Vellore",
    languages: "Malayalam, English, Hindi, Kannada",
    bio: "Dr. Nair is beloved by young patients and parents alike. She specialises in neonatal care, childhood vaccinations (IAP schedule), developmental milestones, and adolescent health."
  },
  {
    name: "Dr. Arun Patel", role: "Lead Diagnostician", specialty: "Diagnostic Medicine", exp: "12+ years", avatar: "AP", image: doctorArun,
    quote: "Accurate diagnosis is the foundation of effective treatment.",
    education: "MBBS, MD (Pathology) — KEM Hospital Mumbai",
    languages: "Gujarati, Hindi, English, Kannada",
    bio: "Dr. Patel oversees MediCare's in-house diagnostic lab, ensuring same-day reports and accurate results. He has introduced digital reporting via WhatsApp for patient convenience."
  },
  {
    name: "Dr. Sneha Gupta", role: "Women's Health Lead", specialty: "Gynaecology", exp: "18+ years", avatar: "SG", image: doctorSneha,
    quote: "Empowering women through comprehensive, compassionate care.",
    education: "MBBS, MS (OBG) — Safdarjung Hospital, Delhi",
    languages: "Hindi, English, Kannada",
    bio: "Dr. Gupta provides expert care across all stages of a woman's life — from adolescent health and prenatal care to menopause management. She is known for her gentle, reassuring approach."
  },
  {
    name: "Dr. Vikram Singh", role: "Preventive Care & Wellness", specialty: "Wellness & Prevention", exp: "10+ years", avatar: "VS", image: doctorVikram,
    quote: "Prevention today means a healthier, longer tomorrow.",
    education: "MBBS, MPH — JIPMER Puducherry",
    languages: "Hindi, English, Punjabi, Kannada",
    bio: "Dr. Singh designs comprehensive health check-up packages tailored for Indian lifestyles. He focuses on lifestyle diseases, executive health screenings, and corporate wellness programmes."
  },
];

const Doctors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDoctor = doctors[activeIndex];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <Layout>
      <div className="pt-28 section-padding" ref={ref}>
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Team</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 font-display">
            Meet Our <span className="text-gradient">Expert</span> Doctors
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A dedicated team of specialists committed to providing Bengaluru with the highest standard of medical care.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto" ref={containerRef}>
          {/* Spotlight */}
          <motion.div
            className="glass rounded-3xl p-8 md:p-12 mb-8 overflow-hidden"
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <motion.div
                className="w-32 h-32 md:w-40 md:h-40 rounded-full flex-shrink-0 ring-4 ring-primary/20 mx-auto md:mx-0 overflow-hidden"
                style={{ y: parallaxY }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={activeDoctor.image} alt={activeDoctor.name} className="w-full h-full object-cover" />
              </motion.div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{activeDoctor.name}</h2>
                <p className="text-primary font-medium mt-1">{activeDoctor.role}</p>
                <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">{activeDoctor.specialty}</span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">{activeDoctor.exp}</span>
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">{activeDoctor.bio}</p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{activeDoctor.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{activeDoctor.exp} experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{activeDoctor.languages}</span>
                  </div>
                </div>
                <div className="mt-5 flex items-start gap-3 text-muted-foreground italic">
                  <Quote className="w-5 h-5 text-primary/40 flex-shrink-0 mt-0.5" />
                  <span>"{activeDoctor.quote}"</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Selector */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {doctors.map((doc, i) => (
              <motion.button
                key={doc.name}
                className={`rounded-2xl p-4 text-center transition-all duration-300 ${i === activeIndex ? "glass-strong ring-2 ring-primary shadow-lg" : "glass hover:shadow-md"}`}
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-14 h-14 rounded-full mx-auto overflow-hidden ring-2 transition-all duration-300 ${i === activeIndex ? "ring-primary" : "ring-transparent"}`}>
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm font-semibold text-foreground mt-2 truncate">{doc.name}</p>
                <p className="text-xs text-muted-foreground truncate">{doc.specialty}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Doctors;
