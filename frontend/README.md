# Italiano - Restaurante Italiano

Uma página para um restaurante italiano, para mostrar o local e os pratos.

## Tecnologias

- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- React Router DOM 7.9.3
- TanStack Query 5.90.2
- Tailwind CSS 3.4.14
- Axios 1.12.2

## Instalação

```bash
npm install
```

## Configuração

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

```
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores globais
│   └── router.tsx         # Configuração de rotas
├── assets/                # Recursos estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e utilitários compartilhados
│   ├── components/       # Componentes genéricos
│   └── lib/              # Bibliotecas e configurações
├── pages/                 # Páginas da aplicação
│   ├── layouts/          # Layouts compartilhados
│   ├── Home/             # Página inicial
│   ├── Menu/             # Página do cardápio
│   ├── Gallery/          # Página da galeria
│   ├── Contact/          # Página de contato
│   └── NotFound/         # Página 404
└── main.tsx              # Ponto de entrada
```

## Funcionalidades

- **Página Inicial**: Apresentação do restaurante com visão geral
- **Cardápio**: Exibição dos pratos oferecidos (em desenvolvimento)
- **Galeria**: Fotos do ambiente e pratos (em desenvolvimento)
- **Contato**: Informações de localização e contato

## Licença

MIT