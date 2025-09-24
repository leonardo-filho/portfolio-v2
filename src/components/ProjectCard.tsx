// src/components/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import Link from "next/link"; // Importe o Link do Next.js

interface ProjectCardProps {
  project: Project;
}

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div variants={cardVariants}>
      <Link href={`/projects/${project.id}`} className="block h-full">
        <div className="flex h-full cursor-pointer flex-col justify-between rounded-lg border border-neutral-800 bg-neutral-900/50 p-6 shadow-lg backdrop-blur-sm transition-transform hover:-translate-y-2">
          <div>
            <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
            <p className="mb-4 text-neutral-400">{project.shortDescription}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tag) => (
                <span key={tag} className="rounded-full bg-teal-900/50 px-3 py-1 text-xs font-medium text-teal-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 text-sm font-semibold text-white">Ver Detalhes →</div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;