import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown, ChevronUp, Droplets, Moon, HandMetal, UtensilsCrossed, Eye, Footprints, Brain, Syringe } from "lucide-react";
import WaitingLayout from "@/components/waiting/WaitingLayout";
import { healthTips } from "@/data/healthTips";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Droplets, Moon, HandMetal, UtensilsCrossed, Eye, Footprints, Brain, Syringe,
};

const TipCard = ({ tip, index }: { tip: typeof healthTips[0]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = iconMap[tip.icon] || Droplets;

  return (
    <motion.div
      className="bg-card border border-border/50 rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex items-start gap-3 text-left"
      >
        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-foreground text-sm">{tip.title}</h3>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">{tip.category}</span>
          </div>
          <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{tip.content}</p>
        </div>
        <div className="flex-shrink-0 text-muted-foreground">
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/10 p-3">
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Do's
                </p>
                <ul className="space-y-1.5">
                  {tip.do.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <Check className="w-3 h-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-red-500/5 border border-red-500/10 p-3">
                <p className="text-xs font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center gap-1">
                  <X className="w-3 h-3" /> Don'ts
                </p>
                <ul className="space-y-1.5">
                  {tip.dont.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <X className="w-3 h-3 text-red-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const WaitingTips = () => (
  <WaitingLayout>
    <div className="py-8">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold text-foreground font-display">Health Tips</h1>
        <p className="text-muted-foreground text-sm mt-1">Quick do's and don'ts for everyday wellness</p>
      </motion.div>

      <div className="flex flex-col gap-3">
        {healthTips.map((tip, i) => (
          <TipCard key={tip.title} tip={tip} index={i} />
        ))}
      </div>
    </div>
  </WaitingLayout>
);

export default WaitingTips;
