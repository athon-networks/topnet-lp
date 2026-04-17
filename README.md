# Topnet Landing Page

Landing page institucional da **Topnet**, focada em conversão via WhatsApp, apresentação de planos e cobertura regional.

## Visão Geral

O projeto foi construído com **Next.js (App Router)** e Tailwind CSS, com seções componentizadas para facilitar manutenção e documentação.

### Principais recursos

- Estrutura por seções reutilizáveis em `components/home`
- Tema claro/escuro com persistência em `localStorage`
- Integração com VLibras (acessibilidade)
- SEO básico com metadata + JSON-LD
- Geração de sitemap com `next-sitemap`

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Lucide React
- PNPM

## Requisitos

- Node.js 20+
- PNPM 10+

## Instalação

```bash
pnpm install
```

## Como rodar

### Desenvolvimento

```bash
pnpm dev
```

### Build de produção

```bash
pnpm build
```

> O `postbuild` executa automaticamente o `next-sitemap`.

### Subir produção local

```bash
pnpm start
```

A aplicação sobe na porta `3002`.

## Scripts disponíveis

- `pnpm dev`: ambiente de desenvolvimento
- `pnpm build`: build de produção
- `pnpm start`: inicia servidor de produção na porta 3002

## Estrutura do projeto

```txt
app/
  layout.jsx
  page.jsx
  ui/
components/
  site-header.jsx
  home/
    hero.jsx
    plans.jsx
    services.jsx
    ...
lib/
  theme.js
public/
  images/
```

## Tema escuro

A lógica de tema está em:

- `lib/theme.js`
- `app/layout.jsx` (script inicial para evitar flash)
- `components/site-header.jsx` (botão de toggle)

## Acessibilidade (VLibras)

A integração do VLibras está configurada em `app/layout.jsx`, com carregamento do script e inicialização protegida para evitar erro em corrida de carregamento.

## Deploy

O projeto é compatível com deploy em plataformas que suportam Next.js (ex.: Vercel).

Fluxo recomendado:

1. `pnpm install`
2. `pnpm build`
3. `pnpm start` (ou runtime da plataforma)

## Observações

- Se ocorrer erro de build relacionado a fontes do Google, verifique conectividade de rede no ambiente de build.
- Assets de imagem otimizados ficam em `public/images`.
