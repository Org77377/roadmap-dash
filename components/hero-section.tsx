"use client"

import { motion } from "framer-motion"
import { Rocket, Code, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToRoadmap = () => {
    const roadmapSection = document.querySelector('[data-section="roadmap"]')
    roadmapSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-12">
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex flex-col items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 border border-white/10">
                <Rocket className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300">6-Month Mastery Roadmap</span> <br/>
                <div className="text-sm text-gray-300 cursor-pointer">Join Community Free Learnings</div>
              </div>
              <p className="text-xs sm:text-sm text-gray-500">
                Built and created by <span className="text-purple-400 font-semibold">Omkar RG</span>
              </p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Full Stack Developer</span>
              <br />
              <span className="text-white">Mastery Roadmap</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed px-4">
              From <span className="text-purple-400 font-semibold">"Good Developer"</span> →{" "}
              <span className="text-pink-400 font-semibold">"System-Thinking Engineer"</span>
            </p>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto px-4">
              Build, scale, and deploy production-grade apps. Master every layer from frontend to backend to infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              onClick={scrollToRoadmap}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              Start Your Journey
              <Zap className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass border-white/20 text-white px-8 py-6 text-lg rounded-full hover:bg-white/10 transition-all duration-300"
            >
              View Roadmap
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4"
          >
            {[
              { icon: Code, label: "6 Phases", value: "Structured Learning" },
              { icon: Target, label: "26 Weeks", value: "Comprehensive" },
              { icon: Zap, label: "Production", value: "Real Projects" },
              { icon: Rocket, label: "Mastery", value: "Advanced Skills" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass rounded-xl p-4 sm:p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mx-auto mb-2 sm:mb-3" />
                <div className="text-lg sm:text-2xl font-bold text-white mb-1">{stat.label}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

