document.addEventListener("DOMContentLoaded", () => {
  const posters = document.querySelectorAll("[data-id]");

  posters.forEach(poster => {
    poster.addEventListener("click", () => {
      const serieId = poster.getAttribute("data-id");
      window.location.href = `serie-modelo.html?serie=${serieId}`;
    });
  });
});
