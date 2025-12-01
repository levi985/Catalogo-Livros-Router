import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  const handleEntrarCatalogo = () => {
    navigate('/catalogo');
  };

  return (
    <section className="secao-home">
      <h2>Bem-vindo ao Catálogo de Livros</h2>
      <p>
        Organize, pesquise e cadastre seus livros favoritos em um só lugar. Use o menu
        acima para navegar ou clique no botão abaixo para começar.
      </p>
      <button className="btn btn-primario" onClick={handleEntrarCatalogo}>
        📖 Entrar no Catálogo
      </button>
    </section>
  );
}


