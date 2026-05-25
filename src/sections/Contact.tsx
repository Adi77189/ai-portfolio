// import { motion } from "framer-motion";

// import {
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
//   FaEnvelope,
// } from "react-icons/fa";

// import { FaXTwitter } from "react-icons/fa6";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="relative py-32 px-6"
//     >
//       <div className="max-w-5xl mx-auto">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >

//           <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
//             Contact
//           </p>

//           <h2 className="text-4xl md:text-6xl font-black">
//             Let’s Build Something Intelligent
//           </h2>

//           <p className="text-gray-400 text-lg mt-6 leading-relaxed max-w-3xl mx-auto">
//             Open to AI Engineering, Generative AI,
//             Backend, and Intelligent Automation opportunities.
//             Let’s connect and create impactful AI systems.
//           </p>

//         </motion.div>

//         {/* Main Contact Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           viewport={{ once: true }}
//           className="glass rounded-[2.5rem] p-10 md:p-14 border border-white/10 mt-20 text-center relative overflow-hidden"
//         >

//           {/* Glow */}
//           <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5" />

//           <div className="relative z-10">

//             {/* Availability Badge */}
//             <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 mb-8">

//               <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

//               Available For Opportunities

//             </div>

//             {/* Email */}
//             <h3 className="text-2xl md:text-4xl font-black mb-6">
//               adityabhadauria1904@gmail.com
//             </h3>

//             <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
//               Interested in collaborating, hiring,
//               or discussing AI systems engineering?
//               Feel free to reach out.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-wrap justify-center gap-6 mt-10">

//               <a
//                 href="mailto:adityabhadauria1904@gmail.com"
//                 className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 hover:shadow-[0_0_40px_rgba(0,245,212,0.4)] transition-all duration-300"
//               >
//                 Send Email
//               </a>

//               <a
//                 href="#"
//                 className="glass px-8 py-4 rounded-2xl hover:scale-105 hover:border-cyan-400/40 transition-all duration-300"
//               >
//                 Download Resume
//               </a>

//             </div>

//             {/* Socials */}
//             <div className="flex justify-center gap-8 mt-12 text-2xl text-gray-500">

//               <a
//                 href="https://github.com/Adi77189"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
//               >
//                 <FaGithub />
//               </a>

//               <a
//                 href="https://www.linkedin.com/in/aditya-bhadauria-9b8082302/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
//               >
//                 <FaLinkedin />
//               </a>

//               <a
//                 href="https://instagram.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
//               >
//                 <FaInstagram />
//               </a>

//               <a
//                 href="https://x.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
//               >
//                 <FaXTwitter />
//               </a>

//               <a
//                 href="mailto:adityabhadauria1904@gmail.com"
//                 className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
//               >
//                 <FaEnvelope />
//               </a>

//             </div>

//           </div>

//         </motion.div>

//         {/* Footer */}
//         <div className="text-center mt-20 text-gray-500 text-sm">
//           © 2026 Aditya Singh Bhadauria • Built with React, TypeScript & AI
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Contact;
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Let’s Build Something Intelligent
          </h2>

          <p className="text-gray-400 text-lg mt-6 leading-relaxed max-w-3xl mx-auto">
            Open to AI Engineering, Generative AI,
            Backend, and Intelligent Automation opportunities.
            Let’s connect and create impactful AI systems.
          </p>

        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="glass rounded-[2.5rem] p-10 md:p-14 border border-white/10 mt-20 text-center relative overflow-hidden"
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5" />

          <div className="relative z-10">

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-green-500/10 border border-green-400/20 text-green-300 mb-8">

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

              Available For Opportunities

            </div>

            {/* Email */}
            <h3 className="text-2xl md:text-4xl font-black mb-6 break-all">
              adityabhadauria1904@gmail.com
            </h3>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Interested in collaborating, hiring,
              or discussing AI systems engineering?
              Feel free to reach out.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">

              {/* EMAIL BUTTON */}
              <a
                href="mailto:adityabhadauria1904@gmail.com?subject=Opportunity%20Regarding%20AI%2FML%20Role"
                className="
                  px-8
                  py-4
                  rounded-2xl
                  bg-cyan-400
                  text-black
                  font-semibold
                  hover:scale-105
                  hover:shadow-[0_0_40px_rgba(0,245,212,0.4)]
                  transition-all
                  duration-300
                "
              >
                Send Email
              </a>

              {/* RESUME BUTTON */}
              <a
                href="/resume/aditya_resume.pdf"
                download
                className="
                  glass
                  px-8
                  py-4
                  rounded-2xl
                  hover:scale-105
                  hover:border-cyan-400/40
                  transition-all
                  duration-300
                "
              >
                Download Resume
              </a>

            </div>

            {/* Socials */}
            <div className="flex justify-center gap-8 mt-12 text-2xl text-gray-500">

              {/* GitHub */}
              <a
                href="https://github.com/Adi77189"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aditya-bhadauria-9b8082302/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              {/* Twitter/X */}
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
              >
                <FaXTwitter />
              </a>

              {/* Mail Icon */}
              <a
                href="mailto:adityabhadauria1904@gmail.com"
                className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </motion.div>

        {/* Footer */}
        <div className="text-center mt-20 text-gray-500 text-sm">
          © 2026 Aditya Singh Bhadauria • Built with React, TypeScript & AI
        </div>

      </div>
    </section>
  );
};

export default Contact;