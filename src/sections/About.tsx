import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
          About Me
        </p>

        <h2 className="text-5xl md:text-6xl font-black">
          Building Real-World
          <span className="gradient-text"> AI Systems</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* =====================================================
            LEFT SIDE - ABOUT
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-3xl p-10 border border-cyan-400/10">

            <h3 className="text-3xl font-bold mb-6">
              AI/ML Engineer & GenAI Builder
            </h3>

            <p className="text-gray-300 leading-8 text-lg mb-6">
              I am an AI & Data Science engineer currently working as an
              <span className="text-cyan-400 font-semibold">
                {" "}AI Intern at SmartKargo in the E-commerce Department
              </span>
              , where I work on AI-powered business solutions and
              conversational data systems.
            </p>

            <p className="text-gray-400 leading-8 mb-6">
              My work spans Generative AI, AI Agents, Microsoft Fabric,
              RAG, Computer Vision, FastAPI, and AWS, with a focus on
              building practical AI systems that connect data,
              automation, and intelligent decision-making.
            </p>

            <p className="text-gray-400 leading-8">
              I specialize in Document Intelligence, Agentic AI,
              scalable inference pipelines, multimodal AI systems,
              and end-to-end ML deployment workflows.
            </p>

          </div>
        </motion.div>


        {/* =====================================================
            RIGHT SIDE - EXPERIENCE
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >

          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] mb-2">
              Experience
            </p>
          </div>


          {/* =================================================
              SMARTKARGO - CURRENT EXPERIENCE
          ================================================== */}
          <div
            className="
              glass rounded-3xl p-8
              border border-cyan-400/20
              hover:border-cyan-400/40
              transition-all duration-300
            "
          >

            <div className="flex items-center justify-between mb-4 gap-4">

              <h3 className="text-2xl font-bold">
                AI Intern
              </h3>

              <span className="text-cyan-400 text-sm whitespace-nowrap">
                Jul 2026 – Present
              </span>

            </div>

            <p className="text-purple-400 mb-1 font-medium">
              SmartKargo
            </p>

            <p className="text-gray-500 text-sm mb-4">
              E-commerce Department
            </p>

            <ul className="space-y-3 text-gray-300">

              <li>
                • Working on an{" "}
                <span className="text-cyan-300">
                  AI-powered E-commerce Copilot
                </span>{" "}
                for conversational access to business and operational data.
              </li>

              <li>
                • Developing{" "}
                <span className="text-cyan-300">
                  Sales and Operational Data Agents
                </span>{" "}
                using Microsoft Fabric Semantic Models and Fabric Data Agents.
              </li>

              <li>
                • Integrating multiple data agents with{" "}
                <span className="text-cyan-300">
                  Microsoft Copilot Studio
                </span>{" "}
                to build a modular conversational AI architecture.
              </li>

              <li>
                • Preparing metadata, KPIs, business context, and data
                definitions to improve agent understanding and response accuracy.
              </li>

            </ul>

          </div>


          {/* =================================================
              HEPROAI
          ================================================== */}
          <div
            className="
              glass rounded-3xl p-8
              border border-cyan-400/10
              hover:border-cyan-400/30
              transition-all duration-300
            "
          >

            <div className="flex items-center justify-between mb-4 gap-4">

              <h3 className="text-2xl font-bold">
                Cloud Engineering Intern
              </h3>

              <span className="text-cyan-400 text-sm whitespace-nowrap">
                Nov 2025 – Jan 2026
              </span>

            </div>

            <p className="text-purple-400 mb-4 font-medium">
              HeProAI
            </p>

            <ul className="space-y-3 text-gray-300">

              <li>
                • Built a serverless task tracker using AWS Lambda,
                DynamoDB, API Gateway, Cognito, and CloudFront.
              </li>

              <li>
                • Implemented secure JWT authentication and protected
                REST APIs using Cognito User Pools.
              </li>

              <li>
                • Integrated frontend with Lambda backend and DynamoDB
                for full CRUD functionality.
              </li>

            </ul>

          </div>


          {/* =================================================
              ALGONIVE
          ================================================== */}
          <div
            className="
              glass rounded-3xl p-8
              border border-cyan-400/10
              hover:border-cyan-400/30
              transition-all duration-300
            "
          >

            <div className="flex items-center justify-between mb-4 gap-4">

              <h3 className="text-2xl font-bold">
                Machine Learning Intern
              </h3>

              <span className="text-cyan-400 text-sm whitespace-nowrap">
                Sept 2025 – Nov 2025
              </span>

            </div>

            <p className="text-purple-400 mb-4 font-medium">
              ALGONIVE
            </p>

            <ul className="space-y-3 text-gray-300">

              <li>
                • Built ML pipelines for prediction systems and stock
                analysis using regression and time-series techniques.
              </li>

              <li>
                • Developed a Flask-based Blood Pressure Prediction
                application using Scikit-learn and feature engineering.
              </li>

              <li>
                • Optimized model inference using startup-time loading
                and built a lightweight Flask interface.
              </li>

            </ul>

          </div>


          {/* =================================================
              AICTE / AWS
          ================================================== */}
          <div
            className="
              glass rounded-3xl p-8
              border border-cyan-400/10
              hover:border-cyan-400/30
              transition-all duration-300
            "
          >

            <div className="flex items-center justify-between mb-4 gap-4">

              <h3 className="text-2xl font-bold">
                AI/ML Virtual Intern
              </h3>

              <span className="text-cyan-400 text-sm whitespace-nowrap">
                Apr 2025 – Jun 2025
              </span>

            </div>

            <p className="text-purple-400 mb-4 font-medium">
              AWS Academy • AICTE • EduSkills
            </p>

            <ul className="space-y-3 text-gray-300">

              <li>
                • Built real-time Drowsiness Detection using MediaPipe
                Face Mesh, OpenCV, and Eye Aspect Ratio.
              </li>

              <li>
                • Deployed ML inference on AWS SageMaker using S3,
                VPC, and Elastic Beanstalk.
              </li>

            </ul>

          </div>

        </motion.div>
      </div>


      {/* =====================================================
          BOTTOM STATS
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-4 gap-6 mt-20"
      >

        {[
          ["15+", "AI Projects"],
          ["90–95%", "Model Accuracy"],
          ["Fabric", "Enterprise AI"],
          ["FastAPI", "Backend APIs"],
        ].map((item, index) => (
          <div
            key={index}
            className="
              glass rounded-2xl p-8 text-center
              border border-cyan-400/10
              hover:border-cyan-400/30
              transition-all duration-300
            "
          >

            <h3 className="text-4xl font-black gradient-text mb-3">
              {item[0]}
            </h3>

            <p className="text-gray-400">
              {item[1]}
            </p>

          </div>
        ))}

      </motion.div>

    </section>
  );
};

export default About;