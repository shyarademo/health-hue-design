import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Stethoscope, Baby, FlaskConical, HeartPulse, Star } from "lucide-react";
import Layout from "@/components/clinic/Layout";
import HeroSection from "@/components/clinic/HeroSection";

const services = [
  { icon: Stethoscope, title: "General Medicine", desc: "Expert consultations for diabetes, hypertension, infections, and chronic disease management.", gradient: "from-blue-500 to-cyan-500" },
  { icon: Baby, title: "Pediatrics", desc: "Complete child healthcare — vaccinations, growth monitoring, and adolescent health.", gradient: "from-pink-500 to-rose-500" },
  { icon: FlaskConical, title: "Diagnostics & Lab", desc: "In-house lab with same-day reports. Blood work, thyroid panel, and more.", gradient: "from-emerald-500 to-green-500" },
  { icon: HeartPulse, title: "Cardiology", desc: "ECG, 2D Echo, stress tests, and preventive cardiac screenings.", gradient: "from-red-500 to-orange-500" },
];

const testimonials = [
  { name: "Ananya Krishnan", text: "Dr. Sharma's team made me feel truly heard. After years of bouncing between clinics, MediCare finally gave me proper care.", rating: 5 },
  { name: "Rahul Mehta", text: "Our children love visiting Dr. Nair! She has an incredible way with kids.", rating: 5 },
  { name: "Priya Reddy", text: "The diagnostic lab gave results the same day — reports on WhatsApp by evening!", rating: 5 },
];

const Index = () => {
  const servicesRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      <HeroSection />

      {/* Brief About */}
      <section className="section-padding" ref={aboutRef}>
        <motion.div className="max-w-4xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} animate={aboutInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-display">
            Two Decades of <span className="text-gradient">Trusted</span> Care
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
            Founded in 2002 in Koramangala, Bengaluru, MediCare Clinic has grown into a NABH-accredited multi-specialty clinic serving over 20,000 patients annually with a team of 25+ specialists.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all">
            Learn more about us <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="section-padding" ref={servicesRef}>
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={servicesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-display">
            What We <span className="text-gradient">Offer</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="glass rounded-2xl p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4`}>
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-foreground font-bold">{s.title}</h3>
              <p className="text-muted-foreground text-sm mt-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding" ref={testimonialsRef}>
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={testimonialsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 font-display">
            What Patients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
              <p className="text-foreground font-semibold text-sm">{t.name}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/testimonials" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Read all reviews <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
