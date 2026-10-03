# Contrato de página

- `data-page="about"`, `data-root="../"`, um h1 e títulos de seção h2; títulos de cards, experiências e formações h3.
- About aponta para `/about/` relativo à raiz do site; português preserva `lang=pt-BR`.
- Metadados correspondem ao idioma; o menu About tem `aria-current="page"`.
- Fotografia usa o texto alternativo existente.
- Timeline e formação têm conteúdo inglês completo no HTML e são atualizadas pelo renderer ao trocar idioma.
- Links de projetos e contato reutilizam as rotas atuais; a home conserva suas âncoras.
