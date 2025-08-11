import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiExpress } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-600 text-5xl" />, name: "HTML", desc: "Semantic structure for web pages." },
  { icon: <FaCss3Alt className="text-blue-600 text-5xl" />, name: "CSS", desc: "Styling and responsive design." },
  { icon: <FaJs className="text-yellow-400 text-5xl" />, name: "JavaScript", desc: "Interactive and dynamic behavior." },
  { icon: <FaReact className="text-cyan-400 text-5xl" />, name: "ReactJS", desc: "Modern UI building library." },
  { icon: <FaNodeJs className="text-green-600 text-5xl" />, name: "NodeJS", desc: "JavaScript runtime for backend." },
  { icon: <FaDatabase className="text-green-700 text-5xl" />, name: "MongoDB", desc: "NoSQL document database." },
  { icon: <SiFirebase className="text-yellow-500 text-5xl" />, name: "Firebase", desc: "Backend services and hosting." },
  { icon: <SiTailwindcss className="text-teal-400 text-5xl" />, name: "TailwindCSS", desc: "Utility-first CSS framework." },
  { icon: <SiExpress className="text-gray-800 text-5xl" />, name: "ExpressJS", desc: "Fast Node.js web framework." },
  { icon: <FaGitAlt className="text-red-600 text-5xl" />, name: "Git", desc: "Version control system." },
  { icon: <FaGithub className="text-gray-900 text-5xl" />, name: "GitHub", desc: "Code hosting platform." },
  { icon: <FaFigma className="text-pink-600 text-5xl" />, name: "Figma", desc: "Design and prototyping tool." },
];

const SkillsSection = () => {
  return (
    <div id="skills" className=" flex items-center justify-center px-4 md:mt-0 lg:mt-0 pb-12">
        <section 
      className="py-12  mt-12  rounded-2xl shadow-2xl px-4 transition-colors duration-300 max-w-7xl mx-auto w-full "
      style={{
          backgroundColor: "hsl(var(--card))",
          border: "1px solid hsl(var(--border))",
        }}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
        My <span className="text-[#8c52ff]">Skills</span>
      </h2>

      <Marquee
        pauseOnHover={true}
        gradient={false}
        direction="left"
        speed={55}
        className="flex"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
             className="inline-block min-w-[250px] p-6 mx-3 bg-white dark:bg-gray-800 rounded-xl
    text-center
    border border-transparent
    bg-gradient-to-tr from-[#8c52ff] to-[#b37aff]
    hover:from-[#b37aff] hover:to-[#8c52ff]
    transition-all duration-500
    relative"
            style={{ backgroundOrigin: "border-box" }}
          >
            <div
              className="rounded-xl p-4 bg-gray-100 dark:bg-gray-900 w-full h-full flex flex-col items-center"
              style={{
                boxShadow: "inset 0 0 10px rgba(255,255,255,0.1)",
              }}
            >
              {skill.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {skill.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </Marquee>
      <Marquee
        pauseOnHover={true}
        gradient={false}
        direction="right"
        speed={55}
        className="flex"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
             className="inline-block min-w-[250px] p-6 mx-3 bg-white dark:bg-gray-800 rounded-xl
    text-center
    border border-transparent
    bg-gradient-to-tr from-[#8c52ff] to-[#b37aff]
    hover:from-[#b37aff] hover:to-[#8c52ff]
    transition-all duration-500
    relative mt-5"
            style={{ backgroundOrigin: "border-box" }}
          >
            <div
              className="rounded-xl p-4 bg-gray-100 dark:bg-gray-900 w-full h-full flex flex-col items-center"
              style={{
                boxShadow: "inset 0 0 10px rgba(255,255,255,0.1)",
              }}
            >
              {skill.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {skill.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </Marquee>
    </section>
    </div>
  );
};

export default SkillsSection;
