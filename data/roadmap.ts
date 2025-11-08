export interface Phase {
  id: string
  title: string
  emoji: string
  weeks: string
  goal: string
  topics: string[]
  projects: string[]
  resources: {
    title: string
    url?: string
    type?: "video" | "book" | "website"
  }[]
}

export const roadmapData: Phase[] = [
  {
    id: "phase-1",
    title: "Deep JavaScript Mastery",
    emoji: "🧩",
    weeks: "Weeks 1-4",
    goal: "Think like an engineer — master the language deeply.",
    topics: [
      "Execution context, call stack, and event loop",
      "Hoisting, closures, lexical scope",
      "`this`, bind, call, apply",
      "Prototypal inheritance",
      "Promises, async/await, microtasks",
      "Array methods: map, reduce, filter",
      "Error handling",
      "ES Modules",
      "Debounce, throttle, memoization",
      "JS design patterns (module, singleton, observer)",
    ],
    projects: [
      "Custom `map()`, `filter()`, and `reduce()`",
      "Build a **custom Promise class**",
      "Implement **debounce** & **throttle**",
      "Mini Project: **JS Utility Library**",
    ],
    resources: [
      { title: "JavaScript.info", url: "https://javascript.info/", type: "website" },
      { title: "Namaste JavaScript — Akshay Saini", type: "video" },
      { title: "JavaScript Deep Dive — Hitesh Choudhary", type: "video" },
      { title: "You Don't Know JS — Kyle Simpson", type: "book" },
    ],
  },
  {
    id: "phase-2",
    title: "Advanced React + Frontend Engineering",
    emoji: "⚛️",
    weeks: "Weeks 5-8",
    goal: "Master React architecture & performance.",
    topics: [
      "useEffect deep dive + performance",
      "Context API & Custom Hooks",
      "React Query (data fetching + caching)",
      "Form handling + validation",
      "Error Boundaries + Suspense",
      "State management (Redux Toolkit / Zustand)",
      "Optimization (useMemo, useCallback, React.memo)",
      "Folder structure, API integration (REST + GraphQL)",
    ],
    projects: [
      "🎬 Movie Finder App (OMDB API)",
      "✍️ Blog Dashboard (CRUD + Auth)",
      "🔁 Optimize YouTube clone architecture",
      "🧱 Reusable UI component library",
    ],
    resources: [
      { title: "React.dev Docs", url: "https://react.dev/", type: "website" },
      { title: "Traversy Media — React Crash Course 2024", type: "video" },
      { title: "Net Ninja — React Query + Hooks", type: "video" },
      { title: "Epic React — Kent C. Dodds", type: "book" },
    ],
  },
  {
    id: "phase-3",
    title: "Backend Engineering + APIs",
    emoji: "🌐",
    weeks: "Weeks 9-12",
    goal: "Build reliable & scalable backend systems.",
    topics: [
      "Node.js internals (event loop, streams)",
      "Express.js (routes, middleware, error handling)",
      "REST APIs",
      "JWT Auth & cookies",
      "File uploads (Multer)",
      ".env, config setup",
      "MVC pattern",
      "Security: Helmet, rate limiting, CORS",
      "MongoDB (CRUD + aggregation)",
    ],
    projects: [
      "Blog API (Auth + Comments)",
      "E-commerce API (Products, Orders, Users)",
      "Integrate React frontend with your API",
    ],
    resources: [
      { title: "Traversy Media — Node.js + Express Crash Course", type: "video" },
      { title: "Hitesh Choudhary — Backend Series", type: "video" },
      { title: "Node.js Design Patterns (3rd Edition)", type: "book" },
    ],
  },
  {
    id: "phase-4",
    title: "Databases + Redis + BullMQ",
    emoji: "🗄️",
    weeks: "Weeks 13-16",
    goal: "Handle large data, background jobs, and optimize systems.",
    topics: [
      "MongoDB deep dive (indexes, aggregation)",
      "Database design principles",
      "Caching with Redis",
      "BullMQ queues & worker threads",
      "Message passing",
      "Logging & monitoring (Winston, Morgan)",
      "Rate limiting with Redis",
    ],
    projects: [
      "🎞️ Video Processing Queue System",
      "🔔 Notification Queue App (BullMQ + Redis)",
      "🧠 Add caching to Blog API using Redis",
    ],
    resources: [
      { title: "BullMQ Docs", url: "https://docs.bullmq.io/", type: "website" },
      { title: "Redis Crash Course — Traversy Media", type: "video" },
      { title: "Redis University", url: "https://university.redis.com/", type: "website" },
      { title: "System Design for Beginners — Alex Xu", type: "book" },
    ],
  },
  {
    id: "phase-5",
    title: "TypeScript + Next.js Integration",
    emoji: "⚡",
    weeks: "Weeks 17-22",
    goal: "Build enterprise-grade full stack apps with types and SSR.",
    topics: [
      "TypeScript fundamentals (types, interfaces, generics)",
      "Typing React & Express code",
      "tsconfig setup",
      "Next.js (App Router, SSR, SSG, ISR)",
      "Auth (NextAuth / JWT)",
      "API routes + middleware",
      "SEO optimization",
      "Deployment (Vercel)",
    ],
    projects: [
      "Convert React + Node app → Next.js + TS",
      "Build a **Full-Stack SaaS Dashboard**",
      "Next.js + BullMQ: Background email scheduler",
    ],
    resources: [
      { title: "Next.js Learn", url: "https://nextjs.org/learn", type: "website" },
      { title: "Lee Robinson — Next.js Mastery", type: "video" },
      { title: "freeCodeCamp — TypeScript Full Course", type: "video" },
      { title: "Effective TypeScript — Dan Vanderkam", type: "book" },
    ],
  },
  {
    id: "phase-6",
    title: "System Design + Scaling Mindset",
    emoji: "🧱",
    weeks: "Weeks 23-26",
    goal: "Think like a product engineer — design systems that scale.",
    topics: [
      "REST vs GraphQL vs gRPC",
      "Microservices",
      "DB sharding & replication",
      "Load balancing + CDN",
      "Message queues (Kafka, RabbitMQ)",
      "Scaling (Docker + PM2)",
      "CI/CD pipelines (GitHub Actions)",
      "Testing (Jest, Supertest)",
    ],
    projects: [
      "Microservice E-commerce API",
      "Real-time Chat App (WebSockets + Redis)",
      "Dockerize & deploy everything",
    ],
    resources: [
      { title: "Tech Dummies / Gaurav Sen — System Design Series", type: "video" },
      { title: "System Design Interview — Alex Xu", type: "book" },
      { title: "Designing Data-Intensive Applications — Martin Kleppmann", type: "book" },
      { title: "Fireship — Docker for Devs", type: "video" },
    ],
  },
]

