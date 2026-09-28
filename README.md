# Portfólio de Leonardo Filho

Site em Next.js com versões em português e inglês. A página inicial apresenta projetos selecionados, experiência, formação e contato. Os PDFs do portfólio ficam em `public/` e são oferecidos para download no menu, na abertura e no contato.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Atualizar os PDFs

Depois de editar o conteúdo, mantenha o servidor local ativo e rode em outro terminal:

```bash
npm run portfolio:pdf
```

O comando gera `public/portfolio-leonardo-filho-pt.pdf` e `public/portfolio-leonardo-filho-en.pdf` a partir das rotas `/portfolio-download` e `/en/portfolio-download`. Requer `google-chrome` em modo headless; usa um perfil temporário isolado. Se o servidor estiver em outra porta, defina `PORTFOLIO_BASE_URL` antes do comando.
