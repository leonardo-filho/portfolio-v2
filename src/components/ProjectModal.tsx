// src/components/ProjectModal.tsx
"use client";

import { Project } from "@/data/projects";
import React, { useEffect, useState } from "react";
import Image from "next/image"; // Usando o componente otimizado do Next.js
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi"; // Ícones

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) setCurrentIndex(0); // Reseta a imagem ao abrir
  }, [isOpen]);
  
  if (!isOpen || !project) return null;

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-neutral-900 border border-neutral-800 rounded-lg shadow-2xl w-full max-w-5xl max-h-[90vh] p-6 relative overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-400 hover:text-white"><FiX size={24} /></button>
        <h2 className="text-2xl font-bold mb-4 text-white">{project.title}</h2>

        {/* Descrição Longa com HTML */}
        <div className="prose prose-invert prose-neutral mb-6" dangerouslySetInnerHTML={{ __html: project.longDescription }} />
        
        {/* Galeria de Imagens */}
        <div className="relative flex flex-col items-center">
            <Image src={project.images[currentIndex].src} alt={project.images[currentIndex].caption} width={1200} height={675} className="rounded-md object-contain max-h-[400px]" />
            <div className="flex gap-4 items-center mt-2">
                <button onClick={prevImage}><FiChevronLeft size={20} /></button>
                <span className="text-sm text-neutral-400">{project.images[currentIndex].caption}</span>
                <button onClick={nextImage}><FiChevronRight size={20} /></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;