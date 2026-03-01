import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, Maximize2 } from "lucide-react";
import Layout from "@/components/clinic/Layout";

const galleryItems = [
  { title: "Modern Reception", desc: "Warm, welcoming reception area with comfortable seating and digital check-in kiosks", span: "md:col-span-2", bg: "from-teal-400 to-cyan-500" },
  { title: "Consultation Rooms", desc: "Private, well-equipped consultation rooms ensuring patient comfort and confidentiality", span: "", bg: "from-blue-400 to-indigo-500" },
  { title: "Diagnostic Lab", desc: "State-of-the-art in-house pathology lab with automated analysers for same-day reports", span: "", bg: "from-emerald-400 to-teal-500" },
  { title: "Pediatric Wing", desc: "Child-friendly environment with colourful decor, play area, and gentle care", span: "", bg: "from-pink-400 to-rose-500" },
  { title: "Pharmacy", desc: "In-house pharmacy stocking all prescribed medicines — no need to visit outside", span: "", bg: "from-amber-400 to-orange-500" },
  { title: "ECG & Cardiology", desc: "Dedicated cardiac suite with ECG, 2D Echo, and stress testing equipment", span: "md:col-span-2", bg: "from-red-400 to-pink-500" },
  { title: "Women's Health Suite", desc: "Private, comfortable suite for gynaecology consultations and ultrasound scans", span: "", bg: "from-purple-400 to-violet-500" },
  { title: "Waiting Lounge", desc: "Air-conditioned lounge with filtered water, magazines, and free Wi-Fi", span: "", bg: "from-sky-400 to-blue-500" },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  return (
    <Layout>
      <div className="pt-28 section-padding" ref={ref}>
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Gallery</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 font-display">
            Our <span className="text-gradient">Clinic</span> Facilities
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Take a virtual tour of our modern, NABH-accredited facility in Koramangala, Bengaluru.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              className={`${item.span} relative rounded-2xl overflow-hidden cursor-pointer group h-52`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              onClick={() => setSelectedItem(i)}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} opacity-80`} />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-white/80 text-sm mt-1">{item.desc}</p>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={() => setSelectedItem(null)} />
              <motion.div
                className="relative glass-strong rounded-3xl p-8 max-w-lg w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <button onClick={() => setSelectedItem(null)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary">
                  <X className="w-5 h-5 text-foreground" />
                </button>
                <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${galleryItems[selectedItem].bg} mb-6`} />
                <h3 className="text-2xl font-bold text-foreground">{galleryItems[selectedItem].title}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">{galleryItems[selectedItem].desc}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default Gallery;
