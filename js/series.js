/*
    OBJETIVO DESTE ARQUIVO:
    Controlar a funcionalidade de alternar entre o tema claro e o tema escuro.
    É uma funcionalidade de User Experience (UX) que oferece personalização.
*/

document.addEventListener("DOMContentLoaded", () => {
  const ball = document.querySelector(".toggle-ball");

  ball.addEventListener("click", () => {
    document.body.classList.toggle("tema-claro"); // só adiciona no body
    ball.classList.toggle("active");               // move a bolinha do toggle
  });
});
