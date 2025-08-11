import React, { useEffect, useState } from "react";
import logo from "../assets/logo (2).png";
import { cn } from "../utilites/utils";
import ThemeToggle from "./ThemeToggle";
import { Download } from "lucide-react";

let navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  let [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  <nav
    className="fixed top-0 left-0 right-0 z-100 flex justify-center transition-all duration-300"
  >
    {/* Container to align navbar width with hero section */}
    <div
      className="max-w-7xl mx-auto w-full md:px-8 lg:px-12 py-2 border-b shadow-md"
      style={{
        backgroundColor: "hsl(var(--card))",
        borderColor: "hsl(var(--border))"
      }}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-50 mt-3 w-40 p-2 shadow"
              style={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
              }}
            >
              <div>
                <div className="flex justify-center">
                  <div className="flex flex-col space-y-2">
                    {navItems.map((item, key) => (
                      <a
                        key={key}
                        href={item.href}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300 font-bold"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div className="flex items-center gap-1 md:gap-2 lg:gap-2 -ml-3 lg:ml-0">
            <img
              src={logo}
              alt=""
              className="h-8 w-8 lg:h-12 lg:w-12 rounded-full bg-background/80 "
            />
            <a className="font-bold text-primary flex items-center" href="#hero">
              <span className="relative z-10 text-base md:text-xl lg:text-2xl">
                <span className="text-glow text-foreground ">Saria</span>Creates
              </span>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex justify-center">
            <div className="hidden md:flex space-x-8 ">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-bold"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="navbar-end mr-6 lg:mr-0">
          <ThemeToggle />
          <div className="flex ">
            <a
              className="btn-xs flex items-center md:btn-sm lg:btn-sm bg-gradient-to-r from-primary to-[#b37aff]
text-white font-medium
px-6 py-2 rounded-full
transition-all duration-300
hover:from-[#9c6cff] hover:to-[#c89dff]
active:from-[#6f35d8] active:to-[#a67aff]"
              href="/path-to-your-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

};

export default Navbar;
