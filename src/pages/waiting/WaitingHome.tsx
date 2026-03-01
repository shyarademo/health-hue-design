import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Users, Cpu, Lightbulb, ArrowRight, Sparkles } from "lucide-react";
import WaitingLayout from "@/components/waiting/WaitingLayout";

const quickLinks = [
  { title: "Health Blogs", desc: "Articles by our doctors", to: "/waiting/blogs", icon: BookOpen, color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  { title: "Our Doctors", desc: "Meet the team caring for you", to: "/waiting/doctors", icon: Users, color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
  { title: "Our Equipment", desc: "Modern facilities & tech", to: "/waiting/equipment", icon: Cpu, color: "bg-purple-500/10 text-purple-600 dark:text-purple-400" },
  { title: "Health Tips", desc: "Quick wellness advice", to: "/waiting/tips", icon: Lightbulb, color: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
];

const WaitingHome = () => (
  <WaitingLayout>
    <div className="py-8">
      {/* Greeting */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <Sparkles className="w-4 h-4" /> Welcome to MediCare
        </motion.div>
        <h1 className="text-3xl font-bold text-foreground font-display">
          While You Wait...
        </h1>
        <p className="text-muted-foreground mt-2 text-base">
          Explore health resources curated by our doctors. Learn, relax, and feel confident about your care.
        </p>
      </motion.div>

      {/* Quick links grid */}
      <div className="grid grid-cols-2 gap-3">
        {quickLinks.map((link, i) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <Link
                to={link.to}
                className="block p-4 rounded-2xl bg-card border border-border/50 hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${link.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{link.title}</h3>
                <p className="text-muted-foreground text-xs mt-1">{link.desc}</p>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary mt-2 transition-colors" />
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Calming message */}
      <motion.div
        className="mt-8 p-5 rounded-2xl bg-primary/5 border border-primary/10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">
          🩺 You're in good hands. Our team is dedicated to providing you with the best possible care. Your turn is coming up soon!
        </p>
      </motion.div>
    </div>
  </WaitingLayout>
);

export default WaitingHome;
