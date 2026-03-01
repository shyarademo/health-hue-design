import { motion } from "framer-motion";
import { Heart, Activity, TestTube, Wind, Monitor, Footprints, Syringe, Scan } from "lucide-react";
import WaitingLayout from "@/components/waiting/WaitingLayout";
import { equipment } from "@/data/equipment";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Scan, Heart, TestTube, Activity, Wind, Monitor, Footprints, Syringe,
};

const WaitingEquipment = () => (
  <WaitingLayout>
    <div className="py-8">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold text-foreground font-display">Our Equipment</h1>
        <p className="text-muted-foreground text-sm mt-1">Modern technology for accurate diagnosis and treatment</p>
      </motion.div>

      <div className="flex flex-col gap-3">
        {equipment.map((item, i) => {
          const Icon = iconMap[item.icon] || Scan;
          return (
            <motion.div
              key={item.name}
              className="bg-card border border-border/50 rounded-2xl p-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground text-sm">{item.name}</h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{item.category}</span>
                  </div>
                  <p className="text-muted-foreground text-xs mt-1.5 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.features.map((f) => (
                      <span key={f} className="text-[10px] px-2 py-0.5 rounded-full bg-accent text-accent-foreground">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </WaitingLayout>
);

export default WaitingEquipment;
