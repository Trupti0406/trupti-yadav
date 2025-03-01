import React from "react";


import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Tech expertise I bring to projects
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills & Technologies
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="w-28 h-28 flex flex-col items-center justify-center group transition-all duration-300">
              {/* Icon with hover effect */}
              <div className="w-16 h-16 flex items-center justify-center bg-tertiary rounded-full p-3 mb-2 shadow-md group-hover:shadow-pink-500/30 transition-all duration-300">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Technology name */}
              <p className="text-sm text-center text-white group-hover:text-pink-500 font-medium transition-colors duration-300">
                {technology.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
