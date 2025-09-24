// src/app/projects/[id]/page.tsx
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';

// Esta função ajuda o Next.js a saber quais páginas de projeto gerar estaticamente
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) {
    return <div>Projeto não encontrado.</div>;
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <div className="mx-auto max-w-4xl py-12 px-4">
        {/* Botão de Voltar */}
        <Link href="/#projects" className="flex items-center gap-2 text-neutral-400 hover:text-white mb-8">
          <FiArrowLeft />
          <span>Voltar para todos os projetos</span>
        </Link>
        
        {/* Cabeçalho do Projeto */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-teal-900/50 px-3 py-1 text-xs font-medium text-teal-300">
              {tech}
            </span>
          ))}
        </div>

        {/* Imagem Principal */}
        <div className="mb-8">
            <Image src={project.images[0].src} alt={project.images[0].caption} width={1200} height={675} className="rounded-lg border border-neutral-800" />
            <p className="text-center text-sm text-neutral-500 mt-2">{project.images[0].caption}</p>
        </div>

        {/* Descrição Longa */}
        <div className="prose prose-invert prose-neutral max-w-none mb-8" dangerouslySetInnerHTML={{ __html: project.longDescription }} />

        {/* Links Externos */}
        <div className="flex items-center gap-6 mb-12">
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold hover:text-teal-400 transition-colors"><FiGithub/> Repositório</a>}
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-semibold hover:text-teal-400 transition-colors"><FiExternalLink/> Demo Online</a>}
        </div>

        {/* Galeria de Imagens Adicionais */}
        <h2 className="text-2xl font-bold mb-6">Galeria de Imagens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.slice(1).map(img => (
                <div key={img.src}>
                    <Image src={img.src} alt={img.caption} width={800} height={450} className="rounded-lg border border-neutral-800" />
                    <p className="text-center text-sm text-neutral-500 mt-2">{img.caption}</p>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}