import { motion } from "framer-motion";
import robotAI from "../assets/robot-ai.png";

const WelcomeScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="
      fixed
      inset-0
      z-[999]
      flex
      items-center
      justify-center
      bg-[#050816]
      overflow-hidden
      px-6
      "
    >
      {/* Background Glow */}
      <div className="absolute w-[800px] h-[800px] bg-cyan-500/10 blur-[180px] rounded-full" />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl glow-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl glow-pulse" />

      <div className="relative max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-16">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left max-w-2xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
            text-cyan-400
            uppercase
            tracking-[0.4em]
            text-sm
            mb-6
            "
          >
            WELCOME TO MY AI WORLD
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            "
          >
            <span className="text-white">
              Aditya Singh
            </span>

            <br />

            <span
              className="
              bg-gradient-to-r
              from-cyan-400
              via-white
              to-purple-500
              bg-clip-text
              text-transparent
              "
            >
              Bhadauria
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
            className="
            mt-8
            text-gray-400
            text-lg
            tracking-wide
            "
          >
            Building Intelligent Systems With AI
          </motion.p>

          {/* Loading Bar */}
          <div className="w-72 h-[4px] bg-white/10 rounded-full mt-10 overflow-hidden">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2.5,
              }}
              className="
              h-full
              bg-gradient-to-r
              from-cyan-400
              via-cyan-300
              to-purple-500
              "
            />

          </div>

          {/* Boot Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.2,
              duration: 1,
            }}
            className="
            mt-4
            text-cyan-400
            tracking-[0.2em]
            uppercase
            text-xs
            "
          >
            Initializing AI Portfolio...
          </motion.p>

        </div>

        {/* RIGHT SIDE ROBOT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          className="relative"
        >
          {/* Glow Behind Robot */}
          <div
            className="
            absolute
            inset-0
            bg-cyan-500/20
            blur-[120px]
            rounded-full
            glow-pulse
            "
          />

          <img
            src={robotAI}
            alt="AI Robot"
            className="
            w-[280px]
            md:w-[380px]
            lg:w-[480px]
            robot-float
            drop-shadow-[0_0_60px_rgba(0,245,212,0.5)]
            "
          />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default WelcomeScreen;