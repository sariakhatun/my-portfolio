import React from "react";
import pic from '../assets/profilePic.jpeg';
import { Download } from "lucide-react";

const AboutMe = () => {
  return (
    <div id="about" className=" flex items-center justify-center px-4 mt-12 md:mt-0 lg:mt-0 pb-12">
      {" "}
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between items-center md:px-12 lg:px-24 gap-8
          rounded-2xl shadow-2xl px-6
          transition-colors duration-300
          max-w-7xl w-full py-8"
        style={{
          backgroundColor: "hsl(var(--card))",
          border: "1px solid hsl(var(--border))",
        }}>
        {/* text section */}
         <section
         
          className="relative flex flex-col items-start justify-center px-6"
          style={{ minHeight: "500px" }}
        >
          <div className="container max-w-4xl mx-auto text-left z-10">
            <h1 className="text-3xl font-bold text-foreground">
              <p className="opacity-0 animate-fade-in mb-4">About <span className="text-[#8c52ff]"> Me</span></p>
              
            </h1>
           
            <p className=" text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-4 mb-4 text-foreground">
             I’m <span className="text-[#8c52ff]">Saria</span>, a passionate MERN stack developer who loves building dynamic and responsive web applications. I specialize in creating clean, user-friendly interfaces and seamless backend systems. My journey in web development is driven by curiosity and creativity, and my goal is to become a full-stack developer in the future. I’m always eager to learn new technologies, solve problems, and craft digital experiences that leave a lasting impact.
            </p>
           
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
        {/* img section */}
        <section className="image-shadow p-3 lg:p-1 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 w-[320px] h-[320px] lg:w-[360px] lg:h-[300px]">
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

export default AboutMe;
