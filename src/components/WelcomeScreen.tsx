import { motion } from "framer-motion";

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
      "
    >

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="relative text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-5xl
          md:text-7xl
          font-black
          bg-gradient-to-r
          from-cyan-400
          via-white
          to-purple-500
          bg-clip-text
          text-transparent
          "
        >
          Aditya Singh Bhadauria
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="
          mt-6
          text-gray-400
          tracking-[0.3em]
          uppercase
          text-sm
          "
        >
          AI • ML • GenAI Engineer
        </motion.p>

        <div className="w-64 h-[3px] bg-white/10 rounded-full mx-auto mt-10 overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.5,
            }}
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
          />

        </div>

      </div>

    </motion.div>
  );
};

export default WelcomeScreen;