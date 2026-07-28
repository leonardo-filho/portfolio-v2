// src/app/page.tsx
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Credentials from '@/components/Credentials';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <Credentials />
      <About />
      <Contact />
    </main>
  );
}