export const capstoneData = {
  title: "AI-Based Social Platform",
  description: "Combine everything into one production-grade app.",
  weeks: "Weeks 27-30",
  tech: [
    "Frontend: Next.js + TypeScript",
    "Backend: Node + Express + MongoDB",
    "Queue: Redis + BullMQ",
    "Auth: JWT / Role-based",
    "Realtime: WebSocket Chat",
    "Infra: Docker + CI/CD + Monitoring",
  ],
  deploy: "Render + Vercel",
  note: "Document architecture decisions",
}

export const outcomes = [
  "Master every layer (frontend → backend → infra)",
  "Deploy, scale, debug real-world apps",
  "Crack MERN + TypeScript + Next.js interviews",
  "Ready for DSA + System Design phase",
  "Multiple portfolio projects to showcase",
]

export const complementaryResources = {
  dsa: [
    { title: "NeetCode / Striver's Sheet (LeetCode)", url: "https://neetcode.io/" },
  ],
  systemDesign: [
    { title: "Alex Xu + Gaurav Sen", url: "https://www.youtube.com/@gkcs" },
  ],
  mockInterviews: [
    { title: "Pramp", url: "https://www.pramp.com/" },
    { title: "Interviewing.io", url: "https://interviewing.io/" },
  ],
  github: [
    { title: "Clean READMEs, docs, commits" },
  ],
}

