/**
 * Centralized Data Configuration for Raskas Sai Karthik's Portfolio
 * Specially created for Deploython 2.0 Developer Portfolio Challenge.
 * 
 * Easy to update placeholder links, social handles, certificates, and projects.
 */

export const personalInfo = {
  name: "Raskas Sai Karthik",
  firstName: "Sai Karthik",
  title: "Computer Science Engineering Student | Developer | AI & Data Enthusiast",
  bio: "I am a second-year Computer Science Engineering student passionate about technology, problem-solving, AI, data, and building practical digital solutions.",
  aboutText: "I am a second-year Computer Science Engineering student at KL University. I enjoy learning new technologies, developing practical projects, exploring AI tools, and solving programming problems. I am continuously improving my skills in programming, frontend development, data analysis, and artificial intelligence.",
  location: "Hyderabad / Vijayawada, India",
  email: "raskas.saikarthik07@gmail.com",
  phone: "9494681618",
  formattedPhone: "+91 94946 81618",
  university: "KL University",
  currentCgpa: "9.6 / 10",
  socials: {
    github: "https://github.com/raskassaikarthik07-droid",
    linkedin: "https://linkedin.com/in/raskas-sai-karthik",
    email: "mailto:raskas.saikarthik07@gmail.com",
    phone: "tel:9494681618"
  },
  resume: {
    downloadFileName: "Raskas_Sai_Karthik_Resume.pdf",
    lastUpdated: "Deploython 2.0 Edition"
  }
};

export const heroFloatingTech = [
  { name: "Java", color: "from-amber-500 to-red-500", glow: "rgba(245, 158, 11, 0.4)", icon: "Coffee" },
  { name: "Python", color: "from-blue-500 to-yellow-500", glow: "rgba(59, 130, 246, 0.4)", icon: "Terminal" },
  { name: "C", color: "from-blue-600 to-indigo-600", glow: "rgba(79, 70, 229, 0.4)", icon: "Cpu" },
  { name: "React", color: "from-cyan-400 to-blue-500", glow: "rgba(6, 182, 212, 0.4)", icon: "Atom" },
  { name: "AI", color: "from-purple-500 to-pink-500", glow: "rgba(168, 85, 247, 0.4)", icon: "Bot" },
  { name: "Data", color: "from-emerald-400 to-teal-500", glow: "rgba(16, 185, 129, 0.4)", icon: "BarChart3" }
];

export const aboutCards = [
  {
    id: "cse-student",
    icon: "GraduationCap",
    title: "CSE Student",
    badge: "KL University",
    description: "2nd-year B.Tech CSE student building strong foundational knowledge in algorithms, system principles, and computer science concepts.",
    gradient: "from-blue-500/20 to-indigo-500/20",
    border: "group-hover:border-blue-500/50",
    accent: "text-blue-400"
  },
  {
    id: "developer",
    icon: "Code2",
    title: "Developer",
    badge: "Frontend & Software",
    description: "Building responsive, modern user interfaces and interactive web solutions utilizing React, JavaScript, modern CSS, and clean modular code.",
    gradient: "from-indigo-500/20 to-purple-500/20",
    border: "group-hover:border-indigo-500/50",
    accent: "text-indigo-400"
  },
  {
    id: "ai-enthusiast",
    icon: "Bot",
    title: "AI Enthusiast",
    badge: "LLMs & Agentic AI",
    description: "Certified in NVIDIA Agentic AI workflows and Generative AI studio tools. Passionate about prompt engineering and LLM integrations.",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
    accent: "text-purple-400"
  },
  {
    id: "data-tech",
    icon: "LineChart",
    title: "Data & Technology",
    badge: "Analytics Simulation",
    description: "Completed Deloitte Data Analytics simulation; proficient at exploring data trends, metrics extraction, and translating insights into solutions.",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    border: "group-hover:border-emerald-500/50",
    accent: "text-emerald-400"
  }
];

export const skillCategories = [
  {
    id: "all",
    label: "All Skills"
  },
  {
    id: "languages",
    label: "Languages & Core"
  },
  {
    id: "frontend",
    label: "Frontend & Web"
  },
  {
    id: "ai-data",
    label: "AI, Data & Tools"
  }
];

