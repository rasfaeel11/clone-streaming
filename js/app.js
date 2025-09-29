document.addEventListener("DOMContentLoaded", function() {

    // --- LÓGICA PARA AS SETAS DO CARROSSEL ---
    const wrappers = document.querySelectorAll('.movie-list-wrapper');

    wrappers.forEach(listWrapper => {
        const list = listWrapper.querySelector('.movie-list');
        if (!list) return;

        const items = list.querySelectorAll('.movie-list-item');
        if (items.length === 0) return;

        const totalItems = items.length;
        let clickCounter = 0;

        const arrows = listWrapper.querySelectorAll('.arrow');
        arrows.forEach(arrow => {
            arrow.addEventListener("click", () => {
                const itemsPerScreen = Math.floor(listWrapper.offsetWidth / 270);
                const maxClicks = totalItems - itemsPerScreen;

                if (maxClicks <= 0) return;

                if (arrow.classList.contains('fa-chevron-right')) {
                    clickCounter++;
                    if (clickCounter > maxClicks) {
                        clickCounter = 0;
                    }
                } else if (arrow.classList.contains('fa-chevron-left')) {
                    clickCounter--;
                    if (clickCounter < 0) {
                        clickCounter = maxClicks;
                    }
                }

                const newPosition = clickCounter * -300;
                list.style.transform = `translateX(${newPosition}px)`;
            });
        });
    });

    // --- LÓGICA PARA O MODO ESCURO/CLARO (TOGGLE) ---
    const ball = document.querySelector(".toggle-ball");
    const itemsToToggle = document.querySelectorAll(
        ".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle"
    );

    if (ball) {
        ball.addEventListener("click", () => {
            itemsToToggle.forEach((item) => {
                item.classList.toggle("active");
            });
            ball.classList.toggle("active");
        });
    }
});