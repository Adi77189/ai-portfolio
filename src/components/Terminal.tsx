import { motion } from "framer-motion";

const Terminal = () => {
  return (
    <section className="py-28 px-6">

      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl border border-cyan-400/10 overflow-hidden shadow-[0_0_60px_rgba(0,245,212,0.08)]"
        >

          {/* TOP BAR */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-black/30">

            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <p className="ml-4 text-sm text-gray-400">
              aditya@ai-terminal
            </p>

          </div>

          {/* TERMINAL BODY */}
          <div className="p-8 font-mono text-sm md:text-base space-y-6">

            <div>
              <span className="text-cyan-400">
                aditya@portfolio:~$
              </span>{" "}

              <span className="text-white">
                whoami
              </span>

              <p className="text-gray-400 mt-2">
                AI/ML Engineer specializing in Generative AI,
                FastAPI, RAG Systems, Computer Vision,
                and scalable AI infrastructure.
              </p>
            </div>

            <div>
              <span className="text-cyan-400">
                aditya@portfolio:~$
              </span>{" "}

              <span className="text-white">
                skills
              </span>

              <p className="text-gray-400 mt-2">
                Python • FastAPI • LangChain • OpenAI •
                YOLOv8 • AWS • React • TypeScript •
                PostgreSQL • RAG • Docker
              </p>
            </div>

            <div>
              <span className="text-cyan-400">
                aditya@portfolio:~$
              </span>{" "}

              <span className="text-white">
                currently_building
              </span>

              <p className="text-gray-400 mt-2">
                AI Stock Trading Agent,
                Document Intelligence Pipelines,
                and Agentic AI Systems.
              </p>
            </div>

            <div>
              <span className="text-cyan-400">
                aditya@portfolio:~$
              </span>{" "}

              <span className="text-white">
                open_to_work
              </span>

              <p className="text-green-400 mt-2">
                YES — AI/ML Internship & Full-Time Opportunities
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Terminal;