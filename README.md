# Catálogo de Livros - LEVI HENRIQUE SALES DA SILVA / 01706233 KAYNAN RAFAEL GUERRA DE FREITAS / 01702989 GABRIEL ARTUR SILVA DE SOUZA CANTO / 01707044

Este projeto é uma aplicação de **Catálogo de Livros** desenvolvida como atividade prática para consolidar conceitos fundamentais do React (Hooks, Context API, Hooks Customizados) e **React Router DOM** para navegação em SPAs.

---

## Como Rodar o Projeto

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Acesse no navegador:**
   O terminal mostrará o link, geralmente: `http://localhost:5173`

---

## Tecnologias Usadas

- **React** (v18+)
- **React Router DOM** (v6+) - Para navegação em SPAs
- **Vite** - Build tool e servidor de desenvolvimento
- **CSS3** - Estilização com variáveis CSS e temas claro/escuro
- **LocalStorage API** - Persistência de dados no navegador

---

## Onde Foi Aplicado

### React Router
- **`BrowserRouter`**: Envolvendo a aplicação em `src/main.jsx`
- **`Routes` e `Route`**: Configuração de rotas em `src/App.jsx`
- **`Link`**: Botão "Ver Detalhes" em cada card de livro (`src/pages/Catalogo.jsx`)
- **`NavLink`**: Menu de navegação no cabeçalho (`src/layouts/MainLayout.jsx`) - destaca página ativa
- **`Outlet`**: Renderização de conteúdo das páginas filhas (`src/layouts/MainLayout.jsx`)

### Navegação Programática
- **`useNavigate()` na Home**: Botão "Entrar no Catálogo" (`src/pages/Home.jsx`) - navega para `/catalogo`
- **`useNavigate(-1)` em LivroDetalhe**: Botão "Voltar" (`src/pages/LivroDetalhe.jsx`) - volta ao histórico

### URLs Dinâmicas
- **Rota `/catalogo/:id`**: Página de detalhes do livro configurada em `src/App.jsx`
- **`useParams()`**: Captura do ID na URL em `src/pages/LivroDetalhe.jsx` para buscar o livro específico

### Hook Customizado
- **`useLocalStorage`**: Hook customizado em `src/hooks/useLocalStorage.js`
- **Aplicado em**: `src/pages/Catalogo.jsx` para persistir a lista de livros no navegador

### Layout Reutilizável
- **`MainLayout`**: Componente de layout em `src/layouts/MainLayout.jsx`
- **`<Outlet />`**: Renderiza o conteúdo das rotas filhas dentro do layout
- **Rotas aninhadas**: Todas as rotas (`/`, `/catalogo`, `/catalogo/:id`) são filhas do MainLayout em `src/App.jsx`

---

**Desenvolvido como atividade prática da Unidade 2 - React Router DOM**
