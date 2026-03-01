import { motion } from "framer-motion";
import { Heart, Phone, Mail, MapPin, ArrowUp, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const quickLinks = ["Home", "About Us", "Services", "Doctors", "Testimonials", "Gallery", "FAQ"];

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 7:00 PM", active: true },
  { day: "Saturday", time: "9:00 AM – 3:00 PM", active: false },
  { day: "Sunday", time: "Closed", active: false },
  { day: "Emergency", time: "24/7 Available", active: true },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative">
      {/* Wave separator */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,120 L0,120 Z"
            fill="hsl(var(--primary))"
            fillOpacity="0.05"
          />
          <path
            d="M0,80 C320,40 640,100 960,60 C1200,30 1380,70 1440,80 L1440,120 L0,120 Z"
            fill="hsl(var(--primary))"
            fillOpacity="0.08"
          />
        </svg>
      </div>

      <div className="bg-foreground/[0.03] pt-8 pb-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-teal flex items-center justify-center">
                <Heart className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg text-foreground">
                Medi<span className="text-primary">Care</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Providing compassionate, expert healthcare to our community since 1999. Your health, our priority.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@medicare-clinic.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>123 Healthcare Ave, Medical City</span>
              </div>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Clinic Hours</h4>
            <div className="space-y-3">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className={`flex justify-between text-sm ${
                    h.active ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                >
                  <span>{h.day}</span>
                  <span className={h.active ? "text-primary" : ""}>{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Links + Social */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 mb-8">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s/g, "")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <motion.button
                  key={label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 MediCare Clinic. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full gradient-teal flex items-center justify-center text-primary-foreground shadow-md"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9, y: 0 }}
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
