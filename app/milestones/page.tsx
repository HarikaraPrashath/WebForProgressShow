"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Clock, 
  Award,
  MessageSquare
} from "lucide-react";

const milestones = [
  {
    title: "Project Proposal",
    date: "2025/09/10",
    status: "completed",
    marks: "Average",
    comments: "Research proposal has been successfully submitted and reviewed by the internal committee."
  },
  {
    title: "Progress Presentation 1",
    date: "2026/01/05",
    status: "completed",
    marks: "Average",
    comments: "Preparing for the first progress review focusing on the literature survey and initial architecture."
  },
  {
    title: "Progress Presentation 2",
    date: "2026/03/09",
    status: "completed",
    marks: "Pending",
    comments: "Mid-term evaluation of the prototype development and dataset collection status."
  },
  {
    title: "Final Assigment",
    date: "2025/09/10",
    status: "in-Process",
    marks: "Pending",
    comments: "Research proposal has been successfully submitted and reviewed by the internal committee."
  },
  {
    title: "Viva",
    date: "2026/05/04",
    status: "in-Process",
    marks: "Pending",
    comments: "Final oral defense and comprehensive project evaluation."
  }
];

export default function MilestonesPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Academic <span className="text-[var(--accent)]">Milestones</span>
          </motion.h1>
          <p className="text-[var(--muted)] text-lg">
            Tracking our research progress through key evaluation phases.
          </p>
        </div>

        <div className="space-y-6 relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent" />

          {milestones.map((m, index) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-20"
            >
              {/* Icon / Marker */}
              <div className={`absolute left-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border-2 ${
                m.status === 'completed' 
                  ? 'bg-emerald-500 border-emerald-400 text-white shadow-emerald-500/20' 
                  : 'bg-[var(--panel)] border-[var(--border)] text-[var(--muted)]'
              }`}>
                {m.status === 'completed' ? <CheckCircle2 className="w-8 h-8" /> : <Clock className="w-8 h-8" />}
              </div>

              <div className="bg-[var(--panel)] border border-[var(--border)] p-6 md:p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <div className="flex-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent)] mb-2 block">
                      {m.date}
                    </span>
                    <h2 className="text-2xl font-bold group-hover:text-[var(--accent)] transition-colors">
                      {m.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    {/* Marks Display */}
                    <div className="flex items-center gap-3 px-4 py-2 bg-white border border-[var(--border)] rounded-2xl shadow-sm">
                      <Award className="w-4 h-4 text-[var(--accent)]" />
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-[var(--muted)] leading-none">Marks</span>
                        <span className="text-sm font-bold text-black">{m.marks}</span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className={`px-6 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider shadow-sm border ${
                      m.status === 'completed' 
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' 
                        : 'bg-amber-500/10 border-amber-500/20 text-amber-500'
                    }`}>
                      {m.status}
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="p-5 rounded-3xl bg-[var(--page-bg)] border border-[var(--border)] relative overflow-hidden group/comment">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/comment:opacity-20 transition-opacity">
                    <MessageSquare className="w-12 h-12 text-[var(--accent)]" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--muted)] mb-3 flex items-center gap-2">
                    <MessageSquare className="w-3 h-3 text-[var(--accent)]" />
                    Reviewer Comments
                  </h4>
                  <p className="text-[var(--ink)] leading-relaxed italic">
                    &quot;{m.comments}&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
