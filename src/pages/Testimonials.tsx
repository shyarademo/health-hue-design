import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Layout from "@/components/clinic/Layout";

const testimonials = [
  { name: "Ananya Krishnan", rating: 5, text: "Dr. Sharma's team made me feel truly heard. After years of bouncing between clinics for my thyroid issues, MediCare finally gave me a proper diagnosis and treatment plan. The follow-up care has been exceptional — they even remind me of my check-ups via WhatsApp!", role: "Software Engineer, Bengaluru" },
  { name: "Rahul Mehta", rating: 5, text: "Our children love visiting Dr. Nair! She has an incredible way with kids — our 4-year-old actually looks forward to his check-ups. The vaccination schedule tracking and growth monitoring have given us so much peace of mind as first-time parents.", role: "Marketing Manager, Indiranagar" },
  { name: "Priya Reddy", rating: 5, text: "The diagnostic lab is outstanding. I got my complete blood work, thyroid panel, and vitamin screening done — all reports delivered on WhatsApp by evening the same day. No more waiting for days! The phlebotomist was gentle and professional.", role: "College Professor, Jayanagar" },
  { name: "Suresh Iyer", rating: 4, text: "From reception to consultation, everything at MediCare is seamless. The online appointment system works perfectly, minimal wait time in the clinic, and Dr. Patel explained every test result patiently. It's how healthcare should be in India.", role: "Retired Bank Officer, Koramangala" },
  { name: "Meera Joshi", rating: 5, text: "Dr. Gupta guided me through a difficult pregnancy with so much care and expertise. She was available even on weekends for my concerns. My baby and I are healthy today because of her dedication. I cannot recommend her enough to expecting mothers.", role: "Homemaker, HSR Layout" },
  { name: "Karthik Venkatesh", rating: 5, text: "The executive health check-up package by Dr. Vikram Singh was thorough and surprisingly affordable. They caught early signs of high cholesterol that my previous doctor had missed. Proactive, modern, and genuinely caring.", role: "Startup Founder, Whitefield" },
  { name: "Lakshmi Devi", rating: 5, text: "I've been visiting MediCare for over 10 years now. They've taken care of my entire family — from my grandchildren's vaccinations to my own diabetes management. The staff treats us like family. I trust no other clinic in Bengaluru.", role: "Retired Teacher, Basavanagudi" },
  { name: "Farhan Sheikh", rating: 4, text: "Clean, well-maintained clinic with modern equipment. The cardiology department did my ECG and Echo within an hour. Dr. Sharma reviewed everything personally and explained the results clearly. Very reassuring experience.", role: "Business Consultant, MG Road" },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <Layout>
      <div className="pt-28 section-padding" ref={ref}>
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 font-display">
            What Our <span className="text-gradient">Patients</span> Say
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Real stories from real patients — hear what families across Bengaluru have to say about their MediCare experience.
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            key={currentIndex}
            className="glass rounded-3xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Quote className="w-10 h-10 text-primary/20 mx-auto mb-4" />
            <p className="text-foreground text-lg md:text-xl leading-relaxed italic mb-6">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground font-bold text-lg">{testimonials[currentIndex].name}</p>
            <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button onClick={prev} className="p-3 rounded-full glass hover:shadow-md" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrentIndex(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"}`} />
              ))}
            </div>
            <motion.button onClick={next} className="p-3 rounded-full glass hover:shadow-md" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <ChevronRight className="w-5 h-5 text-foreground" />
            </motion.button>
          </div>
        </div>

        {/* All reviews grid */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center font-display">All Patient Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.06 }}
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div>
                  <p className="text-foreground font-semibold">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
