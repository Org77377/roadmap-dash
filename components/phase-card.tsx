"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Video, Globe, Code2, Target, ExternalLink } from "lucide-react"
import { Phase } from "@/data/roadmap"
import { cn } from "@/lib/utils"

interface PhaseCardProps {
  phase: Phase
  index: number
}

const gradientColors = [
  "from-purple-500/20 via-pink-500/20 to-blue-500/20",
  "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
  "from-green-500/20 via-emerald-500/20 to-lime-500/20",
  "from-yellow-500/20 via-orange-500/20 to-red-500/20",
  "from-pink-500/20 via-rose-500/20 to-purple-500/20",
  "from-indigo-500/20 via-purple-500/20 to-pink-500/20",
]

const borderColors = [
  "border-purple-500/30",
  "border-blue-500/30",
  "border-green-500/30",
  "border-yellow-500/30",
  "border-pink-500/30",
  "border-indigo-500/30",
]

export function PhaseCard({ phase, index }: PhaseCardProps) {
  const gradient = gradientColors[index % gradientColors.length]
  const borderColor = borderColors[index % borderColors.length]

  const getResourceIcon = (type?: string) => {
    switch (type) {
      case "video":
        return <Video className="w-4 h-4" />
      case "book":
        return <BookOpen className="w-4 h-4" />
      case "website":
        return <Globe className="w-4 h-4" />
      default:
        return <BookOpen className="w-4 h-4" />
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      {/* Gradient glow effect */}
      <div className={cn(
        "absolute -inset-0.5 bg-gradient-to-r rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500",
        gradient
      )} />

      <Card className={cn(
        "relative glass-strong border-2 transition-all duration-300 overflow-hidden",
        borderColor,
        "hover:border-opacity-60"
      )}>
        {/* Phase number badge */}
        <div className="absolute top-4 right-4 z-10">
          <Badge className="glass border-white/20 text-white text-sm font-semibold px-3 py-1">
            Phase {index + 1}
          </Badge>
        </div>

        <CardHeader className="pb-4">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="text-4xl sm:text-5xl md:text-6xl flex-shrink-0">{phase.emoji}</div>
            <div className="flex-1 min-w-0">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 gradient-text">
                {phase.title}
              </CardTitle>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Badge variant="outline" className="glass border-white/20 text-purple-300 text-xs sm:text-sm">
                  {phase.weeks}
                </Badge>
              </div>
              <CardDescription className="text-base sm:text-lg text-gray-300 flex items-start gap-2">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span>{phase.goal}</span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Topics */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-purple-400" />
              Core Topics
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {phase.topics.map((topic, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="glass rounded-lg p-3 border border-white/10 hover:border-purple-500/30 transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span className="text-gray-300 text-sm">{topic}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-pink-400" />
              Projects / Practice
            </h4>
            <div className="space-y-2">
              {phase.projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="glass rounded-lg p-3 border border-white/10 hover:border-pink-500/30 transition-colors"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-pink-400 mt-1">▸</span>
                    <span className="text-gray-300 text-sm" dangerouslySetInnerHTML={{ __html: project.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>') }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              Resources
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {phase.resources.map((resource, idx) => (
                <motion.a
                  key={idx}
                  href={resource.url || "#"}
                  target={resource.url ? "_blank" : undefined}
                  rel={resource.url ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="glass rounded-lg p-3 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform">
                      {getResourceIcon(resource.type)}
                    </div>
                    <span className="text-gray-300 text-sm flex-1 group-hover:text-white transition-colors">
                      {resource.title}
                    </span>
                    {resource.url && (
                      <ExternalLink className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

