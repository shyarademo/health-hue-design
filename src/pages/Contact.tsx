import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, CreditCard, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/clinic/Layout";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 80 4567 8900", href: "tel:+918045678900" },
  { icon: Phone, label: "Emergency", value: "+91 80 4567 8911 (24/7)", href: "tel:+918045678911" },
  { icon: Mail, label: "Email", value: "care@medicare-clinic.in", href: "mailto:care@medicare-clinic.in" },
  { icon: MapPin, label: "Address", value: "42, MG Road, Koramangala, Bengaluru, Karnataka 560034", href: "https://maps.google.com/?q=Koramangala+Bengaluru" },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 8:00 PM" },
  { day: "Saturday", time: "9:00 AM – 4:00 PM" },
  { day: "Sunday", time: "10:00 AM – 1:00 PM (Consultation only)" },
  { day: "Emergency", time: "24/7" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Layout>
      <div className="pt-28 section-padding" ref={ref}>
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 font-display">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Visit us in Koramangala, call, or fill out the form below. We're here to help.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Appointment Form */}
          <motion.div className="glass rounded-3xl p-8" initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
            <h2 className="text-2xl font-bold text-foreground mb-6 font-display">Book an Appointment</h2>
            {submitted ? (
              <motion.div className="text-center py-12" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                <div className="w-16 h-16 rounded-full gradient-teal flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-foreground font-bold text-xl">Request Received!</h3>
                <p className="text-muted-foreground mt-2">Our team will call you within 30 minutes to confirm your appointment.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Rajesh Kumar" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 98765 43210" required className="mt-1" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="dept">Department</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Medicine</SelectItem>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="gynaecology">Gynaecology</SelectItem>
                        <SelectItem value="diagnostics">Diagnostics & Lab</SelectItem>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="orthopaedics">Orthopaedics</SelectItem>
                        <SelectItem value="mental-health">Mental Wellness</SelectItem>
                        <SelectItem value="ophthalmology">Ophthalmology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Additional Notes</Label>
                  <Textarea id="message" placeholder="Describe your symptoms or reason for visit..." className="mt-1" rows={3} />
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-3 rounded-full gradient-teal text-primary-foreground font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Appointment
                </motion.button>
                <p className="text-xs text-muted-foreground text-center">
                  This is a request form. Our team will contact you to confirm the appointment.
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-6" initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}>
            {/* Map */}
            <div className="glass rounded-3xl overflow-hidden h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5965815895285!2d77.61170541482168!3d12.935257390875693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1452c7ae0e43%3A0x5e8e879e96b3e7a!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MediCare Clinic Location"
              />
            </div>

            {/* Contact details */}
            <div className="glass rounded-3xl p-6 space-y-4">
              {contactInfo.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="text-foreground font-bold">Operating Hours</h3>
              </div>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{h.day}</span>
                    <span className="text-foreground font-medium">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment */}
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <CreditCard className="w-5 h-5 text-primary" />
                <h3 className="text-foreground font-bold">Payment Options</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                We accept UPI (GPay, PhonePe, Paytm), all debit/credit cards, net banking, and cash. Insurance cashless facility available for empanelled providers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
