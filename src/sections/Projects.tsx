import { motion } from "framer-motion";
import { useState } from "react";

const featuredProjects = [
  {
    title: "Document AI Invoice Extraction System",
    category: "Document AI",

    description:
      "Production-grade intelligent invoice extraction pipeline combining OCR, YOLOv8 detection, fuzzy logic, confidence recalibration, and structured JSON generation for automated document workflows.",

    highlights: [
      "90–95% extraction accuracy",
      "OCR + YOLO pipeline",
      "PDF + Image support",
      "Confidence scoring engine",
    ],

    tech: [
      "YOLOv8",
      "Tesseract OCR",
      "FastAPI",
      "Streamlit",
      "OpenAI",
      "Python",
    ],

    github:
      "https://github.com/Adi77189/Document-AI-Invoice-Extraction-System",

    problem:
      "Manual invoice processing is slow, error-prone, and difficult to scale across enterprise workflows.",

    solution:
      "Built an end-to-end AI-powered invoice extraction pipeline using OCR, YOLOv8, fuzzy matching, and confidence recalibration to automate structured data extraction.",

    architecture: [
      "PDF/Image Upload",
      "OCR Extraction",
      "Rule + Fuzzy Engine",
      "YOLO Detection",
      "Confidence Recalibration",
      "Structured JSON Output",
    ],
  },

  {
    title: "AI Stock Trading Agent",

    category: "Agentic AI",

    description:
      "Autonomous AI investment agent for NSE markets using technical indicators, GPT-powered sentiment analysis, dynamic portfolio allocation, and automated trading workflows.",

    highlights: [
      "20+ NSE stocks analyzed",
      "AI-powered allocation engine",
      "Market sentiment analysis",
      "Upstox broker integration",
    ],

    tech: [
      "FastAPI",
      "React",
      "PostgreSQL",
      "OpenAI",
      "yFinance",
    ],

    github:
      "https://github.com/Adi77189/stock-agent",

    problem:
      "Retail investors struggle with market analysis, portfolio allocation, and emotional trading decisions.",

    solution:
      "Developed an AI-powered trading assistant that analyzes market trends, sentiment signals, and portfolio risks for intelligent investment workflows.",

    architecture: [
      "Stock Market APIs",
      "Sentiment Analysis",
      "AI Allocation Engine",
      "Risk Analysis",
      "Broker Integration",
      "Trade Execution",
    ],
  },

  {
    title: "AI Medical Report & X-ray Analyzer",

    category: "Multimodal AI",

    description:
      "Healthcare AI platform combining OCR-based medical report understanding with CNN-powered X-ray classification for intelligent diagnostics and risk prediction.",

    highlights: [
      "85–90% pneumonia detection",
      "ResNet18 classification",
      "OCR report parsing",
      "Multimodal AI pipeline",
    ],

    tech: [
      "PyTorch",
      "ResNet18",
      "OpenCV",
      "OCR",
      "Streamlit",
      "Python",
    ],

    github:
      "https://github.com/Adi77189/AI-Medical-Report-Xray-Analyzer",

    problem:
      "Manual interpretation of medical reports and X-rays is time-consuming and resource-intensive.",

    solution:
      "Built a multimodal healthcare AI system combining OCR understanding and CNN-based X-ray analysis for faster diagnostics.",

    architecture: [
      "Medical Report OCR",
      "X-ray Classification",
      "ResNet18 Analysis",
      "Risk Prediction",
      "Structured Output",
      "Healthcare Dashboard",
    ],
  },
];

const miniProjects = [
  "AI Placement Preparation Copilot",
  "AI Diagnostic Report Builder",
  "Serverless AWS Task Tracker",
  "Persistent RAG Chat System",
  "FastAPI AI Automation APIs",
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm md:text-base">
            Featured Projects
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            AI Systems Engineering
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
            Building production-grade AI systems focused on
            intelligent automation, multimodal AI, Generative AI,
            cloud-native infrastructure, and scalable backend engineering.
          </p>

        </motion.div>

        {/* PROJECTS */}
        <div className="space-y-10 mt-20">

          {featuredProjects.map((project, index) => (

            <motion.div
              key={project.title}

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}

              viewport={{ once: true }}

              whileHover={{ y: -8 }}

              className="group glass rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 relative overflow-hidden"
            >

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/5 to-purple-500/5" />

              <div className="relative z-10">

                {/* CATEGORY */}
                <div className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm mb-6">
                  {project.category}
                </div>

                {/* TITLE */}
                <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-5xl">
                  {project.description}
                </p>

                {/* HIGHLIGHTS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">

                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="glass rounded-2xl px-5 py-4 border border-white/5 text-gray-300"
                    >
                      ✦ {item}
                    </div>
                  ))}

                </div>

                {/* TECH */}
                <div className="flex flex-wrap gap-4 mt-8">

                  {project.tech.map((tech) => (
                    <div
                      key={tech}
                      className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-300"
                    >
                      {tech}
                    </div>
                  ))}

                </div>

                {/* BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-5 mt-10">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 hover:shadow-[0_0_40px_rgba(0,245,212,0.4)] transition-all duration-300 text-center"
                  >
                    View GitHub
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="glass px-7 py-4 rounded-2xl hover:border-cyan-400/40 transition-all duration-300"
                  >
                    Case Study
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* MINI PROJECTS */}
        <motion.div
          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          transition={{ duration: 0.8 }}

          viewport={{ once: true }}

          className="mt-24"
        >

          <h3 className="text-3xl font-bold text-center mb-12">
            Additional Projects & Systems
          </h3>

          <div className="flex flex-wrap justify-center gap-5">

            {miniProjects.map((project) => (
              <div
                key={project}
                className="glass px-6 py-4 rounded-2xl border border-white/10 text-gray-300 hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-300"
              >
                {project}
              </div>
            ))}

          </div>

        </motion.div>

      </div>

      {/* MODAL */}
      {
        selectedProject && (

          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

            <div className="glass max-w-5xl w-full rounded-3xl p-6 md:p-10 border border-cyan-500/20 relative overflow-y-auto max-h-[90vh]">

              {/* CLOSE */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-5 text-3xl text-gray-400 hover:text-white"
              >
                ×
              </button>

              {/* CATEGORY */}
              <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm">
                {selectedProject.category}
              </span>

              {/* TITLE */}
              <h2 className="text-3xl md:text-5xl font-black mt-6 mb-6 leading-tight">
                {selectedProject.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                {selectedProject.description}
              </p>

              {/* PROBLEM */}
              <div className="mb-10">

                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  Problem Statement
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {selectedProject.problem}
                </p>

              </div>

              {/* SOLUTION */}
              <div className="mb-10">

                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  Solution
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {selectedProject.solution}
                </p>

              </div>

              {/* ARCHITECTURE */}
              <div className="mb-10">

                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  System Architecture
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {selectedProject.architecture.map(
                    (step: string, index: number) => (
                      <div
                        key={index}
                        className="glass p-4 rounded-2xl"
                      >
                        {index + 1}. {step}
                      </div>
                    )
                  )}

                </div>

              </div>

              {/* TECH */}
              <div className="mb-10">

                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  Tech Stack
                </h3>

                <div className="flex flex-wrap gap-3">

                  {selectedProject.tech.map(
                    (tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full glass text-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}

                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300 text-center"
                >
                  View GitHub
                </a>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="glass px-8 py-4 rounded-2xl"
                >
                  Close
                </button>

              </div>

            </div>

          </div>
        )
      }

    </section>
  );
};

export default Projects;