// src/components/SkillSticker.tsx
"use client"; // Obrigatório para componentes que usam interatividade e hooks

import { motion } from 'framer-motion';

// Define as propriedades que o nosso componente vai aceitar
interface StickerProps {
  text: string;
  className?: string; // para classes de cor e posicionamento
}

const SkillSticker = ({ text, className }: StickerProps) => {
  return (
    <motion.div
      // Classes base + classes customizadas que passarmos via props
      className={`absolute cursor-pointer rounded-full px-4 py-2 text-sm font-bold text-black shadow-lg ${className}`}
      
      // Animação de entrada
      initial={{ scale: 0, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: Math.random() * 0.8 }}

      // Animação ao passar o mouse
      whileHover={{ scale: 1.15, rotate: -5, zIndex: 20 }}
    >
      {text}
    </motion.div>
  );
};

export default SkillSticker;