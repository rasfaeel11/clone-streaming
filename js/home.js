document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".movie-list-item-button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const title = button.previousElementSibling.previousElementSibling.getAttribute("src");

      // mapeamento manual (já que o index usa imagens estáticas)
      let serieId = null;
      if (title.includes("Breaking-Bad")) serieId = "breakingbad";
      if (title.includes("superman")) serieId = "superman2025";
      if (title.includes("quarteto")) serieId = "quartetofantastico";

      if (serieId) {
        window.location.href = `serie-modelo.html?serie=${serieId}`;
      }
    });
  });
});
