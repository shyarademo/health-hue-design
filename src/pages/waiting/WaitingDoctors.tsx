import { motion } from "framer-motion";
import { GraduationCap, Clock, Award, Quote } from "lucide-react";
import WaitingLayout from "@/components/waiting/WaitingLayout";
import { doctors } from "@/data/doctors";

const WaitingDoctors = () => (
  <WaitingLayout>
    <div className="py-8">
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold text-foreground font-display">Our Doctors</h1>
        <p className="text-muted-foreground text-sm mt-1">The team that's here for you today</p>
      </motion.div>

      <div className="flex flex-col gap-4">
        {doctors.map((doc, i) => (
          <motion.div
            key={doc.name}
            className="bg-card border border-border/50 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="p-5">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 ring-2 ring-primary/20">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground">{doc.name}</h3>
                  <p className="text-primary text-sm font-medium">{doc.role}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">{doc.specialty}</span>
                    <span className="px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs">{doc.exp}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mt-4 leading-relaxed">{doc.bio}</p>

              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <GraduationCap className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>{doc.education}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>{doc.exp} experience</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Award className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>Speaks: {doc.languages}</span>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-2 text-muted-foreground italic text-sm border-t border-border/50 pt-4">
                <Quote className="w-4 h-4 text-primary/40 flex-shrink-0 mt-0.5" />
                <span>"{doc.quote}"</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </WaitingLayout>
);

export default WaitingDoctors;
