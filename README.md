# 🎬 Vision Play: Uma Interface de Streaming Completa

![Status do Projeto](https://img.shields.io/badge/status-concluído-brightgreen?style=for-the-badge)
![Tecnologias](https://img.shields.io/badge/tech-HTML%20%7C%20CSS%20%7C%20JS-yellow?style=for-the-badge)

> Um clone de interface de streaming totalmente funcional e responsivo, construído do zero com **HTML, CSS e JavaScript puro**. Explore um catálogo dinâmico de filmes e séries com uma experiência de usuário moderna e interativa. 🍿

<br>

## 🎓 Projeto Acadêmico

Este projeto foi desenvolvido como parte da avaliação da disciplina de **Front-End**, ministrada pelo professor **Flávio**, no centro universitário **UNIT**.

---

## ✨ Demonstração do Projeto

A interface conta com carrosséis, efeitos de hover e um tema claro/escuro.


---

## 🚀 Funcionalidades Implementadas

O Vision Play não é apenas uma página estática. Ele possui várias funcionalidades implementadas com JavaScript para criar uma experiência rica e dinâmica:

-   **🏠 Homepage com Destaques:** Apresenta um conteúdo em destaque e múltiplos carrosséis navegáveis para diferentes categorias.
-   **🎨 Tema Claro e Escuro:** Um toggle funcional que altera o tema da aplicação inteira, com transições suaves em CSS.
-   **📦 Dados Dinâmicos:** Todo o catálogo de filmes e séries é carregado a partir de um arquivo `data.js` (simulando uma API), e os cards são gerados dinamicamente na tela.
-   **📄 Páginas de Detalhes:** Ao clicar em um filme ou série, o usuário é levado para uma página de detalhes específica, que busca as informações corretas com base no ID do item na URL.
-   **🖼️ Galerias Completas:** Páginas dedicadas (`filmes.html` e `series.html`) que exibem todo o catálogo disponível, separado por categorias.
-   **📱 Design Totalmente Responsivo:** A interface se adapta perfeitamente a telas de desktops, tablets e celulares.
-   **✨ Efeitos e Micro-interações:** Efeitos de `hover` nos cards revelam mais informações e botões de ação, melhorando a experiência do usuário.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as tecnologias fundamentais da web, sem o uso de frameworks, para demonstrar um forte domínio das bases.

-   **HTML5** para a estrutura semântica.
-   **CSS3** para estilização avançada, incluindo Flexbox, Grid Layout, variáveis e transições.
-   **JavaScript (ES6 Modules)** para manipulação do DOM, interatividade, roteamento por parâmetros de URL e renderização dinâmica de conteúdo.

---

## ⚙️ Como Executar o Projeto Localmente

Como este projeto utiliza **Módulos JavaScript (import/export)**, ele precisa ser executado a partir de um servidor local para funcionar corretamente. Abrir o `index.html` diretamente no navegador não irá funcionar!

**A forma mais fácil é usando a extensão "Live Server" no VS Code:**

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  Abra a pasta do projeto no **Visual Studio Code**.
3.  Instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
4.  Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**.
5.  Pronto! O projeto abrirá no seu navegador em um servidor local. 🎉

---

## 📂 Estrutura de Arquivos

O projeto está organizado da seguinte forma para facilitar a manutenção:

```
/
├── css/
│   ├── filme-modelo.css
│   ├── home.css
│   ├── serie-modelo.css
│   └── style.css
├── images/
│   └── (todas as imagens e pôsteres)
├── js/
│   ├── app.js          # Lógica do carrossel da home
│   ├── data.js         # "Banco de dados" com filmes e séries
│   ├── details.js      # Lógica para a página de detalhes da série
│   ├── filmes-main.js  # Lógica para renderizar a página de filmes
│   ├── home.js         # Lógica do tema claro/escuro da home
│   ├── main.js         # Lógica para renderizar a página de séries
│   ├── movie-details.js# Lógica para a página de detalhes do filme
│   └── series.js       # Lógica do tema claro/escuro (outras páginas)
├── filme-modelo.html   # Template para a página de detalhes de um filme
├── filmes.html         # Página com a galeria de todos os filmes
├── index.html          # Página inicial do projeto
├── serie-modelo.html   # Template para a página de detalhes de uma série
└── series.html         # Página com a galeria de todas as séries
```

---

## 👨‍💻 Autores

Este projeto foi criado e desenvolvido pela equipe:

-   **Rafael**
-   **João**
-   **Ian**
-   **Kauã**
-   **Gabriel**

---

### 📜 Licença

Este projeto está sob a licença **MIT**.****
