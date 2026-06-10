import { motion } from "framer-motion";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import projectPlaceholder from "../assets/projects/project-placeholder.png";

const featuredProjects = [
  {
    title: "Document AI Invoice Extraction System",
    image: projectPlaceholder,
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
    image: projectPlaceholder,

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
    image: projectPlaceholder,

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
  {
  title: "AI Placement Preparation Copilot",
  image: projectPlaceholder,

  category: "Generative AI",

  description:
    "End-to-end GenAI-powered placement preparation platform featuring Persistent RAG, Resume Analysis, AI Interview Simulation, and Conversational AI with memory.",

  highlights: [
    "Persistent FAISS RAG",
    "Resume vs JD Matching",
    "AI Interview Evaluation",
    "Conversation Memory"
  ],

  tech: [
    "FastAPI",
    "OpenAI",
    "GPT-4o-mini",
    "FAISS",
    "Streamlit",
    "Python"
  ],

  github:
    "https://github.com/Adi77189/ai-placement-copilot-preparation",

  problem:
    "Students struggle with interview preparation, resume optimization, and role-specific skill gap analysis.",

  solution:
    "Built a GenAI-powered career preparation assistant with persistent retrieval, resume evaluation, interview simulation, and conversational memory.",

  architecture: [
    "PDF Upload",
    "Chunking",
    "OpenAI Embeddings",
    "FAISS Index",
    "Semantic Retrieval",
    "GPT Response"
  ]
},
{
  title: "Serverless Task Tracker",
  image: projectPlaceholder,

  category: "AWS Cloud",

  description:
    "Full-stack serverless task management application built using AWS Cognito, Lambda, API Gateway, DynamoDB, CloudFront, and S3.",

  highlights: [
    "JWT Authentication",
    "Serverless Architecture",
    "Protected APIs",
    "CRUD Operations"
  ],

  tech: [
    "AWS Lambda",
    "API Gateway",
    "DynamoDB",
    "Cognito",
    "CloudFront",
    "S3"
  ],

  github:
    "https://github.com/Adi77189/serverless-task-tracker",

  problem:
    "Traditional applications require infrastructure management and complex backend deployment.",

  solution:
    "Developed a cloud-native task management platform using AWS serverless services with secure authentication and scalable architecture.",

  architecture: [
    "CloudFront",
    "S3 Frontend",
    "Cognito Auth",
    "API Gateway",
    "Lambda Functions",
    "DynamoDB"
  ]
},
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
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

          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            AI Systems Engineering
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-base md:text-lg leading-relaxed">
            Building production-grade AI systems focused on intelligent automation,
            multimodal AI, Generative AI, and scalable backend engineering.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="space-y-12 mt-24">

          {featuredProjects.map((project, index) => (

            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.08}
              scale={1.01}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              key={project.title}
            >

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}

                whileHover={{
                  y: -12,
                  scale: 1.01,
                }}

                className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                md:rounded-[2.5rem]
                p-6
                md:p-10
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:shadow-[0_0_60px_rgba(0,255,255,0.12)]
              "
              >

                {/* Top Border */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-700" />

                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-400/5 to-purple-500/5" />

                <div className="relative z-10">

                  {/* Category */}
                  <div className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm mb-6">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-5xl">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">

                    {project.highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl px-5 py-4 bg-white/[0.03] border border-white/5 text-gray-300 hover:border-cyan-400/20 transition-all duration-300"
                      >
                        ✦ {item}
                      </div>
                    ))}

                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-4 mt-8">

                    {project.tech.map((tech) => (
                      <div
                        key={tech}
                        className="
                        px-5
                        py-3
                        rounded-full
                        bg-white/[0.03]
                        border
                        border-white/10
                        text-gray-300
                        hover:border-cyan-400/40
                        hover:text-cyan-300
                        hover:bg-cyan-400/10
                        hover:scale-105
                        transition-all
                        duration-300
                      "
                      >
                        {tech}
                      </div>
                    ))}

                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-5 mt-10">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                      px-7
                      py-4
                      rounded-2xl
                      bg-cyan-400
                      text-black
                      font-semibold
                      hover:scale-105
                      hover:-translate-y-1
                      hover:shadow-[0_0_50px_rgba(0,245,212,0.45)]
                      transition-all
                      duration-300
                      text-center
                    "
                    >
                      View GitHub
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="
                      px-7
                      py-4
                      rounded-2xl
                      bg-white/[0.03]
                      border
                      border-white/10
                      hover:border-cyan-400/40
                      hover:bg-cyan-400/5
                      transition-all
                      duration-300
                    "
                    >
                      Case Study
                    </button>

                  </div>

                </div>

              </motion.div>

            </Tilt>
          ))}

        </div>

      </div>

      {/* Modal */}
      {
        selectedProject && (

          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}

              className="max-w-5xl w-full rounded-3xl p-6 md:p-10 border border-cyan-500/20 bg-[#0B1120] overflow-y-auto max-h-[90vh]"
            >

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-6 text-3xl text-gray-400 hover:text-white"
              >
                ×
              </button>

              <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm">
                {selectedProject.category}
              </span>

              <h2 className="text-4xl md:text-6xl font-black mt-6 mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                {selectedProject.title}
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                {selectedProject.description}
              </p>

              <div className="space-y-10">

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                    Problem Statement
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                    Solution
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                    System Architecture
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {selectedProject.architecture.map(
                      (step: string, index: number) => (
                        <div
                          key={index}
                          className="p-4 rounded-2xl bg-white/[0.03] border border-white/10"
                        >
                          {index + 1}. {step}
                        </div>
                      )
                    )}

                  </div>
                </div>

              </div>

            </motion.div>

          </div>
        )
      }

    </section>
  );
};

export default Projects;