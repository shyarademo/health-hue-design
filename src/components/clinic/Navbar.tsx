import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-strong rounded-full px-6 py-3 shadow-xl"
            : "bg-transparent px-8 py-5 w-full max-w-7xl"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between">
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
            className="flex items-center gap-2 text-foreground"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 rounded-lg gradient-teal flex items-center justify-center">
              <Heart className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              Medi<span className="text-primary">Care</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full transition-colors hover:bg-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile toggle */}
          <motion.button
            className="md:hidden p-2 rounded-full hover:bg-secondary"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl p-6 pb-10 shadow-2xl"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="w-12 h-1.5 bg-muted rounded-full mx-auto mb-6" />
              <div className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollTo(item.href)}
                    className="text-left px-4 py-3 text-lg font-medium text-foreground rounded-xl hover:bg-secondary transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
