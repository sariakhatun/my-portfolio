import React from "react";
import JUlogo from "../assets/ju.png";
import HSCLogo from "../assets/school.png";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div
      id="education"
      className="max-w-7xl mx-auto px-6 py-12"
     
    >
      <section
        className="scroll-mt-[100px] py-16 md:px-10 rounded-2xl shadow-2xl px-6 max-w-7xl mx-auto w-full
                   bg-[hsl(var(--card))] border-[1px] border-[hsl(var(--border))] transition-colors duration-300"
      >
        <h2
          className="text-4xl font-bold mb-16 text-center "
        >
          Education <span className="text-[#8c52ff]">Journey</span>
        </h2>

        <div className="flex flex-col gap-16"  style={{ fontFamily: "'Fredoka One', cursive" }}>
          {/* Jahangirnagar University Card */}
          <div
  className="relative rounded-xl p-10 cursor-default card-hover
            bg-[hsl(var(--card))] border-[2px] border-[hsl(var(--primary))]
            shadow-[0_4px_30px_rgba(140,82,255,0.4)] hover:shadow-[0_10px_50px_rgba(140,82,255,0.7)]
            transition-shadow duration-500 ease-in-out"
>
  {/* Current badge */}
  <span
    className="absolute top-5 right-5 px-4 py-1 rounded-full text-sm font-semibold"
    style={{
      backgroundImage: "linear-gradient(90deg, #8c52ff, #ff7ee2)",
      color: "#fff",
      boxShadow: "0 0 8px #8c52ff",
    }}
  >
    Current
  </span>

  <div className="flex flex-col sm:flex-row justify-around items-center mb-6 gap-6">
    <img
      src={JUlogo}
      alt="Jahangirnagar University Logo"
      className="w-24 h-24 rounded-full object-contain border-4 border-[hsl(var(--primary))] image-shadow"
    />
    <div className="text-center sm:text-left">
      <h3
        className="font-extrabold text-xl text-foreground
                   flex flex-col sm:flex-row items-center lg:gap-2 mb-2 mt-2"
      >
        <FaGraduationCap className="-mt-6 lg:mt-0 mb-2 sm:mb-0" size={35} />
        <span>Bachelor of Science in Computer Science and Engineering</span>
      </h3>
      <p className="font-bold text-[hsl(var(--primary))] mt-1">
        Jahangirnagar University
      </p>
      <p className="text-foreground mt-1">2025 – Expected Graduation: 2029</p>
      <p className="text-foreground mt-1 font-semibold">
        Last Semester CGPA: <span className="text-[#8c52ff]">3.97</span>
      </p>
    </div>
  </div>

  <p className="mb-4 text-foreground leading-relaxed">
    Currently pursuing a Bachelor's in Computer Science and Engineering.
    Passionate about software development, web technologies, and problem-solving.
    Actively learning full-stack web development and participating in coding challenges.
  </p>

  <div>
    <h4 className="font-bold text-foreground mb-4 tracking-wide">
      SKILLS DEVELOPED:
    </h4>
    <div className="flex flex-wrap gap-3 justify-center">
      {[
        "React.js",
        "MongoDB",
        "Express.js",
        "Node.js",
        "MERN Stack",
      ].map((skill, i) => (
        <span
          key={i}
          className={`bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 text-xs font-semibold px-3 py-1 rounded-full`}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</div>


          {/* HSC Card with green theme */}
          <div
            className="rounded-2xl p-10 flex flex-col items-center text-center
                       border-2 border-green-600
                       bg-[hsl(var(--card))]
                       shadow-[0_4px_30px_rgba(49,175,66,0.4)] hover:shadow-[0_10px_50px_rgba(49,175,66,0.7)]
                       transition-shadow duration-500 ease-in-out cursor-default w-full"
          >
            <div className="mb-6 relative w-28 h-28 rounded-full overflow-hidden shadow-lg border-4 border-green-600 image-shadow hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src={HSCLogo}
                alt="Shomospur Abu Taleb Degree College Logo"
                className="object-contain w-full h-full rounded-full"
              />
            </div>

            <h3 className="text-green-600 font-bold text-xl mb-1 tracking-wide">
              Higher Secondary Certificate (HSC), Science
            </h3>
            <p className="font-extrabold text-green-500 mb-2">
              Shomospur Abu Taleb Degree College, Khoksa, Kushtia
            </p>

            <p className="text-green-600 mb-4 text-lg font-semibold">
              Completed with GPA:{" "}
              <span className="text-green-700 font-extrabold">5.00</span>
            </p>

            <p className="text-green-500 mb-8 max-w-xs leading-relaxed">
              Completed with perfect GPA of 5.00. Developed foundational skills in
              technology and computer applications.
            </p>

            <h4 className="font-bold text-green-500 mb-3 tracking-wide">
              SKILLS DEVELOPED:
            </h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {["MS Office", "Basic Programming", "Computer Applications"].map(
                (skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 rounded-full text-white text-sm font-semibold bg-green-700 shadow-md shadow-green-700/70
                               transition-transform duration-300 hover:scale-110"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
