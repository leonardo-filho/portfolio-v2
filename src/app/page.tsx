// src/app/page.tsx
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About'; // 1. Importe o About
import Contact from '@/components/Contact'; // 2. Importe o Contact

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />   {/* 3. Adicione a seção About */}
      <Contact /> {/* 4. Adicione a seção Contact */}
    </main>
  );
}