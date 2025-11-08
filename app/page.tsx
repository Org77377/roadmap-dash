"use client"

import { roadmapData, capstoneData, outcomes, complementaryResources } from "@/data/roadmap"
import { PhaseCard } from "@/components/phase-card"
import { HeroSection } from "@/components/hero-section"
import { CapstoneSection } from "@/components/capstone-section"
import { OutcomesSection } from "@/components/outcomes-section"
import { ResourcesSection } from "@/components/resources-section"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        
        {/* Overview Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-strong rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
                <div className="flex-1 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 gradient-text">
                    💡 Stack Focus
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 font-semibold">
                    MERN + TypeScript + Next.js + Redis + BullMQ
                  </p>
                </div>
                <div className="flex-1 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 gradient-text">
                    📅 Duration
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 font-semibold">
                    6 Months (26 Weeks)
                  </p>
                </div>
                <div className="flex-1 w-full">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 gradient-text">
                    🎯 Outcome
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 font-semibold">
                    Build, scale, and deploy production-grade apps
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <p className="text-sm text-gray-500">
                  Built and created by <span className="text-purple-400 font-semibold">Omkar RG</span>
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Roadmap Phases */}
        <section className="container mx-auto px-4 py-16 md:py-24" data-section="roadmap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text px-4">
              Your Journey to Mastery
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto px-4">
              A structured path from intermediate to advanced full stack developer
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-12 max-w-6xl mx-auto">
            {roadmapData.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <PhaseCard phase={phase} index={index} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Capstone Project */}
        <CapstoneSection capstone={capstoneData} />

        {/* Outcomes */}
        <OutcomesSection outcomes={outcomes} />

        {/* Complementary Resources */}
        <ResourcesSection resources={complementaryResources} />

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 text-center">
          <div className="glass rounded-xl p-6 border border-white/10">
            <p className="text-gray-400">
              Built with ❤️ for developers who want to level up their skills
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Start your journey today and transform from a good developer to a system-thinking engineer
            </p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-sm text-gray-400">
                Built and created by <span className="text-purple-400 font-semibold gradient-text">Omkar RG</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

