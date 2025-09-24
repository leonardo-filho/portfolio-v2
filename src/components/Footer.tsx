// src/components/Footer.tsx
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/leo-filho/", label: "LinkedIn" },
  { icon: <FiGithub />, href: "https://github.com/leonardo-filho", label: "GitHub" },
  { icon: <FiMail />, href: "mailto:leonardofilho.work@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 py-8 px-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Leonardo Filho. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-6">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-neutral-400 transition hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;