export interface Equipment {
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: string; // lucide icon name
}

export const equipment: Equipment[] = [
  {
    name: "Digital X-Ray",
    category: "Imaging",
    description: "High-resolution digital X-ray with instant image processing. Results available within 15 minutes — no waiting for film development.",
    features: ["Low radiation dose", "Instant digital images", "Easy sharing with specialists", "Chest, bone & dental X-rays"],
    icon: "Scan",
  },
  {
    name: "2D Echocardiography",
    category: "Cardiology",
    description: "Real-time ultrasound imaging of the heart to assess valve function, chamber size, and pumping efficiency.",
    features: ["Non-invasive & painless", "Colour Doppler imaging", "Valve assessment", "Heart function evaluation"],
    icon: "Heart",
  },
  {
    name: "Automated Lab Analysers",
    category: "Diagnostics",
    description: "State-of-the-art fully automated blood analysers for CBC, biochemistry, and immunoassay — ensuring accuracy and same-day reports.",
    features: ["Same-day report delivery", "WhatsApp digital reports", "Wide test menu", "Quality-controlled results"],
    icon: "TestTube",
  },
  {
    name: "12-Lead ECG Machine",
    category: "Cardiology",
    description: "Quick and accurate heart rhythm recording. Essential for detecting arrhythmias, heart attacks, and other cardiac conditions.",
    features: ["Results in 5 minutes", "Digital recording & storage", "Interpretation by cardiologist", "Portable for bedside use"],
    icon: "Activity",
  },
  {
    name: "Nebulisation Unit",
    category: "Respiratory",
    description: "Hospital-grade nebulisers for immediate relief in asthma attacks, wheezing, and respiratory distress — for both adults and children.",
    features: ["Rapid symptom relief", "Paediatric-friendly masks", "Spacer devices available", "Oxygen support if needed"],
    icon: "Wind",
  },
  {
    name: "Ultrasound (USG)",
    category: "Imaging",
    description: "Abdominal and pelvic ultrasound for examining organs, detecting stones, cysts, and monitoring pregnancy.",
    features: ["Non-invasive imaging", "Real-time visualisation", "Pregnancy monitoring", "Guided procedures"],
    icon: "Monitor",
  },
  {
    name: "Treadmill Test (TMT)",
    category: "Cardiology",
    description: "Stress test to evaluate heart performance during exercise. Helps detect coronary artery disease in its early stages.",
    features: ["Controlled exercise protocol", "Continuous ECG monitoring", "Blood pressure tracking", "Risk stratification"],
    icon: "Footprints",
  },
  {
    name: "Minor Procedure Room",
    category: "Surgical",
    description: "A fully equipped sterile room for minor surgical procedures — wound suturing, abscess drainage, biopsies, and more.",
    features: ["Sterile environment", "Local anaesthesia", "Same-day procedures", "Post-procedure care"],
    icon: "Syringe",
  },
];
