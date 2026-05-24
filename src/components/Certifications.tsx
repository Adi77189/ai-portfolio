import { motion } from "framer-motion";

const certifications = [
  {
    title: "Convolve 4.0 Pan-IIT AI/ML Hackathon",
    issuer:
      "IIT Guwahati, IIT Madras, IIT Kanpur, IIT Bombay & others",
    year: "2026",
    description:
      "Semi-Finalist in Generative AI Track powered by IDFC First Bank.",
    skills: [
      "Generative AI",
      "Hackathon",
      "AI Systems",
      "Problem Solving",
    ],
  },

  {
    title: "AWS AI-ML Virtual Internship",
    issuer: "AICTE + AWS Academy",
    year: "2025",
    description:
      "Completed 10-week AI-ML Virtual Internship with AWS cloud-based ML workflows.",
    skills: [
      "AWS SageMaker",
      "Computer Vision",
      "ML Deployment",
      "Cloud AI",
    ],
  },

  {
    title: "AIT Techstorm Assessment",
    issuer: "Army Institute of Technology, Pune",
    year: "2025",
    description:
      "Participated in AI/Tech assessment opportunity organized by AIT Pune.",
    skills: [
      "AI Assessment",
      "Problem Solving",
      "Technical Aptitude",
    ],
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative py-28 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[0.3em] text-cyan-400 mb-4">
            Achievements & Certifications
          </p>

          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            Learning Journey
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            Certifications, internships, and hackathon achievements
            demonstrating practical AI/ML engineering expertise.
          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {certifications.map((cert, index) => (

            <motion.div
              key={cert.title}

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}

              viewport={{ once: true }}

              whileHover={{
                y: -10,
                scale: 1.02,
              }}

              className="
              group
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-2xl
              p-8
              hover:border-cyan-400/40
              hover:shadow-[0_0_60px_rgba(0,255,255,0.12)]
              transition-all
              duration-500
              "
            >

              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-cyan-500/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />

              {/* Year */}
              <div className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm mb-6">
                {cert.year}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-white">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-cyan-300 mb-4">
                {cert.issuer}
              </p>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">

                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-white/[0.03]
                    border
                    border-white/10
                    text-sm
                    text-gray-300
                    hover:border-cyan-400/40
                    hover:text-cyan-300
                    transition-all
                    duration-300
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Certifications;