export const technicalSkills = [
  {
    name: "Java",
    category: "languages",
    level: "Proficient",
    progress: 88,
    icon: "Coffee",
    description: "Object-Oriented Programming, Data Structures, Core Java concepts",
    color: "from-amber-500 to-orange-600"
  },
  {
    name: "C",
    category: "languages",
    level: "Solid Foundation",
    progress: 82,
    icon: "Cpu",
    description: "Procedural programming, memory management basics, pointers",
    color: "from-blue-600 to-indigo-700"
  },
  {
    name: "Python",
    category: "languages",
    level: "Proficient",
    progress: 86,
    icon: "Terminal",
    description: "Scripting, algorithmic logic, data processing and AI utilities",
    color: "from-blue-500 to-emerald-500"
  },
  {
    name: "DSA Basics",
    category: "languages",
    level: "Active Problem Solver",
    progress: 80,
    icon: "Binary",
    description: "Arrays, Linked Lists, Stacks, Queues, Searching & Sorting algorithms",
    color: "from-purple-500 to-indigo-600"
  },
  {
    name: "HTML",
    category: "frontend",
    level: "Advanced",
    progress: 94,
    icon: "Globe",
    description: "Semantic HTML5 markup, accessibility, modern web page structure",
    color: "from-orange-500 to-amber-500"
  },
  {
    name: "CSS",
    category: "frontend",
    level: "Advanced",
    progress: 90,
    icon: "Palette",
    description: "Responsive layouts, Flexbox/Grid, Glassmorphism, Tailwind CSS, Keyframes",
    color: "from-cyan-500 to-blue-500"
  },
  {
    name: "JavaScript",
    category: "frontend",
    level: "Proficient",
    progress: 85,
    icon: "FileCode2",
    description: "ES6+, DOM manipulation, asynchronous programming, APIs",
    color: "from-yellow-400 to-amber-500"
  },
  {
    name: "React",
    category: "frontend",
    level: "Proficient",
    progress: 84,
    icon: "Atom",
    description: "Hooks, state management, component architecture, Vite ecosystem",
    color: "from-cyan-400 to-indigo-500"
  },
  {
    name: "Front-end Development",
    category: "frontend",
    level: "Proficient",
    progress: 88,
    icon: "Layout",
    description: "Modern UI/UX design implementation, interactive client-side web apps",
    color: "from-pink-500 to-purple-500"
  },
  {
    name: "Data Analysis",
    category: "ai-data",
    level: "Skilled Learner",
    progress: 82,
    icon: "BarChart3",
    description: "Data exploration, trend identification, Deloitte simulation workflows",
    color: "from-emerald-400 to-teal-600"
  },
  {
    name: "AI Tools",
    category: "ai-data",
    level: "Skilled Practitioner",
    progress: 86,
    icon: "Bot",
    description: "Generative AI Studio, LLM prompts, agentic workflows, AI assisted dev",
    color: "from-violet-500 to-fuchsia-600"
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web" },
  { id: "ai", label: "AI" },
  { id: "data", label: "Data" },
  { id: "other", label: "Other" }
];

export const projectsData = [
  {
    id: "deploython-portfolio",
    title: "Raskas Portfolio - Glassmorphism UI",
    category: "web",
    shortDescription: "A high-performance personal developer portfolio built with React, Vite, Tailwind CSS, and glassmorphic micro-interactions for Deploython 2.0.",
    featured: true,
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "Framer Motion", "Lucide React"],
    githubUrl: "https://github.com/raskassaikarthik07-droid/The_Comeback-79",
    liveUrl: "https://raskassaikarthik07-droid.github.io/The_Comeback-79/",
    visualGradient: "from-indigo-600/40 via-purple-600/30 to-pink-600/20",
    accentColor: "indigo",
    highlights: [
      "Dynamic dark/light mode toggle with smooth glassmorphism",
      "Interactive category filtering for projects and skills",
      "Interactive education timeline and verified certification showcase",
      "Validated contact form with celebration feedback and mailto trigger"
    ]
  },
  {
    id: "agentic-ai-assistant",
    title: "Agentic AI Task & Knowledge Assistant",
    category: "ai",
    shortDescription: "An intelligent LLM-driven query orchestration workflow inspired by NVIDIA's Agentic AI architecture with tool calling and context synthesis.",
    featured: true,
    technologies: ["Python", "NVIDIA LLM API", "AI Tools", "Prompt Engineering", "JavaScript"],
    githubUrl: "https://github.com/raskas-sai-karthik/agentic-ai-assistant", // Placeholder
    liveUrl: "https://github.com/raskas-sai-karthik/agentic-ai-assistant#demo", // Placeholder
    visualGradient: "from-purple-600/40 via-violet-600/30 to-cyan-600/20",
    accentColor: "purple",
    highlights: [
      "Agentic reasoning cycle with step-by-step problem breakdown",
      "Autonomous tool selection and structured JSON synthesis",
      "Knowledge grounder inspired by NVIDIA LLM certification"
    ]
  },
  {
    id: "deloitte-data-analytics",
    title: "Deloitte Simulation Data Visualizer",
    category: "data",
    shortDescription: "An interactive analytics dashboard visualizing business performance metrics and strategic insights derived from the Deloitte Job Simulation dataset.",
    featured: true,
    technologies: ["Data Analysis", "JavaScript", "React", "Chart Engine", "HTML/CSS"],
    githubUrl: "https://github.com/raskas-sai-karthik/deloitte-data-insights", // Placeholder
    liveUrl: "https://github.com/raskas-sai-karthik/deloitte-data-insights#dashboard", // Placeholder
    visualGradient: "from-emerald-600/40 via-teal-600/30 to-blue-600/20",
    accentColor: "emerald",
    highlights: [
      "Dynamic charts and tabular insights for executive decision making",
      "Customer segment analysis and revenue distribution filters",
      "Clean exportable report summaries"
    ]
  },
  {
    id: "dsa-algorithm-visualizer",
    title: "Interactive DSA Algorithm Playground",
    category: "other",
    shortDescription: "A web-based interactive tool for visualizing sorting algorithms, array manipulations, and search mechanics for computer science students.",
    featured: false,
    technologies: ["Java Logic", "JavaScript", "HTML5 Canvas", "CSS3", "DSA"],
    githubUrl: "https://github.com/raskas-sai-karthik/dsa-visualizer", // Placeholder
    liveUrl: "https://github.com/raskas-sai-karthik/dsa-visualizer#demo", // Placeholder
    visualGradient: "from-blue-600/40 via-cyan-600/30 to-emerald-600/20",
    accentColor: "cyan",
    highlights: [
      "Step-by-step animation of Bubble, Selection, and Quick sorts",
      "Custom array speed controller and comparison counter",
      "Educational explanation cards for each algorithm step"
    ]
  },
  {
    id: "genai-prompt-studio",
    title: "Generative AI Prompt & Evaluation Studio",
    category: "ai",
    shortDescription: "A streamlined experimentation workspace for testing, comparing, and tuning prompt variations using Generative AI Studio methodologies.",
    featured: false,
    technologies: ["AI Tools", "Python", "React", "Tailwind CSS", "API Integration"],
    githubUrl: "https://github.com/raskas-sai-karthik/genai-prompt-studio", // Placeholder
    liveUrl: "https://github.com/raskas-sai-karthik/genai-prompt-studio#preview", // Placeholder
    visualGradient: "from-pink-600/40 via-rose-600/30 to-amber-600/20",
    accentColor: "pink",
    highlights: [
      "Side-by-side prompt output comparisons",
      "Temperature, top-k, and token limit sensitivity toggles",
      "Pre-configured prompt engineering templates"
    ]
  }
];

