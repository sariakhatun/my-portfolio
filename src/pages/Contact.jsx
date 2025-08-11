import React from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { div } from "framer-motion/client";

const Contact = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const bgColor = "hsl(var(--card))";
  const borderColor = "hsl(var(--border))";
  const textColor = "var(--foreground)";
  const accentGradient = "linear-gradient(90deg, #8c52ff, #ff7ee2)";
  const inputBorder = "hsl(var(--border))";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(() => {
        Swal.fire({
          title: "Email Sent Successfully!",
          icon: "success",
          confirmButtonColor: "#8c52ff",
        });
        e.target.reset();
      })
      .catch(() => {
        Swal.fire({
          title: "Oops...",
          text: "Something went wrong, please try again later.",
          icon: "error",
          confirmButtonColor: "#8c52ff",
        });
      });
  };

  return (
   <div  id="contact" className="max-w-7xl mx-auto px-6 py-12">
     <section
     
      className="scroll-mt-[100px] py-16 md:px-10 rounded-2xl shadow-2xl px-6 transition-colors duration-300 max-w-7xl mx-auto w-full"
      style={{ backgroundColor: bgColor, border: `1px solid ${borderColor}` }}

    >
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Get In <span className="text-[#8c52ff]">Touch</span>
        </h2>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Info */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 text-foreground"
        >
             
          <p
            className="text-sm font-semibold tracking-widest text-left "
            style={{
              background: accentGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ___Let’s Connect
          </p>
          <h2 className="text-2xl font-extrabold text-foreground max-w-md text-left">
            Reach out & <span className=" text-[#8c52ff] ">Start Something Amazing</span>
          </h2>
          <div className="space-y-5 text-lg">
            <div className="flex items-center gap-4">
              <FiMail size={24} style={{ color: "#8c52ff" }} />
              <a
                href="mailto:sariajuiit@gmail.com"
                className="hover:underline"
              >
                sariajuiit@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <SiWhatsapp size={24} style={{ color: "#25D366" }} />
              <a
                href="https://wa.me/8801314381390"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                +8801795766184 (WhatsApp)
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FiPhone size={24} style={{ color: "#8c52ff" }} />
              <span>+8801795766184 (Phone)</span>
            </div>
            <div className="flex items-center gap-4">
              <FiMapPin size={24} style={{ color: "#8c52ff" }} />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ color: textColor }}
        >
          <h3
            className="text-3xl font-bold mb-6"
            style={{
              background: accentGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Send a Message
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              className="px-4 py-3 rounded-md bg-transparent border"
              style={{ borderColor: inputBorder, color: textColor }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              required
              className="px-4 py-3 rounded-md bg-transparent border"
              style={{ borderColor: inputBorder, color: textColor }}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              required
              className="px-4 py-3 rounded-md bg-transparent border md:col-span-2"
              style={{ borderColor: inputBorder, color: textColor }}
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message *"
            required
            className="w-full px-4 py-3 rounded-md bg-transparent border resize-none"
            style={{ borderColor: inputBorder, color: textColor }}
          ></textarea>

          <button
            type="submit"
            className="flex items-center gap-2 justify-center bg-gradient-to-r from-[#8c52ff] to-[#ff7ee2] hover:from-[#9c6cff] hover:to-[#c89dff] text-white font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            Send
            <FiSend />
          </button>
        </motion.form>
      </div>
    </section>
   </div>
  );
};

export default Contact;
