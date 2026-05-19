import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-5"
    >
      <div className="max-w-7xl mx-auto glass rounded-full px-8 py-4 flex items-center justify-between border border-white/10">

        {/* Logo */}
        <h1 className="text-2xl font-black gradient-text tracking-wide">
          ASB
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-gray-300 font-medium">

          <a
            href="#about"
            className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(0,245,212,0.8)] transition-all duration-300"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(0,245,212,0.8)] transition-all duration-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(0,245,212,0.8)] transition-all duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(0,245,212,0.8)] transition-all duration-300"
          >
            Contact
          </a>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;