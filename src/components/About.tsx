// src/components/About.tsx
"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full py-20 px-4 md:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 text-center text-4xl font-extrabold uppercase tracking-tighter md:text-5xl">
            Sobre Mim
          </h2>
          {/* TEXTO MELHORADO ABAIXO */}
          <div className="prose prose-invert prose-neutral max-w-none text-lg text-neutral-300">
            <p>
              Minha jornada na tecnologia começou com a <strong>Engenharia da Computação</strong>, onde desenvolvi uma mentalidade estruturada para resolver problemas complexos. Hoje, como Analista de Dados, aplico essa mesma lógica de engenharia para uma finalidade clara: <strong>decodificar a história que os dados contam</strong> e transformá-la em uma vantagem competitiva para o negócio.
            </p>
            <p>
              Meu foco é construir soluções de ponta a ponta. Seja desenvolvendo pipelines de dados automatizados na <strong>Google Cloud Platform</strong>, criando modelos preditivos com <strong>Python</strong> ou projetando dashboards interativos em <strong>Power BI</strong> e <strong>Streamlit</strong>, minha paixão é entregar ferramentas que não apenas informam, mas capacitam equipes a tomar decisões mais inteligentes e orientadas por evidências.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;