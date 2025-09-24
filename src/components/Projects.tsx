// src/components/Projects.tsx
"use client";

import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    // Adicionamos um id para o smooth scroll funcionar depois
    <section id="projects" className="w-full bg-black py-20 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-extrabold uppercase tracking-tighter md:text-5xl">
          Projetos em Destaque
        </h2>
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;