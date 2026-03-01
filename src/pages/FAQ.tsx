import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/clinic/Layout";

const tabs = ["Visits", "Insurance", "Procedures"];

const faqData: Record<string, { q: string; a: string }[]> = {
  Visits: [
    { q: "Do I need an appointment?", a: "While we accept walk-ins, we recommend scheduling an appointment to minimise wait times. You can book online, via WhatsApp (+91 80 4567 8900), or call our reception." },
    { q: "What should I bring to my first visit?", a: "Please bring your Aadhaar card or government photo ID, any existing prescriptions, recent test reports, and your insurance card (if applicable)." },
    { q: "What are your operating hours?", a: "Monday–Friday: 8:00 AM – 8:00 PM, Saturday: 9:00 AM – 4:00 PM, Sunday: 10:00 AM – 1:00 PM (consultation only). Emergency services are available 24/7." },
    { q: "Can I request a specific doctor?", a: "Absolutely! When booking your appointment, you can select your preferred physician based on availability. We recommend Dr. Sharma for general consultations and Dr. Nair for children." },
    { q: "Is parking available at the clinic?", a: "Yes, we have free two-wheeler parking and validated car parking in the MG Road complex. Auto and cab drop-off is convenient too." },
    { q: "Do you offer teleconsultation?", a: "Yes! We offer video consultations for follow-ups and non-emergency cases via our app. Consultation fee starts at ₹300." },
  ],
  Insurance: [
    { q: "What insurance plans do you accept?", a: "We accept Star Health, ICICI Lombard, New India Assurance, HDFC ERGO, Bajaj Allianz, Niva Bupa, Care Health, and most TPA-linked corporate policies. Please call us to confirm your specific plan." },
    { q: "Is Ayushman Bharat (PMJAY) accepted?", a: "Yes, we are an empanelled facility under the Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana for eligible beneficiaries. Bring your Ayushman card and Aadhaar for cashless processing." },
    { q: "Do you offer payment plans?", a: "Yes, for procedures above ₹10,000 not covered by insurance, we offer EMI options through select partners. Our billing team can set up a plan that works for you." },
    { q: "What if I don't have insurance?", a: "We offer competitive self-pay rates. A general consultation starts at ₹500, specialist consultation at ₹800. Comprehensive health check-up packages start at ₹1,999." },
    { q: "Do you accept UPI and card payments?", a: "Yes, we accept UPI (GPay, PhonePe, Paytm), all debit/credit cards, net banking, and cash. We can also generate digital receipts for reimbursement claims." },
  ],
  Procedures: [
    { q: "What diagnostic services are available?", a: "We offer comprehensive lab testing (CBC, LFT, KFT, HbA1c, lipid profile, thyroid panel), X-ray, ultrasound, ECG, 2D Echo, and referrals for MRI and CT scans at partner centres." },
    { q: "How quickly do I get lab results?", a: "Most routine blood tests are reported the same day (by 6 PM for morning samples). Reports are shared digitally via WhatsApp and email. Specialised tests may take 24–48 hours." },
    { q: "Do you perform minor surgeries?", a: "Yes, we handle minor surgical procedures including biopsies, wound repair, abscess drainage, and lesion removal in our fully equipped procedure room under local anaesthesia." },
    { q: "What vaccinations do you provide?", a: "We offer all vaccinations as per the IAP (Indian Academy of Pediatrics) schedule for children, plus flu shots, Hepatitis B, HPV, and travel vaccinations for adults." },
    { q: "Do you have an in-house pharmacy?", a: "Yes, our pharmacy stocks all commonly prescribed medicines so you can fill prescriptions immediately after your consultation. Generic alternatives are available at lower costs." },
  ],
};

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("Visits");
  const [search, setSearch] = useState("");

  const filteredFaqs = faqData[activeTab].filter(
    (f) => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="pt-28 section-padding" ref={ref}>
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 font-display">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Everything you need to know about visiting MediCare Clinic. Can't find your answer? Call us at +91 80 4567 8900.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div className="relative mb-8" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full glass text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </motion.div>

          <motion.div className="flex gap-2 mb-8 justify-center flex-wrap" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}>
            {tabs.map((tab) => (
              <motion.button
                key={tab}
                onClick={() => { setActiveTab(tab); setSearch(""); }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab ? "gradient-teal text-primary-foreground shadow-md" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {filteredFaqs.map((faq, i) => (
              <motion.div key={faq.q} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 + i * 0.06 }}>
                <AccordionItem value={`item-${i}`} className="glass rounded-xl px-6 border-none">
                  <AccordionTrigger className="text-foreground font-medium hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
            {filteredFaqs.length === 0 && (
              <p className="text-center text-muted-foreground py-8">No results found. Try a different search.</p>
            )}
          </Accordion>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
