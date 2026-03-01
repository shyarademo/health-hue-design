import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { X, Maximize2 } from "lucide-react";
import Layout from "@/components/clinic/Layout";
import galleryReception from "@/assets/gallery-reception.jpg";
import galleryConsultation from "@/assets/gallery-consultation.jpg";
import galleryLab from "@/assets/gallery-lab.jpg";
import galleryPediatric from "@/assets/gallery-pediatric.jpg";
import galleryPharmacy from "@/assets/gallery-pharmacy.jpg";
import galleryCardiology from "@/assets/gallery-cardiology.jpg";
import galleryWomens from "@/assets/gallery-womens.jpg";
import galleryWaiting from "@/assets/gallery-waiting.jpg";

const galleryItems = [
  { title: "Modern Reception", desc: "Warm, welcoming reception area with comfortable seating and digital check-in kiosks", span: "md:col-span-2", image: galleryReception },
  { title: "Consultation Rooms", desc: "Private, well-equipped consultation rooms ensuring patient comfort and confidentiality", span: "", image: galleryConsultation },
  { title: "Diagnostic Lab", desc: "State-of-the-art in-house pathology lab with automated analysers for same-day reports", span: "", image: galleryLab },
  { title: "Pediatric Wing", desc: "Child-friendly environment with colourful decor, play area, and gentle care", span: "", image: galleryPediatric },
  { title: "Pharmacy", desc: "In-house pharmacy stocking all prescribed medicines — no need to visit outside", span: "", image: galleryPharmacy },
  { title: "ECG & Cardiology", desc: "Dedicated cardiac suite with ECG, 2D Echo, and stress testing equipment", span: "md:col-span-2", image: galleryCardiology },
  { title: "Women's Health Suite", desc: "Private, comfortable suite for gynaecology consultations and ultrasound scans", span: "", image: galleryWomens },
  { title: "Waiting Lounge", desc: "Air-conditioned lounge with filtered water, magazines, and free Wi-Fi", span: "", image: galleryWaiting },
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);

  return (
    <Layout>
      <div className="pt-28 section-padding" ref={ref}>
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ y: headerY }}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Gallery</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 font-display">
            Our <span className="text-gradient">Clinic</span> Facilities
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Take a virtual tour of our modern, NABH-accredited facility in Koramangala, Bengaluru.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto" ref={containerRef}>
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              className={`${item.span} relative rounded-2xl overflow-hidden cursor-pointer group h-52`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              onClick={() => setSelectedItem(i)}
              whileHover={{ scale: 1.03 }}
            >
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.desc}</p>
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
            <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={() => setSelectedItem(null)} />
              <motion.div
                className="relative glass-strong rounded-3xl overflow-hidden max-w-2xl w-full"
                initial={{ scale: 0.8, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 40 }}
                transition={{ type: "spring", damping: 25 }}
              >
                <button onClick={() => setSelectedItem(null)} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors">
                  <X className="w-5 h-5 text-white" />
                </button>
                <img src={galleryItems[selectedItem].image} alt={galleryItems[selectedItem].title} className="w-full h-64 md:h-80 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground">{galleryItems[selectedItem].title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{galleryItems[selectedItem].desc}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default Gallery;
