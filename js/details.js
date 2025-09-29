import { seriesData } from './data.js';


const urlParams = new URLSearchParams(window.location.search);
const serieId = urlParams.get('serie');

const container = document.querySelector('.container');

const serie = seriesData.find(s => s.id === serieId);

if (serie) {
  document.title = serie.titulo; 
  document.getElementById('titulo-serie').textContent = serie.titulo;
  document.getElementById('sinopse').textContent = serie.sinopse;
  document.getElementById('ano').textContent = serie.ano;
  document.getElementById('duracao').textContent = serie.duracao;
  document.getElementById('diretor').textContent = serie.diretor;
  document.getElementById('elenco').textContent = serie.elenco;
  document.getElementById('imagem-serie').src = serie.imagem;
  document.getElementById('imagem-serie').alt = `Pôster da série ${serie.titulo}`;
} else {

  container.innerHTML = `
    <h1>Série não encontrada</h1>
    <p>A série que você está procurando não existe em nosso catálogo.</p>
    <a href='series.html' class='botao'>← Voltar para o início</a>
  `;
}