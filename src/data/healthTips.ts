export interface HealthTip {
  title: string;
  content: string;
  category: string;
  icon: string; // lucide icon name
  do: string[];
  dont: string[];
}

export const healthTips: HealthTip[] = [
  {
    title: "Stay Hydrated",
    content: "Dehydration is one of the most common yet overlooked health issues. Aim for 8-10 glasses of water daily, more during summer.",
    category: "Daily Wellness",
    icon: "Droplets",
    do: ["Carry a water bottle everywhere", "Start your day with a glass of warm water", "Eat water-rich fruits like watermelon and cucumber", "Drink ORS or nimbu pani after outdoor activities"],
    dont: ["Wait until you're thirsty to drink", "Rely on sugary drinks for hydration", "Drink excessive tea/coffee (they're diuretics)", "Ignore dark-coloured urine — it signals dehydration"],
  },
  {
    title: "Sleep Hygiene",
    content: "Quality sleep is as important as diet and exercise. Adults need 7-8 hours of uninterrupted sleep for optimal health.",
    category: "Lifestyle",
    icon: "Moon",
    do: ["Maintain a consistent sleep schedule", "Keep your room dark and cool", "Avoid screens 30 min before bed", "Practice deep breathing or meditation"],
    dont: ["Use your phone in bed", "Consume caffeine after 4 PM", "Take long naps during the day", "Eat heavy meals close to bedtime"],
  },
  {
    title: "Hand Hygiene",
    content: "Proper handwashing prevents 80% of common infections. It's the simplest, most effective health habit you can build.",
    category: "Prevention",
    icon: "HandMetal",
    do: ["Wash hands for 20 seconds with soap", "Clean hands before eating and cooking", "Wash after using the toilet", "Use sanitiser when soap isn't available"],
    dont: ["Touch your face with unwashed hands", "Skip handwashing before meals", "Rely only on sanitiser — soap is better", "Forget to clean under nails and between fingers"],
  },
  {
    title: "Healthy Indian Breakfast",
    content: "Never skip breakfast. A balanced Indian breakfast fuels your body and brain for the day ahead.",
    category: "Nutrition",
    icon: "UtensilsCrossed",
    do: ["Include protein: eggs, sprouts, paneer, or dal", "Add fibre: oats, ragi dosa, multigrain roti", "Eat seasonal fruits", "Have buttermilk or curd for probiotics"],
    dont: ["Skip breakfast — it slows metabolism", "Start the day with just chai and biscuits", "Eat too many refined carbs (white bread, maida)", "Rush through meals — chew slowly"],
  },
  {
    title: "Screen Time & Eye Care",
    content: "Extended screen use causes digital eye strain, headaches, and sleep disruption. Follow the 20-20-20 rule.",
    category: "Daily Wellness",
    icon: "Eye",
    do: ["Follow 20-20-20 rule: every 20 min, look 20 feet away for 20 sec", "Adjust screen brightness to match surroundings", "Blink frequently to prevent dryness", "Get annual eye check-ups"],
    dont: ["Stare at screens without breaks", "Use devices in complete darkness", "Ignore persistent headaches or blurred vision", "Let children have unlimited screen time"],
  },
  {
    title: "Walking for Health",
    content: "A 30-minute daily walk can reduce heart disease risk by 35%, help manage diabetes, and improve mental health.",
    category: "Fitness",
    icon: "Footprints",
    do: ["Aim for 30 minutes of brisk walking daily", "Walk after dinner to aid digestion", "Use stairs instead of lifts", "Track your steps — aim for 8,000-10,000 daily"],
    dont: ["Walk immediately after a heavy meal — wait 15 min", "Walk in extreme heat without water", "Ignore pain in joints while walking", "Skip walking on rainy days — walk indoors instead"],
  },
  {
    title: "Stress Management",
    content: "Chronic stress weakens immunity and triggers lifestyle diseases. Simple daily habits can dramatically reduce stress levels.",
    category: "Mental Health",
    icon: "Brain",
    do: ["Practice 10 minutes of deep breathing daily", "Maintain a gratitude journal", "Talk to friends and family regularly", "Take short breaks during work"],
    dont: ["Bottle up emotions — seek help if needed", "Use alcohol or smoking to cope", "Overcommit — learn to say no", "Compare yourself with others on social media"],
  },
  {
    title: "Vaccination Reminders",
    content: "Vaccines aren't just for children. Adults need boosters and seasonal vaccines too. Stay protected, stay healthy.",
    category: "Prevention",
    icon: "Syringe",
    do: ["Get annual flu vaccination", "Complete COVID boosters as recommended", "Check tetanus booster (every 10 years)", "Hepatitis B vaccine if not already immunised"],
    dont: ["Skip vaccines because 'you never get sick'", "Ignore travel vaccination requirements", "Delay children's immunisation schedule", "Believe myths about vaccine side effects"],
  },
];
