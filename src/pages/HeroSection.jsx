import { Download } from "lucide-react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import pic from '../assets/profilePic.jpeg';
import { MdFacebook } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router";

const HeroSection = () => {
  return (
    <div  id="hero" className="min-h-screen flex items-center justify-center px-4">
      {/* Border wrapper ONLY for hero content */}
      <div
        className="flex flex-col lg:flex-row lg:justify-between items-center md:px-12 lg:px-24 gap-8
          rounded-2xl shadow-2xl p-6
          transition-colors duration-300
          max-w-7xl w-full"
        style={{
          backgroundColor: "hsl(var(--card))",
          border: "1px solid hsl(var(--border))",
        }}
      >
        {/* Text Section */}
        <section
         
          className="relative flex flex-col items-start justify-center px-6 py-8"
          style={{ minHeight: "500px" }}
        >
          <div className="container max-w-4xl mx-auto text-left z-10">
            <h1 className="text-3xl font-bold text-foreground">
              <p className="opacity-0 animate-fade-in mb-4">Hello!</p>
              <span className="opacity-0 animate-fade-in">I'm</span>
              <span className="opacity-0 animate-fade-in-delay-1 text-[#8c52ff] ">
                {" "}
                Saria
              </span>
              <span className="opacity-0 animate-fade-in-delay-2 text-gradient ">
                {" "}
                Khatun
              </span>
            </h1>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-8 text-foreground">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "React.js Lover",
                  2000,
                  "JavaScript Explorer",
                  2000,
                  "Next.js Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className={`block mt-2`}
                style={{
                  background: "linear-gradient(90deg, #8c52ff, #ff7ee2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              />
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-4 mb-4 text-foreground">
              I build dynamic web apps from front to back with the MERN stack,
              focusing on clean code and engaging interfaces that enhance user
              interaction.
            </p>
            <div className="my-8 flex gap-4 items-center">
              <NavLink to="https://www.facebook.com/Saria.Khatun.03">
                <MdFacebook className="social-icon hover:text-[#8c52ff]" size={30} />
              </NavLink>
              <NavLink to="https://x.com/sariakhatun6">
                <FaTwitter className="social-icon hover:text-[#8c52ff]" size={30} />
              </NavLink>
              <NavLink to="https://github.com/sariakhatun">
                <FaGithub className="social-icon hover:text-[#8c52ff]" size={30} />
              </NavLink>
              <NavLink to="https://www.linkedin.com/in/saria-khatun/">
                <FaLinkedin className="social-icon hover:text-[#8c52ff]" size={30} />
              </NavLink>
            </div>
            <button
              className="btn-xs flex items-center md:btn-sm lg:btn-sm bg-gradient-to-r from-[#8c52ff] to-[#b37aff]
      text-white font-medium
      px-6 py-2 rounded-full
      transition-all duration-300
      hover:from-[#9c6cff] hover:to-[#c89dff]
      active:from-[#6f35d8] active:to-[#a67aff]"
            >
              <Download size={18} />
              Resume
            </button>
          </div>
        </section>

        {/* Image Section */}
        <section
          className="image-shadow p-3 lg:p-1 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 w-[320px] h-[320px] lg:w-[360px] lg:h-[300px]"
         
        >
          <img
            src={pic}
            alt="Saria Khatun"
            className="h-[300px] w-[300px] rounded-full object-cover"
          />
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
