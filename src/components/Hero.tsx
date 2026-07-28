// src/components/Hero.tsx
"use client";

import React from 'react';
import SkillSticker from './SkillSticker';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const skills = [
    { text: 'Python & SQL', className: 'bg-yellow-400 top-[20%] left-[15%] md:top-[25%] md:left-[20%]' },
    { text: 'BigQuery & GCP', className: 'bg-blue-400 top-[60%] right-[10%] md:top-[55%] md:right-[18%]' },
    { text: 'dbt & LookML', className: 'bg-pink-400 top-[25%] right-[12%] md:top-[30%] md:right-[22%]' },
    { text: 'Pipeline Reliability', className: 'bg-teal-400 bottom-[20%] left-[10%] md:bottom-[25%] md:left-[25%]' },
    { text: 'Next.js & TypeScript', className: 'bg-orange-400 bottom-[15%] right-[25%] md:bottom-[20%] md:right-[30%]' },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-4"
    >
      <ParticleBackground />

      <div className="absolute inset-0 z-10">
        {skills.map((skill) => (
          <SkillSticker key={skill.text} text={skill.text} className={skill.className} />
        ))}
      </div>
      
      <div className="relative z-20 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/images/profissional.jpg"
            alt="Leonardo Filho"
            width={128}
            height={128}
            className="mx-auto mb-6 h-32 w-32 rounded-full object-cover border-4 border-neutral-700 shadow-lg"
            priority
            quality={100}
          />
        </motion.div>

        <h1 className="text-4xl font-extrabold uppercase tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
          Analytics Engineer
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-300 md:text-xl">
          I build and operate production data pipelines on Google Cloud, and turn
          them into dashboards executives actually read. BigQuery, Python, dbt and
          Next.js, end to end.
        </p>
        <p className="mt-3 text-sm text-neutral-500">
          Belem, Brazil · Available for remote work · GMT-3 (US-compatible)
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/cv-leonardo-filho.pdf"
            download
            className="inline-block rounded-full bg-white px-6 py-3 font-semibold text-black transition-transform hover:scale-105 pointer-events-auto"
          >
            Download CV
          </a>
          <a
            href="#experience"
            className="inline-block rounded-full border border-neutral-700 px-6 py-3 font-semibold text-neutral-200 transition-transform hover:scale-105 hover:text-white pointer-events-auto"
          >
            See experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;