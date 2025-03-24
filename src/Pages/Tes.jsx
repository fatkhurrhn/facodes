import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Data proyek (contoh)
const projects = [
  {
    id: 1,
    title: "Aplikasi Catatan Sederhana",
    category: "Web",
    description: "Aplikasi web untuk mencatat catatan pribadi.",
    imageUrl: "https://kantata.marketing/wp-content/uploads/2021/08/project-managemenr-goals.jpg",
    link: "https://github.com/username/project1",
    demoLink: "https://demo.project1.com",
    technologies: ["React", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Game Platformer 2D",
    category: "Game",
    description: "Game platformer 2D sederhana menggunakan Unity.",
    imageUrl: "https://kantata.marketing/wp-content/uploads/2021/08/project-managemenr-goals.jpg",
    link: "https://github.com/username/project2",
    demoLink: "https://demo.project2.com",
    technologies: ["Unity", "C#"],
  },
  {
    id: 3,
    title: "Aplikasi Cuaca Mobile",
    category: "Mobile",
    description: "Aplikasi mobile untuk menampilkan informasi cuaca.",
    imageUrl: "https://kantata.marketing/wp-content/uploads/2021/08/project-managemenr-goals.jpg",
    link: "https://github.com/username/project3",
    demoLink: "https://demo.project3.com",
    technologies: ["React Native", "Expo"],
  },
  // Tambahkan proyek-proyek Anda di sini
];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["Semua", "Web", "Game", "Mobile"];

  const filteredProjects = projects.filter((project) => {
    const categoryMatch =
      selectedCategory === "Semua" || project.category === selectedCategory;
    const searchMatch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="bg-[#141417] min-h-screen text-gray-900 dark:text-white transition-colors duration-300 relative">
      <Navbar />
      <section className="max-w-6xl mx-auto px-5 pt-20">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Proyek Saya</h2>
          <p className="text-gray-400">
            Berikut adalah beberapa proyek yang telah saya kerjakan.
          </p>
        </div>

        {/* Filter dan Pencarian */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex flex-wrap space-x-2 mb-4 md:mb-0">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full m-1 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Cari proyek..."
            className="w-full md:w-64 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Daftar Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap mb-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 rounded-full px-2 py-1 text-xs mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full px-4 py-2 text-sm"
                >
                  <i className="ri-github-fill mr-2"></i>
                  GitHub
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-200 hover:bg-green-300 text-green-700 rounded-full px-4 py-2 text-sm"
                  >
                    <i className="ri-external-link-line mr-2"></i>
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* hr */}
        <div className="h-[1px] my-10 bg-gradient-to-r from-gray-300 dark:from-[#252529] via-zinc-600 to-gray-300 dark:to-[#252529] max-w-lg mx-auto"></div>
      </section>
      <Footer />
    </div>
  );
}