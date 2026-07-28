// src/components/Header.tsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const navLinks = [
    { name: "Home", hash: "/#home" },
    { name: "Experience", hash: "/#experience" },
    { name: "Projects", hash: "/#projects" },
    { name: "Credentials", hash: "/#credentials" },
    { name: "About", hash: "/#about" },
    { name: "Contact", hash: "/#contact" },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-4 mt-4 rounded-3xl border border-neutral-800 bg-black/50 px-4 py-3 shadow-lg backdrop-blur-lg sm:mx-auto sm:max-w-3xl sm:rounded-full sm:px-6">
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm md:gap-x-6 md:text-base">
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