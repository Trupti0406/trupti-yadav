import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  // Simpler animation variant for mobile
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2, // Reduced delay for mobile
      },
    },
  };

  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      className="mb-7">
      <Tilt
        tiltMaxAngleX={10} // Reduced tilt for better mobile experience
        tiltMaxAngleY={10}
        scale={1.02}
        transitionSpeed={1500}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[200px] overflow-hidden group">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <h3 className="text-white font-bold text-xl p-4">{name}</h3>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] max-h-[80px] overflow-y-auto">
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
  // Use this to manually control animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the element is visible
    triggerOnce: false, // Allow re-triggering if section goes out of view and back
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      // Optional: reset animations when out of view
      // controls.start("hidden");
    }
  }, [controls, inView]);

  // Simpler animation variant for the section title
  const headerVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div ref={ref} className="min-h-[100vh]">
      <motion.div variants={headerVariant} initial="hidden" animate={controls}>
        <p className={`${styles.sectionSubText} text-center`}>
          Here are some of the projects I have built
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>

      <div className="mt-16 flex flex-wrap justify-center gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

// Modify the SectionWrapper HOC call to ensure better mobile rendering
export default SectionWrapper(Works, "projects", { fullHeight: true });
