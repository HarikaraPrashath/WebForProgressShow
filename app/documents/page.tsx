"use client";

import { motion } from "framer-motion";
import { 
  FileText, 
  FolderOpen,
  ArrowRight,
  FileSearch
} from "lucide-react";
import Link from "next/link";

const documents = [
  { 
    title: "Project Charter", 
    subtitle: "(one doc)",
    type: "PDF", 
    size: "1.2 MB", 
    url: "https://mysliit-my.sharepoint.com/:f:/g/personal/it22327758_my_sliit_lk/IgBiAJSAHZxGQ40WA3BM1rVmAZyx-0kyH-vpesdJHLFWmv4?e=QHSXZD"
  },
  { 
    title: "Proposal Document", 
    subtitle: "(one doc)",
    type: "PDF", 
    size: "2.5 MB", 
    url: "https://mysliit-my.sharepoint.com/:f:/g/personal/it22327758_my_sliit_lk/IgCX16kMy9y4RYxL1xC4W_c4AcKBXdPOtnVDGV77O79JrW8?e=MdpffD"
  },
  { 
    title: "Check List documents", 
    subtitle: "Complete Set",
    type: "PDF", 
    size: "0.8 MB", 
    url: "https://mysliit-my.sharepoint.com/:f:/g/personal/it22327758_my_sliit_lk/IgB1YwZJS0mbR7D_2fWwbEnbAV5AjDtNaw5r9wKs6S6TqxI?e=qvZl8S"
  },
  { 
    title: "Final Document", 
    subtitle: "(4 docs with the main)",
    type: "PDF", 
    size: "5.4 MB", 
    url: "https://mysliit-my.sharepoint.com/:f:/g/personal/it22327758_my_sliit_lk/IgDCloGb_P5qR48QOwDi9IFpAajzsoo78_HO8LI_dEZD1TY?e=bYp4CL"
  },
  { 
    title: "Final Draft Report", 
    subtitle: "Final Version",
    type: "PDF", 
    size: "3.2 MB", 
    url: "https://mysliit-my.sharepoint.com/:f:/g/personal/it22327758_my_sliit_lk/IgDyPDcDp5YCT6KMEgGd9HtOAUTkuASOggdIbs8I7bmcVTQ?e=05nyxS"
  },
];

export default function DocumentsPage() {
  return (
    <div className="min-h-screen py-24 px-6 relative overflow-hidden">
      {/* Ambient background effect */}
      <div className="page-ambient" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Project <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">Documents</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--muted)] text-xl max-w-2xl leading-relaxed"
          >
            Access official research documentation. All files are available in PDF format for consistent viewing and reporting.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {documents.map((doc, index) => (
            <motion.div
              key={doc.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Link 
                href={doc.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="theme-card block p-10 rounded-[2.5rem] relative overflow-hidden transition-all duration-500 hover:border-[var(--accent)]/50"
              >
                {/* Decorative background icon */}
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                  <FileText size={200} />
                </div>

                <div className="flex items-start justify-between mb-8">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center text-white shadow-2xl shadow-blue-500/20 group-hover:rotate-6 transition-transform duration-500">
                    <FolderOpen className="w-10 h-10" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="px-4 py-1.5 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                      {doc.type}
                    </span>
                    <span className="text-sm font-medium text-[var(--muted)]">
                      {doc.size}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {doc.title}
                  </h3>
                  <p className="text-[var(--muted)] text-lg mb-8 font-medium">
                    {doc.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-[var(--accent)] font-bold group/btn">
                  <span className="text-sm uppercase tracking-widest">Open in OneDrive</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 p-10 rounded-[3rem] bg-[var(--panel)]/50 border border-[var(--border)] backdrop-blur-xl flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
        >
          <div className="w-16 h-16 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] shrink-0">
            <FileSearch className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-1">Document Centralization</h4>
            <p className="text-[var(--muted)]">All project milestones and reports are strictly maintained in PDF format within our secure OneDrive environment for audit and submission purposes.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

