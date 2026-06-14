import certifications from "../data/certifications";

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Learning Journey
          </p>

          <h2 className="text-5xl font-black mb-4">
            Certifications & Achievements
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements that
            demonstrate expertise in AI, Machine Learning,
            Data Analytics, and Generative AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {certifications.map((cert, index) => (
            <div
              key={index}
              className="
                group
                p-8
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-lg
                hover:border-cyan-400/40
                hover:shadow-[0_0_40px_rgba(0,255,255,0.15)]
                transition-all duration-500
              "
            >
              <div className="text-cyan-400 font-semibold mb-2">
                {cert.year}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {cert.title}
              </h3>

              <p className="text-cyan-300 mb-4">
                {cert.issuer}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                {cert.description}
              </p>
              <a
              href={cert.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                mt-6
                text-cyan-400
                hover:text-cyan-300
                transition-all
                duration-300
                font-medium
              "
              >
              📜 View Certificate ↗
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;