export const educationData = [
  {
    id: "kl-university",
    institution: "KL University",
    degree: "B.Tech – Computer Science Engineering",
    duration: "June 2025 – Present",
    scoreType: "CGPA",
    score: "9.6 / 10",
    status: "Current Degree",
    isCurrent: true,
    icon: "GraduationCap",
    details: [
      "Pursuing core Computer Science Engineering with outstanding academic standing (9.6 CGPA).",
      "Active engagement in programming labs, software development, data structures, and AI technologies.",
      "Participating in coding competitions, tech events, and hackathons like Deploython 2.0."
    ],
    accentColor: "indigo"
  },
  {
    id: "narayana-junior-college",
    institution: "Narayana Junior College",
    degree: "Intermediate Education (MPC)",
    duration: "2023 – 2025",
    scoreType: "Grade",
    score: "89%",
    status: "Completed",
    isCurrent: false,
    icon: "BookOpen",
    details: [
      "Completed higher secondary education with major coursework in Mathematics, Physics, and Chemistry.",
      "Developed analytical problem-solving skills and strong mathematical reasoning."
    ],
    accentColor: "cyan"
  },
  {
    id: "little-flower-school",
    institution: "Little Flower High School",
    degree: "Secondary School Certificate (SSC)",
    duration: "2011 – 2023",
    scoreType: "CGPA",
    score: "9.7 / 10",
    status: "Completed",
    isCurrent: false,
    icon: "Award",
    details: [
      "Graduated with stellar academic performance achieving a 9.7/10 CGPA.",
      "Built early foundational interests in computer literacy, science, and extracurricular activities."
    ],
    accentColor: "emerald"
  }
];

