// src/components/Contact.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCopy } from "react-icons/fi";

const Contact = () => {
  // E-mail que será copiado
  const emailAddress = "leonardofilho.work@gmail.com";

  // 1. Criamos um "estado" para controlar se o alerta de "copiado" está visível
  const [isCopied, setIsCopied] = useState(false);

  // 2. Função que será chamada ao clicar no botão de copiar
  const handleCopyEmail = () => {
    // Usa a API do navegador para copiar o texto
    navigator.clipboard.writeText(emailAddress).then(() => {
      // Se a cópia for bem-sucedida:
      setIsCopied(true); // Mostra o alerta

      // Esconde o alerta automaticamente após 3 segundos
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    });
  };

  return (
    <section id="contact" className="w-full bg-neutral-950 py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold uppercase tracking-tighter md:text-5xl">
          Let&apos;s talk
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-neutral-400">
          I am open to remote roles in data engineering and analytics engineering.
          Based in Belem, Brazil (GMT-3), which overlaps a full working day with the
          US and most of the European morning. If you think there is a fit, I would
          like to hear about it.
        </p>
        
        {/* 3. Container para os botões */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${emailAddress}`}
            className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-black transition-transform hover:scale-105"
          >
            Send an email
          </a>

          {/* Botão de Copiar */}
          <button
            onClick={handleCopyEmail}
            className="rounded-full border border-neutral-700 bg-neutral-800/50 p-4 text-neutral-300 transition-transform hover:scale-105 hover:text-white"
            aria-label="Copy email address"
          >
            <FiCopy size={20} />
          </button>
        </div>

        {/* 4. Alerta de Feedback (Toast) */}
        <AnimatePresence>
          {isCopied && (
            <motion.div
              className="mt-6 inline-block rounded-full bg-green-500/20 px-5 py-2 text-sm text-green-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ ease: "easeInOut" }}
            >
              Email address copied
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Contact;