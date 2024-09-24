const presentacion = document.getElementById('presentacion');
        const dibujosContainer = document.getElementById('dibujos');
        let scrollPosition = 0;
        const maxScroll = (dibujosContainer.children.length - 1) * window.innerWidth;

        window.addEventListener('wheel', (e) => {
            e.preventDefault();
            
            if (e.deltaY > 0) {
                // Scroll hacia abajo
                scrollPosition = Math.min(scrollPosition + 100, maxScroll);
                presentacion.style.transform = `translateY(-${Math.min(scrollPosition / 10, 50)}px)`;
                presentacion.style.opacity = Math.max(1 - scrollPosition / 100, 0.0);
            } else {
                // Scroll hacia arriba
                scrollPosition = Math.max(scrollPosition - 100, 0);
                if (scrollPosition === 0) {
                    presentacion.style.transform = 'translateY(0)';
                    presentacion.style.opacity = 1;
                }
            }

            dibujosContainer.style.transform = `translateX(-${scrollPosition}px)`;
        }, { passive: false });

        // Para manejar el desplazamiento en dispositivos táctiles
        let touchStartX = 0;
        let touchEndX = 0;

        window.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        window.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            if (touchStartX - touchEndX > 50) {
                // Deslizar a la izquierda
                scrollPosition = Math.min(scrollPosition + 100, maxScroll);
            } else if (touchEndX - touchStartX > 50) {
                // Deslizar a la derecha
                scrollPosition = Math.max(scrollPosition - 100, 0);
            }
            updatePositions();
        }

        function updatePositions() {
            dibujosContainer.style.transform = `translateX(-${scrollPosition}px)`;
            presentacion.style.transform = `translateY(-${Math.min(scrollPosition / 10, 50)}px)`;
            presentacion.style.opacity = Math.max(1 - scrollPosition / 1000, 0.5);
        }