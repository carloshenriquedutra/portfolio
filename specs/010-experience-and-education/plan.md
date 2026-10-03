# Plano: páginas de experiência e formação

## Decisões
- Manter o site estático existente e o modelo de conteúdo localizado em `src/content/en.js` e `src/content/pt-BR.js`.
- Adicionar páginas HTML dedicadas em `/experience/` e `/education/`, renderizando conteúdo pelo `renderPage` existente.
- Atualizar `data-route` em navegação, chamadas da home e resumos de Sobre; `site-links.js` resolve URL e idioma.
- Reutilizar os dados detalhados de carreira já publicados em Sobre para a página de experiência; criar conteúdo acadêmico específico com descrição curta por curso.
- Manter resumos na home e Sobre e preservar IDs de âncora existentes.
- Usar inglês como conteúdo HTML inicial e trocar por português via localizador existente.

## Arquivos previstos
- `src/adapters/browser/site-links.js`
- `src/presentation/render-page.js`
- `src/content/en.js`, `src/content/pt-BR.js`
- `index.html`, `about/index.html`, páginas existentes em `projects/`
- `experience/index.html`, `education/index.html`

## Validação
- Verificar roteamento/idioma e renderização nos dois idiomas, metadados, links ativos e integridade da navegação.
- Revisar conteúdo contra a fonte autorizada e conferir desktop/mobile.
