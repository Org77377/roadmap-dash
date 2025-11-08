"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Code2, Server, Database, Shield, MessageSquare, Cloud } from "lucide-react"

interface CapstoneData {
  title: string
  description: string
  weeks: string
  tech: string[]
  deploy: string
  note: string
}

interface CapstoneSectionProps {
  capstone: CapstoneData
}

const techIcons: Record<string, any> = {
  "Frontend": Code2,
  "Backend": Server,
  "Queue": Database,
  "Auth": Shield,
  "Realtime": MessageSquare,
  "Infra": Cloud,
}

export function CapstoneSection({ capstone }: CapstoneSectionProps) {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24" data-section="capstone">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text px-4">
            🚀 Final Capstone
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 px-4">
            Combine everything into one production-grade app
          </p>
        </div>

        <Card className="glass-strong border-2 border-purple-500/30 overflow-hidden relative group">
          {/* Gradient glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

          <CardHeader className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-6xl">{capstone.weeks}</div>
              <div className="flex-1">
                <CardTitle className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {capstone.title}
                </CardTitle>
                <CardDescription className="text-lg text-gray-300">
                  {capstone.description}
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Rocket className="w-6 h-6 text-purple-400" />
                Technology Stack
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capstone.tech.map((tech, idx) => {
                  const [category] = tech.split(":")
                  const Icon = techIcons[category] || Code2
                  
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="glass rounded-xl p-4 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <Icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <span className="text-gray-300 font-medium">{tech}</span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass rounded-xl p-4 border border-white/10">
                <h5 className="text-sm font-semibold text-gray-400 mb-2">Deployment</h5>
                <p className="text-lg text-white font-semibold">{capstone.deploy}</p>
              </div>
              <div className="glass rounded-xl p-4 border border-white/10">
                <h5 className="text-sm font-semibold text-gray-400 mb-2">Note</h5>
                <p className="text-lg text-white font-semibold">{capstone.note}</p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/10 text-center">
              <p className="text-xs text-gray-500">
                Built and created by <span className="text-purple-400 font-semibold">Omkar RG</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

