"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

interface OutcomesSectionProps {
  outcomes: string[]
}

export function OutcomesSection({ outcomes }: OutcomesSectionProps) {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text px-4">
            🎯 Outcome
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 px-4">
            After 6 Months of Dedicated Learning
          </p>
        </div>

        <div className="glass-strong rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <div className="space-y-4">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-lg glass border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-lg md:text-xl text-gray-300 flex-1">{outcome}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <p className="text-sm text-gray-500">
              Built and created by <span className="text-purple-400 font-semibold">Omkar RG</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

