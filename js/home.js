/*
    OBJETIVO DESTE ARQUIVO:
    Controlar a funcionalidade de alternar entre o tema claro e o tema escuro.
    É uma funcionalidade de User Experience (UX) que oferece personalização.
*/

const body = document.querySelector("body");
const toggleBall = document.querySelector(".toggle-ball");

toggleBall.addEventListener("click", () => {
  body.classList.toggle("active");

  if (body.classList.contains("active")) {
    console.log("Tema claro");
  } else {
    console.log("Tema escuro");
  }
});