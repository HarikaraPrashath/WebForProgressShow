"use client";

import { motion } from "framer-motion";
import { 
  Presentation, 
  Calendar, 
  Users,
  ExternalLink,
  Loader2
} from "lucide-react";
import Link from "next/link";

const presentations = [
  {
    title: "Career Guide and Counseling Using Machine Learning",
    event: "Project Proposal",
    date: "Sept 20, 2025",
    author: "Research Team",
    thumbnail: "/slides/proposal.png",
    url: "https://mysliit-my.sharepoint.com/:p:/g/personal/it22327758_my_sliit_lk/IQCCmDvm2cALTYQMqyIU8VdTAcN62_TrDwjZELEZd7EB4eQ?e=2mcuoc" 
  },
  {
    title: "Career Guide and Counseling Using Machine Learning",
    event: "Progress Presentation 1",
    date: "Jan 05, 2026",
    author: "Research Team",
    thumbnail: "/slides/Progress Presentation 1.png",
    url: "https://mysliit-my.sharepoint.com/:p:/g/personal/it22327758_my_sliit_lk/IQBTE5eSL468S7pdnsGuzbn-AVSFcuIEDw74CiNDW4zM4MY?e=UWzNkK"
  },
  {
    title: "Career Guide and Counseling Using Machine Learning",
    event: "Progress Presentation 2",
    date: "Mar 09, 2026",
    author: "Research Team",
    thumbnail: "/slides/Progress Presentation 2.png",
    url: "https://mysliit-my.sharepoint.com/:p:/g/personal/it22327758_my_sliit_lk/IQCHAPlYuAwDTKZKTtr_yR5WAV9MShqZHSJWEg0ZQ-LWIHY?e=yUDutz"
  }, 
  {
    title: "Career Guide and Counseling Using Machine Learning",
    event: "Viva",
    date: "May 04, 2026",
    author: "Research Team",
    thumbnail: "loading",
    url: "#"
  }
];


export default function PresentationPage() {
  return (
    <div className="min-h-screen py-24 px-6 relative">
      <div className="page-ambient" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
          >
            Project <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">Slides</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[var(--muted)] text-xl max-w-2xl mx-auto"
          >
            Review our academic progress through official presentation slides and research documentation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {presentations.map((p, index) => (
            <motion.div
              key={`${p.event}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link 
                href={p.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={p.thumbnail === 'loading' ? 'pointer-events-none' : ''}
              >
                <div className="relative mb-10">
                  {/* Physical Slide Border Design */}
                  <div className="aspect-[16/10] bg-white p-3 md:p-5 rounded-xl shadow-[0_30px_80px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.4)] group-hover:scale-[1.02] transition-all duration-500 relative overflow-hidden border border-[var(--border)]/20">
                    {p.thumbnail === 'loading' ? (
                      <div className="w-full h-full bg-slate-50 dark:bg-slate-900/50 flex flex-col items-center justify-center gap-6 rounded-lg border border-dashed border-[var(--border)]">
                        <div className="relative">
                          <Loader2 className="w-16 h-16 text-[var(--accent)] animate-spin opacity-30" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3 h-3 bg-[var(--accent)] rounded-full animate-pulse" />
                          </div>
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-[var(--muted)]">Preparation Stage</span>
                      </div>
                    ) : (
                      <img 
                        src={p.thumbnail} 
                        alt={p.event} 
                        className="w-full h-full object-cover rounded-lg shadow-inner grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                      />
                    )}
                  </div>
                  
                  {/* Floating Event Tag */}
                  <div className="absolute -top-4 -left-4 px-6 py-2.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white font-black text-[10px] uppercase tracking-widest rounded-full shadow-2xl shadow-blue-500/40 z-20">
                    {p.event}
                  </div>
                </div>

                <div className="px-2">
                  <h2 className="text-3xl font-black mb-6 group-hover:text-[var(--accent)] transition-colors leading-tight tracking-tight">
                    {p.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-6 text-[10px] text-[var(--muted)] font-black mb-8 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[var(--accent)]" /> {p.date}</span>
                    <span className="flex items-center gap-2"><Users className="w-4 h-4 text-[var(--accent)]" /> {p.author}</span>
                  </div>

                  {p.thumbnail !== 'loading' && (
                    <div className="flex items-center gap-3 text-[var(--accent)] font-black uppercase text-[10px] tracking-[0.3em] hover:tracking-[0.4em] transition-all group/btn">
                      Explore Presentation <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Technical Archive Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 p-20 rounded-[4rem] bg-[var(--panel)] border border-[var(--border)] relative overflow-hidden text-center group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <Presentation className="w-12 h-12 mx-auto mb-10 text-[var(--accent)] opacity-30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
          <h3 className="text-4xl font-black mb-6 tracking-tight">Technical Slide Archive</h3>
          <p className="text-[var(--muted)] text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Permanent institutional record of our research methodology, data architecture, and machine learning models.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
