"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  LineChart, 
  Map, 
  Smile, 
  ArrowRight, 
  BrainCircuit, 
  Target 
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Career Counselling by Analyzing Academic Behavior",
      description: "Deep dive into student learning patterns and academic performance to provide tailored career paths.",
      icon: <BrainCircuit className="w-6 h-6" />,
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500"
    },
    {
      title: "MLP Based Career Assistance for Students",
      description: "Multi-Layer Perceptron neural networks driven career matching based on comprehensive skill assessment.",
      icon: <Target className="w-6 h-6" />,
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-500"
    },
    {
      title: "Personalized Career Roadmap and Monitoring System",
      description: "Dynamic tracking of milestones and progress with real-time adjustments to your career journey.",
      icon: <Map className="w-6 h-6" />,
      color: "from-orange-500/20 to-amber-500/20",
      iconColor: "text-orange-500"
    },
    {
      title: "Facial Expression Analysis for Personality Detection",
      description: "Advanced AI-driven facial recognition to understand emotional intelligence and personality traits.",
      icon: <Smile className="w-6 h-6" />,
      color: "from-emerald-500/20 to-teal-500/20",
      iconColor: "text-emerald-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-bold mb-8 tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
              </span>
              Progress of Research 
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              Career Counselling by Analyzing{" "}
              <span className="bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-blue-400 bg-clip-text text-transparent">
                Academic Behavior and Score
              </span>
            </h1>
            
            <p className="text-xl text-[var(--muted)] mb-10 leading-relaxed max-w-2xl mx-auto">
              Unlock your true potential with our state-of-the-art AI guidance system. 
              We blend academic data with behavioral insights to map your perfect career path.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#features"
                className="group px-8 py-4 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] text-white rounded-full font-bold text-lg shadow-xl shadow-blue-500/25 hover:scale-105 transition-all flex items-center gap-2"
              >
                Explore Modules <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-[var(--border)] text-[var(--ink)] rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-blue-400/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-purple-400/20 blur-[120px]" />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Research Components</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] mx-auto rounded-full" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl border border-[var(--border)] bg-[var(--panel)] shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-[var(--accent)]/10 transition-all overflow-hidden"
              >
                {/* Accent Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-lg ${feature.iconColor}`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--accent)] transition-colors leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[var(--muted)] text-lg leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-bold text-[var(--accent)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    Learn more about this research <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats/Highlight Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="theme-card rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Driving Success Through Data Science
                </h2>
                <p className="text-xl text-[var(--muted)] mb-8">
                  Our research bridges the gap between raw academic scores and human potential using advanced machine learning architectures.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-[var(--accent)] mb-1">98%</div>
                    <div className="text-sm font-bold uppercase tracking-wider opacity-60">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[var(--accent-2)] mb-1">10k+</div>
                    <div className="text-sm font-bold uppercase tracking-wider opacity-60">Students</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-2)]/20 border border-[var(--border)] flex items-center justify-center p-12">
                   <div className="w-full h-full rounded-2xl bg-white/80 shadow-2xl flex items-center justify-center text-6xl">
                      🚀
                   </div>
                </div>
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center text-3xl"
                >
                  📊
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-6 -left-6 w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center text-3xl"
                >
                  🧠
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
