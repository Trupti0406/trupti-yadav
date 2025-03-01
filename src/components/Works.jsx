import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa"; // Import icons

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="visible" // Ensures it's always visible
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} // Reduces animation delay
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        transitionSpeed={500}
        glareEnable={false} // Disable glare for better Safari compatibility
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full">
        <noscript>
          <div className="text-white text-center">
            Tilt effects not supported
          </div>
        </noscript>

        <div className="relative w-full h-[230px] overflow-hidden group">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay with project name on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <h3 className="text-white font-bold text-xl p-4">{name}</h3>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] h-[80px] overflow-y-auto">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Action buttons */}
        <div className="mt-5 flex justify-between items-center">
          <button
            onClick={() => window.open(live_demo_link, "_blank")}
            className="bg-gradient-to-r from-violet-600 to-pink-500 py-2 px-4 rounded-lg flex items-center gap-2 hover:from-pink-500 hover:to-violet-600 transition-all duration-300 text-white font-medium text-sm"
            disabled={!live_demo_link}>
            <FaExternalLinkAlt />
            <span>Demo</span>
          </button>

          <button
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-gradient-to-r from-pink-500 to-violet-600 py-2 px-4 rounded-lg flex items-center gap-2 hover:from-violet-600 hover:to-pink-500 transition-all duration-300 text-white font-medium text-sm"
            disabled={!source_code_link}>
            <FaCode />
            <span>Code</span>
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Here are some of the projects I have built
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
