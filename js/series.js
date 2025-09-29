document.addEventListener("DOMContentLoaded", () => {
  const ball = document.querySelector(".toggle-ball");

  ball.addEventListener("click", () => {
    document.body.classList.toggle("tema-claro"); // só adiciona no body
    ball.classList.toggle("active");               // move a bolinha do toggle
  });
});
