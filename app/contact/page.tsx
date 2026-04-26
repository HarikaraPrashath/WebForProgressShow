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
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black mb-8 leading-tight"
            >
              Get in <span className="text-[var(--accent)]">Touch</span>.
            </motion.h1>
            <p className="text-xl text-[var(--muted)] mb-12 leading-relaxed">
              Have questions about our research or interested in collaboration? Our team is here to help you navigate your academic journey.
            </p>

            <div className="space-y-8 mb-12">
               {[
                 { icon: <Mail />, label: "Email Us", val: "research@careerai.edu" },
                 { icon: <Phone />, label: "Call Us", val: "+94 77 123 4567" },
                 { icon: <MapPin />, label: "Visit Us", val: "Tech Innovation Hub, Colombo, SL" }
               ].map((item, i) => (
                 <div key={item.label} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-[var(--panel)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all shadow-lg">
                       {item.icon}
                    </div>
                    <div>
                       <div className="text-sm font-bold text-[var(--muted)] uppercase tracking-wider mb-1">{item.label}</div>
                       <div className="text-lg font-bold text-[var(--ink)]">{item.val}</div>
                    </div>
                 </div>
               ))}
            </div>

            <div className="flex gap-4">
                      {[<Link />, <X />, <Terminal />].map((icon, i) => (
                 <button key={i} className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center hover:bg-[var(--ink)] hover:text-white transition-all">
                    {icon}
                 </button>
               ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-10 md:p-14 rounded-[3.5rem] bg-[var(--panel)] border border-[var(--border)] shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--accent)]/5 to-transparent blur-3xl pointer-events-none" />
             
             <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-[var(--ink)] ml-2">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-[var(--page-bg)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition-all" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-[var(--ink)] ml-2">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-[var(--page-bg)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition-all" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold text-[var(--ink)] ml-2">Subject</label>
                   <select className="w-full px-6 py-4 rounded-2xl bg-[var(--page-bg)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition-all appearance-none">
                      <option>Research Inquiry</option>
                      <option>General Support</option>
                      <option>Partnership</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold text-[var(--ink)] ml-2">Your Message</label>
                   <textarea rows={4} placeholder="How can we help you?" className="w-full px-6 py-4 rounded-2xl bg-[var(--page-bg)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 transition-all resize-none"></textarea>
                </div>
                <button className="w-full py-5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                   Send Message <Send className="w-5 h-5" />
                </button>
             </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
