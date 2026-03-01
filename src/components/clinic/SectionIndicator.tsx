import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "doctors", label: "Doctors" },
  { id: "testimonials", label: "Testimonials" },
  { id: "gallery", label: "Gallery" },
  { id: "faq", label: "FAQ" },
];

const SectionIndicator = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-3">
      {sections.map(({ id, label }) => (
        <motion.button
          key={id}
          onClick={() => scrollTo(id)}
          className="group relative flex items-center"
          whileHover={{ scale: 1.2 }}
        >
          <span className="absolute right-6 px-2 py-1 rounded-md bg-foreground text-background text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
          </span>
          <div
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              active === id
                ? "bg-primary scale-125 shadow-md shadow-primary/40"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        </motion.button>
      ))}
    </div>
  );
};

export default SectionIndicator;
