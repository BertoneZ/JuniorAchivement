
/*document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('track');
    const prevButton = document.getElementById('button-prev');
    const nextButton = document.getElementById('button-next');
    
    const items = document.querySelectorAll('.carrusel-item');
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
    const totalItems = items.length;

    let currentIndex = 0;

    const updatePosition = () => {
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        checkButtons();
    };

    const checkButtons = () => {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= totalItems - Math.floor(track.parentElement.offsetWidth / itemWidth);
    };

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updatePosition();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < totalItems - Math.floor(track.parentElement.offsetWidth / itemWidth)) {
            currentIndex++;
            updatePosition();
        }
    });

    // Inicializa el carrusel
    updatePosition();

    // Recalcula la posición cuando la ventana se redimensiona
    window.addEventListener('resize', updatePosition);
});*/

document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('track');
    const prevButton = document.getElementById('button-prev');
    const nextButton = document.getElementById('button-next');
    
    const items = document.querySelectorAll('.carrusel-item');
    let itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
    const totalItems = items.length;

    let currentIndex = 0;

    const updatePosition = () => {
        const itemsPerView = Math.floor(track.parentElement.offsetWidth / itemWidth);
        const maxIndex = totalItems - itemsPerView;
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        checkButtons(maxIndex);
    };

    const checkButtons = (maxIndex) => {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= maxIndex;
    };

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updatePosition();
        }
    });

    nextButton.addEventListener('click', () => {
        const itemsPerView = Math.floor(track.parentElement.offsetWidth / itemWidth);
        if (currentIndex < totalItems - itemsPerView) {
            currentIndex++;
            updatePosition();
        }
    });

    // Inicializa el carrusel
    updatePosition();

    // Recalcula la posición y el tamaño de los ítems cuando la ventana se redimensiona
    window.addEventListener('resize', () => {
        itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
        updatePosition();
    });
});


