import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  { title: "Modern Reception", desc: "Welcoming and comfortable waiting area", span: "md:col-span-2", bg: "from-primary/20 to-primary/5" },
  { title: "Consultation Room", desc: "Private, well-equipped examination rooms", span: "", bg: "from-emerald-500/20 to-emerald-500/5" },
  { title: "Diagnostic Lab", desc: "Advanced laboratory equipment", span: "", bg: "from-violet-500/20 to-violet-500/5" },
  { title: "Pediatric Wing", desc: "Child-friendly treatment spaces", span: "md:col-span-2", bg: "from-amber-500/20 to-amber-500/5" },
  { title: "Surgery Suite", desc: "State-of-the-art operating rooms", span: "", bg: "from-rose-500/20 to-rose-500/5" },
  { title: "Team Meeting", desc: "Collaborative medical team", span: "", bg: "from-pink-500/20 to-pink-500/5" },
  { title: "Pharmacy", desc: "In-house pharmacy for convenience", span: "", bg: "from-sky-500/20 to-sky-500/5" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding scroll-mt-20" ref={ref}>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">Gallery</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 font-display">
          Our <span className="text-gradient">Facility</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
          A glimpse into our modern, patient-friendly healthcare environment.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto auto-rows-[200px]">
        {galleryItems.map((item, i) => (
          <motion.div
            key={item.title}
            className={`relative group rounded-2xl overflow-hidden cursor-pointer ${item.span}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            onClick={() => setLightbox(i)}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} transition-transform duration-500 group-hover:scale-110`} />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mb-3">
                <ZoomIn className="w-5 h-5 text-foreground/40 group-hover:text-foreground/70 transition-colors" />
              </div>
              <h3 className="font-bold text-foreground text-lg">{item.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
            </div>
            <motion.div
              className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="glass-strong rounded-3xl p-8 max-w-lg w-full text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`w-full h-48 rounded-2xl bg-gradient-to-br ${galleryItems[lightbox].bg} mb-6`} />
              <h3 className="text-2xl font-bold text-foreground">{galleryItems[lightbox].title}</h3>
              <p className="text-muted-foreground mt-2">{galleryItems[lightbox].desc}</p>
              <button
                onClick={() => setLightbox(null)}
                className="mt-6 px-6 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
