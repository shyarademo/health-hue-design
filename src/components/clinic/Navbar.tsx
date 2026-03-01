import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Gallery", to: "/gallery" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const Navbar = ({ offsetTop }: { offsetTop?: boolean }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${offsetTop ? "top-[36px]" : "top-0"} ${
          scrolled
            ? "bg-background/80 backdrop-blur-lg shadow-lg py-2 px-4 md:px-8 lg:px-20"
            : "bg-transparent px-4 md:px-8 lg:px-20 py-4"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2 text-foreground shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-teal flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                Medi<span className="text-primary">Care</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop nav — hidden below lg (1024px) since 8 items need space */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <motion.div key={item.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={item.to}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                    location.pathname === item.to
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-1 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -10, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 10, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            )}
          </div>

          {/* Mobile/Tablet toggle — visible below lg */}
          <motion.button
            className="lg:hidden p-2 rounded-full hover:bg-secondary/80 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile/Tablet drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-card rounded-t-3xl shadow-2xl max-h-[85vh] flex flex-col"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Drag handle */}
              <div className="pt-4 pb-2 flex-shrink-0">
                <div className="w-12 h-1.5 bg-muted rounded-full mx-auto" />
              </div>

              {/* Header with logo and close */}
              <div className="flex items-center justify-between px-6 pb-4 flex-shrink-0">
                <Link to="/" className="flex items-center gap-2 text-foreground" onClick={() => setMobileOpen(false)}>
                  <div className="w-8 h-8 rounded-lg gradient-teal flex items-center justify-center">
                    <Heart className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-lg tracking-tight">
                    Medi<span className="text-primary">Care</span>
                  </span>
                </Link>
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Scrollable nav links */}
              <div className="overflow-y-auto flex-1 px-6 pb-8">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, i) => (
                    <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                      <Link
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className={`block text-left px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                          location.pathname === item.to
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  {mounted && (
                    <motion.button
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="flex items-center gap-3 px-4 py-3 text-base font-medium text-foreground rounded-xl hover:bg-secondary transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navItems.length * 0.05 }}
                    >
                      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                      {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
