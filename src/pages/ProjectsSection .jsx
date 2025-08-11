import React, { useState } from "react";
import img1 from "../assets/petnect.png";
import img2 from "../assets/restaurant.png";
import img3 from "../assets/roommate.png";
import { FiCheckCircle, FiAlertTriangle, FiStar } from "react-icons/fi";

const projects = [
  {
    id: 1,
    image: img1,
    name: "PetNect (Pet Adoption Center)",
    description:
      "PetNect is a modern, responsive web application that helps users adopt pets, create donation campaigns, and connect with other pet lovers. The platform offers smooth adoption request management, donation tracking, and admin moderation features.",
    tech: ["React", "React-Router", "Firebase Auth", "TailwindCSS", "Shadcn UI", "Node.js", "MongoDB", "Framer Motion", "Stripe"],
    liveLink: "https://b11a12-sariakhatun.web.app/",
    githubLink: "https://github.com/sariakhatun/pet-adoption-center",
    features: [
      "Pet adoption request management",
      "Donation campaign creation and tracking",
      "Admin moderation and user management",
      "Responsive UI with TailwindCSS and Shadcn UI",
      "Payment integration with Stripe",
    ],
    challenges: "Handling real-time updates, secure authentication, and smooth UX.",
    futurePlans: "Add mobile app support and advanced donation tracking.",
  },
  {
    id: 2,
    image: img2,
    name: "Restaurant Management Center",
    description:
      "A full-stack Restaurant Management system built with the MERN Stack (MongoDB, Express.js, React.js, Node.js), enhanced with Firebase Authentication and JWT-based private route protection. It offers customers a smooth experience exploring and ordering food, while restaurant owners can manage their menu items efficiently.",
    tech: ["React", "React-Router", "Firebase Auth", "TailwindCSS", "Daisy UI", "Node.js", "MongoDB"],
    liveLink: "https://b11a11-sariakhatun.web.app",
    githubLink: "https://github.com/sariakhatun/restaurant-management-system",
    features: [
      "Menu and inventory management",
      "Customer order processing",
      "JWT-secured private routes",
      "Firebase Authentication integration",
      "Responsive design with TailwindCSS and Daisy UI",
    ],
    challenges: "JWT integration and managing real-time order updates.",
    futurePlans: "Add reporting dashboard and multi-language support.",
  },
  {
    id: 3,
    image: img3,
    name: "Roommies",
    description:
      "Roommate Finder Website is a responsive and user-friendly platform that helps users find compatible roommates and available rooms quickly. Users can browse listings by location and preferences, post their own rooms, and securely manage their listings. The app features Firebase Authentication and protected routes to safeguard user data.",
    tech: ["React", "React-Router", "Firebase Auth", "TailwindCSS", "Daisy UI", "Node.js", "MongoDB"],
    liveLink: "https://b11a10-sariakhatun.web.app/",
    githubLink: "https://github.com/sariakhatun/roommate-finder-website",
    features: [
      "Post and browse roommate listings",
      "User authentication and protected routes",
      "Search filters by location and preferences",
      "Secure listing management",
      "Responsive design with TailwindCSS and Daisy UI",
    ],
    challenges:
      "Managing real-time updates and data syncing with MongoDB backend. Implementing secure authentication and authorization with Firebase. Handling complex booking and user interaction workflows.",
    futurePlans:
      "Adding advanced search and filtering options for roommate listings. Introducing chat functionality between users. Developing a mobile-friendly responsive design and mobile app support.",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 pb-12">
      <div
        className="py-12 mt-12 rounded-2xl shadow-2xl px-6 transition-colors duration-300 max-w-7xl mx-auto w-full"
        style={{
          backgroundColor: "hsl(var(--card))",
          border: "1px solid hsl(var(--border))",
        }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          My <span className="text-[#8c52ff]">Projects</span>
        </h2>

        <div className="space-y-10 max-w-7xl mx-auto">
          {projects.map(({ id, image, name, description, tech, liveLink, githubLink }) => (
            <div
              key={id}
              className="rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row gap-8 hover:shadow-xl transition-shadow duration-300 p-8"
            >
              <img
                src={image}
                alt={name}
                className="w-full lg:w-72 h-52 lg:h-auto object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
              />
              <div className="space-y-4 text-left flex flex-col justify-between ">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {name}
                  </h3>
                  <p className="text-foreground leading-relaxed">{description}</p>
                </div>

                <div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4 justify-start">
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2 rounded-md transition"
                    >
                      Live Link
                    </a>
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-md transition"
                    >
                      GitHub
                    </a>
                    <button
                      onClick={() => setSelectedProject(projects.find(p => p.id === id))}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2 rounded-md transition"
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    {/* Modal */}
{selectedProject && (
  <div
    className="fixed inset-0 mt-16 bg-opacity-60 flex items-center justify-center p-6 z-50"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="bg-white dark:bg-gray-900 rounded-xl max-w-3xl w-full p-8 relative overflow-y-auto max-h-[90vh] shadow-2xl"
      onClick={(e) => e.stopPropagation()}
      style={{ scrollBehavior: "smooth" }}
    >
      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-2xl font-bold"
        aria-label="Close modal"
      >
        &times;
      </button>

      <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {selectedProject.name}
      </h3>
      <img
        src={selectedProject.image}
        alt={selectedProject.name}
        className="rounded-lg mb-6 object-cover w-full max-h-64"
      />
      <p className="mb-6 text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
        {selectedProject.description}
      </p>

      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-purple-700 dark:text-purple-300">
        <FiStar size={22} />
        Technologies Used:
      </h4>
      <div className="flex flex-wrap gap-3 mb-6">
        {selectedProject.tech.map((tech, idx) => (
          <span
            key={idx}
            className="bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 text-xs font-semibold px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-600 dark:text-green-400">
        <a
          href={selectedProject.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6 underline hover:no-underline"
        >
          Live Site
        </a>
        <a
          href={selectedProject.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          GitHub Repo
        </a>
      </h4>

      {/* Features Section */}
      {selectedProject.features && (
        <section className="mb-6 p-4 rounded-lg bg-green-50 dark:bg-green-900 shadow-md">
          <h4 className="text-lg font-semibold mb-3 flex items-center gap-2 text-green-800 dark:text-green-200">
            <FiCheckCircle size={20} />
            Features:
          </h4>
          <ul className="list-disc list-inside text-green-900 dark:text-green-300 space-y-1 leading-relaxed">
            {selectedProject.features.map((feature, i) => (
              <li key={i} className="hover:text-green-700 dark:hover:text-green-400 transition-colors cursor-default">
                {feature}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Challenges Section */}
      <section className="mb-6 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900 shadow-md">
        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2 text-yellow-700 dark:text-yellow-300">
          <FiAlertTriangle size={20} />
          Challenges Faced:
        </h4>
        <p className="text-yellow-900 dark:text-yellow-300 whitespace-pre-line leading-relaxed">
          {selectedProject.challenges}
        </p>
      </section>

      {/* Future Plans Section */}
      <section className="mb-6 p-4 rounded-lg bg-indigo-50 dark:bg-indigo-900 shadow-md">
        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2 text-indigo-800 dark:text-indigo-300">
          <FiStar size={20} />
          Potential Improvements & Future Plans:
        </h4>
        <p className="text-indigo-900 dark:text-indigo-300 whitespace-pre-line leading-relaxed">
          {selectedProject.futurePlans}
        </p>
      </section>
    </div>
  </div>
)}
    </section>
  );
};

export default ProjectsSection;
