"use client";

import { motion } from "framer-motion";
import {
   Mail,
   MapPin,
   Phone,
   Send,
   Link,
   X,
   Terminal
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 md:py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="page-ambient" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Info Side */}
          <div className="text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 md:mb-8 leading-tight tracking-tight"
            >
              Get in <span className="text-[var(--accent)]">Touch</span>.
            </motion.h1>
            <p className="text-base md:text-xl text-[var(--muted)] mb-8 md:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Have questions about our research or interested in collaboration? Our team is here to help you navigate your academic journey.
            </p>

            <div className="space-y-6 md:space-y-8 mb-10 md:mb-12">
               {[
                 { icon: <Mail className="w-5 h-5 md:w-6 md:h-6" />, label: "Email Us", val: "research@careerai.edu" },
                 { icon: <Phone className="w-5 h-5 md:w-6 md:h-6" />, label: "Call Us", val: "+94 77 123 4567" },
                 { icon: <MapPin className="w-5 h-5 md:w-6 md:h-6" />, label: "Visit Us", val: "Tech Innovation Hub, Colombo, SL" }
               ].map((item, i) => (
                 <div key={item.label} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[var(--panel)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all shadow-lg">
                       {item.icon}
                    </div>
                    <div className="text-center sm:text-left">
                       <div className="text-[10px] md:text-sm font-bold text-[var(--muted)] uppercase tracking-wider mb-0.5 md:mb-1">{item.label}</div>
                       <div className="text-base md:text-lg font-bold text-[var(--ink)]">{item.val}</div>
                    </div>
                 </div>
               ))}
            </div>

            <div className="flex justify-center lg:justify-start gap-3 md:gap-4">
               {[<Link className="w-5 h-5" />, <X className="w-5 h-5" />, <Terminal className="w-5 h-5" />].map((icon, i) => (
                  <button key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:bg-[var(--ink)] hover:text-white transition-all">
                     {icon}
                  </button>
               ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 md:p-10 lg:p-14 rounded-[2rem] md:rounded-[3.5rem] bg-[var(--panel)] border border-[var(--border)] shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--accent)]/5 to-transparent blur-3xl pointer-events-none" />
             
             <form className="space-y-4 md:space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                   <div className="space-y-2">
                      <label className="text-xs md:text-sm font-bold text-[var(--ink)] ml-2">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-[var(--page-bg)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition-all text-sm md:text-base" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs md:text-sm font-bold text-[var(--ink)] ml-2">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-[var(--page-bg)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition-all text-sm md:text-base" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-xs md:text-sm font-bold text-[var(--ink)] ml-2">Subject</label>
                   <select className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-[var(--page-bg)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition-all appearance-none text-sm md:text-base">
                      <option>Research Inquiry</option>
                      <option>General Support</option>
                      <option>Partnership</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-xs md:text-sm font-bold text-[var(--ink)] ml-2">Your Message</label>
                   <textarea rows={4} placeholder="How can we help you?" className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-[var(--page-bg)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition-all resize-none text-sm md:text-base"></textarea>
                </div>
                <button className="w-full py-4 md:py-5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                   Send Message <Send className="w-4 h-4 md:w-5 md:h-5" />
                </button>
             </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

