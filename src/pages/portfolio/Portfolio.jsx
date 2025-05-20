import React from "react";
import project1Image from "../../assets/projectImg1.png";
import project2Image from "../../assets/projectImg2.jpeg";
import project3Image from "../../assets/projectImg3.jpeg";
import {
  FaJava,
  FaPhp,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

import styles from "./Portfolio.module.css"; // Modular CSS Import

// 💡 Reusable Project Component
const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <img src={project.image} alt={project.name} className={styles.cardImg} />
      <div className={styles.cardBody}>
        <h2 className={styles.cardTitle}>{project.name}</h2>
        <p className={styles.cardDesc}>{project.description}</p>
        <div className={styles.cardIcons}>
          {project.techStack.map((icon, idx) => (
            <span key={idx} className={styles.techIcon}>
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      name: "Campus Recruitment Portal",
      description:
        `Designed a Campus Recruitment Portal to streamline student job applications and recruitment management.

Key Features:
• Student Job Applications
• Recruitment Management with admin controls
• Role-Based Login with Spring Security

Impact: Simplified campus hiring and improved recruitment efficiency.`,
      image: project1Image,
      techStack: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaJava />, <FaDatabase />],
    },
    {
      name: "Tourism Management System",
      description:
       `Developed a web-based system for managing customers and destination data.

Key Features:
• Dynamic UI for data input and retrieval
• Trip booking system
• Role-Based Access Control

Impact: Enhanced service efficiency for tourism businesses.`,
      image: project2Image,
      techStack: [<FaHtml5 />, <FaCss3Alt />, <FaPhp />, <FaDatabase />, <FaJsSquare />],
    },
    {
      name: "Student Grading System",
      description:
       `Built with Java and Spring Boot to manage student grades.

Key Features:
• Grade entry with Thymeleaf UI
• Automated average calculations
• PDF/CSV report exports
• Role-based secure login system

Impact: Reduced instructor workload by automating repetitive grading tasks.`,
      image: project3Image,
      techStack: [<FaJava />, <SiSpringboot />, <FaDatabase />],
    },
  ];

  return (
    <div className={styles.portfolioContainer}>
      <h1 className={styles.portfolioTitle}>My Projects</h1>
      <div className={styles.cardGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

