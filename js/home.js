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