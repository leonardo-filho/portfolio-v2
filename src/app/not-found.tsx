import Link from "next/link";

export default function NotFound() {
  return <main id="main-content" className="not-found"><span>404</span><h1>Projeto não encontrado</h1><p>O endereço pode ter mudado.</p><Link href="/">Voltar ao início</Link></main>;
}
