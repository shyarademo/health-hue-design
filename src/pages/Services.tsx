import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Stethoscope, Baby, FlaskConical, HeartPulse, Shield, Brain, Bone, Eye } from "lucide-react";
import Layout from "@/components/clinic/Layout";

const services = [
  { icon: Stethoscope, title: "General Medicine", desc: "Comprehensive consultations for fever, infections, diabetes management, hypertension, thyroid disorders, and chronic disease care by experienced internists.", gradient: "from-blue-500 to-cyan-500" },
  { icon: Baby, title: "Pediatrics", desc: "Complete child healthcare — vaccinations as per IAP schedule, growth monitoring, childhood infections, nutritional counselling, and adolescent health services.", gradient: "from-pink-500 to-rose-500" },
  { icon: FlaskConical, title: "Diagnostics & Lab", desc: "In-house pathology lab with same-day reports for blood tests, urine analysis, HbA1c, lipid profile, thyroid panel, and vitamin screenings. Digital reports via WhatsApp.", gradient: "from-emerald-500 to-green-500" },
  { icon: HeartPulse, title: "Cardiology", desc: "ECG, 2D Echo, stress tests, and preventive cardiac screenings. Expert management of heart conditions, cholesterol, and post-surgical follow-up care.", gradient: "from-red-500 to-orange-500" },
  { icon: Shield, title: "Women's Health", desc: "Gynaecology consultations, prenatal and postnatal care, PCOD/PCOS management, menopause support, Pap smears, and family planning services.", gradient: "from-purple-500 to-violet-500" },
  { icon: Brain, title: "Mental Wellness", desc: "Confidential counselling for anxiety, depression, stress management, and sleep disorders. Both in-clinic and teleconsultation options available.", gradient: "from-indigo-500 to-blue-500" },
  { icon: Bone, title: "Orthopaedics", desc: "Joint pain, sports injuries, fracture care, physiotherapy referrals, and arthritis management. Digital X-ray available on-site.", gradient: "from-amber-500 to-yellow-500" },
  { icon: Eye, title: "Ophthalmology", desc: "Comprehensive eye exams, vision correction prescriptions, diabetic retinopathy screening, and referrals for cataract and LASIK procedures.", gradient: "from-teal-500 to-cyan-500" },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Layout>
      <div className="pt-28 section-padding" ref={ref}>
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 font-display">
            Comprehensive <span className="text-gradient">Medical</span> Services
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            From routine check-ups to specialised care, MediCare Clinic offers a wide range of services — all under one roof in the heart of Bengaluru.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass rounded-2xl p-6 cursor-pointer transition-shadow hover:shadow-xl"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)" }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-foreground font-bold text-lg">{service.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-muted-foreground mb-4">Need a consultation? Our specialists are ready to help.</p>
          <a href="tel:+918045678900" className="inline-flex items-center gap-2 px-8 py-3 rounded-full gradient-teal text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Call +91 80 4567 8900
          </a>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Services;
