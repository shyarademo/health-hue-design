import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const tabs = ["Visits", "Insurance", "Procedures"];

const faqData: Record<string, { q: string; a: string }[]> = {
  Visits: [
    { q: "Do I need an appointment?", a: "While we accept walk-ins, we recommend scheduling an appointment to minimize wait times. You can book online or call our reception." },
    { q: "What should I bring to my first visit?", a: "Please bring your photo ID, insurance card, a list of current medications, and any recent medical records or test results." },
    { q: "What are your operating hours?", a: "We're open Monday–Friday 8AM–7PM, Saturday 9AM–3PM, and closed on Sundays. Emergency services are available 24/7." },
    { q: "Can I request a specific doctor?", a: "Absolutely! When booking your appointment, you can select your preferred physician based on availability." },
  ],
  Insurance: [
    { q: "What insurance plans do you accept?", a: "We accept most major insurance plans including Blue Cross, Aetna, UnitedHealth, Cigna, and Medicare. Contact us for a full list." },
    { q: "Do you offer payment plans?", a: "Yes, we offer flexible payment plans for procedures not covered by insurance. Our billing team can set up a plan that works for you." },
    { q: "What if I don't have insurance?", a: "We offer competitive self-pay rates and can discuss financing options. We believe quality healthcare should be accessible to everyone." },
  ],
  Procedures: [
    { q: "What diagnostic services are available?", a: "We offer comprehensive lab testing, X-ray, ultrasound, ECG, and referrals for advanced imaging like MRI and CT scans." },
    { q: "How do I prepare for a lab test?", a: "Preparation varies by test. Our staff will provide specific instructions when scheduling. Common requirements include fasting for 8-12 hours." },
    { q: "Do you perform minor surgeries?", a: "Yes, we handle minor surgical procedures including biopsies, wound repair, and lesion removal in our fully equipped procedure room." },
  ],
};

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("Visits");
  const [search, setSearch] = useState("");

  const filteredFaqs = faqData[activeTab].filter(
    (f) =>
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="faq" className="section-padding" ref={ref}>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">FAQ</span>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 font-display">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {/* Search */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full glass text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex gap-2 mb-8 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => { setActiveTab(tab); setSearch(""); }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "gradient-teal text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {filteredFaqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.08 }}
            >
              <AccordionItem value={`item-${i}`} className="glass rounded-xl px-6 border-none">
                <AccordionTrigger className="text-foreground font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
          {filteredFaqs.length === 0 && (
            <p className="text-center text-muted-foreground py-8">No results found. Try a different search.</p>
          )}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
