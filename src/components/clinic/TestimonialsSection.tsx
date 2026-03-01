import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { name: "Maria Johnson", rating: 5, text: "The level of care I received was exceptional. Dr. Mitchell took the time to really listen and understand my concerns. I've never felt so valued as a patient.", role: "Patient since 2019" },
  { name: "Robert Chen", rating: 5, text: "MediCare's pediatric team has been incredible with our twins. Dr. Chen is patient, knowledgeable, and makes every visit comfortable for the kids.", role: "Parent" },
  { name: "Aisha Patel", rating: 5, text: "The diagnostic lab is world-class. Results came back within hours and the follow-up consultation was thorough. Truly a modern healthcare experience.", role: "Patient since 2021" },
  { name: "James O'Brien", rating: 4, text: "From the friendly reception to the expert medical advice, everything about MediCare feels intentional. They genuinely care about patient outcomes.", role: "Patient since 2020" },
  { name: "Sophia Williams", rating: 5, text: "Dr. Volkov helped me through a difficult time with compassion and expertise. I can't recommend the women's health team enough.", role: "Patient since 2022" },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding bg-secondary/30" ref={ref}>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 font-display">
          What Our <span className="text-gradient">Patients</span> Say
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        {/* Stacked cards effect */}
        <div className="relative h-[320px] md:h-[280px]">
          {testimonials.map((t, i) => {
            const offset = i - current;
            const absOffset = Math.abs(offset);
            if (absOffset > 2) return null;

            return (
              <motion.div
                key={i}
                className="absolute inset-0 glass rounded-3xl p-8 md:p-10 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  scale: 1 - absOffset * 0.06,
                  y: absOffset * 12,
                  zIndex: testimonials.length - absOffset,
                  opacity: absOffset > 1 ? 0.3 : 1 - absOffset * 0.2,
                  rotateX: offset * -2,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => setCurrent(i)}
              >
                {i === current && (
                  <>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <motion.div
                          key={si}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: si * 0.1 }}
                        >
                          <Star
                            className={`w-5 h-5 ${si < t.rating ? "text-amber-400 fill-amber-400" : "text-muted"}`}
                          />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                      "{t.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full gradient-teal flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {t.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{t.name}</p>
                        <p className="text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Nav buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            onClick={prev}
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-secondary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          <motion.button
            onClick={next}
            className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-secondary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
