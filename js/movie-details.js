import { moviesData } from './data.js'; 

const urlParams = new URLSearchParams(window.location.search);
const filmeId = urlParams.get('filme');

const filme = moviesData.find(f => f.id === filmeId);

if (filme) {
    document.title = filme.titulo; 
    document.getElementById('titulo-filme').textContent = filme.titulo;
    document.getElementById('sinopse').textContent = filme.sinopse;
    document.getElementById('ano').textContent = filme.ano;
    document.getElementById('poster').src = filme.imagem;
    document.getElementById('poster').alt = `Pôster do filme ${filme.titulo}`;
    
    const principal = document.querySelector('.principal');
    if (filme.imagemBanner) {
        principal.style.backgroundImage = `url('${filme.imagemBanner}')`;
    } else {
        principal.style.backgroundImage = `url('${filme.imagem}')`;
        principal.style.backgroundSize = 'cover';
    }

    document.getElementById('duracao').textContent = filme.duracao || 'N/A';
    const classificacaoEl = document.getElementById('classificacao');
    if(classificacaoEl && filme.classificacao) {
        classificacaoEl.textContent = filme.classificacao;
    }

    const tagsContainer = document.getElementById('tags');
    if(tagsContainer && filme.genero) {
        const generos = filme.genero.split(', ');
        tagsContainer.innerHTML = generos.map(g => `<span class="tag">${g}</span>`).join('');
    }

} else {
    document.body.innerHTML = `
        <div class="container" style="text-align: center; padding-top: 50px;">
            <h1>Filme não encontrado</h1>
            <p>O filme que você está procurando não existe em nosso catálogo.</p>
            <a href='filmes.html' class='botao' style="display: inline-block; margin-top: 20px; background-color: #4dbf00; color: black; padding: 10px 20px; border-radius: 5px; text-decoration: none;">← Voltar para os filmes</a>
        </div>
    `;
}