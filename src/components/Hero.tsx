// src/components/Hero.tsx
"use client";

import React from 'react';
import SkillSticker from './SkillSticker';
import Image from 'next/image'; // Importe o componente de Imagem do Next.js
import { motion } from 'framer-motion'; // Precisamos do motion para animar a foto

const Hero = () => {
  const gridStyle = {
    backgroundImage:
      'linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
  };

  const skills = [
    { text: 'Python & SQL', className: 'bg-yellow-400 top-[20%] left-[15%] md:top-[25%] md:left-[20%]' },
    { text: 'GCP', className: 'bg-blue-400 top-[60%] right-[10%] md:top-[55%] md:right-[18%]' },
    { text: 'Power BI & Looker', className: 'bg-pink-400 top-[25%] right-[12%] md:top-[30%] md:right-[22%]' },
    { text: 'ETL & Data Modeling', className: 'bg-teal-400 bottom-[20%] left-[10%] md:bottom-[25%] md:left-[25%]' },
    { text: 'Streamlit', className: 'bg-orange-400 bottom-[15%] right-[25%] md:bottom-[20%] md:right-[30%]' },
  ];

  return (
    <section
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-4"
      style={gridStyle}
    >
      <div className="absolute inset-0 z-0">
        {skills.map((skill) => (
          <SkillSticker key={skill.text} text={skill.text} className={skill.className} />
        ))}
      </div>
      
      <div className="relative z-10 text-center pointer-events-none">
        {/* SUA FOTO VAI AQUI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/profile.jpeg" // O Next.js encontra a imagem na pasta /public
            alt="Foto de Leonardo Filho"
            width={128} // 128 pixels de largura
            height={128} // 128 pixels de altura
            className="mx-auto mb-6 h-32 w-32 rounded-full object-cover border-4 border-neutral-700 shadow-lg"
            priority // Ajuda a carregar a imagem principal mais rápido
          />
        </motion.div>

        <h1 className="text-5xl font-extrabold uppercase tracking-tighter sm:text-6xl md:text-8xl lg:text-9xl">
          Analista de Dados
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300 md:text-xl">
          Especialista em transformar dados em insights com Python, SQL e GCP, com forte base em ETL e visualização de dados.
        </p>
        <a 
          href="/Analista de dados Jr.docx"
          download
          className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-black transition-transform hover:scale-105 pointer-events-auto"
        >
          Baixar Currículo
        </a>
      </div>
    </section>
  );
};

export default Hero;