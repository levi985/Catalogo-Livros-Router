import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function LivroDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [livro, setLivro] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const carregarLivro = async () => {
      try {
        setCarregando(true);
        const resposta = await fetch('/books.json');
        if (!resposta.ok) {
          throw new Error('Erro ao buscar o arquivo de livros');
        }
        const dados = await resposta.json();
        const livrosConvertidos = dados.map((livroItem) => ({
          id: livroItem.id,
          titulo: livroItem.title || livroItem.titulo,
          autor: livroItem.author || livroItem.autor,
          ano: livroItem.year || livroItem.ano,
          descricao: livroItem.descricao || livroItem.description || '',
        }));

        const encontrado = livrosConvertidos.find(
          (livroItem) => String(livroItem.id) === String(id),
        );

        if (!encontrado) {
          setErro('Livro não encontrado.');
        } else {
          setLivro(encontrado);
        }
      } catch (erro) {
        console.error('Erro:', erro);
        setErro('Não foi possível carregar os detalhes do livro.');
      } finally {
        setCarregando(false);
      }
    };

    carregarLivro();
  }, [id]);

  const handleVoltar = () => {
    navigate(-1);
  };

  if (carregando) {
    return (
      <section className="secao-livros">
        <div className="alerta alerta-info">⏳ Carregando detalhes do livro...</div>
      </section>
    );
  }

  if (erro) {
    return (
      <section className="secao-livros">
        <div className="alerta alerta-erro">⚠️ {erro}</div>
        <button className="btn btn-secundario" onClick={handleVoltar}>
          ⬅️ Voltar
        </button>
      </section>
    );
  }

  if (!livro) {
    return null;
  }

  return (
    <section className="secao-livros detalhe-livro">
      <h2>{livro.titulo}</h2>
      <p>
        <strong>Autor:</strong> {livro.autor}
      </p>
      <p>
        <strong>Ano:</strong> {livro.ano}
      </p>
      {livro.descricao && (
        <p>
          <strong>Descrição:</strong> {livro.descricao}
        </p>
      )}

      <button className="btn btn-secundario" onClick={handleVoltar}>
        ⬅️ Voltar
      </button>
    </section>
  );
}


