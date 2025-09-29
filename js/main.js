

import { seriesData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {

  const seriesContainer = document.getElementById('grade-series');
  const animacoesContainer = document.getElementById('grade-animacoes');
  const filmesContainer = document.getElementById('grade-filmes'); // NOVO
  const conteudoPrincipal = document.getElementById('conteudo-principal');

 
  const seriesLista = seriesData.filter(s => s.categoria === 'series');
  const seriesAnimacoes = seriesData.filter(s => s.categoria === 'animacoes');
  const listaFilmes = seriesData.filter(s => s.categoria === 'filmes'); // NOVO


  seriesContainer.innerHTML = seriesLista.map(item => criarCartao(item)).join('');
  animacoesContainer.innerHTML = seriesAnimacoes.map(item => criarCartao(item)).join('');
  filmesContainer.innerHTML = listaFilmes.map(item => criarCartao(item)).join(''); // NOVO


  conteudoPrincipal.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('botao-assistir')) {
      e.preventDefault();
      const serieId = e.target.dataset.serie;
      if (serieId) {
        window.location.href = `serie-modelo.html?serie=${serieId}`;
      }
    }
  });
});


function criarCartao(item) {
  return `
    <div class="cartao">
      <img src="${item.imagem}" alt="${item.titulo}">
      <div class="rodape">
        <span>${item.titulo}</span>
        <span class="avaliacao"><span class="estrela">★</span> ${item.imdb} <img src="images/imdb-logo.png" alt="IMDb"></span>
      </div>
      <div class="sobreposicao">
        <p>Classificação: ${item.classificacao}</p>
        <p>Gênero: ${item.genero}</p>
        <p>Duração: ${item.duracao}</p> <p>Episódios: ${item.episodios}</p>
        <a href="#" class="botao botao-assistir" data-serie="${item.id}">▶ Assistir</a>
      </div>
    </div>
  `;
}