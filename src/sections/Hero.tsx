import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 pt-32">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 blur-3xl" />

      <div className="absolute top-40 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-[120px] animate-pulse" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />

      {/* Center Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[180px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto text-center">

        {/* AVAILABLE BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm backdrop-blur-xl shadow-[0_0_30px_rgba(0,245,212,0.15)]">
            ● Available for AI/ML Opportunities
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.4em] text-cyan-400 mb-6"
        >
          AI / ML ENGINEER
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black leading-[0.9]"
        >
          Aditya Singh <br />

          <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
            Bhadauria
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-xl md:text-4xl font-semibold h-20 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent"
        >
          <TypeAnimation
            sequence={[
              "Building AI Systems",
              1800,

              "Generative AI Engineer",
              1800,

              "Designing Scalable ML Pipelines",
              1800,

              "Creating Autonomous AI Workflows",
              1800,

              "Deploying Production AI Applications",
              1800,

              "Specializing in RAG & Agentic Systems",
              1800,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-3xl mx-auto mt-8 text-gray-400 text-lg md:text-xl leading-relaxed"
        >
          AI/ML Engineer focused on building intelligent automation systems,
          scalable AI infrastructure, multimodal AI applications,
          and cloud-native machine learning workflows.
        </motion.p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {[
            "GenAI",
            "FastAPI",
            "AWS",
            "YOLOv8",
            "RAG",
            "LangChain",
            "OpenAI",
            "Docker",
          ].map((tech) => (
            <div
              key={tech}
              className="glass px-5 py-2 rounded-full text-sm text-cyan-300 border border-cyan-400/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:scale-105 transition-all duration-300"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >

          {/* View Projects */}
          <a
            href="#projects"
            className="
            px-8
            py-4
            rounded-2xl
            bg-cyan-400
            text-black
            font-semibold
            hover:scale-105
            hover:-translate-y-1
            hover:shadow-[0_0_70px_rgba(0,245,212,0.55)]
            transition-all
            duration-300
            "
          >
            View Projects
          </a>

          {/* Download Resume */}
          <a
            href="/resume/Aditya_Singh_Bhadauria_Resume.pdf"
            download
            className="
            glass
            px-8
            py-4
            rounded-2xl
            hover:scale-105
            hover:-translate-y-1
            hover:border-cyan-400/40
            hover:shadow-[0_0_50px_rgba(124,58,237,0.25)]
            transition-all
            duration-300
            "
          >
            Download Resume
          </a>

        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-8 mt-14 text-2xl text-gray-500"
        >

          <a
            href="https://github.com/Adi77189"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(0,245,212,0.8)] transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-bhadauria-9b8082302/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(0,245,212,0.8)] transition-all duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/yashsingh.bhadauria/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(0,245,212,0.8)] transition-all duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="https://x.com/bhadauria15070"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(0,245,212,0.8)] transition-all duration-300"
          >
            <FaXTwitter />
          </a>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-20 flex justify-center"
        >
          <div className="w-7 h-12 border border-gray-500 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-cyan-400 rounded-full" />
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;