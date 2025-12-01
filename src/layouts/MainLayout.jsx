import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import '../App.css';

export function MainLayout() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <div className="container">
        <header className="header">
          <div className="header-conteudo">
            <h1>📚 Catálogo de Livros</h1>
            <button
              className="btn-tema"
              onClick={toggleTheme}
              title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>

          <nav className="menu-navegacao">
            <NavLink to="/" className="link-menu">
              Home
            </NavLink>
            <NavLink to="/catalogo" className="link-menu">
              Catálogo
            </NavLink>
          </nav>
        </header>

        <main>
          <Outlet />
        </main>

        <footer className="rodape">
          <p>© 2025 Catálogo de Livros</p>
        </footer>
      </div>
    </div>
  );
}


