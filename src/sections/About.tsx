import { motion } from "framer-motion";

const About = () => {
return ( <section
   id="about"
   className="relative py-28 px-6 overflow-hidden"
 > <div className="max-w-7xl mx-auto">

```
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

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <div className="glass rounded-3xl p-10 border border-cyan-400/10">

          <h3 className="text-3xl font-bold mb-6">
            AI/ML Engineer & Cloud Builder
          </h3>

          <p className="text-gray-300 leading-8 text-lg mb-6">
            I am an AI & Data Science engineer focused on building
            production-grade Generative AI systems, intelligent
            automation pipelines, and scalable cloud-native
            applications.
          </p>

          <p className="text-gray-400 leading-8 mb-6">
            My work combines Large Language Models, Retrieval
            Augmented Generation (RAG), Computer Vision, OCR,
            FastAPI backends, and AWS infrastructure to solve
            real-world business problems through AI-driven systems.
          </p>

          <p className="text-gray-400 leading-8">
            I specialize in Document Intelligence, Agentic AI,
            scalable inference pipelines, multimodal AI systems,
            and end-to-end ML deployment workflows.
          </p>

        </div>
      </motion.div>

      {/* RIGHT SIDE */}
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

        {/* AWS Internship */}
        <div className="glass rounded-3xl p-8 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300">

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">
              AI/ML Virtual Intern
            </h3>

            <span className="text-cyan-400 text-sm">
              Apr 2025 – Jun 2025
            </span>
          </div>

          <p className="text-purple-400 mb-4 font-medium">
            AWS Academy • AICTE • EduSkills
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>
              • Successfully completed a 10-week AI & Machine Learning Virtual Internship.
            </li>

            <li>
              • Worked with AWS cloud services including Amazon SageMaker, Amazon S3 and VPC.
            </li>

            <li>
              • Explored machine learning model development, deployment and cloud-native AI solutions.
            </li>

            <li>
              • Gained hands-on experience in scalable AI/ML pipelines and AWS-based deployment architectures.
            </li>
          </ul>
        </div>

        {/* Cloud Engineering Intern */}
        <div className="glass rounded-3xl p-8 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300">

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">
              Cloud Engineering Intern
            </h3>

            <span className="text-cyan-400 text-sm">
              Dec 2025 – Jan 2026
            </span>
          </div>

          <p className="text-purple-400 mb-4 font-medium">
            HeProAI
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>
              • Built a serverless task tracker using AWS Lambda,
              DynamoDB, API Gateway, Cognito & CloudFront.
            </li>

            <li>
              • Implemented secure JWT authentication and scalable
              backend architecture.
            </li>

            <li>
              • Integrated frontend + backend workflows with full
              CRUD functionality.
            </li>
          </ul>
        </div>

        {/* Machine Learning Intern */}
        <div className="glass rounded-3xl p-8 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300">

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">
              Machine Learning Intern
            </h3>

            <span className="text-cyan-400 text-sm">
              Oct 2025 – Nov 2025
            </span>
          </div>

          <p className="text-purple-400 mb-4 font-medium">
            ALGONIVE
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>
              • Developed ML pipelines for prediction systems and
              stock analysis models.
            </li>

            <li>
              • Built Flask-based AI applications with optimized
              inference workflows.
            </li>

            <li>
              • Achieved high model accuracy with feature
              engineering and scalable deployment.
            </li>
          </ul>
        </div>

      </motion.div>
    </div>

    {/* Bottom Stats */}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-4 gap-6 mt-20"
    >

      {[
        ["15+", "AI Projects"],
        ["90-95%", "Model Accuracy"],
        ["AWS", "Cloud Native"],
        ["FastAPI", "Backend APIs"],
      ].map((item, index) => (
        <div
          key={index}
          className="glass rounded-2xl p-8 text-center border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300"
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
  </div>
</section>


);
};

export default About;
