"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

// Your shuffle function
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const projectsData = [
  {
    id: 1,
    title: "Ecommerce website",
    description: "A fully-featured e-commerce site",
    image: "/images/projects/project-1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mrkuldeep2002/Trends-lyfe",
    previewUrl: "https://trendslyfe.netlify.app/",
  },
  {
    id: 2,
    title: "Vite-Portfolio",
    description: "A personal portfolio site built with Vite showcasing various projects",
    image: "/images/projects/project-10.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mrkuldeep2002/Vite-Portfolio",
    previewUrl: "https://kuldeepsinghrathore.netlify.app",
  },
  {
    id: 6,
    title: "Dice Game",
    description: "A fun dice-rolling game with a user-friendly interface",
    image: "/images/projects/project-6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Mrkuldeep2002/DiceGame",
    previewUrl: "https://dice-rollling-game.netlify.app",
  },
  {
    id: 3,
    title: "Digital Clock",
    description: "A real-time digital clock with a sleek design.",
    image: "/images/projects/project-2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Mrkuldeep2002/Digital-clock",
    previewUrl: "https://1digital-clock.netlify.app",
  },
  {
    id: 4,
    title: "3D Building",
    description: "An interactive 3D model of a building showcasing advanced graphics",
    image: "/images/projects/project-3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mrkuldeep2002/3D-building",
    previewUrl: "https://3dbuilding.netlify.app",
  },
  {
    id: 5,
    title: "Weather App",
    description: "A mobile app for checking real-time weather forecasts",
    image: "/images/projects/project-4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Mrkuldeep2002/Wheather-App",
    previewUrl: "https://check-wheather.netlify.app",
  },
 
  {
    id: 7,
    title: "Crypto Dashboard Design",
    description: "A dashboard displaying cryptocurrency data and trends",
    image: "/images/projects/project-7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mrkuldeep2002/CyrptoDashboard",
    previewUrl: "https://simplecyrpto-dashboard.netlify.app",
  },
  {
    id: 8,
    title: "Ikkat Bags",
    description: "A site showcasing and selling traditional bags",
    image: "/images/projects/project-8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mrkuldeep2002/ikkat-bag",
    previewUrl: "https://ikkatbag.netlify.app",
  },
  {
    id: 9,
    title: "Rock Paper Scissors Game",
    description: "An interactive version of the classic rock-paper-scissors game",
    image: "/images/projects/project-9.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Mrkuldeep2002/Rock-paper-scissor",
    previewUrl: "https://gamerockscissorpaper.netlify.app",
  },
];


const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  // const shuffledProjects = shuffleArray([...projectsData]);
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;