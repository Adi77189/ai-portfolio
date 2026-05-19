import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI / Machine Learning",
    skills: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "PyTorch",
      "TensorFlow",
      "CNNs",
      "ResNet",
      "Model Evaluation",
      "Hyperparameter Tuning",
    ],
  },

  {
    title: "Generative AI",
    skills: [
      "LangChain",
      "OpenAI APIs",
      "RAG Pipelines",
      "Embeddings",
      "Prompt Engineering",
      "Agentic AI",
      "Vector Databases",
    ],
  },

  {
    title: "Backend & APIs",
    skills: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "PostgreSQL",
      "SQL",
      "Data Pipelines",
    ],
  },

  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "S3",
      "Lambda",
      "API Gateway",
      "CloudFront",
      "Elastic Beanstalk",
      "Docker",
      "Git/GitHub",
    ],
  },

  {
    title: "Computer Vision & NLP",
    skills: [
      "YOLOv8",
      "Tesseract OCR",
      "OpenCV",
      "Document AI",
      "NLP",
      "Multimodal AI",
    ],
  },

  {
    title: "System Design",
    skills: [
      "Scalable AI Pipelines",
      "Serverless Architecture",
      "Model Deployment",
      "Evaluation Frameworks",
      "Automation Systems",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 px-6"
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

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Skills & Expertise
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            AI Engineering Stack
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            Building scalable AI systems with modern machine learning,
            Generative AI, cloud infrastructure, and intelligent automation.
          </p>

        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mt-20">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="glass rounded-[2rem] p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2"
            >

              {/* Category Title */}
              <h3 className="text-2xl font-bold mb-8 gradient-text">
                {category.title}
              </h3>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-4">

                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;