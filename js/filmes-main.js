// js/filmes-main.js

import { moviesData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const gradeFilmes = document.getElementById('grade-lancamentos');
    if (gradeFilmes) {
        gradeFilmes.innerHTML = moviesData.map(filme => {
            // Adicione uma propriedade 'avaliacao' no seu data.js se quiser mostrar a nota
            const avaliacao = filme.avaliacao || 'N/A';

            return `
            <a href="filme-modelo.html?filme=${filme.id}" class="cartao">
                <img src="${filme.imagem}" alt="Pôster de ${filme.titulo}">

                <div class="sobreposicao">
                    <p><strong>Ano:</strong> ${filme.ano}</p>
                    <p><strong>Duração:</strong> ${filme.duracao}</p>
                    <div class="botao-assistir">Ver Detalhes</div>
                </div>

                <div class="rodape">
                    <span>${filme.titulo}</span>
                    <div class="avaliacao">
                        <span>⭐ ${avaliacao}</span>
                    </div>
                </div>
            </a>
            `;
        }).join('');
    }
});