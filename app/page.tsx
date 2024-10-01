"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaServer,
  FaJs,
} from "react-icons/fa";
import { Briefcase, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  url: string;
  webUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "StayHub - A Modern Platform for Home Listings and Rentals",
    description: `

    StayHub is a sleek, user-friendly web application that allows users to easily find accommodations or list their homes for rent. The platform provides a seamless experience, whether you're a traveler looking for a place to stay or a homeowner interested in renting out your property.Built with a powerful tech stack that includes Next.js, React, Tailwind CSS for the frontend, and Django with Django REST Framework for the backend, Its core features include secure authentication via Google, mobile-first design, and a simple yet effective interface to browse or list properties.

    `,
    technologies: [
      "React",
      "nextjs",
      "django",
      "postgresql",
      "tailwind",
      "Django REST",
    ],
    url: "/stayhub.png",
    webUrl: "https://stayhub.vercel.app/",
  },

  {
    id: 1,
    title: "InfoStream - Stay Updated with the Latest News",
    description: `InfoStream is a modern news aggregation platform that brings users the latest news from various categories such as technology, business, and sports. By leveraging The Guardian API, InfoStream ensures that users have access to up-to-date articles in real time. The platform also features user authentication, allowing individuals to sign up, log in, and log out seamlessly, with secure backend management handled by Django.`,
    technologies: ["React", "nextjs", "django", "postgresql"],
    url: "/infostream.png",
    webUrl: "https://infostream-one.vercel.app/",
  },

  {
    id: 2,
    title: "GizmoHub - Your One-Stop Electronics Store",
    description: `

    GizmoHub is a modern, comprehensive e-commerce platform focused on selling electronic products. It provides a seamless user experience through an intuitive interface, with the ability to browse, add products to a cart, and securely checkout. The platform also includes an admin dashboard for efficient product and order management.GizmoHub leverages cutting-edge technologies such as Next.js, Tailwind CSS, and Django REST Framework, offering a full-stack solution that's optimized for performance and scalability.
    
    `,
    technologies: ["React", "nextjs", "django", "postgresql", "zustand"],
    url: "/gizmohub.png",
    webUrl: "https://gizmo-hub-chi.vercel.app/",
  },
  {
    id: 3,
    title: "ScreenScape 🎬 - Your Go-To Movie Discovery Platform",
    description:
      "ScreenScape is a dynamic and modern web application designed for movie enthusiasts to explore and discover their favorite films. With a sleek and responsive user interface built using Next.js and Tailwind CSS, and a powerful backend powered by Django, ScreenScape offers an enjoyable and seamless experience for browsing movie collections, searching for films, and viewing detailed movie information.",
    technologies: ["React", "nextjs", "django", "postgresql"],
    url: "/screenscape.png",
    webUrl: "https://screen-scape.vercel.app/",
  },
];

interface Skill {
  name: string;
  icon: JSX.Element;
}

// Skills data
const skills: Skill[] = [
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Next.js", icon: <FaReact className="text-black" /> }, // Adjust to your needs
  { name: "Tailwind CSS", icon: <FaCss3Alt className="text-teal-400" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "Django", icon: <FaServer className="text-green-500" /> }, // Using FaServer as a placeholder for Django
];

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between">
          <Link href="/" className="text-xl font-bold">
            Osama Abdullahi
          </Link>
          <div className="flex space-x-4">
            <Link href="#projects" className="hover:text-gray-400">
              Projects
            </Link>
            <Link href="#skills" className="hover:text-gray-400">
              Skills
            </Link>
            <Link
              href="https://github.com/Osamaabdullahi"
              target="_blank"
              className="hover:text-gray-400"
            >
              <FaGithub className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/osama-abdullahi-173025281"
              target="_blank"
              className="hover:text-gray-400"
            >
              <FaLinkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:osamaabdullahijb@gmail.com"
              className="hover:text-gray-400"
            >
              <FaEnvelope className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center h-screen pb-10 bg-gradient-to-b from-gray-900 to-gray-800">
        <h1 className="text-4xl font-bold mt-12">Welcome to My Portfolio</h1>
        <p className="mt-4 text-center max-w-2xl">
          I am a web developer passionate about building clean, responsive, and
          efficient web applications. With experience in frontend and backend
          development, I bring your ideas to life through modern technologies
          like React, Next.js, Tailwind CSS, and Django.
        </p>

        <Link
          href="#projects"
          className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          View My Work
        </Link>

        <div className="flex flex-wrap justify-center space-x-4 mt-10">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center mb-4">
              {skill.icon}
              <span className="ml-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </main>

      <section id="projects" className="mb-12 py-10 px-4 lg:px-16">
        <h2 className="text-3xl font-extrabold text-indigo-400 mb-4 flex items-center py-4">
          <Briefcase className="mr-2" /> Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 shadow rounded-lg overflow-hidden flex flex-col lg:flex-row"
            >
              <div className="relative w-full lg:w-1/2 h-96 lg:h-auto">
                <img src={project.url} />
              </div>
              <div className="px-4 py-5 sm:p-6 w-full lg:w-1/2">
                <h3 className="text-lg font-medium text-indigo-300">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  {project.description}
                </p>
                <div className="mt-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-indigo-200 mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-indigo-400 hover:text-indigo-300"
                >
                  Visit Site <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>
        <form
          action="https://formspree.io/f/myzgrody"
          method="POST"
          className="bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 text-gray-300"
                placeholder="Your Name"
                name="username"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 text-gray-300"
                placeholder="you@example.com"
                name="email"
              />
            </div>
          </div>
          <div className="mt-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 text-gray-300"
              rows={4}
              placeholder="Your message here..."
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="max-w-7xl mx-auto text-center">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
