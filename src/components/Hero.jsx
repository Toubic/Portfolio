import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Tobias</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user-friendly <br className="sm:block hidden" />
            and interactive web applications
          </p>
        </div>
      </div>

      <ComputersCanvas /> 
        <div className="absolute xs:bottom-10 bottom-32 w-full relative top-[-1] flex justify-center items-center">
            <div className="w-[35px] h-[40px] flex justify-center items-start p-1 rotate-180 scale-[2]">
              <motion.div
                animate={{
                  y: [0, 8, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="h-0 w-0 border-x-8 border-x-transparent border-b-8 border-b-secondary-600"
              />
            </div>
        </div>
    </section>
  )
}

export default Hero