// src/components/Header.tsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const navLinks = [
    { name: "Início", hash: "/#home" },
    { name: "Projetos", hash: "/#projects" },
    { name: "Sobre", hash: "/#about" },
    { name: "Contato", hash: "/#contact" },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto mt-4 max-w-2xl rounded-full border border-neutral-800 bg-black/50 px-6 py-3 shadow-lg backdrop-blur-lg">
        <nav className="flex items-center justify-center gap-6 text-sm md:text-base">
          {navLinks.map(link => (
            <Link 
              key={link.name}
              href={link.hash}
              className="text-neutral-400 transition hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;