export const certificationsData = [
  {
    id: "cert-nvidia-agentic-ai",
    title: "Building Agentic AI Applications with Large Language Models",
    issuer: "NVIDIA",
    issuerBadge: "NVIDIA Deep Learning Institute",
    issueDate: "2025",
    icon: "Cpu",
    category: "AI & LLMs",
    description: "Advanced training on building autonomous AI agents, tool-augmented LLM workflows, orchestration, and agentic reasoning architectures.",
    credentialUrl: "https://www.nvidia.com/en-us/training/credentials/raskas-sai-karthik", // Placeholder
    skills: ["Agentic AI", "LLMs", "Tool Calling", "Prompt Orchestration", "Python"],
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "hover:border-emerald-500/50",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  },
  {
    id: "cert-deloitte-data-analytics",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte / Forage",
    issuerBadge: "Deloitte Simulation Certified",
    issueDate: "2025",
    icon: "BarChart3",
    category: "Data Analytics",
    description: "Hands-on virtual experience simulating practical data analytics tasks, client insights extraction, statistical interpretation, and data storytelling.",
    credentialUrl: "https://www.theforage.com/simulations/deloitte/data-analytics-raskas", // Placeholder
    skills: ["Data Analysis", "Business Intelligence", "Metrics Interpretation", "Client Presentations"],
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "hover:border-blue-500/50",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    id: "cert-genai-studio",
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud / GenAI",
    issuerBadge: "GenAI Specialist",
    issueDate: "2024 - 2025",
    icon: "Sparkles",
    category: "Generative AI",
    description: "Comprehensive foundation in Generative AI Studio tools, model parameter tuning, prompt design, and deploying generative models in software workflows.",
    credentialUrl: "https://cloud.google.com/training/credentials/genai-studio-raskas", // Placeholder
    skills: ["Generative AI Studio", "Prompt Engineering", "Model Fine-tuning", "AI Integrations"],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "hover:border-purple-500/50",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    id: "cert-reactjs-beginners",
    title: "ReactJS for Beginners",
    issuer: "Frontend Academy / Coursera",
    issuerBadge: "Frontend Certified",
    issueDate: "2024 - 2025",
    icon: "Code",
    category: "Web Development",
    description: "Mastered fundamental concepts of React, component state, JSX, lifecycle hooks, virtual DOM, and building dynamic single-page applications.",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/react-raskas", // Placeholder
    skills: ["ReactJS", "Hooks", "Component Architecture", "JavaScript ES6+", "DOM Manipulation"],
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "hover:border-cyan-500/50",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
  }
];

export const achievementsData = [
  {
    id: "academic-excellence",
    title: "Academic Excellence",
    subtitle: "Consistent High Performer",
    icon: "Trophy",
    badge: "9.6 CGPA",
    description: "Maintained a top-tier 9.6/10 CGPA in B.Tech CSE at KL University, following a 9.7/10 CGPA in High School and 89% in Intermediate education.",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    border: "border-amber-500/30",
    accent: "text-amber-400"
  },
  {
    id: "ai-data-learning",
    title: "AI & Data Learning",
    subtitle: "Advanced Skill Mastery",
    icon: "Brain",
    badge: "NVIDIA & Deloitte",
    description: "Successfully attained credentials in Building Agentic AI Applications with LLMs (NVIDIA) and Data Analytics Job Simulation (Deloitte / Forage).",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    border: "border-purple-500/30",
    accent: "text-purple-400"
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    subtitle: "Modern Web Engineering",
    icon: "Layers",
    badge: "React & Tailwind",
    description: "Certified in ReactJS fundamentals with demonstrated ability to develop elegant, responsive glassmorphism interfaces and interactive web applications.",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    border: "border-cyan-500/30",
    accent: "text-cyan-400"
  },
  {
    id: "hackathon-participation",
    title: "Hackathon Participation",
    subtitle: "Deploython 2.0 Contestant",
    icon: "Zap",
    badge: "Deploython 2.0",
    description: "Active participant in competitive development hackathons, demonstrating rapid prototyping, clean architecture, and deployment readiness.",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    border: "border-emerald-500/30",
    accent: "text-emerald-400"
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Highlights", href: "#achievements" },
  { name: "Contact", href: "#contact" }
];
