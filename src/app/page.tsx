// src/app/page.tsx
import Hero from '@/components/Hero';
import Projects from '@/components/Projects'; // 1. Importe o novo componente

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects /> {/* 2. Adicione a seção aqui */}
    </main>
  );
}