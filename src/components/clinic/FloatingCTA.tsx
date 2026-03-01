import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, X, Phone, Clock, MapPin } from "lucide-react";

const FloatingCTA = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <motion.button
        className="fixed bottom-6 right-6 z-40 gradient-coral text-white rounded-full px-6 py-4 font-semibold shadow-xl shadow-accent/30 flex items-center gap-2"
        onClick={() => setOpen(true)}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <CalendarCheck className="w-5 h-5" />
        <span className="hidden sm:inline">Book Appointment</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-foreground/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="glass-strong rounded-3xl p-8 max-w-md w-full relative"
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-2xl gradient-teal flex items-center justify-center mx-auto mb-4">
                  <CalendarCheck className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Book an Appointment</h3>
                <p className="text-muted-foreground mt-2 text-sm">
                  Contact us to schedule your visit. We're here to help!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Call Us</p>
                    <p className="text-muted-foreground text-sm">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Operating Hours</p>
                    <p className="text-muted-foreground text-sm">Mon–Fri 8AM–7PM, Sat 9AM–3PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground text-sm">Location</p>
                    <p className="text-muted-foreground text-sm">123 Healthcare Ave, Medical City</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingCTA;
