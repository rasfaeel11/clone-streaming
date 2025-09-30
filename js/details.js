// Supondo que você tenha um arquivo data.js com as informações
import { seriesData } from './data.js'; 

const urlParams = new URLSearchParams(window.location.search);
const serieId = urlParams.get('serie');

const serie = seriesData.find(s => s.id === serieId);

if (serie) {
    // Atualiza o título da página
    document.title = serie.titulo; 

    // Popula as informações principais da série
    document.getElementById('titulo-serie').textContent = serie.titulo;
    document.getElementById('sinopse').textContent = serie.sinopse;
    document.getElementById('ano').textContent = serie.ano;
    document.getElementById('poster').src = serie.imagem;
    document.getElementById('poster').alt = `Pôster da série ${serie.titulo}`;
    
    // Atualiza o banner de fundo (adicione um campo 'imagemBanner' no seu data.js)
    const principal = document.querySelector('.principal');
    if (serie.imagemBanner) {
        principal.style.backgroundImage = `url('${serie.imagemBanner}')`;
    } else {
        // Usa a imagem principal como fallback se não houver banner
        principal.style.backgroundImage = `url('${serie.imagem}')`;
        principal.style.backgroundSize = 'cover';
    }

    // Popula informações adicionais (meta)
    document.getElementById('temporadas-total').textContent = serie.duracao || 'N/A';
    const classificacaoEl = document.getElementById('classificacao');
    if(classificacaoEl && serie.classificacao) {
        classificacaoEl.textContent = serie.classificacao;
    }

    // Adiciona as tags de gênero
    const tagsContainer = document.getElementById('tags');
    if(tagsContainer && serie.genero) {
        const generos = serie.genero.split(', ');
        tagsContainer.innerHTML = generos.map(g => `<span class="tag">${g}</span>`).join('');
    }
    
    // Exemplo de como popular episódios (requer dados no seu data.js)
    const gradeEpisodios = document.getElementById('grade-episodios');
    if (gradeEpisodios) {
        // Aqui você adicionaria a lógica para mostrar os episódios da série
        // Por enquanto, vamos deixar uma mensagem padrão.
        gradeEpisodios.innerHTML = `<p style="color: #ccc;">Episódios desta série ainda não disponíveis.</p>`;
    }

} else {
    // Se a série não for encontrada, mostra uma mensagem de erro
    document.body.innerHTML = `
        <div class="container" style="text-align: center; padding-top: 50px;">
            <h1>Série não encontrada</h1>
            <p>A série que você está procurando não existe em nosso catálogo.</p>
            <a href='series.html' class='botao' style="display: inline-block; margin-top: 20px; background-color: #4dbf00; color: black; padding: 10px 20px; border-radius: 5px; text-decoration: none;">← Voltar para as séries</a>
        </div>
    `;
}