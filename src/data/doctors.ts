import doctorRajesh from "@/assets/doctor-rajesh.jpg";
import doctorPriya from "@/assets/doctor-priya.jpg";
import doctorArun from "@/assets/doctor-arun.jpg";
import doctorSneha from "@/assets/doctor-sneha.jpg";
import doctorVikram from "@/assets/doctor-vikram.jpg";

export interface Doctor {
  name: string;
  role: string;
  specialty: string;
  exp: string;
  avatar: string;
  image: string;
  quote: string;
  education: string;
  languages: string;
  bio: string;
}

export const doctors: Doctor[] = [
  {
    name: "Dr. Rajesh Sharma", role: "Chief Medical Officer", specialty: "Internal Medicine", exp: "20+ years", avatar: "RS", image: doctorRajesh,
    quote: "Medicine is not just science — it's the art of listening to your patient.",
    education: "MBBS, MD (Internal Medicine) — AIIMS Delhi",
    languages: "Hindi, English, Kannada",
    bio: "With over two decades of clinical experience, Dr. Sharma leads MediCare's team with a patient-first philosophy. He specialises in managing complex chronic conditions including diabetes, hypertension, and metabolic disorders."
  },
  {
    name: "Dr. Priya Nair", role: "Head of Pediatrics", specialty: "Pediatric Care", exp: "15+ years", avatar: "PN", image: doctorPriya,
    quote: "Every child deserves a healthy, happy start to life.",
    education: "MBBS, DCH — CMC Vellore",
    languages: "Malayalam, English, Hindi, Kannada",
    bio: "Dr. Nair is beloved by young patients and parents alike. She specialises in neonatal care, childhood vaccinations (IAP schedule), developmental milestones, and adolescent health."
  },
  {
    name: "Dr. Arun Patel", role: "Lead Diagnostician", specialty: "Diagnostic Medicine", exp: "12+ years", avatar: "AP", image: doctorArun,
    quote: "Accurate diagnosis is the foundation of effective treatment.",
    education: "MBBS, MD (Pathology) — KEM Hospital Mumbai",
    languages: "Gujarati, Hindi, English, Kannada",
    bio: "Dr. Patel oversees MediCare's in-house diagnostic lab, ensuring same-day reports and accurate results. He has introduced digital reporting via WhatsApp for patient convenience."
  },
  {
    name: "Dr. Sneha Gupta", role: "Women's Health Lead", specialty: "Gynaecology", exp: "18+ years", avatar: "SG", image: doctorSneha,
    quote: "Empowering women through comprehensive, compassionate care.",
    education: "MBBS, MS (OBG) — Safdarjung Hospital, Delhi",
    languages: "Hindi, English, Kannada",
    bio: "Dr. Gupta provides expert care across all stages of a woman's life — from adolescent health and prenatal care to menopause management. She is known for her gentle, reassuring approach."
  },
  {
    name: "Dr. Vikram Singh", role: "Preventive Care & Wellness", specialty: "Wellness & Prevention", exp: "10+ years", avatar: "VS", image: doctorVikram,
    quote: "Prevention today means a healthier, longer tomorrow.",
    education: "MBBS, MPH — JIPMER Puducherry",
    languages: "Hindi, English, Punjabi, Kannada",
    bio: "Dr. Singh designs comprehensive health check-up packages tailored for Indian lifestyles. He focuses on lifestyle diseases, executive health screenings, and corporate wellness programmes."
  },
];
