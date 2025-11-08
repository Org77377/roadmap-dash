"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code, Users, Github, ExternalLink } from "lucide-react"

interface ComplementaryResources {
  dsa: Array<{ title: string; url?: string }>
  systemDesign: Array<{ title: string; url?: string }>
  mockInterviews: Array<{ title: string; url?: string }>
  github: Array<{ title: string; url?: string }>
}

interface ResourcesSectionProps {
  resources: ComplementaryResources
}

const sectionIcons = {
  dsa: Code,
  systemDesign: BookOpen,
  mockInterviews: Users,
  github: Github,
}

const sectionTitles = {
  dsa: "🧠 DSA",
  systemDesign: "🧱 System Design",
  mockInterviews: "🧑‍💻 Mock Interviews",
  github: "🗂️ GitHub Portfolio",
}

export function ResourcesSection({ resources }: ResourcesSectionProps) {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text px-4">
            📚 Complementary Resources
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 px-4">
            Additional resources to accelerate your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(resources).map(([key, items], sectionIndex) => {
            const Icon = sectionIcons[key as keyof typeof sectionIcons]
            const title = sectionTitles[key as keyof typeof sectionTitles]

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
              >
                <Card className="glass-strong border border-white/10 h-full hover:border-purple-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl font-bold gradient-text flex items-center gap-2">
                      <Icon className="w-6 h-6" />
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {items.map((item: { title: string; url?: string }, index: number) => (
                        <motion.a
                          key={index}
                          href={item.url || "#"}
                          target={item.url ? "_blank" : undefined}
                          rel={item.url ? "noopener noreferrer" : undefined}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-center gap-3 p-3 rounded-lg glass border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                        >
                          <div className="text-blue-400 group-hover:scale-110 transition-transform">
                            {item.url ? <ExternalLink className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                          </div>
                          <span className="text-gray-300 text-sm flex-1 group-hover:text-white transition-colors">
                            {item.title}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

